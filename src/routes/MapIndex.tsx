import { createFileRoute } from "@tanstack/react-router";
import MapCard from "../components/MapCard";
import { allMaps } from "../data/maps";

export function MapIndex() {
	return (
		<main className="pl-5 pr-5 pt-10">
			{allMaps.map((game) => {
				const mainMaps = game.maps.filter((map) => map.type === undefined);
				const otherMaps = game.maps.filter((map) => map.type !== undefined);

				return (
					<section key={game.game}>
						<h1 className="my-4 text-2xl font-bold text-mist-200">{game.game}</h1>

						<div className="map-grid" style={{ "--items": mainMaps.length } as React.CSSProperties}>
							{mainMaps.map((map) => (
								<MapCard key={map.path} {...map} />
							))}
						</div>

						{otherMaps.length > 0 && (
							<div className="map-grid mt-4" style={{ "--items": otherMaps.length } as React.CSSProperties}>
								{otherMaps.map((map) => (
									<MapCard key={map.path} {...map} />
								))}
							</div>
						)}
					</section>
				);
			})}
		</main>
	);
}

export const Route = createFileRoute("/MapIndex")({
	staticData: {
		title: "Map Index",
	},
	component: MapIndex,
});
