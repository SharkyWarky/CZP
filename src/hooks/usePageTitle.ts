import { useEffect } from "react";

import { useMatches } from "react-router";

type RouteHandle = {
	title: string;
};

export default function usePageTitle() {
	const matches = useMatches();

	const match = [...matches].reverse().find((match) => {
		const handle = match.handle as RouteHandle | undefined;
		return handle?.title;
	});

	const title = (match?.handle as RouteHandle | undefined)?.title ?? "";

	const pageTitle = title === "Tran Zit" ? "TranZit" : title === "Shangri La" ? "Shangri-La" : title === "Verruckt" ? "Verrückt" : title === "Kowakujo" ? "Kowakujō" : title === "Groesten Haus" ? "Gröesten Haus" : title;

	useEffect(() => {
		document.title = `CZP - ${pageTitle}`;
	}, [pageTitle]);

	return pageTitle;
}
