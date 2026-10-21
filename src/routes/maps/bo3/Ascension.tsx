// src/routes/maps/bo1/ascension.tsx
import { createFileRoute } from "@tanstack/react-router";
import MapTabs from "../../../components/MapTabs";
import { MapNavigationProvider } from "../../../context/MapNavigationContext"; // Adjust path

function AscensionContent() {
	const modules = [
		{ id: "overview", label: "Overview" },
		{ id: "main-ee", label: "Main EE" },
	];

	return (
		<main className="p-6 text-white">
			<h1 className="text-3xl font-bold">Ascension</h1>
			<MapTabs modules={modules} />
			{/* Your tab content here */}
		</main>
	);
}

function AscensionPage() {
	return (
		<MapNavigationProvider>
			<AscensionContent />
		</MapNavigationProvider>
	);
}

export const Route = createFileRoute("/maps/bo3/Ascension")({
	staticData: { title: "Ascension" },
	component: AscensionPage,
});
