import MapCard from "../components/MapCard";
import { allMaps } from "../data/maps";

export default function MapIndex() {
    return (
        <main className="pl-5 pr-5">
            {allMaps.map((game) => {
                const mainMaps = game.maps.filter((map) => map.type === undefined);
                const otherMaps = game.maps.filter((map) => map.type !== undefined);

                return (
                    <section key={game.game}>
                        <h1>{game.game}</h1>

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
                    </section>
                );
            })}
        </main>
    );
}
