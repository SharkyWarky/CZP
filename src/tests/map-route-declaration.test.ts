import { describe, it } from "vitest";
import { expect } from "vitest";

// Load every map file's raw source code as a string
const mapSources = import.meta.glob("../routes/maps/**/*.tsx", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

describe("Map Route Declaration Integrity", () => {
	Object.entries(mapSources).forEach(([filePath, sourceCode]) => {
		it(`verifies TanStack Router Route definition in: ${filePath}`, () => {
			// 1. Ensure 'export const Route = createFileRoute(...)` exists
			const hasRouteExport = /export\s+const\s+Route\s*=\s*createFileRoute\s*\(\s*["'][^"']+["']\s*\)/.test(sourceCode);
			expect(hasRouteExport, `[Route Error] Map file (${filePath}) is missing the required TanStack Router 'export const Route = createFileRoute(...)' definition.`).toBe(true);

			// 2. Ensure staticData with a title string is defined
			const hasStaticDataTitle = /staticData:\s*\{\s*title:\s*["'][^"']+["']\s*\}/.test(sourceCode);
			expect(hasStaticDataTitle, `[Route Error] Map file (${filePath}) is missing or has malformed 'staticData: { title: "..." }'.`).toBe(true);

			// 3. Ensure component property is mapped
			const hasComponentMapping = /component:\s*[A-Z][a-zA-Z0-9_]*/.test(sourceCode);
			expect(hasComponentMapping, `[Route Error] Map file (${filePath}) is missing the 'component: MapName' mapping inside the route configuration.`).toBe(true);
		});
	});
});
