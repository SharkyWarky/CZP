import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
	staticData: {
		title: "Home", // <--- This is automatically picked up by your hook!
	},
});

export function Index() {
	return (
		<div className="p-6 text-white">
			<h1 className="text-3xl font-bold">Welcome!</h1>
		</div>
	);
}
