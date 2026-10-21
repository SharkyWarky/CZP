import { expect } from "vitest";

/**
 * Validates all <a> anchor elements on the screen.
 * - External links must have target="_blank" and rel="noopener noreferrer".
 * - Internal hash links must not be malformed (e.g., no double hashes '##' or bare '#').
 */
export function verifyAllAnchorLinks() {
	const anchors = document.querySelectorAll("a");

	anchors.forEach((anchor) => {
		const href = anchor.getAttribute("href");
		const target = anchor.getAttribute("target") || "";
		const rel = anchor.getAttribute("rel") || "";
		const linkText = anchor.textContent?.trim() || anchor.outerHTML;

		// 1. Fail if an <a> tag has a missing or completely empty href
		if (!href || href.trim() === "") {
			expect.fail(`[Link Error] <a> tag has an empty or missing 'href' attribute:\n${anchor.outerHTML}`);
		}

		// 2. External Link Validation
		const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.includes("youtube.com") || href.includes("youtu.be") || href.includes("twitch.tv");

		if (isExternal) {
			expect(target, `[External Link Error] Link "${linkText}" (href="${href}") is missing target="_blank":\n${anchor.outerHTML}`).toBe("_blank");

			expect(rel, `[External Link Error] Link "${linkText}" (href="${href}") is missing 'noopener' in rel attribute:\n${anchor.outerHTML}`).toMatch(/noopener/);

			expect(rel, `[External Link Error] Link "${linkText}" (href="${href}") is missing 'noreferrer' in rel attribute:\n${anchor.outerHTML}`).toMatch(/noreferrer/);

			return;
		}

		// 3. Internal Hash Link Validation (<a href="#...">)
		if (href.startsWith("#")) {
			if (href.startsWith("##")) {
				expect.fail(`[Internal Link Error] Link "${linkText}" rendered with a malformed double-hash href="${href}".\nCheck if a '#' was accidentally passed into the tab prop.\nElement HTML: ${anchor.outerHTML}`);
			}

			if (href === "#") {
				expect.fail(`[Internal Link Error] Link "${linkText}" has a bare hash href="#" with no target section.\nElement HTML: ${anchor.outerHTML}`);
			}
		}
	});
}
