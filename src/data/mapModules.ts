/*
    List of every tab that CAN appear on the left side when looking at a map
*/

export const mapModules = {
	overview: {
		id: "overview",
		label: "Overview",
	},
	mainEE: {
		id: "main-ee",
		label: "Main EE",
	},
	sideEE: {
		id: "side-ee",
		label: "Side EEs",
	},
	musicEE: {
		id: "music-ee",
		label: "Music EE",
	},
	wonderWeapon: {
		id: "wonder-weapon",
		label: "Wonder Weapons",
	},
	buildables: {
		id: "buildables",
		label: "Buildables",
	},
	weapons: {
		id: "weapons",
		label: "Weapons",
	},
	gauntlet: {
		id: "gauntlet",
		label: "Gauntlet",
	},
	perks: {
		id: "perks",
		label: "Perks",
	},
	extras: {
		id: "extras",
		label: "Extras",
	},
	credits: {
		id: "credits",
		label: "Credits",
	},
} as const;
