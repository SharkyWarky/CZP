import MapCard from "../../components/MapCard";
import { mw3Maps } from "../../data/maps";

export default function MW3() {
    const mainMaps = mw3Maps.filter((map) => map.type === undefined);
    const otherMaps = mw3Maps.filter((map) => map.type !== undefined);

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
