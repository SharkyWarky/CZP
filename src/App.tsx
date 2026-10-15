import type { ComponentType } from "react";

import { createBrowserRouter, RouterProvider } from "react-router";

import NavbarLayout from "./components/NavbarLayout";

import AdvancedWarfare from "./pages/games/AdvancedWarfare";
import BO1 from "./pages/games/BO1";
import BO2 from "./pages/games/BO2";
import BO3 from "./pages/games/BO3";
import BO4 from "./pages/games/BO4";
import BO6 from "./pages/games/BO6";
import BO7 from "./pages/games/BO7";
import BOCW from "./pages/games/BOCW";
import InfiniteWarfare from "./pages/games/InfiniteWarfare";
import MW3 from "./pages/games/ModernWarfare3";
import Vanguard from "./pages/games/Vanguard";
import WAW from "./pages/games/WorldAtWar";
import WW2 from "./pages/games/WW2";

import Home from "./pages/Home";
import MapIndex from "./pages/MapIndex";

const gameRoutes = [
    ["bo1", BO1, "Black Ops"],
    ["bo2", BO2, "Black Ops II"],
    ["bo3", BO3, "Black Ops III"],
    ["bo4", BO4, "Black Ops 4"],
    ["bocw", BOCW, "Black Ops Cold War"],
    ["bo6", BO6, "Black Ops 6"],
    ["bo7", BO7, "Black Ops 7"],
    ["waw", WAW, "World at War"],
    ["ww2", WW2, "World War II"],
    ["advanced-warfare", AdvancedWarfare, "Advanced Warfare"],
    ["vanguard", Vanguard, "Vanguard"],
    ["infinite-warfare", InfiniteWarfare, "Infinite Warfare"],
    ["mw3", MW3, "Modern Warfare 3"],
] as const;

const mapPages = import.meta.glob("./pages/maps/**/*.tsx", {
    eager: true,
}) as Record<string, { default?: ComponentType }>;

const mapRoutes = Object.entries(mapPages)
.filter(([filePath, mapModule]) => {
    if (!mapModule.default) {
        console.error(`[CZP] Map page is missing a default export: ${filePath}`);

        return false;
    }

    return true;
})
.map(([filePath, mapModule]) => {
    const MapComponent = mapModule.default!;

    const parts = filePath.split("/");

    const game = parts[parts.length - 2];
    const fileName = parts[parts.length - 1]!.replace(".tsx", "");

    const mapName = fileName === "TranZit" ? "tranzit" : fileName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

    return {
        path: `/${game}/${mapName}`,
        element: <MapComponent />,
        handle: {
            title: fileName.replace(/([a-z])([A-Z])/g, "$1 $2"),
        },
    };
});

const router = createBrowserRouter(
    [
        {
            element: <NavbarLayout />,
            children: [createChild("", Home, "Home"), createChild("mapindex", MapIndex, "Map Index"), ...gameRoutes.map(([path, component, title]) => createChild(path, component, title)), ...mapRoutes],
        },
    ],
    { basename: "/CZP/" }
);

export default function App() {
    return <RouterProvider router={router} />;
}

function createChild(gPath: string, GElement: ComponentType, gHandle: string) {
    return {
        path: `/${gPath}`,
        element: <GElement />,
        handle: {
            title: gHandle,
        },
    };
}
