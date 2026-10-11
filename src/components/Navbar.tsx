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

const mapVersions: Record<string, [string, string, string][]> = {
	"kino-der-toten": [
		["bo1", "Black Ops", "/bo1/kino-der-toten"],
		["bo3", "Black Ops III", "/bo3/kino-der-toten"],
	],
	ascension: [
		["bo1", "Black Ops", "/bo1/ascension"],
		["bo3", "Black Ops III", "/bo3/ascension"],
	],
	"der-riese": [
		["waw", "World at War", "/waw/der-riese"],
		["bo1", "Black Ops", "/bo1/der-riese"],
		["bo3", "Black Ops III", "/bo3/the-giant"],
	],
	moon: [
		["bo1", "Black Ops", "/bo1/moon"],
		["bo3", "Black Ops III", "/bo3/moon"],
	],
	"nacht-der-untoten": [
		["waw", "World at War", "/waw/nacht-der-untoten"],
		["bo1", "Black Ops", "/bo1/nacht-der-untoten"],
		["bo3", "Black Ops III", "/bo3/nacht-der-untoten"],
	],
	"shangri-la": [
		["bo1", "Black Ops", "/bo1/shangri-la"],
		["bo3", "Black Ops III", "/bo3/shangri-la"],
	],
	"shi-no-numa": [
		["waw", "World at War", "/waw/shi-no-numa"],
		["bo1", "Black Ops", "/bo1/shi-no-numa"],
		["bo3", "Black Ops III", "/bo3/shi-no-numa"],
		["vanguard", "Vanguard", "/vanguard/shi-no-numa"],
	],
	verruckt: [
		["waw", "World at War", "/waw/verruckt"],
		["bo1", "Black Ops", "/bo1/verruckt"],
		["bo3", "Black Ops III", "/bo3/verruckt"],
	],
	origins: [
		["bo2", "Black Ops II", "/bo2/origins"],
		["bo3", "Black Ops III", "/bo3/origins"],
	],
};

export default function Navbar() {
	const pageTitle = usePageTitle();
	const routerLocation = useLocation();

	const gameIsActive = games.some(([path]) => {
		return routerLocation.pathname === `/${path}` || routerLocation.pathname.startsWith(`/${path}/`);
	});

	const pathParts = routerLocation.pathname.split("/").filter(Boolean);

	const currentGame = pathParts[0];
	const currentMap = pathParts[1];

	const currentMapVersions = currentMap ? mapVersions[currentMap] : undefined;

	return (
		<header className="fixed top-0 left-0 z-1000 flex h-17.5 w-full items-center justify-between border-b border-b-neutral-700 bg-[rgba(25,30,27,0.96)] px-7.5 py-0 shadow-[0_4px_20px_rgba(0,0,0,0.35)] [backdrop-filter:blur(10px)]">
			<div className="text-2xl font-bold tracking-normal text-olive-100 transition-[color] duration-200 ease-[ease] hover:text-emerald-400">Comprehensive Zombies Project</div>

			<div className="absolute left-1/2 -translate-x-1/2">
				<div className="text-2xl font-bold whitespace-nowrap text-mist-200">{pageTitle}</div>

				{currentMapVersions && (
					<div className="absolute top-1/2 left-full ml-4 flex -translate-y-1/2 items-center gap-1.5">
						{currentMapVersions.map(([game, name, path]) => {
							const isActive = currentGame === game;

							return (
								<NavLink key={game} to={path} className={`rounded-lg border px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${isActive ? "border-emerald-500 bg-emerald-600 text-white" : "border-[#34443b] bg-[#191e1b] text-[#d1dbd5] hover:bg-neutral-700 hover:text-emerald-300"}`}>
									{name}
								</NavLink>
							);
						})}
					</div>
				)}
			</div>

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
