import { MapNavigationProvider, useMapNavigation } from "../../../context/MapNavigationContext";

import MapTabs from "../../../components/MapTabs";
import InfoBox from "../../../components/InfoBox";
import Source from "../../../components/Source";
import TabLink from "../../../components/TabLink";
import ImageContainer from "../../../components/ImageContainer";
import VideoPlayer from "../../../components/VideoPlayer";

import { mapModules } from "../../../data/mapModules";

// ============================================================
// 🔴 MAP TABS
// ============================================================

// 🔴 REMOVE: Tabs that do not apply to this map.
// 🔴 ADD: Any applicable tabs not currently included.

const tabs = [mapModules.overview, mapModules.mainEE, mapModules.sideEE, mapModules.musicEE, mapModules.wonderWeapon, mapModules.buildables, mapModules.weapons, mapModules.perks, mapModules.extras, mapModules.credits];

// ============================================================
// OVERVIEW
// ============================================================

function Overview() {
	return (
		<section id="overview" className="tab-content">
			{/* 🔴 CHANGE: Map name */}
			<h2>MAP NAME</h2>

			{/* 🔴 ADD: Basic map description */}
			<p>MAP DESCRIPTION.</p>

			{/* 🔴 ADD: Additional map information */}
			<p>ADDITIONAL INFORMATION.</p>

			{/* 🔴 ADD/REMOVE: Overview subsections */}
			<h2>Overview</h2>

			<p>MAP OVERVIEW, STORY, SETTING, AND OTHER IMPORTANT INFORMATION.</p>

			{/* 🔴 ADD: More overview information as necessary */}

			{/* 🔴 OPTIONAL: Link to another tab */}
			<TabLink tab="main-ee">Go to Main Easter Egg</TabLink>

			{/* 🔴 OPTIONAL: Add/remove images as necessary */}
			<ImageContainer>
				<img src="/images/map-cards/advanced-warfare/carrier-aw.webp" alt="IMAGE DESCRIPTION" />
				<img src="/images/map-cards/bo3/ascension-bo3.webp" alt="IMAGE DESCRIPTION" />
			</ImageContainer>

			{/* 🔴 OPTIONAL: Add videos as necessary */}
			<VideoPlayer url="VIDEOCODE" />

			{/* 🔴 OPTIONAL: Link directly to a section */}
			<p>
				<TabLink tab="side-ee" target="power">
					Power
				</TabLink>
			</p>
		</section>
	);
}

// ============================================================
// MAIN EASTER EGG
// ============================================================

function MainEE() {
	return (
		<section id="main-ee" className="tab-content">
			{/* 🔴 CHANGE: Main Easter Egg name */}
			<h2>MAIN EASTER EGG NAME</h2>

			{/* 🔴 ADD: Prerequisites */}
			<h3>Prerequisites</h3>
			<ul>
				<li>PREREQUISITE</li>
			</ul>

			{/* 🔴 ADD: Recommended setup */}
			<h3>Recommended Setup</h3>
			<ul>
				<li>RECOMMENDATION</li>
			</ul>

			{/* 🔴 ADD: Rewards */}
			<p>Rewards: REWARD</p>

			{/* 🔴 ADD: Main EE instructions */}
			<ol>
				<li>STEP 1</li>
				<li>STEP 2</li>
				<li>STEP 3</li>
			</ol>

			{/* 🔴 OPTIONAL: Main EE video */}
			<VideoPlayer url="VIDEOCODE" />
		</section>
	);
}

// ============================================================
// SIDE EASTER EGGS
// ============================================================

function SideEE() {
	return (
		<section id="side-ee" className="tab-content">
			{/* 🔴 ADD: Each side Easter Egg */}

			<h2 id="power">Power</h2>
			<p>DESCRIPTION.</p>

			<ol>
				<li>STEP 1</li>
				<li>STEP 2</li>
				<li>STEP 3</li>
			</ol>

			{/* 🔴 OPTIONAL: Power video */}
			<VideoPlayer url="VIDEOCODE" />

			{/* 🔴 ADD: Pack-a-Punch */}
			<h2 id="pap">Pack-a-Punch</h2>
			<p>DESCRIPTION.</p>

			{/* 🔴 OPTIONAL: Pack-a-Punch video */}
			<VideoPlayer url="VIDEOCODE" />

			{/* 🔴 ADD: Another side Easter Egg */}
			<h2>ANOTHER SIDE EASTER EGG</h2>
			<p>DESCRIPTION.</p>

			<ol>
				<li>STEP 1</li>
				<li>STEP 2</li>
			</ol>
		</section>
	);
}

// ============================================================
// MUSIC EASTER EGGS
// ============================================================

function MusicEE() {
	return (
		<section id="music-ee" className="tab-content">
			{/* 🔴 ADD: Music Easter Egg */}

			<h2>SONG NAME</h2>
			<p>Rewards: REWARD</p>

			<ol>
				<li>STEP 1</li>
				<li>STEP 2</li>
				<li>STEP 3</li>
			</ol>

			{/* 🔴 ADD: Additional songs / music Easter Eggs */}

			<h2>SECOND SONG NAME</h2>
			<p>DESCRIPTION.</p>

			<ol>
				<li>STEP 1</li>
				<li>STEP 2</li>
			</ol>

			{/* 🔴 OPTIONAL: Music Easter Egg video */}
			<VideoPlayer url="VIDEOCODE" />
		</section>
	);
}

// ============================================================
// WONDER WEAPONS
// ============================================================

function WonderWeapons() {
	return (
		<section id="wonder-weapon" className="tab-content">
			{/* 🔴 ADD: Every Wonder Weapon available on this map */}

			<h3>WONDER WEAPON NAME</h3>
			<p>HOW TO OBTAIN / WHERE FOUND.</p>

			{/* 🔴 ADD: Description, upgrades, ammo, etc. */}

			<h3>SECOND WONDER WEAPON</h3>
			<p>HOW TO OBTAIN / WHERE FOUND.</p>

			{/* 🔴 ADD: Additional Wonder Weapons */}
		</section>
	);
}

// ============================================================
// BUILDABLES
// ============================================================

function Buildables() {
	return (
		<section id="buildables" className="tab-content">
			{/* 🔴 ADD: Every buildable on the map */}

			<h3>BUILDABLE NAME</h3>
			<p>DESCRIPTION.</p>

			<h4>Parts</h4>
			<ul>
				<li>PART 1 - LOCATION</li>
				<li>PART 2 - LOCATION</li>
				<li>PART 3 - LOCATION</li>
			</ul>

			<h4>How to Build</h4>
			<ol>
				<li>STEP 1</li>
				<li>STEP 2</li>
				<li>STEP 3</li>
			</ol>

			{/* 🔴 ADD: Additional buildables */}
		</section>
	);
}

// ============================================================
// WEAPONS
// ============================================================

function Weapons() {
	return (
		<section id="weapons" className="tab-content">
			{/* 🔴 ADD: Starting weapons if applicable */}

			<h3>Starting Weapons</h3>
			<ul>
				<li>NAME - Player Choice</li>
			</ul>

			{/* 🔴 ADD: Specialists if applicable */}

			<h3>Specialists</h3>
			<ul>
				<li>NAME - Player Choice</li>
			</ul>

			{/* 🔴 ADD: Wall weapons */}

			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>WEAPON NAME</b> - LOCATION (PRICE)
				</li>
				<li>
					<b>WEAPON NAME</b> - LOCATION (PRICE)
				</li>
			</ul>

			{/* 🔴 ADD/REMOVE: Mystery Box if applicable */}

			<h3>Mystery Box</h3>

			<h4>Locations</h4>
			<ul>
				<li>LOCATION</li>
				<li>LOCATION</li>
			</ul>

			<h4>Box Weapons</h4>
			<ul>
				<li>WEAPON NAME</li>
				<li>WEAPON NAME</li>
			</ul>

			{/* 🔴 ADD: Special weapons / equipment */}
		</section>
	);
}

// ============================================================
// PERKS
// ============================================================

function Perks() {
	return (
		<section id="perks" className="tab-content">
			{/* 🔴 ADD/REMOVE: Include every perk available on this map */}

			<h3>PERK NAME (PRICE)</h3>
			<p>LOCATION / REQUIREMENTS.</p>

			<h3>PERK NAME (PRICE)</h3>
			<p>LOCATION / REQUIREMENTS.</p>

			{/* 🔴 ADD: Additional perks */}
		</section>
	);
}

// ============================================================
// EXTRAS
// ============================================================

function Extras() {
	return (
		<section id="extras" className="tab-content">
			{/* 🔴 ADD: Map-specific secrets, interactions, etc. */}

			<h2>EXTRA NAME</h2>
			<p>DESCRIPTION.</p>

			{/* 🔴 ADD: Steps if applicable */}

			<ol>
				<li>STEP 1</li>
				<li>STEP 2</li>
			</ol>

			{/* 🔴 ADD/REMOVE: Traps if applicable */}

			<h2>Traps</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Ability</th>
						<th>Location</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>TRAP TYPE</td>
						<td>ABILITY</td>
						<td>LOCATION</td>
						<td>COST</td>
					</tr>
				</tbody>
			</table>

			{/* 🔴 ADD/REMOVE: Fast Travel if applicable */}

			<h2>Fast Travel</h2>
			<table>
				<thead>
					<tr>
						<th>Location</th>
						<th>Ending Location</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>LOCATION</td>
						<td>ENDING LOCATION</td>
						<td>COST</td>
					</tr>
				</tbody>
			</table>

			{/* 🔴 ADD/REMOVE: Special enemies if applicable */}

			<h2>Special Enemies</h2>
			<table>
				<thead>
					<tr>
						<th>Enemy Name</th>
						<th>Special Abilities</th>
						<th>Picture</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ENEMY NAME</td>
						<td>ABILITIES</td>
						<td>PICTURE</td>
					</tr>
				</tbody>
			</table>

			{/* 🔴 ADD/REMOVE: Achievements if applicable */}

			<h2>Achievements</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Goal</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>ACHIEVEMENT NAME</td>
						<td>DESCRIPTION</td>
						<td>HOW TO UNLOCK</td>
					</tr>

					{/* 🔴 ADD: Additional achievements */}
				</tbody>
			</table>

			{/* 🔴 ADD: Other extra information */}
		</section>
	);
}

// ============================================================
// CREDITS
// ============================================================

function Credits() {
	return (
		<section id="credits" className="tab-content">
			<h2>Credits</h2>

			{/* 🔴 ADD: Every source used for this map */}

			<Source href="SOURCE URL" name="SOURCE TITLE" author="SOURCE AUTHOR" source="SOURCE WEBSITE" />

			{/* 🔴 ADD: Additional sources */}
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function TheTomb() {
	return (
		<MapNavigationProvider>
			<TheTombContent />
		</MapNavigationProvider>
	);
}

function TheTombContent() {
	const { activeTab } = useMapNavigation();

	return (
		<div className="map-layout">
			<MapTabs modules={tabs} />

			<InfoBox id="map-info">
				{activeTab === "overview" && <Overview />}
				{activeTab === "main-ee" && <MainEE />}
				{activeTab === "side-ee" && <SideEE />}
				{activeTab === "music-ee" && <MusicEE />}
				{activeTab === "wonder-weapon" && <WonderWeapons />}
				{activeTab === "buildables" && <Buildables />}
				{activeTab === "weapons" && <Weapons />}
				{activeTab === "perks" && <Perks />}
				{activeTab === "extras" && <Extras />}
				{activeTab === "credits" && <Credits />}
			</InfoBox>
		</div>
	);
}
