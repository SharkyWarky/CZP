import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it } from "vitest";
import type { ComponentType } from "react";
import { verifyAllAnchorLinks } from "./utils/mapTestHelpers";

// Use Vite's generic type parameter to type modules strictly instead of using 'any'
const mapFiles = import.meta.glob<{ default: ComponentType }>("../routes/maps/**/*.tsx", { eager: true });

describe("Automated Map Link Integrity Suite", () => {
	Object.entries(mapFiles).forEach(([filePath, module]) => {
		const MapComponent = module.default;

		if (typeof MapComponent !== "function") return;

		it(`verifies all links and tab sections in: ${filePath}`, () => {
			render(<MapComponent />);

			// 1. Verify links on the initial active tab
			verifyAllAnchorLinks();

			// 2. Cycle through all tab buttons to test hidden sections
			const tabButtons = screen.queryAllByRole("button");
			tabButtons.forEach((button) => {
				fireEvent.click(button);
				verifyAllAnchorLinks();
			});
		});
	});
});
