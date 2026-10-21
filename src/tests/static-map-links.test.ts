import { describe, it } from "vitest";
import { expect } from "vitest";

// 1. Import every map file's raw source code as a string
const mapSources = import.meta.glob("../routes/maps/**/*.tsx", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

describe("Static Source Code Link Analysis", () => {
	Object.entries(mapSources).forEach(([filePath, sourceCode]) => {
		it(`checks raw source code in: ${filePath}`, () => {
			// -----------------------------------------------------------------
			// Check 1: Catch any raw <a> tags using internal hashes (href="#...")
			// (Forces developers to use <TabLink> instead of raw <a> tags)
			// -----------------------------------------------------------------
			// Matches things like <a href="#main-ee"> or <a href='#side-ee'>
			const rawHashLinkRegex = /<a\s+[^>]*href=["']#([^"']+)["']/g;
			let match;

			while ((match = rawHashLinkRegex.exec(sourceCode)) !== null) {
				const fullMatch = match[0];
				expect.fail(`[Static Code Error] Raw hash link found in source code (${filePath}).\nUse the <TabLink> component instead of raw <a> tags with hashes.\nFound: ${fullMatch}`);
			}

			// -----------------------------------------------------------------
			// Check 2: Catch external <a> tags missing security attributes
			// -----------------------------------------------------------------
			// Matches raw <a href="http..."> tags in the source code
			const externalLinkRegex = /<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/g;

			let extMatch;
			while ((extMatch = externalLinkRegex.exec(sourceCode)) !== null) {
				const tagString = extMatch[0];

				// Ensure target="_blank" is present inside the tag string
				if (!tagString.includes('target="_blank"') && !tagString.includes("target='_blank'")) {
					expect.fail(`[Static Code Error] External link missing target="_blank" in (${filePath}):\n${tagString}`);
				}

				// Ensure rel includes noopener and noreferrer
				if (!tagString.includes("noopener") || !tagString.includes("noreferrer")) {
					expect.fail(`[Static Code Error] External link missing rel="noopener noreferrer" in (${filePath}):\n${tagString}`);
				}
			}
		});
	});
});
