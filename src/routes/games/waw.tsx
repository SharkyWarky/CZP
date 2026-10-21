import { createFileRoute } from '@tanstack/react-router'
import MapCard from "../../components/MapCard";
import { wawMaps } from "../../data/maps";

export default function WAW() {
	const mainMaps = wawMaps.filter((map) => map.type === undefined);
	const otherMaps = wawMaps.filter((map) => map.type !== undefined);

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

export const Route = createFileRoute("/games/waw")({
	staticData: {
		title: "World At War",
	},
	component: WAW,
});
