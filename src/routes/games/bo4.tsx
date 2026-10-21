import { createFileRoute } from '@tanstack/react-router'
import MapCard from "../../components/MapCard";
import { bo4Maps } from "../../data/maps";

export default function BO4() {
	const mainMaps = bo4Maps.filter((map) => map.type === undefined);
	const otherMaps = bo4Maps.filter((map) => map.type !== undefined);

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

export const Route = createFileRoute("/games/bo4")({
	staticData: {
		title: "Black Ops 4",
	},
	component: BO4,
});
