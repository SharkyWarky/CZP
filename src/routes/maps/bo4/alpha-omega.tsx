import { createFileRoute } from "@tanstack/react-router";
/* ---- v2.1.0 ---- */
import { MapNavigationProvider, useMapNavigation } from "../../../context/MapNavigationContext";

import MapTabs from "../../../components/MapTabs";
import InfoBox from "../../../components/InfoBox";
import Source from "../../../components/Source";
import TabLink from "../../../components/TabLink";
/*import ImageContainer from "../../../components/ImageContainer";*/
import VideoPlayer from "../../../components/VideoPlayer";

import { mapModules } from "../../../data/mapModules";

import AchievementTable from "../../../components/AchievementTable";

const achievementRows = [
	{
		id: "electromagnetic-awakening-party",
		name: "Electromagnetic Awakening Party",
		description: "In Alpha Omega, begin Nikolai's Grand Scheme",
		goal: "",
	},
	{
		id: "checkpoint-zulu",
		name: "Checkpoint Zulu",
		description: "In Alpha Omega, survive the first 20 rounds without leaving Security Checkpoint",
		goal: "",
	},
	{
		id: "ray-gun-bonanza",
		name: "Ray Gun Bonanza",
		description: "In Alpha Omega, construct all Ray Guns in a single match",
		goal: "",
	},
	{
		id: "entrapment-entrepeneur",
		name: "Entrapment Entrepeneur",
		description: "In Alpha Omega, kill 11 zombies with 5 different traps",
		goal: "",
	},
	{
		id: "nuketown-hustle",
		name: "Nuketown Hustle",
		description: "In Alpha Omega, unlock the Pack-a-Punch machine by round 5",
		goal: "",
	},
	{
		id: "galvanizer",
		name: "Galvanizer",
		description: "In Alpha Omega, kill 115 zombies with Galvaknuckles in a single match",
		goal: "",
	},
	{
		id: "chug-chug-chug-chug",
		name: "Chug! Chug! Chug! Chug!",
		description: "In Alpha Omega, buy all four perks in any order in 35 seconds or less",
		goal: "",
	},
	{
		id: "ray-gnarok",
		name: "Ray-gnarok",
		description: "In Alpha Omega, stun 10 zombies at once with the Ray Gun Mk. II-V",
		goal: "",
	},
	{
		id: "experimental-prototype",
		name: "Experimental Prototype",
		description: "In Alpha Omega, construct a Ray Gun",
		goal: "",
	},
	{
		id: "its-a-toss-up",
		name: "It's a Toss-Up",
		description: "In Alpha Omega, kill 15 Jolting Jacks on rooftops with grenades in a single match",
		goal: "",
	},
];

// ============================================================
// MAP TABS
// ============================================================

const tabs = [mapModules.overview, mapModules.mainEE, mapModules.sideEE, mapModules.musicEE, mapModules.wonderWeapon, mapModules.buildables, mapModules.weapons, mapModules.gauntlet, mapModules.perks, mapModules.extras, mapModules.credits];

// ============================================================
// OVERVIEW
// ============================================================

function Overview() {
	return (
		<section className="tab-content">
			<h2>Alpha Omega</h2>
			<p>Alpha Omega is the seventh Zombies map featured in Call of Duty: Black Ops 4, and the thirty-first map overall. The map was released on July 9th, 2019 on PlayStation 4, and was released on July 16th, 2019 for Xbox One and PC.[1] It serves as the penultimate map of the Aether Story.</p>
			<h2>Overview</h2>
			<p>Alpha Omega is a reimagined and heavily expanded version of Nuketown, taking elements from both the Nuketown Zombies map and the Nuketown point of interest in Blackout. Set at the Broken Arrow facility prior to what was thought to be a nuclear explosion that leveled the testing site, Alpha Omega greatly expands on the original predecessor, adding new areas such as the other houses before the cul-de-sac, and allowing players to access the large underground bunker and research facility that resides below the surface.</p>
			<p>Players will have the ability to play as both Primis and Ultimis characters, mixing and matching crew compositions for the first time. However, there cannot be two of the same character, such as a Primis and Ultimis Dempsey present at once. It is the first map in Zombies history to feature more than four canonical playable characters.</p>
			<p>The map also re-introduces the Ray Gun Mark II, this time with four unique elemental variants to craft, each with their own unique abilities. The Galvaknuckles from Call of Duty: Black Ops II also return in this map, being slightly stronger and costing 5000 points as opposed to the original 6000. Players are also able to craft Telepads that function similarly to the Teleporters on "Five" and Classified. The locations of the teleporters are also chosen by players from a set of fixed locations, and can be modified at any time. Finally, players can activate a robotic sentry named Sergeant A.D.A.M., who will fight zombies with the player for a short time.</p>
			<p>Several new enemies are introduced in this map; the Lightning Hounds are electrified versions of normal Hellhounds, Nova 6 Bombers are mutated Nova 6 Crawlers with the ability to empower nearby zombies, and Jolting Jacks are another variant of Nova 6 Crawlers with the ability to shoot lightning ball-based projectiles towards the player.</p>
			<p>The Avogadro is featured in the map as the Demonic Announcer, final boss, and main antagonist. The end of Electromagnetic Awakening Party sees the Avogadro sent to the Hanford site in Washington, setting up his later appearance in TranZit. Marlton Johnson is also briefly heard in the bunker as part of the quest to build Sergeant A.D.A.M, a reference to his appearance in Nuketown Zombies.</p>
		</section>
	);
}

// ============================================================
// MAIN EASTER EGG
// ============================================================

function MainEE() {
	return (
		<section className="tab-content">
			<h2>Prerequisites</h2>
			<ul>
				<li>
					Activate{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>
				</li>
				<li>Activate Rushmore (After opening PaP, skip the round and interact with the computer in Operations.)</li>
				<li>Galvaknuckles</li>
			</ul>

			<h2>Recommended Setup</h2>
			<ul>
				<li>Specialist - Katana</li>
				<li>Weapon - Strife</li>
				<li>Equipment - Wraith Fires</li>
				<li>
					<b>Perks</b>
					<ul>
						<li>Quick Revive</li>
						<li>Stamin-Up</li>
						<li>Dying Wish</li>
						<li>Modifier - Winter's Wail</li>
					</ul>
				</li>
			</ul>

			<h2>
				Main EE -{" "}
				<a href="https://www.youtube.com/watch?v=Q3vn1_QvjIY" target="_blank" rel="noopener noreferrer">
					Video
				</a>{" "}
				+{" "}
				<a href="https://www.youtube.com/watch?v=nGelaEWQkfk" target="_blank" rel="noopener noreferrer">
					Updates
				</a>
			</h2>
			<ol>
				<li>Locate a static Tv within the Bunker in Beds, Diner, or Lounge. Kill a zombie using the galvaknuckles infront of the Tv to turn it on. it will then spew out a bunch of numbers and codes WRITE DOWN EVERY SINGLE COMBO (Letter and 4 digit number)</li>
				<li>
					You then need to head to each house (letters are on the mail boxes) and input the code as a time onto the clock (ie. A 0115 would be 1:15 into the clock in house A) and repeat for all the houses you got the codes for. (knife moves time by 1 hour and interacting moves by 15 minutes)
					<ul>
						<li>A - Yellow House</li>
						<li>B - Green House</li>
						<li>C - Prisoner Holding</li>
						<li>D - Transfusion Facility</li>
						<li>E - Operations</li>
						<li>F - APD Interrogation</li>
					</ul>
				</li>
				<li>Once complete, head to the final house which did not have a code and interact with the clock to cause it to spin rapidly. It will stop at a time, you must input this time into rushmore (ie 6:15 is 0615)</li>
			</ol>
		</section>
	);
}

// ============================================================
// SIDE EASTER EGGS
// ============================================================

function SideEE() {
	return (
		<section className="tab-content">
			<h2 id="power">Power</h2>
			<p>The power switch is located on the opposite end of the map from spawn inside the small house</p>

			<h2 id="pap">
				PaP -{" "}
				<a href="https://www.youtube.com/watch?v=fc9NSxYTFxU" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>After opening PaP, after a few rounds the houses will start expelling green gas again and you will need to empty the valves again to re-open PaP</p>
			<ol>
				<li>Turn on Power</li>
				<li>Head down into the basement into the room behind the PaP machine and interact with the monitor on the left side (Starts a lockdown)</li>
				<li>Once the lockdown is finished, head back up to the town and find houses that have green gas coming out of them. Find the valve (usually inside the garage or backyard) and interact until the valve turns green</li>
				<li>Once all the houses are no longer green, you should get a dialogue and the PaP will open.</li>
			</ol>

			<h2>
				Sergeant A.D.A.M. -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=365" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>Sergeant ADAM can be purchased from Storage Room for 300p or free the first time after unlocking him. He follows the player for 3 rounds and acts as an AI.</span>
				<span>
					<b>
						Requires{" "}
						<TabLink tab="side-ee" target="PaP">
							PaP Open
						</TabLink>
					</b>
				</span>
			</p>
			<ol>
				<li>Inside of Operation, interact with rushmore</li>
				<li>
					Locate 4 codes around the map
					<ul>
						<li>Activation code - 7626 (Always the same, on the desk to the right of ray gun mark II frames)</li>
						<li>Sawyer: APD Interrogation - Top of desk behind tv on first floor, below the Stairs, On computer desk upstairs</li>
						<li>Peter McCain: APD Control - Shoot or Melee the stack of papers on the desk to the left when entering</li>
						<li>Pernell: Solitary - Obtain the key from the keybox in solitary and unlock the desk drawer in Upstairs Yellow House to reveal the code.</li>
					</ul>
				</li>
				<li>Starting with the activation code, input every code you recieved until he says that "project toy soldier" is active.</li>
			</ol>

			<h2>
				Free 5th Perk -{" "}
				<a href="https://www.youtube.com/watch?v=HiXiZARmVuk" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<b>
					Requires{" "}
					<TabLink tab="side-ee" target="PaP">
						PaP Open
					</TabLink>
				</b>
			</p>
			<ol>
				<li>Shoot off all 30 heads from mannequins (CANNOT be meleed orelse you're locked out for the remainder of the game)</li>
				<li>This will trigger a mannequin only round which you must survive. A free perk drop will fall from the sky when you succeed.</li>
			</ol>

			<h2>
				Free Self Revive (Mannequin Love Story) -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=1694" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>Knife off all 30 mannequin heads (CANNOT be shot orelse you're locked out for the remainder of the game)</li>
				<li>Behind the population sign will be a new mannequin which will follow the player like a weeping angel. (not looking at him causes him to move)</li>
				<li>Lead this mannequin down into the Generator room and you'll find a new headless female mannequin. Escort both of them to the Green House ched in the backyard</li>
				<li>Look away for them to enter then wait a few seconds until the door closes and the self revive is infront of the door.</li>
			</ol>
		</section>
	);
}

// ============================================================
// MUSIC EASTER EGGS
// ============================================================

function MusicEE() {
	return (
		<section className="tab-content">
			<h2>
				I am the well -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=2343" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Interact with 3 mannequin heads around the map</p>
			<ul>
				<li>On the floor under the Green House bed upstairs</li>
				<li>On stall in the Bunker next to the pool table</li>
				<li>In Solitary opposite the desk on the floor</li>
			</ul>
		</section>
	);
}

// ============================================================
// WONDER WEAPONS
// ============================================================

function WonderWeapons() {
	return (
		<section className="tab-content">
			<p>Only one ray gun can be carried per person. The ray guns can be returned to the place where you got the frames if you want to get another. Once a canister has been grabbed, you must complete that ray gun to start another. All rayguns can also be PaP'd.</p>
			<h2 id="frame">
				Ray Gun Mark II Frames -{" "}
				<a href="https://www.youtube.com/watch?v=QuHE8NeYZww" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>These are required to get any of the following Ray Gun variants</span>
				<span>
					<b>
						Requires{" "}
						<TabLink tab="side-ee" target="PaP">
							PaP Open
						</TabLink>{" "}
						and Rushmore Activated (After opening PaP, skip the round and interact with the computer in Operations.)
					</b>
				</span>
			</p>
			<ul>
				<li>
					You need to find one of 4 static tvs and fill it with souls, once full teh screen will show a number which you need to remember (ORDER DOES MATTER) then look at the remaining tvs and continue until they all show numbers and you have a 4 digit code
					<ul>
						<li>Site Entrance</li>
						<li>Yellow House Backyard</li>
						<li>Diner</li>
						<li>APD Control</li>
					</ul>
				</li>
				<li>Enter the code into rushmore to be given access to the Ray Gun Frames. You must grab one in order to get the Ray Gun variants.</li>
			</ul>

			<h2>
				Ray Gun Mark II-V (Kill-O-Watt) -{" "}
				<a href="https://youtu.be/6fXHpdKE6lg?t=70" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<b>
					Requires{" "}
					<TabLink tab="wonder-weapon" target="frame">
						Ray Gun Frames
					</TabLink>
					,{" "}
					<TabLink tab="buildables" target="raygunassemblykit">
						Ray Gun ASsembly Kit
					</TabLink>{" "}
					and a weapon with Kill-O-Watt on it.
				</b>
			</p>
			<ol>
				<li>
					Head to the Generator room and look for a sparking panel (3 locations) then shoot it with the weapon to open the panel and pick up the canister.
					<ul>
						<li>Generators near Beds entrance</li>
						<li>Generators near ventilation Console</li>
						<li>Generators near Tonic Perk</li>
					</ul>
				</li>
				<li>
					Head up to the above ground area and look above telephone poles for sparking yellow, shoot it with the Kil-O-Watt gun to turn it into a yellow orb. repeat with all 5 poles. (They should shoot beams when complete)
					<ul>
						<li>Transfusion Facility Backyard x2</li>
						<li>Cul-de-sac outside Prisoner Holding</li>
						<li>Cul-de-sac Transfusion Facility house</li>
						<li>Site Entrance outside APD House</li>
					</ul>
				</li>
				<li>Head to the front of Yellow House and interact with the panel where the beams are pointing to place the canister. Get kills while remaining inside the circle until the canister is fully charged.</li>
				<li>Grab the canister and head to the Mark II Table inside the top of Rushmores house to craft the ray gun variant.</li>
			</ol>
			<h2>
				Ray Gun Mark II-X (Cryofreeze) -{" "}
				<a href="https://youtu.be/6fXHpdKE6lg?t=17" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<b>
					Requires{" "}
					<TabLink tab="wonder-weapon" target="frame">
						Ray Gun Frames
					</TabLink>
					,{" "}
					<TabLink tab="buildables" target="raygunassemblykit">
						Ray Gun Assemly Kit
					</TabLink>{" "}
					and a weapon with Cryofreeze on it.
				</b>
			</p>
			<ol>
				<li>
					Find a cabinet or drawer which has blue gas coming out of it and shoot it using your Cryofreeze gun. Grab the canister that is within.
					<ul>
						<li>APD Interrogation</li>
						<li>Prisoner Holding</li>
						<li>Operations</li>
					</ul>
				</li>
				<li>Within the Bunker, blue mist zombies will spawn. Shoot them using the Cryofreeze weapon and melee it once they freeze. pick up the blue goo on the floor and repeat 2 more times (3 times total)</li>
				<li>Head to APD Control and place the canister in the broken container near the map on the wall. a blue circle will form on the floor.</li>
				<li>While within the circle, get kills to charge up the canister. when the circle dissapear you can pick it up and bring it to the Ray Gun Assembly Table to craft the Ray Gun.</li>
			</ol>

			<h2>
				Ray Gun Mark II-Y (Brain Rot) -{" "}
				<a href="https://youtu.be/6fXHpdKE6lg?t=127" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<b>
					Requires{" "}
					<TabLink tab="wonder-weapon" target="frame">
						Ray Gun Frames
					</TabLink>
					,{" "}
					<TabLink tab="buildables" target="raygunassemblykit">
						Ray Gun Assemly Kit
					</TabLink>
					,{" "}
					<TabLink tab="buildables" target="telepad">
						Telepads
					</TabLink>{" "}
					and a weapon with Brain Rot on it.
				</b>
			</p>
			<ol>
				<li>
					Find a glowing green dirt pile somewhere outside and get a brain rot zombie near it to break the pile. grab the canister which is within.
					<ul>
						<li>Green House Backyard near shed</li>
						<li>Center Street near light pole</li>
						<li>Yellow House Backyard near backdoor</li>
					</ul>
				</li>
				<li>Find a yellow orb above any of the possible telepad locations. Place a telepad ontop under the orb and shoot/knife it to move it.</li>
				<li>Look aroudn the map again looking for the orb again.place the 2nd teleporter pad under it and shoot/melee it again. now use the teleporter.</li>
				<li>Head to Storage where the orb will be and canister can be placed to create a circle on the floor.</li>
				<li>While within the circle, get kills to charge up the canister. when the circle dissapear you can pick it up and bring it to the Ray Gun Assembly Table to craft the Ray Gun.</li>
			</ol>

			<h2>
				Ray Gun Mark II-Z (Fire Bomb) -{" "}
				<a href="https://youtu.be/6fXHpdKE6lg?t=191" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<b>
					Requires{" "}
					<TabLink tab="wonder-weapon" target="frame">
						Ray Gun Frames
					</TabLink>
					,{" "}
					<TabLink tab="buildables" target="raygunassemblykit">
						Ray Gun Assemly Kit
					</TabLink>{" "}
					and a weapon with Acid Bomb on it.
				</b>
			</p>
			<ol>
				<li>
					Find a cabinet which has orange mist and shoot it using the Fire Bomb weapon to open and grab the canister.
					<ul>
						<li>Green House Downstairs kitchen</li>
						<li>Yellow House Downstairs kitchen</li>
						<li>Lounge near pool table</li>
					</ul>
				</li>
				<li>FInd which house has a chimney which is secreting pruple smoke. Throw a Wraith Fire, Frag or Acid Bomb directly on top of the chimney, when done correctly the smoke should go away.</li>
				<li>Enter the house and place the canister inside the fireplace to spawn a circle on the floor</li>
				<li>While within the circle, get kills to charge up the canister. when the circle dissapear you can pick it up and bring it to the Ray Gun Assembly Table to craft the Ray Gun.</li>
			</ol>
		</section>
	);
}

// ============================================================
// BUILDABLES
// ============================================================

function Buildables() {
	return (
		<section className="tab-content">
			<h3 id="tables">Table Locations</h3>
			<ul>
				<li>Upstairs in the house to the left of Power switch</li>
				<li>In the APD room on the right side when entering</li>
			</ul>

			<h2>
				Shield -{" "}
				<a href="https://www.youtube.com/watch?v=ABqvqHWPiJA" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ul>
				<li>
					Glass Piece - PaP Room
					<ul>
						<li>To the left of tv when entering</li>
						<li>On the right side of the couch to the left of the teleporter location</li>
						<li>On the bookshelf when entering the room past PaP from the right side</li>
					</ul>
				</li>

				<li>
					Bar Part - Rushmore's House
					<ul>
						<li>Leaning against filling cabinet in Rushmores house garage (right of spawn)</li>
						<li>On the table when heading up the stairs in rushmores house</li>
						<li>On a box in the upstairs office in Rushmores house</li>
					</ul>
				</li>

				<li>
					Square Piece - Main Area
					<ul>
						<li>Leaning on the front of the bus in the main area</li>
						<li>Leaning against the car with a manneqiun sitting on it in the main area</li>
						<li>Leaning against pile of junk infront of other bus</li>
					</ul>
				</li>
			</ul>

			<h2 id="telepad">
				Telepad -{" "}
				<a href="https://www.youtube.com/watch?v=BN6hg1tJiPw" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>The telepad once crafted can be placed on any 2 teleporter pad locations and used to travel between. You can then pick them back up individually to move them around.</p>
			<ul>
				<li>
					Outer Circle (Generators)
					<ul>
						<li>Behind the yellow rail across from the Perk machine</li>
						<li>Near yellow buckets in the corner</li>
						<li>By blue barrels near the Beds tunnel</li>
					</ul>
				</li>

				<li>
					Solid Circle - Green House (Left of Power)
					<ul>
						<li>On the outside roof upstairs</li>
						<li>To the left when entering from main area</li>
						<li>In the corner of the kitchen</li>
					</ul>
				</li>

				<li>
					Half Circle (Transfusion Facility)
					<ul>
						<li>Ontop of boxes infront of mystery box location when going towards power from the right side</li>
						<li>Inside the closet near the door when exiting the building</li>
						<li>Leaning against the operating table opposite the previous location.</li>
					</ul>
				</li>
			</ul>

			<h2 id="raygunassemblykit">
				Raygun Mark II Assembly Kit -{" "}
				<a href="https://www.youtube.com/watch?v=8HAYhm7FCzQ" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Can only be built in the table upstairs in Rushmores house</p>
			<ul>
				<li>
					Tubing - House to the right of power
					<ul>
						<li>On the table in the dining room</li>
						<li>upstairs on the bookshelf</li>
						<li>On the table upstairs opposite from telepad location</li>
					</ul>
				</li>

				<li>
					Container
					<ul>
						<li>On the desk infront of the maniquin before entering the room</li>
						<li>On the chair in the right side when entering from previous location</li>
						<li>On the shelf on the opposite corner of the room</li>
					</ul>
				</li>

				<li>
					Canister
					<ul>
						<li>On a shelf near the Titan wallbuy</li>
						<li>On a barrel near Generators tunnel</li>
						<li>On a barrel near the exit</li>
					</ul>
				</li>
			</ul>
		</section>
	);
}

// ============================================================
// WEAPONS
// ============================================================

function Weapons() {
	return (
		<section className="tab-content">
			<h3>Starting Weapons</h3>
			<ul>
				<li>Knife</li>
				<li>Welling - Player Choice</li>
				<li>Strife - Player Choice</li>
				<li>RK 7 Garrison - Player Choice</li>
				<li>Saug 9mm - Player Choice</li>
				<li>Essex Model 07 - Player Choice</li>
				<li>MOG 12 - Player Choice</li>
				<li>Frag - Player Choice</li>
				<li>Acid Bomb - Player Choice</li>
				<li>Claymore - Player Choice</li>
				<li>Wraith Fire - Player Choice</li>
				<li>Sentry - Player Choice</li>
			</ul>

			<h3>Specialists</h3>
			<ul>
				<li id="hellfire">Hellfire - Player Choice</li>
				<li>Overkill - Player Choice</li>
				<li id="pathofsorrows">Path of Sorrows - Player Choice</li>
				<li id="ragnarok">Ragnarock DG-5 - Player Choice</li>
			</ul>

			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>Strife</b> - Site Entrance (500p)
				</li>
				<li>
					<b>Essex Model 07</b> - Site Entrance (500p)
				</li>
				<li>
					<b>RK 7 Garrison</b> - Transfusion Facility (700p)
				</li>
				<li>
					<b>Saug 9mm</b> - APD Interrogation (750p)
				</li>
				<li>
					<b>Escargot</b> - Prisoner Holding (1000p)
				</li>
				<li>
					<b>MOG 12</b> - Operations (1000p)
				</li>
				<li>
					<b>Spitfire</b> - Green House Downstairs (1150p)
				</li>
				<li>
					<b>Swordfish</b> - Yellow House Downstairs (1200p)
				</li>
				<li>
					<b>Mozu</b> - Cul-de-sac (1300p)
				</li>
				<li>
					<b>MX9</b> - Yellow House Backyard (1300p)
				</li>
				<li>
					<b>GKS</b> - Central Street (1300p)
				</li>
				<li>
					<b>M1987 Trebuchet</b> - Green House Backyard (1400p)
				</li>
				<li>
					<b>KN-57</b> - Beds (1450p)
				</li>
				<li>
					<b>Maddox RFB</b> - Generators (1450p)
				</li>
				<li>
					<b>M1927</b> - Solitary (1500p)
				</li>
				<li>
					<b>ICR-7</b> - Cul-de-sac, Red truck (1550p)
				</li>
				<li>
					<b>Vapr-XKG</b> - Diner (1550p)
				</li>
				<li>
					<b>Auger DMR</b> - Lounge (1550p)
				</li>
				<li>
					<b>Bowie Knife</b> - Generators (3000p)
				</li>
				<li>
					<b>Titan</b> - Storage (3750p)
				</li>
				<li>
					<b>Koshka</b> - APD Control (4500p)
				</li>
				<li>
					<b>Galvaknuckles</b> - Cul-de-sac, Red Truck (5000p)
				</li>
			</ul>

			<h3 id="mysterybox">Mystery Box</h3>
			<h4>Locations</h4>
			<ul>
				<li>Yellow House Backyard</li>
				<li>Prisoner Holding</li>
				<li>Cul-de-sac</li>
				<li>Green House Backyard</li>
				<li>Transfusion Facility</li>
				<li>Beds</li>
				<li>APD Control</li>
			</ul>
			<h4>Box Weapons</h4>
			<ul>
				<li>Maddox RFB</li>
				<li>Hitchcock M9</li>
				<li>Rampart 17</li>
				<li>Vapr-XKG</li>
				<li>Grav</li>
				<li>SWAT RFT</li>
				<li>Peacekeeper</li>
				<li>AN-94</li>
				<li>DoubleCross</li>
				<li>Escargot</li>
				<li>Spitfire</li>
				<li>Cordite</li>
				<li>MP-40</li>
				<li>M1927</li>
				<li>Daemon 3XB</li>
				<li>Switchblade X9</li>
				<li>VMP</li>
				<li>MicroMG 9mm</li>
				<li>SwordFish</li>
				<li>Essex Model 07</li>
				<li>ABR 223</li>
				<li>S6 Stingray</li>
				<li>M16</li>
				<li>Hades</li>
				<li>VKM 750</li>
				<li>Zweihander</li>
				<li>Tigershark</li>
				<li>SDM</li>
				<li>Paladin HB50</li>
				<li>Outlaw</li>
				<li>Vendetta</li>
				<li>Locus</li>
				<li>Havelina AA50</li>
				<li>Mozu</li>
				<li>Rk 7 Garrison</li>
				<li>KAP 45</li>
				<li>SG12</li>
				<li>MOG 12</li>
				<li>Rampage</li>
				<li>Argus</li>
				<li>Hellion Salvo</li>
				<li>Ballistic Knife</li>
				<li>Reaver C86</li>
				<li>Ray Gun</li>
				<li>Ray Gun Mark II</li>
				<li>Monkey Bomb</li>
			</ul>
		</section>
	);
}

// ============================================================
// GAUNTLET
// ============================================================

function Gauntlet() {
	return (
		<section className="tab-content">
			<h2>Duck and Cover</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Round</th>
						<th scope="col">Name</th>
						<th scope="col">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Delayed Entry</td>
						<td>Defend The Security Checkpoint.</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Death From Above</td>
						<td>Zombies Can Only Be Damaged While Much Higher Than Them.</td>
					</tr>
					<tr>
						<td>3</td>
						<td>End of the Road</td>
						<td>All Players Must Be In Cul De Sac At End Of Round.</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Piss Around</td>
						<td>Use Unpacked Pistols Only.</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Duck...</td>
						<td>Weapons Are Only Usable While Crouched.</td>
					</tr>
					<tr>
						<td>6</td>
						<td>...and Cover</td>
						<td>Weapons Are Only Usable While Prone.</td>
					</tr>
					<tr>
						<td>7</td>
						<td>Deep Breath</td>
						<td>Complete The Gass Venting Event In Generators By End Of Round.</td>
					</tr>
					<tr>
						<td>8</td>
						<td>Population Control</td>
						<td>Round Ends When The Population Counter Is Hit With Galvaknuckles At Zero.</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Civil Engineering</td>
						<td>Build The Teleporters And Shield By The End Of Round.</td>
					</tr>
					<tr>
						<td>10</td>
						<td>Block Party</td>
						<td>Defend The Neighborhood Streets And Get Riot Shield Kills.</td>
					</tr>
					<tr>
						<td>11</td>
						<td>Pack Your Bags</td>
						<td>Each Player Must Possess A Packed Weapon By End Of Round.</td>
					</tr>
					<tr>
						<td>12</td>
						<td>Shocking Development</td>
						<td>Survive A Jolting Jack Onslaught.</td>
					</tr>
					<tr>
						<td>13</td>
						<td>This...Is...Nuketown!</td>
						<td>Survive Round Using Only Nuke Power-Ups.</td>
					</tr>
					<tr>
						<td>14</td>
						<td>Sawed Off</td>
						<td>Use Unpacked Shotguns Only.</td>
					</tr>
					<tr>
						<td>15</td>
						<td>Slumber Party</td>
						<td>Defend The Bunker Bedrooms.</td>
					</tr>
					<tr>
						<td>16</td>
						<td>Galva-anting</td>
						<td>Use Galvaknuckles Only.</td>
					</tr>
					<tr>
						<td>17</td>
						<td>Out of this World</td>
						<td>Craft A Modded Ray Gun Mk II By The End Of Round.</td>
					</tr>
					<tr>
						<td>18</td>
						<td>Electric Slide</td>
						<td>All Players Need To Pass Through Electric Traps Without Touching The Beam Enough Times.</td>
					</tr>
					<tr>
						<td>19</td>
						<td>All Gassed Up</td>
						<td>Kill Enough Empowered Zombies.</td>
					</tr>
					<tr>
						<td>20</td>
						<td>Blood Drive</td>
						<td>Defend The Transfusion Facility.</td>
					</tr>
					<tr>
						<td>21</td>
						<td>Head Hunter</td>
						<td>All Mannequin Heads Need To Be Removed By The End Of Round.</td>
					</tr>
					<tr>
						<td>22</td>
						<td>Minute to Midnight</td>
						<td>Get Required Number Of Kills With Weapon From Prisoner Holding Within 1 Minute Of Picking It Up.</td>
					</tr>
					<tr>
						<td>23</td>
						<td>Fist Full of Bullets</td>
						<td>Melee Kills Fill Your Weapon's Clip. No Ammo Reserves.</td>
					</tr>
					<tr>
						<td>24</td>
						<td>Shocking Spree</td>
						<td>Make 6 Unique Wall Buys.</td>
					</tr>
					<tr>
						<td>25</td>
						<td>Backyard Barbecue</td>
						<td>Defend The Yellow House Backyard.</td>
					</tr>
					<tr>
						<td>26</td>
						<td>Keep It Light</td>
						<td>Use Unpacked LMG's Only.</td>
					</tr>
					<tr>
						<td>27</td>
						<td>Eyes Open</td>
						<td>Survive Round Without Being Hit By Special A.D.A.M.s.</td>
					</tr>
					<tr>
						<td>28</td>
						<td>Mobile Man</td>
						<td>Use The Telepads In 10 Different Positions By End Of Round.</td>
					</tr>
					<tr>
						<td>29</td>
						<td>Mannequin American</td>
						<td>Can Only Attack While Standing Next To Sgt. A.D.A.M.</td>
					</tr>
					<tr>
						<td>30</td>
						<td>Illuminati</td>
						<td>Defend APD Control From Avogadro And An A.D.A.M. Onslaught.</td>
					</tr>
				</tbody>
			</table>

			<VideoPlayer url="9Ozd7LWMGfU" />
		</section>
	);
}

// ============================================================
// PERKS
// ============================================================

function Perks() {
	return (
		<section className="tab-content">
			<h3>Brew</h3>
			<p>Central Street</p>
			<h3>Cola</h3>
			<p>Yellow House Downstairs</p>
			<h3>Soda</h3>
			<p>Diner</p>
			<h3>Tonic</h3>
			<p>Generators</p>
		</section>
	);
}

// ============================================================
// EXTRAS
// ============================================================

function Extras() {
	return (
		<section className="tab-content">
			<h2>
				Avagadro Jumpscare -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=1328" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Aquire a sniper and head to the Green House Backyard balcony. While aiming out into the dessert, look for an idle zombie. When aimed at, it will trigger the jumpscare.</p>
			<h2>
				Mannquin Jumpscare -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=1362" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Aquire the Galvaknuckles and knife off all 30 mannequin heads (if any heads have been shot off or meleed, you cannot complete this.) Once complete, head down to PaP and you'll find a new female mannequin with its head on backwards. Stare at it for a few seconds to trigger the jumpscare.</p>
			<h2>
				Round 200 (Insanity Mode) -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=2203" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>This will take the player to Round 200 and lock the map down to the roginal nuketown layout for the remainder of the game.</span>
				<span>
					<b>
						Requires{" "}
						<TabLink tab="side-ee" target="pap">
							PaP Open
						</TabLink>
						, Bowie Knife and Rushmore Activated (After opening PaP, skip the round and interact with the computer in Operations.)
					</b>
				</span>
			</p>
			<ol>
				<li>Kill zombies until the population sign shows 15 and the clock is at 1 (115)</li>
				<li>Head to the shed behind Yellow House and there should be a purple orb inside. Open the door ind interact with the orb. Escort it (follow) until it reaches APD Interogation (if you stay away for too long, you will need to restart compeltely)</li>
				<li>When the orb enters the monitor, knife it using the bowie knife to break it. Use the code that is within the monitor in Rushmore to trigger the EE.</li>
			</ol>
			<h2>
				T.E.D.D. Electrifying Room -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=3201" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>After activating T.E.D.D THrough Rushmore code 8333, you can find him in the Bunkers where you can melee him several times with the galvaknuckles enough times that he will get mad and make the floor electric. (remains this way for 2 minutes after activation)</p>
			<h2>
				Avagadro Quotes -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=2396" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Every round, you can interact with the tv inside Yellow House to get quotes from Avogadro</p>
			<h2>
				Maxis Radios -{" "}
				<a target="_blank" href="https://youtu.be/k423piuqfIk?t=3717" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Around the map are 5 Maxis radios which can be activated by interacting with them.</p>
			<ul>
				<li>On the counter in the Green House Downstairs kitchen</li>
				<li>In APD Interrogation on the far right corner of the room when entering from spawn</li>
				<li>In Prisoner Holding in the table directly infron to you when entering from the street</li>
				<li>In the Lounge on the right when entering fro mthe stairs on table with a lamp</li>
				<li>In the Diner on the counter when entering from PaP on the right</li>
			</ul>
			<h2>
				Audio Reels -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=4102" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Around the map are 3 audio reels which can be activated by shooting them</p>
			<ul>
				<li>In the tent on your left after dropping down from spawn</li>
				<li>Through the door of the bus on the left of Cul-de-sac</li>
				<li>In Storage through caged door to the left of radioactive symbol</li>
			</ul>
			<h2>
				Film Reels -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=4455" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Around the map you can find 5 film reels which can be played using the projector located in Operations garage (Rushmores house)</p>
			<ul>
				<li>On box above arrow pointing to power switch on the left side of Center Street</li>
				<li>In Transfusion Facility to the right of the wallbuy on the shelf</li>
				<li>In Yellow House Backyard on the table under umbrella</li>
				<li>Green House Backyard on the corner of the pool thing in the middle</li>
				<li>On the box to the left of the desk in Solitary</li>
			</ul>
			<h2>
				Punchcard Logs -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=5038" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>You can find 5 punchcards around the map and play them using the console in APD Control upstairs</p>
			<ul>
				<li>On the back window of the car infront of Prisoner Holding</li>
				<li>On a box to the right of the power switch before the static tvs</li>
				<li>On box in Generators to the left of the bowie knife wallbuy</li>
				<li>In APD Control to the left when entering from solitary just before entering the smaller side area</li>
				<li>On the Diner outer counter when entering straight from the stairs. leaning on a stack of plates.</li>
			</ul>
			<h2>
				Audio Players (Russman) -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=5558" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>You can activate 3 audio players around the map (Glowing white play button)</p>
			<ul>
				<li>On the shelf in Yellow House Upstairs</li>
				<li>On the couch to the left when entering from Lounge in Bunker Beds</li>
				<li>In Generators on the back right side of the room on a pipe leading form a generator on the left side.</li>
			</ul>
			<h2>
				Rushmore Codes -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=2452" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>After activating Rushmore, you can use the keypad next to him to enter secret codes that will grant various things</p>
			<table>
				<thead>
					<tr>
						<th scope="col">Word</th>
						<th scope="col">Numbers</th>
						<th scope="col">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Easy</td>
						<td>3279</td>
						<td>Takes zombies speed down to slowest speed for 5 minutes</td>
					</tr>
					<tr>
						<td>Brew</td>
						<td>2739</td>
						<td>Brew perk is now 50% cheaper</td>
					</tr>
					<tr>
						<td>Soda</td>
						<td>7632</td>
						<td>Soda perk is now 50% cheaper</td>
					</tr>
					<tr>
						<td>Cola</td>
						<td>2652</td>
						<td>Cola perk is now 50% cheaper</td>
					</tr>
					<tr>
						<td>Pack</td>
						<td>7225</td>
						<td>Spawns a Bonfire Sale power-up</td>
					</tr>
					<tr>
						<td>Time</td>
						<td>8463</td>
						<td>Freezes zombies for 30 seconds</td>
					</tr>
					<tr>
						<td>Boom</td>
						<td>2666</td>
						<td>Spawns a live Grenade</td>
					</tr>
					<tr>
						<td>Nuke</td>
						<td>6853</td>
						<td>Spawns a Nuke power-up</td>
					</tr>
					<tr>
						<td>Door</td>
						<td>3667</td>
						<td>Makes one random door that isn't open cost 0 Points</td>
					</tr>
					<tr>
						<td>Love</td>
						<td>5683</td>
						<td>Professes your love to Rushmore</td>
					</tr>
					<tr>
						<td>Quiz</td>
						<td>1841</td>
						<td>Rushmore gives a Quiz that you cannot interact with</td>
					</tr>
					<tr>
						<td>Joke</td>
						<td>5653</td>
						<td>Rushmore tells a Russian joke</td>
					</tr>
					<tr>
						<td>Song</td>
						<td>7664</td>
						<td>Secret song plays</td>
					</tr>
					<tr>
						<td>Tedd</td>
						<td>8333</td>
						<td>Activates T.E.D.D. in the Diner</td>
					</tr>
					<tr>
						<td>Duck</td>
						<td>3825</td>
						<td>When you melee zombies they make a duck sound</td>
					</tr>
					<tr>
						<td>Guns</td>
						<td>4867</td>
						<td>Disorderly Combat (Every player in the game given a new gun every 10 seconds for 5 minutes)</td>
					</tr>
					<tr>
						<td>Bank</td>
						<td>2265</td>
						<td>Free 1000 points to all players</td>
					</tr>
					<tr>
						<td>Rave</td>
						<td>7283</td>
						<td>Rave party starts in the Beds area</td>
					</tr>
					<tr>
						<td>Vent</td>
						<td>8368</td>
						<td>Rushmore starts venting his frustration</td>
					</tr>
					<tr>
						<td>Shed</td>
						<td>7433</td>
						<td>Opens shed door in the Yellow House Backyard for free</td>
					</tr>
					<tr>
						<td>Noob</td>
						<td>6662</td>
						<td>Takes zombies speed down to slowest speed for 5 minutes</td>
					</tr>
					<tr>
						<td>Life</td>
						<td>5433</td>
						<td>A quote plays about only having 1 life</td>
					</tr>
					<tr>
						<td>Puke</td>
						<td>7853</td>
						<td>When you melee a zombies they will puke</td>
					</tr>
					<tr>
						<td>Fall</td>
						<td>3255</td>
						<td>When you look at zombies they will fall down</td>
					</tr>
					<tr>
						<td>Ugly</td>
						<td>8459</td>
						<td>Rushmore tells you you are beautiful</td>
					</tr>
					<tr>
						<td>Hero</td>
						<td>4376</td>
						<td>Fills up your specialist charge meter</td>
					</tr>
					<tr>
						<td>Yawn</td>
						<td>9296</td>
						<td>Rushmore talks about how you're bored</td>
					</tr>
					<tr>
						<td>Warp</td>
						<td>9277</td>
						<td>Teleports the player to a random location</td>
					</tr>
					<tr>
						<td>Club</td>
						<td>2582</td>
						<td>The Beds area will have a disco theme and club music will be playing in the area</td>
					</tr>
					<tr>
						<td>Grav</td>
						<td>4728</td>
						<td>Newtonian Negation (Zombies killed fall straight up, lasts for 25 minutes)</td>
					</tr>
					<tr>
						<td>-</td>
						<td>0001</td>
						<td>Backstory</td>
					</tr>
					<tr>
						<td>-</td>
						<td>0002</td>
						<td>Backstory</td>
					</tr>
					<tr>
						<td>-</td>
						<td>0003</td>
						<td>Backstory</td>
					</tr>
					<tr>
						<td>-</td>
						<td>0004</td>
						<td>???</td>
					</tr>
					<tr>
						<td>-</td>
						<td>1001</td>
						<td>Backstory</td>
					</tr>
					<tr>
						<td>-</td>
						<td>1002</td>
						<td>Backstory</td>
					</tr>
					<tr>
						<td>-</td>
						<td>1003</td>
						<td>Backstory</td>
					</tr>
					<tr>
						<td>-</td>
						<td>1004</td>
						<td>Backstory</td>
					</tr>
					<tr>
						<td>-</td>
						<td>1005</td>
						<td>Backstory</td>
					</tr>
				</tbody>
			</table>
			<h2>
				Traps -{" "}
				<a href="https://youtu.be/k423piuqfIk?t=128" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Type</th>
						<th scope="col">Ability</th>
						<th scope="col">Location</th>
						<th scope="col">Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Electric Trap</td>
						<td></td>
						<td>Lounge/Diner</td>
						<td>1000 Points</td>
					</tr>
					<tr>
						<td>Fire Trap</td>
						<td></td>
						<td>Yellow House Downstairs</td>
						<td>1000 Points</td>
					</tr>
					<tr>
						<td>Ceiling Fan Trap</td>
						<td></td>
						<td>Green House Downstairs</td>
						<td>1000 Points</td>
					</tr>
					<tr>
						<td>Acid Trap</td>
						<td></td>
						<td>Transfusion Facility</td>
						<td>1000 Points</td>
					</tr>
					<tr>
						<td>APD Trap</td>
						<td></td>
						<td>APD Interrogation</td>
						<td>1000 Points</td>
					</tr>
				</tbody>
			</table>
			<p>
				<span>Unlocking some of the traps requires additional steps to unlock.</span>
				<span>
					<b>
						Requires{" "}
						<TabLink tab="side-ee" target="pap">
							PaP open
						</TabLink>{" "}
						and Galvaknuckles
					</b>
				</span>
				<span>
					Complete up to step 3 of the <TabLink tab="main-ee">Main EE</TabLink> then the traps should open in the houses. In operation you can grab the PaP'd raygun Mark II from the case and in Prisoner Holding you can get a free random PaP'd weapon from the locker.
				</span>
			</p>
			<h2>Fast Travel</h2>
			<p>
				Fast travelling requires the{" "}
				<TabLink tab="buildables" target="telepad">
					Telepad
				</TabLink>{" "}
				and can be places and moved between any of the following 10 locations.
			</p>
			<ul>
				<li>Power House</li>
				<li>Green House Backyard</li>
				<li>Yellow House Upstairs</li>
				<li>Prisoner Holding</li>
				<li>Solitary</li>
				<li>Central Street</li>
				<li>APD Control</li>
				<li>Diner</li>
				<li>Near Tonic Perk Machine</li>
				<li>Exit of APD Control Room</li>
			</ul>
			<h2>Special Enemies</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Enemy Name</th>
						<th scope="col">Special Abilities</th>
						<th scope="col">Picture</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nova Six Bombers</td>
						<td>Zombies that crawl on the ground and can supercharge normal zombies using Nova Six Gas.</td>
						<td>
							<a href="https://i.imgur.com/TTETJSO.png" rel="nofollow noopener noreferrer" target="_blank">
								Here
							</a>
						</td>
					</tr>
					<tr>
						<td>Lightning Hounds</td>
						<td>Hellhounds run faster than any other zombie but have much less health.</td>
						<td>
							<a href="https://i.imgur.com/cW5zxrR.png" rel="nofollow noopener noreferrer" target="_blank">
								Here
							</a>
						</td>
					</tr>
					<tr>
						<td>Jolting Jacks</td>
						<td>Nova Six Crawlers that can jump onto rooftops and shoot balls of electricity at you.</td>
						<td>
							<a href="https://i.imgur.com/hnhHrEw.png" rel="nofollow noopener noreferrer" target="_blank">
								Here
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<h2>
				Achievements -{" "}
				<a href="https://www.youtube.com/watch?v=EDXOagmcUIA" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<AchievementTable mapId="bo4/alpha-omega" rows={achievementRows} />{" "}
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
			<Source href="https://callofduty.fandom.com/wiki/Alpha_Omega" name="Alpha Omega" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://callofduty.fandom.com/wiki/Gauntlet_(Black_Ops_4)#Duck_and_Cover" name="Gauntlet" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://www.codzombieguides.com/alpha-omega" name="Alpha Omega" author="Cod Zombie Guides" source="Cod Zombie Guides" />
			<Source href="https://www.reddit.com/r/CODZombies/wiki/alpha-omega/?screen_view_count=1&ext-referrer=EXTERNAL" name="Alpha Omega | Complete Map Breakdown" author="/u/The_Beebat" source="r/CODZombies" />
			<Source href="https://www.youtube.com/watch?v=k423piuqfIk" name="ALL SIDE EASTER EGGS - ALPHA OMEGA - BLACK OPS 4 ZOMBIES" author="ZombieSlayaMr" source="Youtube" />
			<Source href="https://youtube.com/playlist?list=PL4E26NYcwnPZ6o4J0IYeiN6NiCpXdajEI&si=PYMnLbEot3Jnnu7W" name="Alpha Omega Fast Guides Playlist" author="Fast Guides Glitch" source="Youtube" />
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function AlphaOmega() {
	return (
		<MapNavigationProvider>
			<AlphaOmegaContent />
		</MapNavigationProvider>
	);
}

function AlphaOmegaContent() {
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
				{activeTab === "gauntlet" && <Gauntlet />}
				{activeTab === "perks" && <Perks />}
				{activeTab === "extras" && <Extras />}
				{activeTab === "credits" && <Credits />}
			</InfoBox>
		</div>
	);
}

export const Route = createFileRoute("/maps/bo4/alpha-omega")({
	staticData: { title: "Alpha Omega" },
	component: AlphaOmega,
});
