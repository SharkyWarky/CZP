import type { ReactNode } from "react";

type InfoBoxProps = {
	children: ReactNode;
	id?: string;
};

export default function InfoBox({ children, id }: InfoBoxProps) {
	return (
		<div id={id} className="info-box">
			{children}
		</div>
	);
}
