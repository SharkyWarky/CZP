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
