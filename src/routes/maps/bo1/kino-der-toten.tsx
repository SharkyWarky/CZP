/* ---- v2.1.0 ---- */
import { createFileRoute } from "@tanstack/react-router";
import { MapNavigationProvider, useMapNavigation } from "../../../context/MapNavigationContext";

import MapTabs from "../../../components/MapTabs";
import InfoBox from "../../../components/InfoBox";
{
	/*
import TabLink from "../../../components/TabLink";
import ImageContainer from "../../../components/ImageContainer";
import VideoPlayer from "../../../components/VideoPlayer";
*/
}

import { mapModules } from "../../../data/mapModules";
import Source from "../../../components/Source";

// ============================================================
// 🔴 MAP TABS
// ============================================================

// 🔴 REMOVE: Tabs that do not apply to this map.
// 🔴 ADD: Any applicable tabs not currently included.

const tabs = [mapModules.overview, mapModules.sideEE, mapModules.musicEE, mapModules.wonderWeapon, mapModules.weapons, mapModules.perks, mapModules.extras, mapModules.credits];

// ============================================================
// OVERVIEW
// ============================================================

function Overview() {
	return (
		<section className="tab-content">
			<h2>Kino Der Toten</h2>
			<p>Kino der Toten (German for Cinema/Theater of the Dead) is the fifth Zombies map overall, featured in Call of Duty: Black Ops and Call of Duty: Black Ops III. The map takes place in at Group 935's Kino Facility, at an abandoned theater in Germany, and it is the first map available to the player in Call of Duty: Black Ops. The map introduces some new components to the Zombies mode, including Crawler Zombies and the Fire Pit trap. The Thundergun is introduced in this map as a new Wonder Weapon. The cast of Shi No Numa and Der Riese return as the playable characters: "Tank" Dempsey, Nikolai Belinski, Takeo Masaki, and Edward Richtofen.</p>
			<p>A remastered version of the map is available in the Zombies Chronicles map pack for Call of Duty: Black Ops III, along with seven other classic maps.</p>
			<p>A fractured portion of the map is featured in Revelations.</p>

			<h2>Overview</h2>
			<p>Due to the Wunderwaffe DG-2 overloading the teleporter in Der Riese, the Ultimis crew get sent through time and space and end up at Group 935's Kino Facility located at an abandoned theater in Germany in 1963. These events also caused Richtofen to drop his diary. Upon arriving, they must face limitless hordes of the undead as they continue their journey.</p>
			<p>It appears in the spin-off Call of Duty: Black Ops Zombies under the name Kino, where there are some notable differences:</p>
			<ul>
				<li>Of the four random rooms that the Teleporter momentarily takes the player to, the Conference Room and the Dentist Room are not present.</li>
				<li>The Reels for the projector are not present. Instead, the projector plays a short loop of various images from the Reels. The camera pointing into the projector room is also not present.</li>
				<li>The Radios found around the map are not present.</li>
				<li>Mule Kick is not featured on the map.</li>
				<li>There are no swastikas in the map anymore. They are replaced by the Wehrmacht eagle logo.</li>
			</ul>
			<p>A remastered version of Kino der Toten is available on Call of Duty: Black Ops III if the player has purchased the Zombies Chronicles map pack. The map has been designed to look very high quality while still maintaining the look and feel of the original. Differences include new better Zombies artificial intelligence, and futuristic Black Ops III-era weapons are now available in the Mystery Box and the walls instead of the Cold War weapons (although some do return in the box), as well as the original wonder weapons. The characters are once again the Ultimis versions of "Tank" Dempsey, Nikolai Belinski, Takeo Masaki and Edward Richtofen.</p>
		</section>
	);
}

// ============================================================
// SIDE EASTER EGGS
// ============================================================

function SideEE() {
	return (
		<section className="tab-content">
			<h2>Power</h2>
			<p>Switch is located in the backstage area</p>
			<h2>Pack-A-Punch</h2>
			<ol>
				<li>Turn on Power</li>
				<li>Enter the teleporter on the stage and activate it</li>
				<li>head to the starting room and interact with the platform on the floor to link the teleporter</li>
				<li>stand in the teleporter to be teleporter to PaP</li>
			</ol>
			<h2>Movie Projector</h2>
			<p>Compeleting this EE will paly a movie on the projector screen in the main room</p>
			<ul>
				<li>
					Locate 3 reels located in the rooms you teleport to after using the PaP Teleporter (can only grab one at a time)
					<ul>
						<li>
							Samantha's Room
							<ul>
								<li>On the Table</li>
								<li>On the Bed</li>
								<li>Leaning against the rocking chair</li>
							</ul>
						</li>
						<li>
							Samatha's Destroyed Room
							<ul>
								<li>On the bed</li>
								<li>Leaning on the overturned table</li>
								<li>near the window</li>
							</ul>
						</li>
						<li>
							Surgery Room
							<ul>
								<li>On the cart next to the chair</li>
								<li>On one of the 2 counters</li>
							</ul>
						</li>
						<li>
							Conference Room
							<ul>
								<li>On the TV</li>
								<li>Under the projector</li>
								<li>on the table infront of you</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>After Grabbing one reel, you must return it to the projector in PaP before you can grab another</li>
			</ul>
		</section>
	);
}

// ============================================================
// MUSIC EASTER EGGS
// ============================================================

function MusicEE() {
	return (
		<section className="tab-content">
			<h2>115</h2>
			<p>Interact with 3 element 115 rocks around the map</p>
			<ol>
				<li>Spawn Room: On a stand or corner on the right side as you enter from the starting area</li>
				<li>Dressing Room / Mannequin Room: On a table or corner behind the mannequins on the right side of the stage</li>
				<li>Storage / Film Room: On the lower shelf of a rack in the back storage room past the alley</li>
			</ol>
		</section>
	);
}

// ============================================================
// WONDER WEAPONS
// ============================================================

function WonderWeapons() {
	return (
		<section className="tab-content">
			<h3>Thundergun (Only 1 per game, can be PaP'd)</h3>
			<p>Found in Mystery Box</p>
			<h3>Ray Gun</h3>
			<p>Found in Mystery Box</p>
		</section>
	);
}

// ============================================================
// WEAPONS
// ============================================================

function Weapons() {
	return (
		<section className="tab-content">
			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>Olympia</b> - Lobby, Downstairs (500p)
				</li>
				<li>
					<b>M14</b> - Lobby, Upstairs (500p)
				</li>
				<li>
					<b>PM63</b> - Upper Hall (1000p)
				</li>
				<li>
					<b>MPL</b> - Lower Hall (1000p)
				</li>
				<li>
					<b>MP5K</b> - Dressing Room (1000p)
				</li>
				<li>
					<b>AK74u</b> - Alley (1200p)
				</li>
				<li>
					<b>MP40</b> - Foyer, Downstairs (1000p)
				</li>
				<li>
					<b>M16</b> - Stage (1200p)
				</li>
				<li>
					<b>AUG</b> - Stage, beneath the turret trap [Wii VERSION ONLY] (1200p)
				</li>
				<li>
					<b>Stakeout</b> - Foyer, Upstairs (1500p)
				</li>
				<li>
					<b>Bowie Knife</b> - Theater (3000p)
				</li>
				<li>
					<b>Claymore</b> - Stage (1000p)
				</li>
				<li>
					<b>M67 Grenade</b> - Projector Room (250p)
				</li>
			</ul>

			<h3>Mystery Box</h3>
			<h4>Locations</h4>
			<ul>
				<li>Spawn Room on balcony</li>
				<li>Upper Hall in front of door to theater</li>
				<li>Lower Hall near door to Alley</li>
				<li>Back Room next to window above Alley</li>
				<li>Theater (Stage) near power</li>
				<li>Theater (Center) near Juggernog</li>
				<li>Dressing Room with MP5K wallbuy</li>
				<li>Foyer with Speed Cola machine</li>
				<li>Alley in the middle under rooftop zombie spawn</li>
			</ul>
			<h4>Box Weapons</h4>
			<ul>
				<li>CZ75</li>
				<li>Python</li>
				<li>Spectre</li>
				<li>FN FAL</li>
				<li>G11</li>
				<li>FAMAS</li>
				<li>AUG</li>
				<li>Commando</li>
				<li>Galil</li>
				<li>HS-10</li>
				<li>SPAS-12</li>
				<li>Dragunov</li>
				<li>L96A1</li>
				<li>RPK</li>
				<li>HK21</li>
				<li>Ballistic Knife</li>
				<li>Crossbow</li>
				<li>Chine Lake</li>
				<li>M72 LAW</li>
				<li>Ray Gun</li>
				<li>Thundergun</li>
				<li>Monkey Bombs</li>
			</ul>
		</section>
	);
}

// ============================================================
// PERKS
// ============================================================

function Perks() {
	return (
		<section className="tab-content">
			<h3>Quick Revive (500p solo, 1500p coop)</h3>
			<p>Located in the starting spawn room, on the right side next to the bar/barrier</p>
			<h3>Juggernog (2500p)</h3>
			<p>Located in the main theater area, near the seating rows on the left side when entering from spawn (requires power)</p>
			<h3>Double Tap Root Beer (2000p)</h3>
			<p>Located outside in the back alleyway area past the fire trap room</p>
			<h3>Speed Cola (3000p)</h3>
			<p>Located in the large dressing/storage room downstairs past the double stairs from the foyer</p>
			<h3>Mule Kick (4000p)</h3>
			<p>Located in the room upstairs on the right side of the map near the electric trap</p>
		</section>
	);
}

// ============================================================
// EXTRAS
// ============================================================

function Extras() {
	return (
		<section className="tab-content">
			<h2>Paintings</h2>
			<p>Interacting with each of the portaits on the wall results in different dialogue from your character</p>
			<h2>Rocket Ship</h2>
			<p>Does Nothing</p>
			<ol>
				<li>Turn on the Power</li>
				<li>Collect all 3 film reels</li>
				<li>
					Shoot 2 radios found around the map (audio will play when hit)
					<ol>
						<li>One on the chandelier in the main room</li>
						<li>in the alleyway near double tap outside the fence barrier. below the fence of the guard tower.</li>
					</ol>
				</li>
				<li>Use the Teleporter to enter the pentagon's office</li>
				<li>Interact with the rocket figurine to launch it</li>
			</ol>

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
						<td>Electric</td>
						<td>Kills Zombies</td>
						<td>PM63 room</td>
						<td>1000 points</td>
					</tr>
					<tr>
						<td>Turret</td>
						<td>Shoots Zombies</td>
						<td>Speed Cola room</td>
						<td>1000 points</td>
					</tr>
					<tr>
						<td>Electric</td>
						<td>Kills Zombies</td>
						<td>Stage</td>
						<td>1000 points</td>
					</tr>
					<tr>
						<td>Turret</td>
						<td>Shoots Zombies</td>
						<td>Stage/Center</td>
						<td>1000 points</td>
					</tr>
					<tr>
						<td>Electric</td>
						<td>Kills Zombies</td>
						<td>Spawn/Stage staircase</td>
						<td>1000 points</td>
					</tr>
					<tr>
						<td>Fire</td>
						<td>Kills Zombies</td>
						<td>MPL room</td>
						<td>1000 points</td>
					</tr>
					<tr>
						<td>Electric</td>
						<td>Kills Zombies</td>
						<td>Room before stage (Left)</td>
						<td>1000 points</td>
					</tr>
				</tbody>
			</table>

			<h2>Transport</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>From</th>
						<th>To</th>
						<th>Final</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Teleporter</td>
						<td>Stage</td>
						<td>Projector Room</td>
						<td>Spawn</td>
						<td>Cost</td>
					</tr>
				</tbody>
			</table>
			<p>
				<b>Note:</b> The teleport takes you to the projector room for a few seconds allowing you to pack-a-punch or insert a film reel. This is the only method of transport other than walking.
			</p>

			<h2>Special Zombies</h2>
			<table>
				<thead>
					<tr>
						<th>Zombie Type</th>
						<th>Ability</th>
						<th>Health</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nova 6 Crawlers (only after power has been turned on)</td>
						<td>Attack Players &amp; Explode</td>
						<td>Lower than Zombies</td>
					</tr>
					<tr>
						<td>Dogs (Special Round every 4-7 rounds)</td>
						<td>Attack Players</td>
						<td>Lower Than Zombies</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

// ============================================================
// CREDITS
// ============================================================

function Credits() {
	return (
		<section className="tab-content">
			<h2>CREDITS</h2>
			<Source href="https://steamcommunity.com/sharedfiles/filedetails/?id=945390433" name="Guide for Kino Der Toten [2020 updated]" author="FreeMetal" source="Steam Guide" />
			<Source href="https://callofduty.fandom.com/wiki/Kino_der_Toten#Overview" name="Kino der Toten" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://callofdutymaps.com/zombies/kino-der-toten-2/" name="Kino der Toten" author="Call of Duty Maps" source="Call of DUty Maps" />
			<Source href="https://www.reddit.com/r/CODZombies/comments/4p0mbg/kino_der_toten_complete_map_breakdown/" name="Kino Der Toten | Complete Map Breakdown" author="u/chrisd848" source="r/CODZombies" />
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function KinoDerToten() {
	return (
		<MapNavigationProvider>
			<KinoDerTotenContent />
		</MapNavigationProvider>
	);
}

function KinoDerTotenContent() {
	const { activeTab } = useMapNavigation();

	return (
		<div className="map-layout">
			<MapTabs modules={tabs} />

			<InfoBox id="map-info">
				{activeTab === "overview" && <Overview />}
				{activeTab === "side-ee" && <SideEE />}
				{activeTab === "music-ee" && <MusicEE />}
				{activeTab === "wonder-weapon" && <WonderWeapons />}
				{activeTab === "weapons" && <Weapons />}
				{activeTab === "perks" && <Perks />}
				{activeTab === "extras" && <Extras />}
				{activeTab === "credits" && <Credits />}
			</InfoBox>
		</div>
	);
}

export const Route = createFileRoute("/maps/bo1/kino-der-toten")({
	staticData: {
		title: "Kino der Toten", // Automatically updates your navbar page title!
	},
	component: KinoDerToten,
});
