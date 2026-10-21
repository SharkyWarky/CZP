import { screen, within } from "@testing-library/react";
import { expect } from "vitest";

/**
 * Validates all links (`<a>` tags and `<TabLink>` components) inside a target container or screen.
 */
export function verifyInfoBoxLinks(containerElement?: HTMLElement) {
	// Use the container if provided, otherwise search the whole screen
	const scope = containerElement ? within(containerElement) : screen;
	const links = scope.queryAllByRole("link");

	expect(links.length, "No links found inside the target component").toBeGreaterThan(0);

	links.forEach((link) => {
		// 1. Verify standard href attribute exists
		expect(link).toHaveAttribute("href");
		const href = link.getAttribute("href");

		// Ensure link isn't empty or a dead placeholder
		expect(href, "Link contains an empty or invalid href").toBeTruthy();
		expect(href).not.toBe("#");

		// 2. Handle external <a> tags (e.g., https://...)
		if (href?.startsWith("http://") || href?.startsWith("https://")) {
			expect(link).toHaveAttribute("target", "_blank");
			expect(link).toHaveAttribute("rel", expect.stringMatching(/noopener|noreferrer/));
		}
	});
}
