import { createFileRoute } from "@tanstack/react-router";
import MapCard from "../../components/MapCard";
import { bo1Maps } from "../../data/maps";

// 1. Component defined first
export function BO1() {
	const mainMaps = bo1Maps.filter((map) => map.type === undefined);
	const otherMaps = bo1Maps.filter((map) => map.type !== undefined);

	return (
		<main className="pl-5 pr-5 pt-10">
			<div className="map-grid" style={{ "--items": mainMaps.length } as React.CSSProperties}>
				{mainMaps.map((map) => (
					<MapCard key={map.path} {...map} />
				))}
			</div>

			{otherMaps.length > 0 && (
				<div className="map-grid" style={{ "--items": otherMaps.length } as React.CSSProperties}>
					{otherMaps.map((map) => (
						<MapCard key={map.path} {...map} />
					))}
				</div>
			)}
		</main>
	);
}

export const Route = createFileRoute("/games/bo1")({
	staticData: {
		title: "Black Ops",
	},
	component: BO1,
});
