/* ---- v2.1.0 ---- */
import { createFileRoute } from "@tanstack/react-router";
import InfoBox from "../../../components/InfoBox";
import MapTabs from "../../../components/MapTabs";
import Source from "../../../components/Source";
import { MapNavigationProvider, useMapNavigation } from "../../../context/MapNavigationContext";
import { mapModules } from "../../../data/mapModules";

const tabs = [mapModules.overview, mapModules.sideEE, mapModules.musicEE, mapModules.wonderWeapon, mapModules.weapons, mapModules.perks, mapModules.extras, mapModules.credits];

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

function MusicEE() {
	return (
		<section>
			<h2>Samantha's Sorrow</h2>
			<p>Rewards: max ammo</p>
			<ol>
				<li>Head to the outside courtyard and stand next to the blue metal door</li>
				<li>
					You will hear a sequence of 3 codes comprised of 3 knocks. Once the sequence has finished, knife the door in the same pattern
					<br />
					Possible Codes:
					<ul>
						<li>1-1-5</li>
						<li>1-2-1</li>
						<li>1-4-3</li>
						<li>2-4-1</li>
						<li>3-2-1</li>
						<li>5-1-2</li>
						<li>5-3-4</li>
						<li>6-2-4</li>
						<li>6-6-6</li>
						<li>9-3-5</li>
					</ul>
				</li>
				<li>Head to the main room and interact with the samantha doll infront of the projector lying on the ground to the right of the stage</li>
				<li>
					You must now find 5 samantha dolls within the theater and shoot them (must do within a time limit. You will hear a laugh if you failed and you must restart from the previous step)
					<ul>
						<li>On a seat on your right, just before turning in the Juggernog's machine corner</li>
						<li>Outside the playable area, on the right of Juggernog's machine</li>
						<li>On the window of the projection room, above the theater</li>
						<li>Pending down the chandelier in the main theater</li>
						<li>On a chair, on the first line of seats, on your right when facing the stage</li>
						<li>Down on the ground on the corner of the room, on the left of the stage</li>
						<li>On a balcoony up on the right of the theater when facing the stage</li>
						<li>On a metallic platform, up on the right corner of the stage</li>
						<li>Behind a fake wall, on the stage ontop of the beam</li>
					</ul>
				</li>
				<li>After shooting all the dolls, return to the doll you first activated to recieve a max ammo and play the song</li>
			</ol>
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

function WonderWeapons() {
	return (
		<section className="tab-content">
			<h3>Thundergun</h3>
			<p>Found in Mystery Box</p>
			<h3>Ray Gun</h3>
			<p>Found in Mystery Box</p>
			<h3>Ray Gun Mark II</h3>
			<p>Found in Mystery Box</p>
		</section>
	);
}

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
							Dentist's Office
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
			<h3>Der Wunderfizz (1500p)</h3>
			<p>On the Theater Stage</p>
		</section>
	);
}

function Weapons() {
	return (
		<section className="tab-content">
			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>Sheiva</b> - Lobby, Upstairs (500p)
				</li>
				<li>
					<b>RK5</b> - Lobby, Upstairs (500p)
				</li>
				<li>
					<b>PM63</b> - Upper Hall (1000p)
				</li>
				<li>
					<b>MPL</b> - Lower Hall (1000p)
				</li>
				<li>
					<b>KN-44</b> - Dressing Room (1400p)
				</li>
				<li>
					<b>AK74u</b> - Alley (1200p)
				</li>
				<li>
					<b>MP40</b> - Foyer, Downstairs (1000p)
				</li>
				<li>
					<b>ICR-1</b> - Stage (1500p)
				</li>
				<li>
					<b>Stakeout</b> - Foyer, Upstairs (1500p)
				</li>
				<li>
					<b>Argus</b> - Foyer, Upstairs (1100p)
				</li>
				<li>
					<b>Bowie Knife</b> - Theater (3000p)
				</li>
				<li>
					<b>M16</b> - Theater (1200p)
				</li>
				<li>
					<b>MP5</b> - Theater Side Room (1000p)
				</li>
				<li>
					<b>Claymore</b> - Stage (1000p)
				</li>
				<li>
					<b>Frag Grenade</b> - Projector Room (250p)
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
				<li>VMP</li>
				<li>Weevil</li>
				<li>Pharo</li>
				<li>Man-O-War</li>
				<li>HVK-30</li>
				<li>Sheiva</li>
				<li>ICR-1</li>
				<li>205 Brecci</li>
				<li>Haymaker</li>
				<li>Dingo</li>
				<li>BRM</li>
				<li>48 Dredge</li>
				<li>Gorgon</li>
				<li>RPK</li>
				<li>Locus</li>
				<li>Drakon</li>
				<li>SVG-100</li>
				<li>XM-53</li>
				<li>KN-44</li>
				<li>Vesper</li>
				<li>Kuda</li>
				<li>AK-74u</li>
				<li>M8A7</li>
				<li>L-CAR 9</li>
				<li>MP40</li>
				<li>Galil</li>
				<li>FFAR</li>
				<li>KRM-262</li>
				<li>Annihilator</li>
				<li>M16</li>
				<li>Thundergun</li>
				<li>Monkey Bombs</li>
				<li>Ray Gun</li>
			</ul>
		</section>
	);
}

function Extras() {
	return (
		<section className="tab-content">
			<h2>Paintings</h2>
			<p>Interacting with each of the portaits on the wall results in different dialogue from your character</p>
			<h2>Rocket Ship</h2>
			<p>Does Nothing</p>
			<ol>
				<li>Turn on the Power</li>
				<li>Stand infront of the left mannequin in the dressing room and jump 5 times</li>
				<li>Use the Teleporter to enter the pentagon's office</li>
				<li>Interact with the rocket figurine to launch it</li>
			</ol>
			<h2>Achievments</h2>
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
						<td>I've seen some things...</td>
						<td>Visit every location the teleporter can take you to</td>
						<td>
							Use the PaP teleporter several times until you have seen every room
							<p>Requires the following rooms:</p>
							<ul>
								<li>Samantha's Room</li>
								<li>Samantha's Corrupted Room</li>
								<li>The Surgery Room</li>
								<li>"Five" Pentagon Office</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

function Credits() {
	return (
		<section className="tab-content">
			<h2>CREDITS</h2>
			<Source href="https://steamcommunity.com/sharedfiles/filedetails/?id=945390433" name="Guide for Kino Der Toten [2020 updated]" author="FreeMetal" source="Steam Guide" />
			<Source href="https://callofduty.fandom.com/wiki/Kino_der_Toten#Overview" name="Kino der Toten" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://callofdutymaps.com/zombies/kino-der-toten-2/" name="Kino Der Toten" author="Call of Duty Maps" source="Call of Duty Maps" />
			<Source href="https://www.reddit.com/r/CODZombies/comments/4p0mbg/kino_der_toten_complete_map_breakdown/" name="Kino Der Toten | Complete Map Breakdown" author="u/chrisd848" source="r/CODZombies" />
		</section>
	);
}

export const Route = createFileRoute("/maps/bo3/kino-der-toten")({
	staticData: {
		title: "Kino der Toten", // Automatically updates your navbar page title!
	},
	component: KinoDerToten,
});
