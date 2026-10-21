/**
 * Used to link from one section to another or directly to an element
 * that has been given an id.
 *
 * @param tab The section which you want to jump to.
 * @param target The exact element to jump to, identified by its id. Optional.
 * @returns An <a> element which, when clicked, jumps to the specified section
 * or element.
 */

import type { ReactNode } from "react";

import { useMapNavigation } from "../context/MapNavigationContext";

type TabLinkProps = {
	tab: string;
	target?: string;
	children: ReactNode;
};

export default function TabLink({ tab, target, children }: TabLinkProps) {
	// Guard against incorrect usage where a '#' is passed into the prop
	if (tab && tab.startsWith("#")) {
		throw new Error(`[TabLink Error]: Do not include '#' in the tab prop. Pass it cleanly as tab="${tab.replace(/^#/, "")}" instead of tab="${tab}".`);
	}

	if (target && target.startsWith("/")) {
		throw new Error(`[TabLink Error]: Do not include '/' in the target prop. Pass it cleanly as target="${target.replace(/^\//, "")}" instead of target="${target}".`);
	}

	const { navigateTo } = useMapNavigation();

	return (
		<a
			href={target ? `#${target}` : `#${tab}`}
			onClick={(event) => {
				event.preventDefault();
				navigateTo(tab, target);
			}}>
			{children}
		</a>
	);
}
