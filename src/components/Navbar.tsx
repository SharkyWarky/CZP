import { NavLink, useLocation } from "react-router";
import usePageTitle from "../hooks/usePageTitle";

const games: [string, string][] = [
    ["bo1", "Black Ops"],
    ["bo2", "Black Ops II"],
    ["bo3", "Black Ops III"],
    ["bo4", "Black Ops 4"],
    ["bocw", "Black Ops Cold War"],
    ["bo6", "Black Ops 6"],
    ["bo7", "Black Ops 7"],
    ["advanced-warfare", "Advanced Warfare"],
    ["infinite-warfare", "Infinite Warfare"],
    ["ww2", "WWII"],
    ["vanguard", "Vanguard"],
    ["mw3", "Modern Warfare III"],
    ["waw", "World at War"],
];

export default function Navbar() {
    const pageTitle = usePageTitle();
    const routerLocation = useLocation();

    const gameIsActive = games.some(([path]) => {
        return routerLocation.pathname === `/${path}` || routerLocation.pathname.startsWith(`/${path}/`);
    });

    return (
        <header className="fixed top-0 left-0 z-1000 flex h-17.5 w-full items-center justify-between border-b border-b-neutral-700 bg-[rgba(25,30,27,0.96)] px-7.5 py-0 shadow-[0_4px_20px_rgba(0,0,0,0.35)] [backdrop-filter:blur(10px)]">
            <div className="text-2xl font-bold tracking-normal text-olive-100 transition-[color] duration-200 ease-[ease] hover:text-emerald-400">Comprehensive Zombies Project</div>

            <div className="current absolute left-1/2 -translate-x-1/2 text-2xl font-bold whitespace-nowrap text-mist-200">{pageTitle}</div>

            <nav className="nav-links">
                {quickLink("", "Home", "hover:bg-neutral-700 hover:text-white", true)}

                <div className="dropdown">
                    <button className={`dropbtn ${gameIsActive ? "active" : ""}`}>Games</button>

                    <div className="dropdown-content">{games.map(([path, name]) => quickLink(path, name, undefined, false, routerLocation.pathname.startsWith(`/${path}`)))}</div>
                </div>

                {quickLink("mapindex", "Map Index", "hover:bg-neutral-700 hover:text-white")}
            </nav>
        </header>
    );
}

function quickLink(location: string, name: string, tail?: string, end?: boolean, active?: boolean) {
    return (
        <NavLink to={`/${location}`} end={end} className={({ isActive }) => `${tail ?? ""} ${isActive || active ? "active" : ""}`}>
            {name}
        </NavLink>
    );
}
