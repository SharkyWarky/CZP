import { useEffect } from "react";
import { useMatches } from "@tanstack/react-router";

type RouteStaticData = {
	title?: string;
};

export default function usePageTitle() {
	const matches = useMatches();

	const match = [...matches].reverse().find((match) => {
		const staticData = match.staticData as RouteStaticData | undefined;
		return staticData?.title;
	});

	const title = (match?.staticData as RouteStaticData | undefined)?.title ?? "";

	const pageTitle = title === "Tran Zit" ? "TranZit" : title === "Shangri La" ? "Shangri-La" : title === "Verruckt" ? "Verrückt" : title === "Kowakujo" ? "Kowakujō" : title === "Groesten Haus" ? "Gröesten Haus" : title;

	useEffect(() => {
		document.title = `CZP - ${pageTitle}`;
	}, [pageTitle]);

	return pageTitle;
}
