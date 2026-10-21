import { createFileRoute } from '@tanstack/react-router'
import MapCard from "../../components/MapCard";
import { bo6Maps } from "../../data/maps";

export default function BO6() {
	const mainMaps = bo6Maps.filter((map) => map.type === undefined);
	const otherMaps = bo6Maps.filter((map) => map.type !== undefined);

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

export const Route = createFileRoute("/games/bo6")({
	staticData: {
		title: "Black Ops 6",
	},
	component: BO6,
});
