/* ---- v2.1.0 ---- */
import { createFileRoute } from "@tanstack/react-router";
import { MapNavigationProvider, useMapNavigation } from "../../../context/MapNavigationContext";

import MapTabs from "../../../components/MapTabs";
import InfoBox from "../../../components/InfoBox";
import Source from "../../../components/Source";
import TabLink from "../../../components/TabLink";
import ImageContainer from "../../../components/ImageContainer";
/*import VideoPlayer from "../../../components/VideoPlayer";*/

import { mapModules } from "../../../data/mapModules";

import AchievementTable from "../../../components/AchievementTable";

const achievementRows = [
	{
		id: "locksmith",
		name: "Locksmith",
		description: "In Rave in the Redwoods, recover the piece of the Soul Key",
		goal: (
			<>
				Complete the <TabLink tab="main-ee">Main EE</TabLink>
			</>
		),
	},
	{
		id: "super-slacker",
		name: "Super Slacker",
		description: "In Rave in the Redwoods, unlock Kevin Smith",
		goal: (
			<>
				Complete the <TabLink tab="main-ee">Main Easter Egg Quest</TabLink> then complete the{" "}
				<TabLink tab="extras" target="kevin">
					"Play As Kevin Smith"
				</TabLink>
			</>
		),
	},
	{
		id: "stick-em",
		name: "Stick 'Em",
		description: "In Rave in the Redwoods, earn 100 kills with an upgraded crossbow.",
		goal: (
			<>
				Unlock one of the{" "}
				<TabLink tab="wonder-weapon" target="crossbows">
					Crossbows
				</TabLink>{" "}
				in the map, upgrade it, and get 100 kills with it in one game
			</>
		),
	},
	{
		id: "hallucination-nation",
		name: "Hallucination Nation",
		description: "In Rave in the Redwoods, stay in Rave Vision for 5 minutes after scene 10.",
		goal: (
			<>
				Enter{" "}
				<TabLink tab="extras" target="rave-mode">
					Rave Mode
				</TabLink>{" "}
				and stay in Rave Mode for 5 minutes after scene 10
			</>
		),
	},
	{
		id: "tables-turned",
		name: "Tables Turned",
		description: "In Rave in the Redwoods, kill the Slasher with his weapon",
		goal: (
			<>
				Equip the{" "}
				<TabLink tab="extras" target="smiley">
					Smiley
				</TabLink>{" "}
				weapon and kill the Slasher with it.
			</>
		),
	},
	{
		id: "rave-on",
		name: "Rave On",
		description: "In Rave in the Redwoods, find the hidden song",
		goal: (
			<>
				Activate the <TabLink tab="music-ee">Hidden Song Easter Egg</TabLink>
			</>
		),
	},
	{
		id: "ride-for-your-life",
		name: "Ride For Your Life",
		description: "In Rave in the Redwoods, ride every zipline",
		goal: (
			<>
				Ride every{" "}
				<TabLink tab="extras" target="ziplines">
					zipline
				</TabLink>{" "}
				in the map in one game
			</>
		),
	},
	{
		id: "scrapbooking",
		name: "Scrapbooking",
		description: "In Rave in the Redwoods, complete your photo collection and mementos",
		goal: (
			<>
				Complete your Scrapbook and collect every{" "}
				<TabLink tab="extras" target="charms">
					Memory Charm
				</TabLink>
			</>
		),
	},
	{
		id: "pump-it-up",
		name: "Pump it Up",
		description: "In Rave in the Redwoods, Pack-a-Punch a weapon",
		goal: (
			<>
				<TabLink tab="side-ee" target="pap">
					Pack-a-Punch
				</TabLink>{" "}
				a weapon in Rave In The Redwoods
			</>
		),
	},
	{
		id: "top-camper",
		name: "Top Camper",
		description: "In Rave in the Redwoods, earn all camp badges",
		goal: (
			<>
				There are a number of{" "}
				<TabLink tab="extras" target="challenges">
					Camp Challenges
				</TabLink>{" "}
				to do and win Camp Badges in. You will acquire this trophy/achievement when you obtain every badge.
			</>
		),
	},
];

// ============================================================
// MAP TABS
// ============================================================

const tabs = [mapModules.overview, mapModules.mainEE, mapModules.sideEE, mapModules.musicEE, mapModules.wonderWeapon, mapModules.buildables, mapModules.weapons, mapModules.perks, mapModules.extras, mapModules.credits];

// ============================================================
// OVERVIEW
// ============================================================

function Overview() {
	return (
		<section className="tab-content">
			<h2>Rave in the Redwoods</h2>
			<p>Rave in the Redwoods is the second Zombies map Call of Duty: Infinite Warfare and part of the Sabotage map pack. The map was released on January 31, 2017 for the PlayStation 4, and on March 2, 2017 for Xbox One and PC.</p>

			<h2>Overview</h2>
			<p>
				Rave in the Redwoods is set at Bear Lake summer camp as it is hosting the "Pushin' up Daisies" rave. As a result, the map is decorated with party favors, music equipment, and multiple fire pits and camp sites. There are also pouches which can be picked up and thrown into designated fire pits, causing{" "}
				<TabLink tab="extras" target="rave-mode">
					Rave Vision
				</TabLink>
				, which elucidates paint on zombies and the environment, highlights objects of interest, and causes the{" "}
				<TabLink tab="extras" target="special-enemies">
					Slasher
				</TabLink>{" "}
				to stalk the player. Compared to Zombies in Spaceland, this map is slightly larger. The map features Kevin Smith as a special guest star, who is a major part of the maps main quest.
			</p>
			<p>
				The map features two new Wonder Weapons, the{" "}
				<TabLink tab="wonder-weapon" target="crossbows">
					Vlad
				</TabLink>
				, an explosive tip crossbow with four possible upgrades, and the{" "}
				<TabLink tab="extras" target="smiley">
					Smiley
				</TabLink>
				, a chainsaw which can be obtained after the map's <TabLink tab="main-ee">easter egg</TabLink> is completed. Weapon{" "}
				<TabLink tab="extras" target="charms">
					Charms
				</TabLink>{" "}
				are also scattered around the map to boost weapon effectiveness. Unlike the previous map, this map has no starting weapon, but includes four free Melee Weapons in its starting room, the Spiked Bat, Two-Headed Axe, Golf Club, and the Machete.
			</p>
			<p>
				Gems are small collectables, similar to Tokens from the Zombies in Spaceland, that allow the player to obtain several different{" "}
				<TabLink tab="extras" target="totems-and-gems">
					traps
				</TabLink>{" "}
				from the totem poles found around the map. To activate each totem pole, a total of three gems must be used.
			</p>

			<h2>Layout</h2>
			<h3>Bear Lodge</h3>
			<p>
				The player will spawn on the first floor of the Bear Lodge, where four melee weapons can be picked up, as well as an M1 next to the Spiked Bat. Across from the cabinet containing the four Vlad{" "}
				<TabLink tab="wonder-weapon" target="crossbows">
					crossbows
				</TabLink>{" "}
				is a door that heads into the basement, but it cannot be accessed until the{" "}
				<TabLink tab="side-ee" target="power">
					power
				</TabLink>{" "}
				has been turned on.{" "}
				<TabLink tab="perks" target="up-n-atoms">
					Up 'N Atoms
				</TabLink>{" "}
				can be found on the front porch next to the Machete. The fireplace across from the stairs can be used to enter{" "}
				<TabLink tab="extras" target="rave-mode">
					Rave Mode
				</TabLink>
				. The Ring{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>{" "}
				can be placed on the edge of a table near the fireplace.
			</p>
			<p>
				When the{" "}
				<TabLink tab="side-ee" target="power">
					power
				</TabLink>{" "}
				is turned on, three doors open in the Bear Lodge. The first door is the trapdoor leading into the spawn room. The second is a door to the right of the Golf Club, where{" "}
				<TabLink tab="perks" target="mule-munchies">
					Mule Munchies
				</TabLink>{" "}
				can be found. The third and final door can be found next to the M1 and Spiked Bat, which opens the second floor of the Bear Lodge. Here, the player can use three{" "}
				<TabLink tab="extras" target="ziplines">
					ziplines
				</TabLink>{" "}
				to get across the map if each area containing an end points of each zipline is opened up. A Magic Wheel location can be found on the balcony with the zipline that heads to the Trading Post/White Tail Beach area. The player can also find the{" "}
				<TabLink tab="extras" target="ghosts-n-skulls-2">
					Ghost 'N Skulls 2
				</TabLink>{" "}
				arcade machine by a pool table. The pool table is where the player can place the 8-Ball{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>
				. A Volk and{" "}
				<TabLink tab="perks" target="tuff-nuff">
					Tuff 'Nuff
				</TabLink>{" "}
				can be found in the bunk room, as well as one of the parts of the{" "}
				<TabLink tab="buildables" target="boat">
					boat engine
				</TabLink>
				.
			</p>
			<h3>Mess Hall</h3>
			<p>
				The buyable barrier next to the fireplace at the Bear Lodge will bring the player down a path that leads to the Mess Hall. On the path, the player can find the{" "}
				<TabLink tab="extras" target="traps">
					Waterfall trap
				</TabLink>
				, which can be activated for 750 points, and the{" "}
				<TabLink tab="extras" target="challenges">
					Rewind challenge station
				</TabLink>
				, as well as{" "}
				<TabLink tab="perks" target="blue-bolts">
					Blue Bolts
				</TabLink>{" "}
				to the left of the door that heads into the Mess Hall's kitchen. Inside the Mess Hall is another piece of the{" "}
				<TabLink tab="buildables" target="boat">
					boat engine
				</TabLink>
				, which can be found leaning on one of the posts in the center of the room. An empty picture frame can be found, where the Rhino Tiki Mask can be placed. The{" "}
				<TabLink tab="extras" target="charms">
					Pacifier
				</TabLink>{" "}
				can be placed on the bar inside of the room.
			</p>
			<p>
				Outside the Mess Hall is a Magic Wheel, as well as a fire pit, a souvenir totem pole and a wooden walkway that heads over to the Camper Cabins. On the walkway is another Volk wallbuy, and a potential spot for an animal statue. To the right of the main exit of the Mess Hall is a wooden bridge that can be opened for 1250 points, which heads down to the White Tail Beach. A small swamp can be found to the right of the wooden bridge, where a storm drain can be opened, which heads over to the Trading Post. The Golden Frog{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>{" "}
				can be placed to the left of the sewer pipe, as well as the Shovel{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>
				, where it can be placed in a grave found in the swamp.
			</p>
			<h3>Camper Cabins</h3>
			<p>
				Following the wooden walkway from the Mess Hall brings the player over to the Camper Cabins. Here, the player can find an RPR Evo wallbuy, as well as another barrier that heads up to the second level of the area. An animal statue can be found on a picnic table to the right of the RPR Evo. The Black Hole{" "}
				<TabLink tab="extras" target="challenges">
					challenge station
				</TabLink>{" "}
				can be found on the path if coming from the Mess Hall.
			</p>
			<p>
				In the second area, another Volk wallbuy can be found, as well as{" "}
				<TabLink tab="perks" target="racin-stripes">
					Racin' Stripes
				</TabLink>
				, which can be found on the balcony of the cabin overlooking the lower area, as well as another spot for an animal statue, which can be found on the railing of the balcony across from Racin' Stripes. The Transponder{" "}
				<TabLink tab="extras" target="challenges">
					challenge station
				</TabLink>{" "}
				can be found between two cabins. A cabin can be entered at the far end of the cabins, where the player can place the Boots{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>{" "}
				if the player has obtained it. A door leading into the Old Marvin Mine can be found near the buyable barrier closest to the fire pit.
			</p>
			<h3>Old Marvin Mine</h3>
			<p>The Old Marvin Mine consists of two levels. The top level is where the two doors into the mine connect, as well as three different pathways down to the lower level can be found. One of these pathways is a wooden staircase, where an animal statue can be found.</p>
			<p>
				On the lower level is where the player can find another souvenir totem pole,{" "}
				<TabLink tab="perks" target="bang-bangs">
					Bang Bangs
				</TabLink>{" "}
				and an HVR wallbuy on the minecart. A tunnel in the mine heads into the basement of the Bear Lodge, where the{" "}
				<TabLink tab="side-ee" target="power">
					power switch
				</TabLink>{" "}
				is located. Turning it on will open the trapdoor leading back into the Bear Lodge. A throwing knife{" "}
				<TabLink tab="extras" target="minigames">
					game
				</TabLink>{" "}
				can be played, and the{" "}
				<TabLink tab="extras" target="smiley">
					Smiley
				</TabLink>{" "}
				chainsaw can be obtained next to the game if the player has completed the map's <TabLink tab="main-ee">main easter egg</TabLink> in that same game. A Magic Wheel spot can be found in here as well.
			</p>
			<h3>Thunderbird Amphitheater</h3>
			<p>The buyable barrier on the front porch of the Bear Lodge will take the player down a branching path, where another souvenir totem pole can be found. Going down the left path will bring the player to the Trading Post, while taking the right path will bring the player to the Thunderbird Amphitheater. Here, a Magic Wheel spot can be found, as well as a large fire pit.</p>
			<h3>Adventure Course</h3>
			<p>
				The 1000 point door in the Thunderbird Amphitheater will bring the player to the bottom of the Adventure Course. At the bottom of the course is a swamp area, where{" "}
				<TabLink tab="perks" target="bombstoppers">
					Bombstoppers
				</TabLink>{" "}
				can be found. Ascending the course, the player can find another animal statue spot and an NV4. A wooden bridge leading upwards is next, where a small hole in the bridge will bring the player back into the swamp area if they fall in it. After the bridge is a rock wall, where a Reaver wallbuy can be found, as well as another animal statue spot. The player can climb up the rock wall to get back up to the top of the course. A branching path can be found here. To the right will bring the player towards the Recreation Area, while heading left will take the player to the Archery Range.
			</p>
			<p>
				At the Archery Range, the player can find another RPR Evo wallbuy, as well as the{" "}
				<TabLink tab="extras" target="traps">
					Wood Chipper trap
				</TabLink>
				, which can be activated for 750 points. The Arrowhead{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>{" "}
				can be placed on the bar of the booth at the range.
			</p>
			<h3>Recreation Area</h3>
			<p>
				The Recreation Area is a circular area consisting of a central DJ booth, a couple other smaller booths and a trailer. In the trailer, the player can find a Type-2, as well as another animal statue spot next to it. In order to get into the lower level of the Recreation Area, the player must buy one of the two 1250 point doors near the trailer or the 1250 point door at the bottom of the rock wall. Here, the player can find the final{" "}
				<TabLink tab="buildables" target="boat">
					boat engine part
				</TabLink>{" "}
				leaning against the booth, as well as another souvenir totem pole,{" "}
				<TabLink tab="perks" target="quickies">
					Quickies
				</TabLink>
				, a Karma-45 behind the burning man statue and another Magic Wheel spot. The player can use the{" "}
				<TabLink tab="extras" target="traps">
					DJ booth as a trap
				</TabLink>
				, which will attract zombies to the front of the booth, where they will be killed shortly by the music. The second entrance into the Old Marvin Mine can be found across from the sloped road barrier.
			</p>
			<h3>Trading Post</h3>
			<p>
				The Trading Post can be accessed from the path branching off from the Thunderbird Amphitheater, the path by the wooden bridge by the Mess Hall or the sewer pipe in the swamp by the Mess Hall. Going down the path by the Mess Hall, the player can find a fire pit along the way, as well as the{" "}
				<TabLink tab="extras" target="traps">
					Log Swing trap
				</TabLink>
				, which can be activated for 350 points. Here, the player will head to the docks area of the Trading Post, where an animal statue can be found, another Reaver wallbuy, and{" "}
				<TabLink tab="perks" target="trail-blazers">
					Trail Blazers
				</TabLink>{" "}
				inside the building. The docks area contains the{" "}
				<TabLink tab="buildables" target="boat">
					boat
				</TabLink>{" "}
				that heads to Turtle Island. The Fish{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>{" "}
				can be placed at the end of the long dock.
			</p>
			<p>
				The Trading Post over by the Thunderbird Amphitheater contains the Armageddon{" "}
				<TabLink tab="extras" target="challenges">
					challenge station
				</TabLink>
				. Inside the Trading Post, a cash register, which acts as the map's bank can be found. Continuing through the building will take the player over to the boardwalk by the White Tail beach, where the player can find a small gazebo containing a Fate and Fortune machine and a KBS Longbow to the right of the door. The Binoculars{" "}
				<TabLink tab="extras" target="charms">
					memento
				</TabLink>{" "}
				can be placed on the bench directly in front of the doorway. Heading left on the boardwalk heads over to a 1250 point barrier, which heads over to the sewer pipe. On this path, an HVR can be found.
			</p>
			<h3>White Tail Beach</h3>
			<p>
				A 1250 point barrier can be found by{" "}
				<TabLink tab="perks" target="trail-blazers">
					Trail Blazers
				</TabLink>
				, which heads down onto the beach. The boardwalk by the other trading post has a staircase and a hole on the railing which heads down onto the beach. On the beach, the player can find{" "}
				<TabLink tab="perks" target="slappy-taffy">
					Slappy Taffy
				</TabLink>
				, as well as an Erad next to it. Where several canoes by the door by Trail Blazers houses are lies the final animal statue. A small dock can be found, where the player can head into the water. When in the water, the player moves slower. A small floating platform can be found in the water, where a Magic Wheel spot can be found. The player can "
				<TabLink tab="extras" target="traps">
					feed the fish
				</TabLink>
				" for 750 points on the platform, causing several piranhas to jump around all of the water, killing any zombie that enters the water and damaging any player in the water as well.
			</p>
			<h3>Turtle Island</h3>
			<p>
				Turtle Island can be accessed once the player has collected all three parts of the{" "}
				<TabLink tab="buildables" target="boat">
					boat engine
				</TabLink>
				. A{" "}
				<TabLink tab="buildables" target="boat">
					boat
				</TabLink>{" "}
				can be found on the docks by the Reaver wallbuy. A{" "}
				<TabLink tab="buildables" target="projector">
					projector reel
				</TabLink>{" "}
				can be found to the right of the door where the boat is found. Entering the boat will take the player to Turtle Island. Here, several rocks can be found all around the beach area of the island. A set of stone stairs can be found, which takes the player up to the cabin. Outside the cabin is another fire pit, as well as the final{" "}
				<TabLink tab="buildables" target="projector">
					projector reel
				</TabLink>{" "}
				and the zipline which takes the player back to the docks. Inside the cabin is where the player can place the two reels onto the{" "}
				<TabLink tab="buildables" target="projector">
					projector
				</TabLink>
				, which will allow the player to access the{" "}
				<TabLink tab="side-ee" target="pap">
					Pack-a-Punch Machine
				</TabLink>
				.{" "}
				<TabLink tab="extras" target="kevin">
					Kevin Smith
				</TabLink>{" "}
				can also be found, where the player can talk to him.
			</p>
		</section>
	);
}

// ============================================================
// MAIN EASTER EGG
// ============================================================

function MainEE() {
	return (
		<section className="tab-content">
			<h3>Prerequisites</h3>
			<ul>
				<li>
					<TabLink tab="side-ee" target="power">
						Power On
					</TabLink>
				</li>
				<li>
					<TabLink tab="buildables" target="boat">
						Boat Built
					</TabLink>
				</li>
			</ul>

			<h3>Recommended Weapons</h3>
			<ul>
				<li>Kendall-44</li>
				<li>FHR-40</li>
				<li>Mauler (Sentinel Variant Recommended)</li>
				<li>RPR-Evo</li>
				<li>NV-4 (Crossbow Upgrade)</li>
				<li>Acid Rain (Crossbow Upgrade)</li>
				<li>Ben Franklin (Crossbow Upgrade)</li>
				<li>Whirlwind EF-5 (Crossbow Upgrade)</li>
			</ul>

			<ol>
				<li>
					Talk to{" "}
					<TabLink tab="extras" target="kevin">
						Kevin Smith
					</TabLink>{" "}
					at his cabin on Turtle Island
				</li>
				<li>Pick up the picture at the Recreational Area behind the burning man on stage</li>
				<li>
					<span>
						Place down the picture in front of the huge bonfire in Thunderbird Theater, shoot zombies in the arms to take their souls. Once enough souls are collected you must interact with the photo you placed down. A{" "}
						<TabLink tab="extras" target="special-enemies">
							Slasher
						</TabLink>{" "}
						will spawn outside of{" "}
						<TabLink tab="extras" target="rave-mode">
							Rave Vision
						</TabLink>{" "}
						and you must kill him. After killing him you can then pick the picture piece back up.
					</span>
					<span>
						If you fail to shoot off enough arms in the time limit you will be thrown out of{" "}
						<TabLink tab="extras" target="rave-mode">
							Rave Vision
						</TabLink>{" "}
						and lose a perk.
					</span>
				</li>
				<li>
					Go back and talk to{" "}
					<TabLink tab="extras" target="kevin">
						Kevin
					</TabLink>
					.
				</li>
				<li>
					Find the picture piece in spawn upstairs on the right side of the{" "}
					<TabLink tab="perks" target="tuff-nuff">
						Tuff 'Nuff
					</TabLink>{" "}
					room.
				</li>
				<li>
					<span>
						Take the picture to the Rave Area and place it down. You must then destroy the legs off of zombies to collect souls. Once enough souls are collected you must interact with the photo you placed down. A{" "}
						<TabLink tab="extras" target="special-enemies">
							Slasher
						</TabLink>{" "}
						will spawn outside of{" "}
						<TabLink tab="extras" target="rave-mode">
							Rave Vision
						</TabLink>{" "}
						and you must kill him. After killing him you can then pick the picture piece back up
					</span>
					<span>
						If you fail to shoot off enough legs in the time limit you will be thrown out of{" "}
						<TabLink tab="extras" target="rave-mode">
							Rave Vision
						</TabLink>{" "}
						and lose a perk.
					</span>
				</li>
				<li>
					Talk to{" "}
					<TabLink tab="extras" target="kevin">
						Kevin
					</TabLink>{" "}
					for a final time
				</li>
				<li>Pick up Jay's skull in the power room to the left of the Magic Wheel.</li>
				<li>
					<span>
						Bring the skull to the Whitetail Deer Docks and place it down near the gem totem pole to start a ritual. You must then kill zombies by getting headshots. Once enough souls are collected you must interact with the photo you placed down. A{" "}
						<TabLink tab="extras" target="special-enemies">
							Slasher
						</TabLink>{" "}
						will spawn outside{" "}
						<TabLink tab="extras" target="rave-mode">
							Rave Vision
						</TabLink>{" "}
						and you must kill him. After killing him you can then pick the skull back up
					</span>
					<span>
						If you fail to shoot off enough heads in the time limit you will be thrown out of{" "}
						<TabLink tab="extras" target="rave-mode">
							Rave Vision
						</TabLink>{" "}
						and lose a perk.
					</span>
				</li>
				<li>Go to power room and have every player in the game press a red button with a white light above at the same time. A noise will go off indicating you have completed this step.</li>
				<li>
					Go back to the{" "}
					<TabLink tab="buildables" target="boat">
						boat
					</TabLink>{" "}
					and have every player in the game go there ride it with{" "}
					<TabLink tab="extras" target="kevin">
						Kevin
					</TabLink>
					.
				</li>
			</ol>
			<h3>Boss Battle</h3>
			<ul>
				<li>The Super Slasher can attack you by slamming down on you, slamming the ground causing a ground strike, and can perform a super jump onto you.</li>
				<li>Fill all the skull orbs around the island with zombie souls, there will be more skulls to fill depending on the number of players in your game. When a skull has been filled with 30 souls a big blue beam will shoot up from it. The skull orbs will slowly drop as you take more time so do this quickly (you are able fill them up with a few more souls after the beam is up to make it not drop). As you are doing this the Super Slasher will be chasing a player around the arena.</li>
				<li>Once all orbs are filled a blue circle will spawn on the ground somewhere on the island. Lead the Super Slasher into it and shoot the purple light on him.</li>
				<li>
					Purple symbols similar to the ones at{" "}
					<TabLink tab="side-ee" target="pap">
						Pack-a-Punch
					</TabLink>{" "}
					will be on the Super Slasher. You must shoot these symbols to make them disappear. Only 1 symbol will spawn on him at a time and it takes about 5 seconds for a symbol to reappear after shooting one.
				</li>
				<li>Once you have shot enough symbols he will freak out and go back onto his cabin. Watch out for the circle saws that are around him/chase you as they can hurt you. Green circles will spawn on the ground and you must stand in them to not take damage. Skeletons with a large amount of health will spawn and you must survive in the circle for 35 seconds.</li>
				<li>Repeat those 4 steps 2 more times. On the final phase you must shoot the Super Slasher to death instead of doing a Skeleton defense. Once you do enough damage the Super Slasher will die and drop the Soul Key (if you are not in Boss Mode) after Wyler stops talking.</li>
			</ul>
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
			<p>
				Only 1 power switch on the map located in the Old Marvin Mine next to the Slasher's workshop with the Zombie strapped to the{" "}
				<TabLink tab="extras" target="minigames">
					Wheel of Death
				</TabLink>
			</p>

			<h2 id="pap">Pack-a-Punch</h2>
			<ol>
				<li>
					Turn on{" "}
					<TabLink tab="side-ee" target="power">
						Power
					</TabLink>
				</li>
				<li>
					Build the{" "}
					<TabLink tab="buildables" target="boat">
						Boat
					</TabLink>{" "}
					at the Docks
				</li>
				<li>
					Build the{" "}
					<TabLink tab="buildables" target="projector">
						projector
					</TabLink>{" "}
					on Turtle Island
				</li>
				<li>PaP can be accessed through the portal</li>
			</ol>
			<h3>Double PaP</h3>
			<p>Requires that you have completed every EE at least once</p>
			<ol>
				<li>Open PaP</li>
				<li>Interact with the computer at spawn near the door to the bear statue</li>
				<li>Wait a few rounds for the Alien Fuses to appear.</li>
				<li>Pick them up and return them to the PaP machine</li>
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
				Pupper Strings -{" "}
				<a href="https://www.youtube.com/watch?v=ZJKTFqSM0ms" target="_blank" rel="nofollow noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<b>Requires: </b>{" "}
				<TabLink tab="side-ee" target="power">
					power on
				</TabLink>
				, gun you can ADS
			</p>
			<p>
				Find 10 purple circles around spawn while in{" "}
				<TabLink tab="extras" target="rave-mode">
					rave mode
				</TabLink>{" "}
				by aiming at them.
			</p>
			<ul>
				<li>directly above the fireplace through a hole in the roof</li>
				<li>On portrait next to the right on the top of the stairs</li>
				<li>Underneath the table next to the pool table</li>
				<li>behind the bar</li>
				<li>at the tip of the roof visible from the attic balcony</li>
				<li>down onto the roof of the garage from the attic balcony</li>
				<li>
					<TabLink tab="perks" target="tuff-nuff">
						Tuff 'Nuff
					</TabLink>{" "}
					room under shelf in closet
				</li>
				<li>
					<TabLink tab="perks" target="tuff-nuff">
						Tuff 'Nuff
					</TabLink>{" "}
					Room behind pile of boxes to the left when entering
				</li>
				<li>
					Between file cabinets to the left of{" "}
					<TabLink tab="perks" target="tuff-nuff">
						Tuff 'Nuff
					</TabLink>
				</li>
				<li>Underneath the desk in spawn by the PC</li>
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
			<h2 id="crossbows">Vlad Crossbows</h2>
			<p>
				<span>Unlocks a crossbow locker containing 4 crossbows</span>
				<span>Each can be upgraded into 1 of 4 unique variants</span>
			</p>
			<ol>
				<li>
					Look for 3 deer heads spewing green gas around the map
					<ul>
						<li>Mess Hall</li>
						<li>Owl Camp</li>
						<li>Spawn</li>
					</ul>
				</li>
				<li>
					Go to Kevin's House on{" "}
					<TabLink tab="buildables" target="boat">
						Turtle Island
					</TabLink>{" "}
					and grab the sausage from a bucket in his bathroom
				</li>
				<li>
					Go to{" "}
					<TabLink tab="extras" target="rave-mode">
						Rave Mode
					</TabLink>
					, throw the sausage at the deer heads and shoot the symbols off the back of the deer. When they fly off that wall, interact with them.
				</li>
				<li>After completing the above for all 3, go to the crossbow locker and interact to open it.</li>
			</ol>

			<h2>Upgraded Crossbow</h2>
			<p>Depending on which animal statue you grab, the bow outcome changes</p>
			<ul>
				<li>
					<b>Deer</b>: Whirlwind EF-5 (Wind)
				</li>
				<li>
					<b>Eagle</b>: Trap-o-Matic (...)
				</li>
				<li>
					<b>Owl</b>: Acid Rain (...)
				</li>
				<li>
					<b>Wolf</b>: Ben Franklin (Lightning)
				</li>
			</ul>
			<ol>
				<li>
					Grab the Animal Statues you desire from around the map (listed above).
					<ul>
						<li>Picnic Table in Camp Wolf</li>
						<li>Trailer in the Recreational Area near the Type-2</li>
						<li>Near climbing wall in the Recreation Area</li>
						<li>
							Opposite to{" "}
							<TabLink tab="perks" target="racin-stripes">
								Racin' Stripes
							</TabLink>
						</li>
						<li>
							On a table at the docks near{" "}
							<TabLink tab="perks" target="trail-blazers">
								Trail Blazers
							</TabLink>
						</li>
						<li>Next to bench near Mess Hall</li>
						<li>
							On wooden stairs next to{" "}
							<TabLink tab="perks" target="bang-bangs">
								Bang Bangs
							</TabLink>
						</li>
						<li>On the obstacle course on the floor</li>
						<li>
							Under canoes near{" "}
							<TabLink tab="perks" target="slappy-taffy">
								Slappy Taffy
							</TabLink>
						</li>
					</ul>
				</li>
				<li>Bring them to the Rave Area and place them on the speakers in front of the giant burning man</li>
				<li>Damage zombies enough to where they explode into dust (do not kill them directly) grab the small statue when finished</li>
				<li>
					Go to the large statue which signifies the element you want on your crossbow.
					<ul>
						<li>
							<b>Deer</b> - At the docks near the F&F Card Machine/At the docks near the exit going towards the Mess Hall
						</li>
						<li>
							<b>Eagle</b> - At the Thunderbird Amphitheater
						</li>
						<li>
							<b>Owl</b> - At the Owl Camp near a tunnel going into the Marvin Mines
						</li>
						<li>
							<b>Wolf</b> - At the entrance to Wolf Camp coming from Mess Hall/Next to the Owl Statue near the tunnel to Marvin Mines
						</li>
					</ul>
				</li>
				<li>Place the small statue on the larger statue and kill 15-20 zombies with the Vlad Crossbow. When completed, pick up the upgrade from the statue.</li>
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
			<h3 id="boat">Boat</h3>
			<p>Can be ridden to gain access to Turtle Island</p>
			<ul>
				<li>
					<b>Paddle</b> - to the right of the{" "}
					<TabLink tab="perks" target="quickies">
						Quickies
					</TabLink>{" "}
					perk dispenser next to the burning man next to/inside a wooden stand
				</li>
				<ImageContainer>
					<img src="/images/guides/infinite-warfare/rave-in-the-redwoods/paddle.png" alt="Paddle | Wooden Stand" />
				</ImageContainer>
				<li>
					<b>Rudder</b> - Inside the Mess Hall
				</li>
				<ImageContainer>
					<img src="/images/guides/infinite-warfare/rave-in-the-redwoods/rudder.png" alt="Rudder | Mess Hall" />
				</ImageContainer>
				<li>
					<b>Steering Mechanism</b> - In{" "}
					<TabLink tab="perks" target="tuff-nuff">
						Tuff'Nuff
					</TabLink>{" "}
					room above Spawn
				</li>
				<ImageContainer>
					<img src="/images/guides/infinite-warfare/rave-in-the-redwoods/steering-mechanism.png" alt="Steering Mechanism | Above Spawn" />
				</ImageContainer>
			</ul>
			<h3 id="projector">Projector</h3>
			<p>
				<span>
					<b>
						Requires{" "}
						<TabLink tab="buildables" target="boat">
							Boat
						</TabLink>
					</b>
				</span>
				<span>Return the 2 Reels into the projector to unlock PaP</span>
			</p>
			<ul>
				<li>
					<b>Reel #1</b> - At the docks
				</li>
				<ImageContainer>
					<img src="/images/guides/infinite-warfare/rave-in-the-redwoods/reel1.png" alt="Reel #1 | Docks" />
				</ImageContainer>
				<li>
					<b>Reel #2</b> - On Turtle Island next to a Green Picnic Table
				</li>
				<ImageContainer>
					<img src="/images/guides/infinite-warfare/rave-in-the-redwoods/reel2.png" alt="Reel #2 | Turtle Island" />
				</ImageContainer>
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
			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>Machete</b> - Spawn (FREE)
				</li>
				<li>
					<b>Spiked Baseball Bat</b> - Spawn (FREE)
				</li>
				<li>
					<b>Double Sided Axe</b> - Spawn (FREE)
				</li>
				<li>
					<b>Golf Club</b> - Spawn (FREE)
				</li>
				<li>
					<b>Reaver</b> - Boat House & Climbing Wall (1250)
				</li>
				<li>
					<b>M1</b> - Upstairs at Spawn (500)
				</li>
				<li>
					<b>Hailstorm</b> - Outside Spawn going towards Docks (500)
				</li>
				<li>
					<b>Banshee</b> - Outside Spawn on Mess Hall side & On the Spawn Upper Floor (750)
				</li>
				<li>
					<b>ERAD</b> - Docks (1250)
				</li>
				<li>
					<b>Volk</b> -{" "}
					<TabLink tab="perks" target="tuff-nuff">
						Tuff 'Nuff
					</TabLink>{" "}
					room & Outside Mess Hall (1500)
				</li>
				<li>
					<b>Karma-45</b> - Behind Burning Man at Recreational Area (1500)
				</li>
				<li>
					<b>NV-4</b> - Adventure Course (1500)
				</li>
				<li>
					<b>HVR</b> - Marvin Mines & Docks (1250)
				</li>
				<li>
					<b>RPR Evo</b> - Archery Range & Wolf Camp (1250)
				</li>
				<li>
					<b>Type-2</b> - Trailer in Recreational Area (1250)
				</li>
				<li>
					<b>KBS Longbow</b> - Docks near F&F Teller (1250)
				</li>
			</ul>

			<h3>Magic Wheel</h3>
			<h4>Locations</h4>
			<ul>
				<li>(...)</li>
				<li>(...)</li>
			</ul>
			<h4>Box Weapons</h4>
			<ul>
				<li>Oni</li>
				<li>R3K</li>
				<li>Kendall 44</li>
				<li>Type-2</li>
				<li>KBAR-32</li>
				<li>FHR-40</li>
				<li>Titan</li>
				<li>Mauler</li>
				<li>R.A.W.</li>
				<li>KBS Longbow</li>
				<li>DMR-1</li>
				<li>Widowmaker</li>
				<li>EBR-800</li>
				<li>DCM-8</li>
				<li>Rack-9</li>
				<li>TF-141</li>
				<li>Mactav-45</li>
				<li>S-Ravage</li>
				<li>Hornet</li>
				<li>OSA Grenade Launcher</li>
				<li>EMC</li>
				<li>Spartan SA3</li>
				<li>Howitzer</li>
				<li>P-LAW</li>
				<li>R-VN</li>
				<li>UDM</li>
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
			<h3 id="up-n-atoms">Up'n Atoms (500/1500 (Solo/Co-op))</h3>
			<p>On the porch of the Bear Lodge (Spawn Area).</p>
			<h3 id="tuff-nuff">Tuff'Nuff (2500)</h3>
			<p>
				Top Level of Bear Lodge (Can only access after{" "}
				<TabLink tab="side-ee" target="power">
					power
				</TabLink>{" "}
				is turned on
			</p>
			<h3 id="slappy-taffy">Slappy Taffy (2000)</h3>
			<p>Whitetail Deer Docks</p>
			<h3 id="bombstoppers">Bombstoppers (1500)</h3>
			<p>Adventure Course</p>
			<h3 id="quickies">Quickies (3000)</h3>
			<p>Next to the Burning Man in Recreational Area</p>
			<h3 id="trail-blazers">Trail Blazers (1500)</h3>
			<p>Inside big yellow building at the docks</p>
			<h3 id="blue-bolts">Blue Bolts (1500)</h3>
			<p>Outside Spawn going towards the Mess Hall</p>
			<h3 id="racin-stripes">Racin' Stripes (2000)</h3>
			<p>Camper Cabins</p>
			<h3 id="bang-bangs">Bang Bangs (2000)</h3>
			<p>Old Marvin Mine</p>
			<h3 id="mule-munchies">Mule Munchies (2000)</h3>
			<p>
				Through a door inside spawn that is activated by turning on{" "}
				<TabLink tab="side-ee" target="power">
					power
				</TabLink>
			</p>
		</section>
	);
}

// ============================================================
// EXTRAS
// ============================================================

function Extras() {
	return (
		<section className="tab-content">
			<h2 id="smiley">Smiley Weapon</h2>
			<p>
				<b>Requires: </b> complete <TabLink tab="main-ee">Main EE</TabLink>
			</p>
			<p>
				Can be found in the corner of the Power Room/Slasher's Lair next to the zombie knife throwing{" "}
				<TabLink tab="extras" target="minigames">
					game
				</TabLink>
				.
			</p>
			<h2>Lobby Music</h2>
			<p>
				<span>
					<b>Requires: </b> Directors cut unlocked (all main EE at least once)
				</span>
				<span>
					Unlocks{" "}
					<TabLink tab="perks" target="bombstoppers">
						Bombstoppers
					</TabLink>
					,{" "}
					<TabLink tab="perks" target="tuff-nuff">
						Tuff 'Nuff
					</TabLink>{" "}
					and{" "}
					<TabLink tab="perks" target="bang-bangs">
						Bang Bangs
					</TabLink>{" "}
					Lobby Music
				</span>
			</p>
			<ol>
				<li>
					On Scene 1 and make your way to the Slasher's Lair containing the Zombie Wheel Knife{" "}
					<TabLink tab="extras" target="minigames">
						Game
					</TabLink>
				</li>
				<li>When on Scene 1 the Zombie on the wheel will have a white Talisman mask on his head. Throw a throwing knife at it before it disappears to obtain the new Lobby Music</li>
			</ol>
			<h2 id="minigames">Mini Games</h2>
			<p>In Rave In The Redwoods, there are some mini-games around the map that you can play and earn cash from.</p>
			<table>
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Wheel of Death</td>
						<td>Throw knives at a zombie strapped to a spinning wheel to earn cash. You will earn more cash depending on where you hit the zombie. Landing all 6 knives on the zombies head can reward you with a full ammo restock.</td>
					</tr>
				</tbody>
			</table>
			<h2 id="challenges">Bear Lake Camp Challenges</h2>
			<p>There are 5 badge challenge stations in the map, each with a unique challenge to complete, rewarding a different special grenade.</p>
			<table>
				<thead>
					<tr>
						<th scope="col">Badge Animal</th>
						<th scope="col">Challenge</th>
						<th scope="col">Location</th>
						<th scope="col">Reward</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Bear</td>
						<td>Melee kill 15 Zombies</td>
						<td>Outside Spawn going towards the Mess Hall</td>
						<td>Rewind Grenade</td>
					</tr>
					<tr>
						<td>Owl</td>
						<td>25 long-distance kills</td>
						<td>In the Owl Camp between 2 cabins</td>
						<td>Transponder</td>
					</tr>
					<tr>
						<td>Whitetail Deer</td>
						<td>Rebuild 45 window boards</td>
						<td>Docks near fire barrel</td>
						<td>Repulsor</td>
					</tr>
					<tr>
						<td>Thunderbird</td>
						<td>Kill 25 crawlers</td>
						<td>Outside Spawn going towards Bait & Tackle Shop</td>
						<td>Armageddon</td>
					</tr>
					<tr>
						<td>Wolf</td>
						<td>Get 10 Multikills</td>
						<td>Near entrance to Wolf Camp from Mess Hall</td>
						<td>Black Hole Generator</td>
					</tr>
				</tbody>
			</table>
			<h2 id="totems-and-gems">Totems and Gems</h2>
			<p>
				<span>Zombies will randomly drop a Gem which you can pick up and then place in a Totem. Once you collect 3 of them you will be given a reward. There are three colours (Orange, Purple, and Blue) and using a different combination of the three colours will give a different reward.</span>
				<span>
					<b>NOTE:</b> You can only hold one gem at a time but you <b>can</b> swap them out
				</span>
				<span>
					<b>KEY:</b> O = Orange | P = Purple | B = Blue
				</span>
			</p>
			<table>
				<thead>
					<tr>
						<th scope="col">Gem</th>
						<th scope="col">Gem</th>
						<th scope="col">Gem</th>
						<th scope="col">Reward</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>B</td>
						<td>B</td>
						<td>B</td>
						<td>Revocator</td>
					</tr>
					<tr>
						<td>B</td>
						<td>B</td>
						<td>P</td>
						<td>Lawnmower</td>
					</tr>
					<tr>
						<td>B</td>
						<td>P</td>
						<td>P</td>
						<td>Electric Trap</td>
					</tr>
					<tr>
						<td>P</td>
						<td>P</td>
						<td>P</td>
						<td>Sentry Turret</td>
					</tr>
					<tr>
						<td>P</td>
						<td>P</td>
						<td>O</td>
						<td>Laser Window Trap</td>
					</tr>
					<tr>
						<td>P</td>
						<td>O</td>
						<td>O</td>
						<td>Fireworks</td>
					</tr>
					<tr>
						<td>O</td>
						<td>O</td>
						<td>O</td>
						<td>Medusa Device</td>
					</tr>
					<tr>
						<td>O</td>
						<td>O</td>
						<td>B</td>
						<td>Boom Box</td>
					</tr>
					<tr>
						<td>O</td>
						<td>B</td>
						<td>B</td>
						<td>Balloon Trap</td>
					</tr>
					<tr>
						<td>O</td>
						<td>B</td>
						<td>P</td>
						<td>Kindle Pops</td>
					</tr>
				</tbody>
			</table>
			<h2 id="rave-mode">Rave Vision</h2>
			<p>In Rave In The Redwoods you can activate Rave Vision which allows you to see things you would not normally see such as neon paint all over the woods.</p>
			<p>To activate Rave Vision players must pick up pouches that float in the air after killing zombies. Upon obtaining these pouches you can take them to one of the many firepits and activate Rave Vision.</p>
			<p>As long as you are in Rave Vision you will earn Double Cash</p>
			<p>Being in Rave Vision allows you to perform Floral Ground Pounds (Jump from somewhere high and press the melee button/key)</p>
			<p>
				Rave Vision is the only way you will be able to see the normal{" "}
				<TabLink tab="extras" target="special-enemies">
					Slasher
				</TabLink>{" "}
				enemy.
			</p>
			<p>
				When activating Rave Vision the zombies and boss zombies such as the{" "}
				<TabLink tab="extras" target="special-enemies">
					Slasher
				</TabLink>{" "}
				and{" "}
				<TabLink tab="extras" target="special-enemies">
					Sasquatch
				</TabLink>{" "}
				will be covered in neon lights.
			</p>
			<h2>Rave Soul Challenges</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Home Run</td>
						<td>Get kills with the Spiked Bat</td>
					</tr>
					<tr>
						<td>Ride the Lines</td>
						<td>
							Ride the{" "}
							<TabLink tab="extras" target="ziplines">
								Zip Lines
							</TabLink>{" "}
							around Bear Lake
						</td>
					</tr>
					<tr>
						<td>Bigfoot Hunter</td>
						<td>
							Kill the elusive{" "}
							<TabLink tab="extras" target="special-enemies">
								bigfoot
							</TabLink>
						</td>
					</tr>
					<tr>
						<td>Stock 'Em</td>
						<td>Get kills with the Harpoon Gun</td>
					</tr>
					<tr>
						<td>Fore!</td>
						<td>Get kills with the Golf Club</td>
					</tr>
					<tr>
						<td>House Music All Night Long</td>
						<td>
							Kill enemies while in{" "}
							<TabLink tab="extras" target="rave-mode">
								Rave Vision
							</TabLink>
						</td>
					</tr>
					<tr>
						<td>Butcher of Bear Lake</td>
						<td>Get kills with the Machete</td>
					</tr>
					<tr>
						<td>Splitting Wood</td>
						<td>Get kills with the Double Sided Axe</td>
					</tr>
					<tr>
						<td>Self Propelled</td>
						<td>Grab the mower and mow down some zombies</td>
					</tr>
					<tr>
						<td>Prince Charming</td>
						<td>
							Find and equip{" "}
							<TabLink tab="extras" target="charms">
								Memory Charms
							</TabLink>{" "}
							for your weapons
						</td>
					</tr>
					<tr>
						<td>Badge Menagerie</td>
						<td>
							Earn{" "}
							<TabLink tab="extras" target="challenges">
								Challenge Badges
							</TabLink>{" "}
							at Bear Lake
						</td>
					</tr>
					<tr>
						<td>Master Rave Challenge</td>
						<td>Complete all Rave Challenges</td>
					</tr>
				</tbody>
			</table>
			<h2 id="kevin">Play as Kevin Smith</h2>
			<p>
				<b>Requires: </b> complete Rave in the Redwoods <TabLink tab="main-ee">Main EE</TabLink>
			</p>
			<p>In the main menu, insert the code R,L,L,D,D,R with arrow keys or d-pad</p>
			<h2 id="ghosts-n-skulls-2">Ghosts 'N Skulls 2</h2>
			<p>Rewards: 1000xp, and perma perkaholic (except Up 'N Atoms when in Solo), Skull Token for the Afterlife Arcade</p>
			<p>
				<b>Requires:</b> <TabLink tab="main-ee">Main EE</TabLink> Completed
			</p>
			<ol>
				<li>Find 6 skulls by doing various Things</li>
				<ol>
					<li>Get 1 kill with the log swing, 9 kills with the Woodchipper, 9 kills with the Rave trap, and 2 kills with the Waterfall. You have to get these in 1 activation and can't get more or less than the number provided</li>
					<li>
						Go into{" "}
						<TabLink tab="extras" target="rave-mode">
							Rave Mode
						</TabLink>{" "}
						and ADS at the green symbol on the Ghosts N' Skulls 2 machine. When it has disappeared you have to go around the map looking for the same symbol on the machine and ADS on it until it disappears. Locations are as follows:
						<ul>
							<li>
								Zombie spawn window next to{" "}
								<TabLink tab="perks" target="slappy-taffy">
									Slappy Taffy
								</TabLink>
							</li>
							<li>Archery Range</li>
							<li>Window at Turtle Island in Kevin's Cabin</li>
							<li>Cabins to the left of the Owl</li>
							<li>Across from where you place the Frog Charm</li>
							<li>Mess Hall Bathroom</li>
							<li>Above the boat at the docks</li>
							<li>On big tree in the middle of the Rave Area</li>
							<li>Zombie barrier in power room</li>
						</ul>
					</li>
					<li>Go to the knife throwing game in the power room and throw knives at the skulls on the zombie</li>
					<li>
						Find the same symbols as before and make them spell out SKULL. There is a symbol to letter grid here. Locations are as follows
						<ul>
							<li>
								Zombie spawn window next to{" "}
								<TabLink tab="perks" target="slappy-taffy">
									Slappy Taffy
								</TabLink>
							</li>
							<li>Archery Range</li>
							<li>Window at Turtle Island in Kevin's Cabin</li>
							<li>Cabins to the left of the Owl</li>
							<li>Across from where you place the Frog Charm</li>
							<li>Mess Hall Bathroom</li>
							<li>Above the boat at the docks</li>
							<li>On big tree in the middle of the Rave Area</li>
							<li>Inside a zombie spawn barrier in the Slasher room</li>
						</ul>
					</li>
					<li>
						Go on the{" "}
						<TabLink tab="buildables" target="boat">
							boat
						</TabLink>{" "}
						and do a skull "shooting gallery". Be sure to shoot the red skulls first as they are going to escape the quickest and cause you to fail
					</li>
					<li>Shoot the Ghost N' Skulls machine with the Ben Franklin Crossbow. You will then be transported into the game.</li>
				</ol>
				<li>You can now enter the Machine to play... or you could've just used the fate and fortune card</li>
			</ol>
			<p>
				<b>How To Play</b>
			</p>
			<p>You must only hit the skulls with the same color ghost. If you hit a Skull with a Ghost of the incorrect color it will turn red and come flying towards you making an escape. You can shoot this red Skull with a red Ghost in order to stop it.</p>
			<h2 id="charms">Memory Charms</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Item</th>
						<th scope="col">Locations</th>
						<th scope="col">Goal</th>
						<th scope="col">Ability</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Binoculars</td>
						<td>
							<ul>
								<li>On a bench outside the Mess Hall</li>
								<li>At the Rave Area next to a bunch of beet boxes.</li>
							</ul>
						</td>
						<td>
							Place the binoculars on a bench near the Bait and Tackle building. A total of 8 eyeballs appear in the area(See Video). 5 at pack a punch island, 2 in the inaccessible area near the card refill guy, 1 above{" "}
							<TabLink tab="perks" target="slappy-taffy">
								slappy taffy
							</TabLink>
							. You have to shoot the eyeballs from the spot where you buy the KBS(up the hill slightly) from where you placed them down. After you shoot all 8 eyes you then need to get ~ 10- 15 zombie headshots
						</td>
						<td>Works like electric cherry between 2 players when you reload (You need to be close to your teammate when you reload)</td>
					</tr>
					<tr>
						<td>Shovel</td>
						<td>
							<ul>
								<li>In the mines next to HVR Wallbuy</li>
								<li>Near the target range in Recreational Area</li>
							</ul>
						</td>
						<td>Take the shovel to the swamp area near the Mess Hall. Place it on a gravestone and 5 skeletons will spawn. Kill all the skeletons and you will be able to equip the shovel charm.</td>
						<td>After you revive a downed teammate it will kill all surrounding zombies in a explosion.</td>
					</tr>
					<tr>
						<td>Arrowhead</td>
						<td>
							<ul>
								<li>On the ground to the left of the Mess Hall Sign</li>
								<li>As soon as you walk out of spawn going towards dock area, laying next to a lamp post to the right of the first barrier</li>
							</ul>
						</td>
						<td>
							Place the Arrowhead on the building next to the firing range in the Recreational Area. Enter{" "}
							<TabLink tab="extras" target="rave-mode">
								Rave Mode
							</TabLink>{" "}
							and shoot the targets quickly.
						</td>
						<td>You auto lock onto the heads of zombies when aiming down sights.</td>
					</tr>
					<tr>
						<td>Ring</td>
						<td>
							<ul>
								<li>Behind the Mess Hall on some stairs on the ground</li>
								<li>
									Stairs Near{" "}
									<TabLink tab="perks" target="bang-bangs">
										Bang Bangs
									</TabLink>
								</li>
							</ul>
						</td>
						<td>Place the ring next to the TV near the fireplace at Spawn. Shine the 2 lamps surrounding the ring in the room on to the ring by hitting the interact button on them. When both lamps are directed at the ring you are able to pick it up.</td>
						<td>Increased melee damage/Regain health when getting a melee kill (Unconfirmed)</td>
					</tr>
					<tr>
						<td>Bird Mask</td>
						<td>
							<ul>
								<li>Against a post near the last dock as you approach Mess Hall area</li>
								<li>Drop down from the Archery Range and it will be in a dark corner</li>
							</ul>
						</td>
						<td>Take the Mask to the Mess Hall. There will be a blank painting next to some keys. Place the Bird Mask on the painting and shoot the keys. You will then be able to interact with the Mask.</td>
						<td>Makes your gun automatically refill ammo into the magazine when not in your hands.</td>
					</tr>
					<tr>
						<td>8 Ball</td>
						<td>
							<ul>
								<li>In the mines on the upper level</li>
								<li>Opposite side of the tent where the paddle for the boat is in the Recreational Rave Area</li>
							</ul>
						</td>
						<td>Take the 8-Ball to upper level of the Spawn area, place it on a pool table, and shoot all the blank white balls. You will then be able to interact with it</td>
						<td>Makes your slides damage zombies</td>
					</tr>
					<tr>
						<td>Fish</td>
						<td>
							<ul>
								<li>
									Next to men's bathroom sign in the Camper Cabins underneath{" "}
									<TabLink tab="perks" target="racin-stripes">
										Racin' Stripes
									</TabLink>
								</li>
								<li>In a sewer tunnel near the Mess Hall</li>
							</ul>
						</td>
						<td>
							Take the fish to the docks next to where the{" "}
							<TabLink tab="buildables" target="boat">
								boat
							</TabLink>{" "}
							is. A blue spirit fish will spawn in the water outside the map. Throw a grenade at the fish to complete the quest and interact with Mr. Fish.
						</td>
						<td>Gives you the momentum perk from multiplayer (...)</td>
					</tr>
					<tr>
						<td>Frog</td>
						<td>
							<ul>
								<li>In a trailer next to the Rave Recreational Area</li>
								<li>Sitting on a chair inside the bait and tackle shop</li>
							</ul>
						</td>
						<td>
							Place the Golden Frog at the swamp area near the Mess Hall. Spirit Frogs will spawn in{" "}
							<TabLink tab="extras" target="rave-mode">
								Rave Vision
							</TabLink>{" "}
							and then you must do a Floral Ground Pound (Jump from a high point in{" "}
							<TabLink tab="extras" target="rave-mode">
								Rave Mode
							</TabLink>{" "}
							and melee) on all the frogs.
						</td>
						<td>Lets you sprint in water</td>
					</tr>
					<tr>
						<td>Pacifier</td>
						<td>
							<ul>
								<li>Near some rocks at the Docks near the Bait & Tackle building</li>
								<li>
									Shower room on the floor near{" "}
									<TabLink tab="perks" target="racin-stripes">
										Racin' Stripes
									</TabLink>
								</li>
							</ul>
						</td>
						<td>Take the Pacifier into the Mess Hall and place it on the countertop. You must then complete the round inside the Mess Hall. You are then able to interact with the Pacifier.</td>
						<td>Damages zombies that hit you</td>
					</tr>
					<tr>
						<td>Boot</td>
						<td>
							<ul>
								<li>Next to empty trash cans at the Docks</li>
								<li>In a dark corner in Thunderbird Amphitheater next to a pile of beet boxes</li>
							</ul>
						</td>
						<td>
							Place boots in a cabin at Camper Cabins. Follow the red footsteps and a{" "}
							<TabLink tab="extras" target="special-enemies">
								Slasher
							</TabLink>{" "}
							Jumpscare will happen. Then, go to spawn and follow the red footsteps and another{" "}
							<TabLink tab="extras" target="special-enemies">
								Slasher
							</TabLink>{" "}
							Jumpscare should happen. Then go to the docks near the{" "}
							<TabLink tab="buildables" target="boat">
								boat
							</TabLink>{" "}
							area and follow those footsteps. Once complete you can go back to the cabin where you placed them and you can equip them as a charm.
						</td>
						<td>Headshots will cause zombies heads to explode in a miniature radius which will damage nearby zombies.</td>
					</tr>
				</tbody>
			</table>
			<h2>Traps</h2>
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
						<td>Log Swing</td>
						<td>Swings a giant spiked wooden log around and instantly kills zombies hit by it.</td>
						<td>Entrance to Whitetail Beach, Boat House side</td>
						<td>350</td>
					</tr>
					<tr>
						<td>Rave Speakers</td>
						<td>A DJ station that plays rave music and makes the zombies dance before being blown to bits in a bloody explosion</td>
						<td>Recreation Area</td>
						<td>750</td>
					</tr>
					<tr>
						<td>Killer Fish</td>
						<td>Feed the fish to have them swim around your wooden platform in the middle of the water and chew through the zombies.</td>
						<td>Docks</td>
						<td>350</td>
					</tr>
					<tr>
						<td>Waterfall</td>
						<td>Sends down a huge waterfall that kills Zombies in its path.</td>
						<td>Near Blue Docks</td>
						<td>750</td>
					</tr>
					<tr>
						<td>Woodchipper</td>
						<td>Sucks in and grinds up the zombies that come near it</td>
						<td>Archery Range</td>
						<td>750</td>
					</tr>
				</tbody>
			</table>
			<h2 id="ziplines">Fast Travel</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Location</th>
						<th scope="col">Ending Location</th>
						<th scope="col">Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Around Bear Lake</td>
						<td>Various</td>
					</tr>
					<tr>
						<td>
							Docks (build{" "}
							<TabLink tab="buildables" target="boat">
								boat
							</TabLink>
							)
						</td>
						<td>Turtle Island</td>
					</tr>
				</tbody>
			</table>
			<h2 id="special-enemies">Special Enemies</h2>
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
						<td>Slasher</td>
						<td>(...)</td>
						<td>
							<a href="http://i.imgur.com/gj5Ft30.png" rel="nofollow noopener noreferrer" target="_blank">
								Normal Slasher
							</a>
							,{" "}
							<a href="https://www.callofduty.com/content/dam/atvi/callofduty/infinite-warfare/dlc/dlc1/zombies-gallery/d20170112-001_DLC1_Zombies_Social_Assets_1080x826_Villians_SlasherRave_01.png" rel="nofollow noopener noreferrer" target="_blank">
								Rave Mode Normal Slasher
							</a>
							,{" "}
							<a href="https://www.callofduty.com/content/dam/atvi/callofduty/infinite-warfare/dlc/dlc1/zombies-gallery/d20170112-001_DLC1_Zombies_Social_Assets_1080x826_Villians_SuperSlasher_01.png" rel="nofollow noopener noreferrer" target="_blank">
								Super Slasher
							</a>
							,{" "}
							<a href="http://i.imgur.com/MICwjff.jpg" rel="nofollow noopener noreferrer" target="_blank">
								Rave Mode Super Slasher
							</a>
						</td>
					</tr>
					<tr>
						<td>Sasquatch</td>
						<td>(...)</td>
						<td>
							<a href="https://www.callofduty.com/content/dam/atvi/callofduty/infinite-warfare/dlc/dlc1/zombies-gallery/d20170112-001_DLC1_Zombies_Social_Assets_1080x826_Villians_Apeman_01.png" rel="nofollow noopener noreferrer" target="_blank">
								Sasquatch
							</a>
							,{" "}
							<a href="http://i.imgur.com/vdaBFlj.png" rel="nofollow noopener noreferrer" target="_blank">
								Rave Mode Sasquatch
							</a>{" "}
						</td>
					</tr>
				</tbody>
			</table>
			<h2>Achievements</h2>
			<AchievementTable mapId="infinite-warfare/rave-in-the-redwoods" rows={achievementRows} />{" "}
		</section>
	);
}

// ============================================================
// CREDITS
// ============================================================

function Credits() {
	return (
		<section className="tab-content">
			<h2>Credits</h2>
			<Source href="https://www.reddit.com/r/CODZombies/wiki/rave-in-the-redwoods/?screen_view_count=1&ext-referrer=EXTERNAL" name="Rave in the Redwoods | Complete Map Breakdown" author="/u/The_Beebat" source="r/CODZombies" />
			<Source href="https://callofduty.fandom.com/wiki/Rave_in_the_Redwoods" name="Rave in the Redwoods" author="Call of Duty Wiki" source="Fandom" />
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function RaveInTheRedwoods() {
	return (
		<MapNavigationProvider>
			<RaveInTheRedwoodsContent />
		</MapNavigationProvider>
	);
}

function RaveInTheRedwoodsContent() {
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

// * CHANGE Game, Map_name, and core map_function
export const Route = createFileRoute("/maps/infinite-warfare/rave-in-the-redwoods")({
	staticData: { title: "Rave in the Redwoods" },
	component: RaveInTheRedwoods,
});
