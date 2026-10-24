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
		id: "alchemical-opus",
		name: "Alchemical Opus",
		description: "In Dead of the Night, create Prima Materia 3 times.",
		goal: "Fully upgrade Alistair's Folly",
	},
	{
		id: "board-gamer",
		name: "Board Gamer",
		description: "In Dead of the Night, kill a Werewolf in the Library with a revolver.",
		goal: "Kill a werewolf in the Library with Alistair's Folly, Welling, or Mozu",
	},
	{
		id: "master-your-craft",
		name: "Master Your Craft",
		description: "In Dead of the Night, use every crafting table.",
		goal: "Fully upgrade Alistair's Folly, build silver bullets and build the Stake knife",
	},
	{
		id: "mega-bite",
		name: "Mega Bite",
		description: "In Dead of the Night, get bitten by a Crimson Nosferatu.",
		goal: "During the process of upgrading the Chaos Theory to Alistair's Annihilator, Crimson Vampires will begin to spawn in to the map. Allow one to pounce onto you.",
	},
	{
		id: "on-the-clock",
		name: "On the Clock",
		description: "In Dead of the Night, stay within the clock circle until the time runs out.",
		goal: "During the Pack a Punch steps, you will have to tune a clock by standing in a circle for 30-60 seconds. Complete this step without leaving the circle.",
	},
	{
		id: "quick-thinking",
		name: "Quick Thinking",
		description: "In Dead of the Night, unlock the Forest by round 7.",
		goal: "Open Pack a Punch (see above) by round 7",
	},
	{
		id: "shockingly-good-time",
		name: "Shockingly Good Time",
		description: "In Dead of the Night, electrocute a Werewolf.",
		goal: "Kill a werewolf with the trap located in the Greenhouse",
	},
	{
		id: "shrinking-feeling",
		name: "Shrinking Feeling",
		description: "In Dead of the Night, shrink 15 zombies with a single shot from Alistair’s Annihilator.",
		goal: "One of the charge effects of the Alistair's Annihilator shrinks zombies. As these effects are random, train up a horde of zombies and kill them with a charged shot until you get the desired effect.",
	},
	{
		id: "trial-by-ordeal",
		name: "Trial by Ordeal",
		description: "In Dead of the Night, defeat the evil within.",
		goal: "Complete the Main Quest",
	},
	{
		id: "well-done",
		name: "Well Done",
		description: "In Dead of the Night, stake a Nosferatu in the Dining Room.",
		goal: "Obtain the Stake Knife, and then melee a Vampire in the Dining Room",
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
			<h2>Dead of the Night</h2>
			<p>Dead of the Night is the fifth Zombies map featured in Call of Duty: Black Ops 4, and the twenty-ninth map overall. Chronologically, it is the first map in the Chaos story. It was released on December 11th, 2018 first for PlayStation 4, and a week later on December 18th, 2018 for Xbox One and PC. The map is available through the Black Ops Pass</p>
			<p>The map features a cast of new characters portrayed by celebrities as they find themselves fighting the undead in the midst of a scheme orchestrated by The Order in order to kidnap Alistair Rhodes during a party. The map introduces three new enemies, as well as three new wonder weapons; a revolver-like weapon known as Alistair's Folly, a pneumatic crossbow known as the Savage Impaler, and a wooden stake known as the Stake Knife.</p>

			<h2>Overview</h2>
			<p>Dead of the Night is set in Alistair Rhodes' mansion in England. The map is quite large, beating out IX but is smaller than Voyage of Despair. When players first spawn in, they will be divided by a barrier that can only be opened by acquiring the map's Sentinel Artifact, acting in a similar manner to Verrückt and Voyage of Despair. When a player opens a door on one side of the barrier, the other set of doors will open on the other. When the player reaches the Sentinel Artifact and activates it, more of the map will be opened up.</p>
			<p>From the Main Hall, the player can travel north, west, or east. Heading east will bring the player through the bedrooms, dining room, and eventually the gardens and greenhouse laboratory. Heading west will bring the player through the billiards room, library, and eventually the cemetery and mausoleum. Heading north will bring the player to the forest, which can be opened by collecting three tuning forks. There are also small hallways that connect the main hall with the dining room and library, and beneath the grand staircase is the wine cellar. In each of the main areas at the end of each direction are fast travel portals which brings the player back to the main hall. There is also a fast travel portal in the entrance hall that brings the player to the forest once the latter is unlocked</p>
			<p>This map also features different spawnable locations for each of the Perk Altars aside from Danu Altar. While Danu will always spawn in the entrance hall, Ra, Zeus, and Odin will spawn at either the forest terrace, wine cellar, gardens, or mausoleum</p>
			<p>
				Dead of the Night introduces several new enemy types. The Nosferatu are special enemies that spawn sporadically or as part of events, similarly to the Gladiator in IX. Nosferatu are small and move incredibly quickly, and while they inflict low damage and are generally weak compared to zombies they can inflict a bleeding effect on players, slowing their health regeneration. The more powerful variant, Crimson Nosferatu are mostly similar, though they have more health, move faster, and hit harder. They can also latch onto a players and take a bite out of them, causing severe damage. They spawn less frequently until high rounds, though players are required to face one to obtain Alistair's Annihilator. Werewolves also feature in Dead of the Night, with the first one attacking the players in the Forest when they first open Pack-A-Punch. Werewolves are large, strong, and high health enemies that fill a roll similar to a Blightfather, being devastating targets that will require
				co-operation or quick thinking to take down. Finally, Catalysts return on this map
			</p>
			<p>Both the Nosferatu and Werewolf have weakness to new utilities featured on the map. Both the regular and Crimson Nosferatu can be killed in a single hit from the Stake Knife, even if regular zombies have begun to show damage fall off. A new buildable on the map, Silver Bullets, grant players significantly higher damage against Werewolves, allowing a well coordinated team to trivialize encounters with them. The Ballistic Shield returns as well, though there is no upgrade available for it unlike on Voyage of Despair</p>

			<h2>Layout</h2>
			<h3>North Atrium Bridge / East/West Gallery</h3>
			<p>Players will spawn on two ends of the North Atrium Bridge, located on the second floor of the Main Hall. Like Verrückt, the players will be separated by a barrier, which can only be opened upon activating the map's Sentinel Artifact. Two players will be on the East Gallery side, which contains the Strife for 500 points, as well as two red barriers that can only be opened through the Sentinel Artifact. There is also a door costing 750 points that leads to the East Balcony and Music Room. On the West Gallery side is the Essex Model 07, as well as another red barrier. There is also a door costing 750 points in the adjacent Tea Room that brings the players through the West Balcony and Smoking Room</p>
			<p>On each side is a bookshelf, both of which are used to open a secret room on the East Gallery</p>
			<h3>East/West Balcony / Music/Smoking Room</h3>
			<p>From the East Gallery's 750 point door will bring the players across the East Balcony, which contains the Saug 9mm for 750 points and a potential shield part location. Continuing across the East Balcony will bring the players to the Music Room, which contains a door costing 1000 points that brings the players to the Grand Staircase</p>
			<p>From the West Gallery's 750 point door will bring the players across the West Balcony, which contains the RK 7 Garrison for 700 points and another potential shield part location. Continuing on across the West Balcony will bring players to the Smoking Room, which contains a red barrier leading to the Billiards Room and a door costing 1000 points leading to the Grand Staircase. The crafting bench for the Ballistic Shield can be found here, directly to the left of the entrance leading into the Billiards Room.</p>
			<h3>Grand Staircase / Main Hall / North Atrium</h3>
			<p>Players will be reunited on the Grand Staircase, which contains the map's Sentinel Artifact on a broken pillar overlooking the Main Hall below. There is also the MOG 12 for a 1000 points next to the doorway leading into the Smoking Room. Upon activating the Sentinel Artifact, every red barrier in the map will be opened, allowing access to the full North Atrium Bridge, the Bedroom Hallway, and the Billiards Room. The red barriers blocking the two staircases in the East and West Galleries will be opened, allowing players another way down into the Main Hall. A Mystery Box can be found in the middle of the Grand Staircase leading down into the Main Hall.</p>
			<p>Coming down the Grand Staircase or the two side staircases will bring players to the Main Hall, which has branching paths leading to the East and West Hallways, the Wine Cellar, and the Forest Terrace, which is located at the North Atrium. All four of these doors cost 1000 points each to open. There is also a Mozu for 1300 points to the right of the entrance leading into the North Terrace. A potential spawn for the candlestick for the Silver Melter can be found on a table near the Mozu</p>
			<h3>Entrance Hall</h3>
			<p>Once the Sentinel Artifact is activated, the door behind it will open, revealing the Entrance Hall. Here, the players can find a potential spawn location for the candlestick on a table, the Danu altar, and a fast travel portal that brings the player to the Forest once the latter is opened</p>
			<h3>East/West Hallways</h3>
			<p>Both the East and West Hallways are connecting paths that connect the Main Hall with the Dining Room and Library. In the East Hallway is a potential spawn for a shield part, and in the West Hallway is a potential spawn location for the silver pot needed to craft the Silver Melter</p>
			<h3>Wine Cellar</h3>
			<p>The Wine Cellar is a small area, which contains the crafting table for the Silver Melter, a possible Perk Altar spawn location, as well as the MX9 for 1300 points. The silver plate needed for the Silver Melter will always spawn in this area, as well as the blue crystal used to help open the Forest and later activate the easter egg</p>
			<h3>Billiards Room</h3>
			<p>The Billiards Room is another small area, containing a spawn location for the candlestick on the ground. The pool table in the center of the room is used to unlock a secret room in the area, which rewards the player a special item. A door costing 1000 points can be found in the back of the room, which brings the players to the second floor of the Library</p>
			<h3>Study / Library</h3>
			<p>The Library and Study is a medium sized area, containing various items of interest. Firstly, the green crystal used to help open the Forest and later activate the easter egg can be found either on a table on the second floor Study, or at two other locations on the first floor Library, both of which are close to the area's Mystery Box. The Silver Bullet Dispenser's crafting bench is located in this area, directly right to the staircase connecting the two floors. The gun case holding a free Alistair's Folly is located in the back of the Library. The M1897 Trebuchet can be found for 1400 points. A door costing 1000 points that opened the West Hallway is found in the Library. Both the first and second floors have a potential spawn location for a shield part</p>
			<p>On the second floor Study is the Spitfire, costing 1150 points. To the right of it is a door costing 1250 points that brings the player to the Cemetery Path</p>
			<h3>Bedroom Hallway / Master Bedroom / Trophy Room</h3>
			<p>Coming from the East Balcony or the Dining Room will bring the players to the Bedroom Hallway, which branches off to the Master Bedroom and the Trophy Room. Each of these three rooms houses the pink crystal used to help open the Forest and later activate the easter egg. The Escargot can be found by the doorway connecting the Master Bedroom and Trophy Room, costing 1000 points. There is also a door leading down to the Dining Room at the end of the Bedroom Hallway, costing 1000 points to open</p>
			<h3>Dining Room</h3>
			<p>The Dining Room, like the Library and Study, is a medium sized area. The player can find the door leading to the East Hallway or door leading to the Bedroom Hallway, as well as two potential shield spawn locations and two spawn locations for the pot. A Mystery Box location can be found in this area, as well as the SwordFish for 1200 points. There is also a 1250 point door that leads to the Greenhouse Terrace</p>
			<h3>Greenhouse Terrace</h3>
			<p>The Greenhouse Terrace acts as a connecting area for the Dining Room, Greenhouse Laboratory, and Gardens. At the fountain located at the center of the terrace is the Maddox RFB, costing 1400 points, as well as two doors, both costing 1500 points. Opening either or will open the other, allowing access to the Gardens and Greenhouse Laboratory</p>
			<h3>Gardens</h3>
			<p>The Gardens is a small maze-like area, featuring two main pathways that connect at the end, leading to a side entrance into the Greenhouse Terrace. On one path is the Vapr-XKG, costing 1550 points, and the other containing a guaranteed spawn location for a Perk Altar. A Mystery Box can be found tucked in a corner near the Vapr-XKG</p>
			<h3>Greenhouse Laboratory</h3>
			<p>The Greenhouse Laboratory is a large area, consisting of large machines, work benches, and plants. At the end of the room is a fast travel portal that brings the player back to the Main Hall. The ICR-7 can be found near the portal, costing 1550 points. The map's only Electric Trap can be found near the main entrance to the room. Both crafting benches for the Chaos Theory and Alistair's Annihilator are found here. There is also a staircase leading up to a large telescope, which plays a role in the easter egg</p>
			<h3>Cemetery Path</h3>
			<p>The Cemetery Path is a small area, featuring the KN-57 for 1450 points, as well as two 1500 point doors that lead up to the Cemetery and Mausoleum areas. Like the Greenhouse Terrace, if one door is opened, the other will automatically be opened</p>
			<h3>Cemetery / Mausoleum</h3>
			<p>The Cemetery is a large area, featuring various paths around tombstones. A Mystery Box location can be found under the railing of the Mausoleum area. The Stake Knife crafting bench can be found at the south entrance of the Cemetery. At the end of all of the paths in the Cemetery is a stone staircase that brings the player up to the Mausoleum, which contains a guaranteed Perk Altar spawn location, the Auger DMR for 1550 points, and a fast travel portal back to the Main Hall behind the Mausoleum</p>
			<h3>Crypt</h3>
			<p>The Crypt is a hidden room found within the Cemetery. The entrance to it is located under a stone coffin to the left of the left side staircase leading up to the Mausoleum, and can only be opened by completing a small easter egg. The room is a small stone chamber, containing several pillars and torches. At the back of the room is a small altar like area with three stained glass windows. On the stone altar is the Savage Impaler, which can be picked up by the player. Upon doing so, the player will be locked in the Crypt until the player kills all of the attacking Nosferatus and Crimson Nosferatus</p>
			<h3>Forest Terrace</h3>
			<p>The Forest Terrace is a small balcony like area, containing the GKS for 1300 points, the Bowie Knife for 3000 points, and a potential Perk Altar spawn on the center of the balcony. There is also the entrance into the Forest, which can be opened upon collecting the three Tuning Forks.</p>
			<h3>Forest</h3>
			<p>The Forest is a large area, featuring three different paths that converge at the end, where the Pack-a-Punch Machine is located. On both of the side paths are the Titan for 3750 points and the Koshka for 4500 points. There is also a Mystery Box location on the center path, and a fast travel portal back to the North Atrium to the right of the Pack-a-Punch Machine. There is also a stone wall hiding the entrance to the Ruins on the right-side path if coming from the Forest Terrace</p>
			<p>Upon initially opening the Forest, a Werewolf will always spawn</p>
			<h3>Ruins</h3>
			<p>The Ruins is the final area that is accessible in the map. It can only be opened after collecting the three stones during the easter egg. The room itself is large and square in size, featuring no obstacles in the center of the room. The room serves as the arena during the fight against the Shadow Werewolf</p>
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
					<TabLink tab="side-ee" target="power">
						power (Sentinel Artifact)
					</TabLink>
				</li>
				<li>
					<TabLink tab="side-ee" target="pap">
						Open Forest PaP
					</TabLink>
				</li>
				<li>
					<TabLink tab="buildables" target="shield">
						Shield
					</TabLink>{" "}
					(For end of Telescope Step)
				</li>
				<li>
					<TabLink tab="wonder-weapon" target="alistairsannihilator">
						Alistair's Annihilator
					</TabLink>{" "}
					(For entering Effigy and Knight Step)
				</li>
			</ul>

			<h2>Recommended Setup</h2>
			<ul>
				<li>Specialist - Scepter of Ra</li>
				<li>
					<b>Perks</b>
					<ul>
						<li>Bandolier Bandit</li>
						<li>Modifier - Timeslip</li>
					</ul>
				</li>
				<li>
					<b>During the Game</b>
					<ul>
						<li>Homunculus</li>
						<li>
							<TabLink tab="buildables" target="silverbullets">
								Silver Bullets
							</TabLink>{" "}
							(BEFORE opening PaP)
						</li>
						<li>
							<TabLink tab="wonder-weapon" target="stakeknife">
								Stake Knife
							</TabLink>
						</li>
					</ul>
				</li>
			</ul>

			<h2>
				Main EE -{" "}
				<a href="https://www.youtube.com/watch?v=PCvxZyaeCkQ" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>
					<span>Go back to each of the stones from opening PaP and gaze into them. (Each will give a new questline that can be completed in any order)</span>
					<span>
						<b>NOTE: you can save all of the lockdown steps for the very end before the boss if you don't want to do them now</b>
					</span>
					<ul>
						<li>
							<b>Telescope</b>
							<ol>
								<li>Head to the Cemetery and shoot the antenna coming from the top of the Mausoleum with silver bullets (everyone in the game must shoot it. a beam should shoot out.)</li>
								<li>
									<span>Head to the North Atrium Bridge (Spawn) and interact with the 3 boxes to open them. Moce the rings above the statue by turning the things left so that the lights are being blocked. use the following combination by blocking the speciifed lights and the puzzle should be solved and the statues head should come off.</span>
									<span>
										Green -{">"} Blue -{">"} Red -{">"} Green -{">"} Blue -{">"} Red
									</span>
								</li>
								<li>
									Find 3 zodiak symbols (7 possible locations, each with 3 sets of scratch marks that need to be added up (some locations can have 0 scratch marks. don't worry.)). take note of the symbol and the total amount of scratch marks.
									<ul>
										<li>
											Under left side of left table in Entrance hall
											<ul>
												<li>On shield of right statue</li>
												<li>On the bottom of the pillar to the right of the window</li>
												<li>To the right of the picture on the left wall</li>
											</ul>
										</li>
										<li>
											Billiards Room under the table with a chess board
											<ul>
												<li>To the left of the bookshelf on the wall</li>
												<li>Above the left side cabinet</li>
												<li>On the floor under the checkers table</li>
											</ul>
										</li>
										<li>
											Next to the vase on the shelf in the library
											<ul>
												<li>Top right corner of the window to the left of the symbol</li>
												<li>On the box directly behind the previous symbol</li>
												<li>At the base of the giant skeleton</li>
											</ul>
										</li>
										<li>
											Behind a candle in the Main Hall (to the right of the staircase)
											<ul>
												<li>To the left of the left fountain</li>
												<li>On the bottom right block above the fireplace</li>
												<li>Top left corner of mosaic before heading out onto the terrace</li>
											</ul>
										</li>
										<li>
											On the bottom right section of the wine shelf in the Wine Cellar
											<ul>
												<li>On the huge barrel beside the broken smaller one</li>
												<li>Right side cabinet where the plate would spawn</li>
												<li>On top of the barrel near the window</li>
											</ul>
										</li>
										<li>
											On the doorframe leading out into the Greenhouse Terrace
											<ul>
												<li>On the far wall behind between the first 2 things (Circle)</li>
												<li>On the end of the dining table</li>
												<li>On the cieling above silver part in the lower roof area (above painting)</li>
											</ul>
										</li>
										<li>
											Trophy Room to the right of the case
											<ul>
												<li>Trophy Room left side of fireplace</li>
												<li>Master Bedroom desk on left next to the bed</li>
												<li>Above bathtub through zombie spawn window in master bedroom</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>Head to the top floor of the Greenhouse Laboratory and input the symbols in the order from lowest to highest scratch mark count (interact to spin, knife to select) The telescope should start rotating</li>
								<li>Walk up to the wheel thing and pull out your shield and hold interact to open the observatory roof. Shield bash to lock it in place</li>
								<li>Buy the electric trap beneath you and walk through it with your shield out. bash the shield into the telescope (everybody must do this at the same time)</li>
								<li>
									Go back down the stairs and a panel will open showing a stone. <b>LOCKDOWN:</b> Interact with the stone to start the lockdown. (everybody must do this at the same time)
								</li>
								<li>Interact with the stone to claim a max ammo as a reward</li>
							</ol>
						</li>
						<li>
							<b>Effigy</b>
							<ol>
								<li>
									Head to the cemetery and shoot and collect 5 branches from trees by shooting the branches or trunks (requires{" "}
									<TabLink tab="wonder-weapon" target="alistairsannihilator">
										Alistair's Annihilator
									</TabLink>{" "}
									to shoot the trunk and make the step easier (branches can be shot with a normal weapon)). leaves will fall off the trees when you walk up to them if they are the right ones.
									<ul>
										<li>To the left when entering the cemetery path area (broken gate is leaning on it)</li>
										<li>2 right across from each other in the middle of the cemetery</li>
										<li>2 on opposite ends in the Mosaleum area.</li>
									</ul>
								</li>
								<li>Check the graves in the center of the cemetery for the engraved date of 1912 (Solo: Interact with it. Multiplayer: the person on the tombstone interacts with it)</li>
								<li>
									Shoot a Charged Fire shot infront of the Effigy while under the effect with{" "}
									<TabLink tab="wonder-weapon" target="alistairsannihilator">
										Alistair's Annihilator
									</TabLink>
									. interact with the effigy.
								</li>
								<li>
									<span>Find the ghost lady and ecort her back to the cemetery. Some common locations (not all):</span>
									<span>(going down will lose the afterlife effect for this step, zombies can still see you)</span>
									<ul>
										<li>Danu Perk Statue</li>
										<li>End of table in Dining Room</li>
										<li>Zombie Spawn to left when entering Master Bedroom</li>
										<li>Right side zombie spawn in Wine Cellar</li>
									</ul>
								</li>
								<li>
									<span>
										Interact with the stone to leave the effect. <b>LOCKDOWN:</b> Hold interact with the square to start the lockdown.
									</span>
									<span>TIP: hold up in the Mausoleum and use the fire trap and charged trap to hold both sides</span>
								</li>
								<li>Interact with the stone again to gain your max ammo</li>
							</ol>
						</li>
						<li>
							<b>Helmet (Knight)</b>
							<ol>
								<li>
									Place a{" "}
									<TabLink tab="buildables" target="firetrap">
										Fire Energy Core
									</TabLink>{" "}
									into a fire trap (preferably nearby to the set you want to complete), activate and shoot it using the{" "}
									<TabLink tab="wonder-weapon" target="alistairsannihilator">
										Alistair's Annihilator
									</TabLink>{" "}
									charged shot to turn it blue. walk through the flames with your shield to light it on fire.
								</li>
								<li>
									Visit 3 sets of 4 fireplaces and shield bash them to light them on fire (each fireplace in a set must be done in a specific order but the order of sets doesn't matter. must finish the set before the fire dissapears.). Once a set is completed, pick up the gem that spawns in the last fireplace activated.
									<ul>
										<li>
											Set 1
											<ol>
												<li>Smoking Room</li>
												<li>Right of Library Fire Trap</li>
												<li>left of Library Fire trap</li>
												<li>Billiards Room</li>
											</ol>
										</li>
										<li>
											Set 2
											<ol>
												<li>Right side of main hall</li>
												<li>East Gallery</li>
												<li>Left side of main hall</li>
												<li>West Gallery</li>
											</ol>
										</li>
										<li>
											Set 3
											<ol>
												<li>Trophy Room</li>
												<li>Master Bedroom</li>
												<li>Music Room</li>
												<li>Dining Room</li>
											</ol>
										</li>
									</ul>
								</li>
								<li>
									Head to the Cemetery and interact with the knight statue to place a gem, it will now start following you. WALK to the main hall and interact with another knight statue. WALK to the Gardens and interact with the last knight statue beside the{" "}
									<TabLink tab="weapons" target="vapr">
										Vapr Wallbuy
									</TabLink>
								</li>
								<li>Bring them to the forest adnd in the lanes there will be faint circles which you need to walk over for the gems to move to and become a ghost knight. Once all 3 have been placed, they become soul boxes. You must fill all 3 knights a total of 2 times.</li>
								<li>When they form a triangle, get a werewolf kill within the triangle to finish the step.</li>
								<li>
									<b>LOCKDOWN:</b> interact with the stone that spawns to start the lockdown.
								</li>
							</ol>
						</li>
					</ul>
				</li>
				<li>You can now interact with the door with the glowing stones in the forest area to access the bossfight. (in multiplayer, everyone must interact with the door to enter)</li>
			</ol>

			<h2>BOSSFIGHT</h2>
			<p>
				Recommended: Specialist lvl 3,{" "}
				<TabLink tab="weapons" target="mog">
					MOG 12
				</TabLink>{" "}
				max packed with{" "}
				<TabLink tab="buildables" target="silverbullets">
					silver bullets
				</TabLink>
				, homunculus,{" "}
				<TabLink tab="side-ee" target="takeknife">
					stake knife
				</TabLink>
				, new{" "}
				<TabLink tab="buildables" target="shield">
					shield
				</TabLink>
				, all perks.
			</p>
			<ol>
				<p>
					<b>Phase 1</b>
				</p>
				<li>To harm the boss, position the 3 light beams to be facing the glowing square by interacting with them to change their direction.</li>
				<li>Stand in the glowing square until the boss does his dig attack. While he is stuck in the square, damage him by firing into his chest.</li>
				<li>After you've done this to the point that he is keeling over, quickly grab the power-ups on the outer walls if you haven't already since they will respawn when the new phase starts.</li>
				<p>
					<b>Phase 2</b>
				</p>
				<li>Survive against hordes of zombies, vampires and werewolves.</li>
				<li>Collect the power-ups once everything stops spawning</li>
				<p>
					<b>Phase 3</b>
				</p>
				<li>Same as first phase but you cannot see where the green square is. Move each of the statues to a different position until the beam turns green and the green square becomes visible. Then just repeat phase 1.</li>
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
			<p>Grab the Sentinel Artifact that spawns on the opposite side of the room from spawn.</p>

			<h2 id="pap">
				PaP -{" "}
				<a href="https://www.youtube.com/watch?v=OtQ-yQRKkWA" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>Aquire the Sentinel Artifact on the opposite end from where you spawn (unlocks areas)</li>
				<li>
					Break 4 vases that have gems in them (8 vases to search) by knifing them, fill them with 4 souls then interact with them to get a vision
					<ul>
						<li>Vase 1: Study area in the middle table</li>
						<li>
							Vase 1: Library next to the{" "}
							<TabLink tab="side-ee" target="impossible">
								Gramophone
							</TabLink>
						</li>
						<li>
							Vase 1: Across from the{" "}
							<TabLink tab="weapons" target="mysterybox">
								Mystery Box
							</TabLink>{" "}
							in the library
						</li>
						<li>Vase 2: Wine Cellar directly infront of the stairs</li>
						<li>Vase 2: In Wine Cellar in the area to the right on a small table in the center</li>
						<li>Vase 3: Bedroom Hallway on table next to a plant</li>
						<li>Vase 3: Large pot infront of the bed in the Master Bedroom</li>
						<li>Vase 3: On the table in the Trophy Room</li>
					</ul>
				</li>
				<li>The Image you get changes what you have to do per stone</li>
				<table>
					<thead>
						<tr>
							<th scope="col">Image</th>
							<th scope="col">Possible Locations</th>
							<th scope="col">Challenge</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Clock</td>
							<td>
								<ul>
									<li>Billiards room (Short Wall Clock)</li>
									<li>Main Hall (Grandfather Clock with circle below face)</li>
									<li>Dining Room (3 circles on lower half)</li>
								</ul>
							</td>
							<td>
								<ol>
									<li>Find the clock somewhere on the map (should be ticking) and interact with it to spawn a circle</li>
									<li>Stand in the circle until the clock opens revealing a tuning fork to pick up</li>
								</ol>
							</td>
						</tr>
						<tr>
							<td>Perk Statue</td>
							<td>
								<TabLink tab="perks">Any of the 4 perk locations</TabLink>
							</td>
							<td>
								<ol>
									<li>Go to that perk machine and kill a swarm of vampires that spawn</li>
									<li>Will spawn the tuning fork</li>
								</ol>
							</td>
						</tr>
						<tr>
							<td>Doll</td>
							<td>Entrance Hall</td>
							<td>
								<ol>
									<li>Interact with the doll on the table in the Entrance Hall</li>
									<li>You need to follow the ghost that spawns (tuning fork appears at the end)</li>
								</ol>
							</td>
						</tr>
						<tr>
							<td>Scroll</td>
							<td>Study</td>
							<td>
								<ol>
									<li>
										Interact with the scroll on the bookshelf in the Study area behind the{" "}
										<TabLink tab="side-ee" target="impossible">
											debris
										</TabLink>
									</li>
									<li>You need to follow the ghost that spawns (tuning fork appears at the end)</li>
								</ol>
							</td>
						</tr>
						<tr>
							<td>Noose</td>
							<td>Wine Cellar</td>
							<td>
								<ol>
									<li>Interact with the Noose hanging off the chair in the Wine Cellar</li>
									<li>You need to follow the ghost that spawns (tuning fork appears at the end)</li>
								</ol>
							</td>
						</tr>
						<tr>
							<td>Paintings</td>
							<td>
								<ul>
									<li>Girl - East Gallery</li>
									<li>Woman and Old Man - Smoking Room</li>
									<li>Girl with Scratch Marks - Music Room</li>
									<li>Sad Girl - Tea Room</li>
								</ul>
							</td>
							<td>
								<ol>
									<li>Interact with the painting it showed</li>
									<li>You need to follow the ghost that spawns (tuning fork appears at the end)</li>
								</ol>
							</td>
						</tr>
					</tbody>
				</table>
				<li>
					<span>After obtaining all 3 tuning forks, head to the Forest Terrace and interact with the massive debris</span>
					<span>
						<b>A WEREWOLF WILL SPAWN, BEST TO DO THIS STEP WHEN YOU NEED TO KILL ONE</b>
					</span>
				</li>
				<li>The PaP Machine is located at the very far back of the Forest area</li>
			</ol>

			<h2>
				3 Secret Doors -{" "}
				<a href="https://www.youtube.com/watch?v=fNNtcAIzcKw" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Potential Rewards: Power-up which will not despawn, a random weapon, elixir, or free Silver Bullets. (each can be done individually, messing up a step for a door locks you out of that particular room for the rest of the game)</p>
			<ul>
				<li id="bookshelfroom">
					West/East Balcony
					<ol>
						<li>Look for the bookshelves in the East and West Balconys</li>
						<li>Interact with 4 books (2 books per side) with symbols on them in the order "Q", "Star", "end of tuning fork", "u looking shape with some dots in the center"</li>
					</ol>
				</li>
				<li>
					Billiards Room
					<ol>
						<li>In the pool room, shoot all of the balls on the table into any pocket in the order of 1-9</li>
						<li>Bookcase infront of you will open up. (Grenade means you did it wrong)</li>
					</ol>
				</li>
				<li>
					Wine Cellar
					<ol>
						<li>Knife 6 barrels which are dripping wine in the order from fastest to slowest dripping (correct order means wine spurts out)</li>
						<li>Wine shelf around the corner will open up</li>
					</ol>
				</li>
			</ul>

			<h2 id="impossible">
				Free Perks and infinite ammo Impossible EE -{" "}
				<a href="https://www.youtube.com/watch?v=pDsLWlROEZE" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>Rewards: 6 free perks, INFINITE ammo for the gun you are currently holding</span>
				<span>
					<b>WARNING: please read all of the instructions BEFORE starting your game since there are a lot of things to remember</b>
				</span>
			</p>
			<ol>
				<li>
					Around the map is 6 gramophones that you must remember what order you looked at them (order doesn't matter but remembering the order does, lists here are in an order which you can follow (already reversed))
					<ol>
						<li>Music room to the left of the fireplace</li>
						<li>Master Bedroom to the right of the fire gate/doorway</li>
						<li>West Gallery stairs in the corner</li>
						<li>
							Inside of the{" "}
							<TabLink tab="side-ee" target="bookshelfroom">
								West/East Balcony Bookshelf hidden room
							</TabLink>
						</li>
						<li>In the Library on the table</li>
						<li>On the floor in the dining room</li>
					</ol>
				</li>
				<li>
					There are 6 doors around the map which you must remember the order of which you opened them
					<ol>
						<li>Main Hall -{">"} Cellars</li>
						<li>Main Hall -{">"} West Hallway/Library</li>
						<li>North Atrium/Main Hall -{">"} Forest Terrace/PaP</li>
						<li>Main Hall -{">"} East Hallway/Dining Room</li>
						<li>Dining Room -{">"} Greenhouse Terrace</li>
						<li>Library -{">"} Cemetery</li>
					</ol>
				</li>
				<li>
					<span>
						You must shoot 6 vases located in the Main Hall corresponding to the order in which you opened the doors using a{" "}
						<TabLink tab="side-ee" target="pap">
							PaP
						</TabLink>{" "}
						<TabLink tab="weapons" target="m1897">
							M1897 Trebuchet
						</TabLink>{" "}
						by getting the grenade to land inside of it (vase located high on the pillars in the direction of the door locations, listed below.)
					</span>
					<span>You can check if you succeded by going to the Forest Terrace fountain and checking if the candle is not lit</span>

					<ol>
						<li>
							Main Hall -{">"} Cellars | <b>Staircase Fountain</b>
						</li>
						<li>
							Main Hall -{">"} West Hallway/Library | <b>West Hall (Lower)</b>
						</li>
						<li>
							North Atrium/Main Hall -{">"} Forest Terrace/PaP | <b>Above Forest Door</b>
						</li>
						<li>
							Main Hall -{">"} East Hallway/Dining Room | <b>East Wall (Lower)</b>
						</li>
						<li>
							Dining Room -{">"} Greenhouse Terrace | <b>East Wall (Higher)</b>
						</li>
						<li>
							Library -{">"} Cemetery | <b>West Wall (Higher)</b>
						</li>
					</ol>
				</li>
				<li>
					Ignite 6 candles around the map in the REVERSE order you opened the doors in (candles located near the doors, light using Wraith Fires)
					<ol>
						<li>
							Library -{">"} Cemetery | <b>Library on bookshelf in Study</b>
						</li>
						<li>
							Dining Room -{">"} Greenhouse Terrace | <b>Greenhouse Terrace beside one of the small statue lamps</b>
						</li>
						<li>
							Main Hall -{">"} East Hallway/Dining Room | <b>Hallway Dining Room/Main Hall (East Hallway) on table with lamp</b>
						</li>
						<li>
							North Atrium/Main Hall -{">"} Forest Terrace/PaP | <b>on the edge of the Forest Fountain</b>
						</li>
						<li>
							Main Hall -{">"} West Hallway/Library | <b>Hallway Library/Main Hall (West Hallway) on table</b>
						</li>
						<li>
							Main Hall -{">"} Cellars | <b>Cellars ontop of large barrel to the right coming down the stairs</b>
						</li>
					</ol>
				</li>
				<li>Grab the record on the East Stairway</li>
				<li>
					Interact with the 6 Gramophones in the REVERSE order you looked at them in (you will hear parts of the EE song play when correct)
					<ol>
						<li>On the floor in the dining room</li>
						<li>In the Library on the table</li>
						<li>
							Inside of the{" "}
							<TabLink tab="side-ee" target="bookshelfroom">
								West/East Balcony Bookshelf hidden room
							</TabLink>
						</li>
						<li>West Gallery stairs in the corner</li>
						<li>Master Bedroom to the right of the fire gate/doorway</li>
						<li>Music room to the left of the fireplace</li>
					</ol>
				</li>
				<li>An invisible ghost will spawn near the entrance to the PaP area from the Main Hall which you need to follow into the Wine Cellar (you can locate it be hearing it only. Recommended to use Undead Man Walking and In Plain Sight Elixirs)</li>
				<li>Once you reach the Wine Cellar, you must go prone and crawl while still following the ghost (can only hear while proned), once you make it to the jumpscare, you will recieve the rewards.</li>
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
			<h2>Mystery</h2>
			<p>Collect 4 glowing coins around the map</p>
			<ol>
				<li>
					Under the small table in the Main Hall near the{" "}
					<TabLink tab="weapons" target="mozu">
						Mozu Wallbuy
					</TabLink>
				</li>
				<li>On the stack of stuff in the library (can be shot from the Study above)</li>
				<li>In a broken barrel in the Wine Cellar near the stairs</li>
				<li>in a wall decoration behind a door in the East Hallway</li>
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
			<h2 id="alistairsfolly">
				Alistair's Folly -{" "}
				<a href="https://www.youtube.com/watch?v=c7phH17Kgek" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				Can either be gotten through the{" "}
				<TabLink tab="weapons" target="mysterybox">
					Mystery Box
				</TabLink>{" "}
				or via the quest below
			</p>
			<ol>
				<li>
					Find and take note of 4 symbols (shape and colour)
					<ul>
						<li>
							Blue Symbol - Cemetery
							<ul>
								<li>Through the railing of the stairs</li>
								<li>On the face of the small romb across from the Mausoleum</li>
								<li>Below the Lion Statue</li>
								<li>Towards the exit on the wall past the birch tree</li>
							</ul>
						</li>
						<li>
							Green Symbol - Greenhouse
							<ul>
								<li>Through left side gate on a column</li>
								<li>On wall inside gazebo structure</li>
								<li>
									On wall outside map past gate by a <TabLink tab="perks">perk statue</TabLink>
								</li>
								<li>On the other side of the perk statue</li>
							</ul>
						</li>
						<li>
							Red Symbol - East Side of Mansion
							<ul>
								<li>On the right before the stairs down to Main Hall</li>
								<li>Master Bedroom on the wall to the right side of fireplace</li>
								<li>Above painting in the dining room area</li>
								<li>On end barrel in the wine cellar (through barrier)</li>
							</ul>
						</li>
						<li>
							Yellow Symbol - Forest Terrace
							<ul>
								<li>On mansion wall to left after entering</li>
								<li>Through gate on the left side of the short wall</li>
								<li>Opposite gate at the very end</li>
								<li>To the right of the mansion window</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>Input all 4 symbols in the correct colour into the lock in the Library to unlock the case and grab the Alistair's Folly.</li>
			</ol>

			<h2 id="chaostheory">
				Chaos Theory -{" "}
				<a href="https://www.youtube.com/watch?v=kScE8pGXjkY" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>
					<b>Requires:</b>{" "}
					<TabLink tab="wonder-weapon" target="alistairsfolly">
						Alistair's Folly
					</TabLink>
				</span>
			</p>
			<ol>
				<li>
					Open{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>{" "}
					and kill the wolf that spawns using{" "}
					<TabLink tab="buildables" target="silverbullets">
						Silver Bullets
					</TabLink>{" "}
					and pick up the part he dropped
				</li>
				<li>Place the material into the machine in the Greenhouse Laboratory and grab the output from the left side</li>
				<li>
					Open up the secret bookshelf in the library (looks suspiscious) by bashing it with a{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>
					. grab the part that is inside.
				</li>
				<li>Craft the Chaos Theory in the Greenhouse Laboratory using the workbench in the back</li>
			</ol>

			<h2 id="alistairsannihilator">
				Alistair's Annihilator -{" "}
				<a href="https://www.youtube.com/watch?v=z-RmuJwL1uc" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>
					<b>Requires:</b>{" "}
					<TabLink tab="wonder-weapon" target="alistairsfolly">
						Alistair's Folly
					</TabLink>{" "}
					+{" "}
					<TabLink tab="wonder-weapon" target="chaostheory">
						Chaos Theory Variant
					</TabLink>
				</span>
				<span>After a part has been obtained, take them to the Greenhouse Laboratory and input them into the machine and grab the output from the left side (repeat for 3 parts)</span>
				<span>Craft at the table inside the Greenhouse Laboratory</span>
			</p>
			<ul>
				<li>
					Part 1
					<ol>
						<li>Collect 3 things of bile by killing vampires with the tornado shot from the Chaos Theory (Cemetary and Forest areas spawn more Vampires)</li>
						<li>Interact with the glowing red tomb in the cemetary to unleash a crimson vampire. Kill him for a part.</li>
					</ol>
				</li>
				<li>
					Part 2
					<ol>
						<li>Head to the Mausoleum balcony in teh Cemetary and shoot 4 orange flickering lights using the the Chaos Theory.</li>
						<li>A bat will spawn on the last lamp and must be killed quickly for a part.</li>
					</ol>
				</li>
				<li>
					Part 3
					<ol>
						<li>Make a Zombie dig up a pile in the Forest area using the yellow shot from the Chaos Theory</li>
					</ol>
				</li>
			</ul>

			<h2 id="savageimpaler">
				Savage Impaler -{" "}
				<a href="https://www.youtube.com/watch?v=pjjCua2dK54" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>
					Find and put out 6 candles using your knife (can be done in any order)
					<ul>
						<li>Table in the study room</li>
						<li>On the table after taking the right side staircase into the Wine Cellar</li>
						<li>On a table in the middle of the East Hallway</li>
						<li>On the table in the music room</li>
						<li>On the table in the East Gallery</li>
						<li>On the nightstand in the Master Bedroom</li>
					</ul>
				</li>
				<li>
					Head to the back of the{" "}
					<TabLink tab="side-ee" target="pap">
						forest
					</TabLink>{" "}
					and take the right side lane away from pap you'll find a stone statue. interact with the water below it.
				</li>
				<li>
					Find a ghost lady (possible locations below) and escort (follow) her to the Mausoleum. If you lose the effect, end the round and go back to the statue. (ghost should stay in place)
					<ul>
						<li>Entrance Hall, Master Bedroom</li>
						<li>Master Bedroom</li>
						<li>Entrance to Music Room</li>
						<li>Middle of Billiards Room</li>
						<li>Greenhouse Laboratory</li>
						<li>Dining Room behind the big table</li>
					</ul>
				</li>
				<li>
					Once there, 4 zombies will begin to glow. You need to kill each one with a different method in the following order. Each zombie will drop a purple item you need to collect.
					<ol>
						<li>Any Type of Weapon</li>
						<li>Equipment (not Homunculus)</li>
						<li>Specialist</li>
						<li>
							<TabLink tab="buildables" target="shield">
								Shield
							</TabLink>{" "}
							Bash or Gun
						</li>
					</ol>
				</li>
				<li>After colelcting all 4, enter the Mausoleum and place each of the items on the circles in the room. Get 15 vampire kills in the room (white parts of circle will turn blue when successful)</li>
				<li>Head out to the tomb and interact with it to move it aside and open a secret area. Enter and grab the Savage Impaler to start a lockdown</li>
				<li>Complete the lockdown and leave.</li>
			</ol>

			<h2 id="stakeknife">
				Stake Knife -{" "}
				<a href="https://www.youtube.com/watch?v=OSk-jTCih-E" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>Head to the tree with a lantern on it in the Forest area. Positioning yourself properly infront of it, you'l be bale to see 4 symbols on the trees. remember the symbol and the order.</li>
				<li>
					<span>Find 4 stones in the Garden and shoot them in the order of which the symbosl were on the trees.</span>
					<span>
						<b>WARNING: failing this step means you cannot get the Stake Knife for the duration of the game and must restart</b>
					</span>

					<ul>
						<li>On the gazebo ledge</li>
						<li>Behind the Vapr Wall buy</li>
						<li>Behind the fountain with the perk statue</li>
						<li>on the railing behind the previous stone.</li>
					</ul>
				</li>
				<li>Buy the Bowie Knife and head to the tree behind the lantern tree (should have a symbol on each side of it). You now nee to knife the symbols in the same order as before. (will become scratched)</li>
				<li>
					Use the{" "}
					<TabLink tab="buildables" target="shield">
						Shield
					</TabLink>{" "}
					to bash each of the symbols until a tree branch falls which you can pick up.
				</li>
				<li>Head to the stone infront of the Mausoleum and place the stick. get 15 vampire kills near the branch until it starts smoking. pick it back up.</li>
				<li>Head to the workbecnh just outside the cemetery to build the stake knife</li>
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
			<h2 id="shield">
				Ballistic Shield -{" "}
				<a href="https://www.youtube.com/watch?v=g1jCKOUqkEk" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Can be built at the workbench in the Smoking Room</p>
			<ul>
				<li>
					Rectangle Piece
					<ul>
						<li>
							To the left of the{" "}
							<TabLink tab="weapons" target="saug">
								Saug Wallbuy
							</TabLink>{" "}
							in the East Balcony Area
						</li>
						<li>Sitting against the column to the right of the sentinel artifact</li>
						<li>Far End of West Balcony</li>
					</ul>
				</li>
				<li>
					Screen
					<ul>
						<li>To the right as you enter the Study from the Billiards room</li>
						<li>In the Library on the broken shelf</li>
						<li>On the couch blocking the stairs in the Library</li>
					</ul>
				</li>
				<li>
					Counter
					<ul>
						<li>East Hallway on the chair in the corner</li>
						<li>In the Dining Room under the light fixture on the wall (before taking the stairs out)</li>
						<li>
							On the Floor next to the door from{" "}
							<TabLink tab="side-ee" target="impossible">
								Dining Room to Greenhouse
							</TabLink>
						</li>
					</ul>
				</li>
			</ul>

			<h2 id="silverbullets">
				Silver Bullets -{" "}
				<a href="https://www.youtube.com/watch?v=T1XzE1qPdTg" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Grab the Silver and Gunpowder, then build at the Library workbench. Interact while holding the weapon you want to put silver bullets on.</p>
			<ul>
				<li>
					Silver - Grab the 3 parts and melt them down in the Cellar Workbench
					<ul>
						<li>
							Candle Holder
							<ul>
								<li>Entrance Hall on table</li>
								<li>Floor in the Billiards Room</li>
								<li>Main Hall infront of giant vase</li>
							</ul>
						</li>
						<li>
							Cup
							<ul>
								<li>Small Table in the Dining Room infront of couch</li>
								<li>Corner of larger table in Dining Room</li>
								<li>Laying on the floor in the West Hallway beside the couch</li>
							</ul>
						</li>
						<li>
							Plate
							<ul>
								<li>Wine Cellar on shelf in center of the area</li>
								<li>Wine Cellar on the right wall below the torch in the center</li>
								<li>Wine Cellar on the table to the right of the noose</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					Gunpowder
					<ul>
						<li>
							Charcoal
							<ul>
								<li>Base of the Main Hall Fireplace</li>
								<li>Base of the Billiards Room Fireplace</li>
								<li>Base of the Master Bedroom Fireplace</li>
							</ul>
						</li>
						<li>
							Poop
							<ul>
								<li>Cemetary on the ground infront of the boy statue</li>
								<li>Cemetary on the ground further down the path</li>
								<li>Cemetary by the tree next to the Mausoleum</li>
							</ul>
						</li>
						<li>
							Sulfur
							<ul>
								<li>Greenhouse Laboratory on the table to the left right as you enter</li>
								<li>Greenhouse Laboratory on the table to the right right as you enter</li>
								<li>Greenhouse Laboratory on the table in the back near the Wonder Weapon Workbenches</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>

			<h2 id="firetrap">Fire Trap</h2>
			<p>Around the map you can find Fire Core trap parts which can be places to activate the fire traps around the map.</p>
			<VideoPlayer url="JKU3gZnlHPE" />
			<ul>
				<li>
					Smoking Room on the couch to the left of the{" "}
					<TabLink tab="buildables" target="shield">
						shield workbench
					</TabLink>
				</li>
				<li>Music room on the overturned piano bench</li>
				<li>Infront of a huge vase in the Main Hall</li>
				<li>On the barrel directly infront of the stairs in the Wine Cellar</li>
				<li>On desk in the Trophy Room</li>
				<li>On the farthest bench in the dining room</li>
				<li>On the bench to the left when entering the gardens area</li>
				<li>On the bench behind the gazebo in the Gardens</li>
				<li>By the Chaos Theory workbench in the Greenhouse Laboratory</li>
				<li>^ but opposite side</li>
				<li>On the bench to your right when entering the cemetery path area</li>
				<li>On the large tomb ledge in the cemetery</li>
				<li>On the right side steps leading up to the Mausoleum</li>
				<li>On the half wall behind the Mausoleum</li>
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
				<li>Chakrams of Vengeance - Player Choice</li>
				<li>Hammer of Valhalla - Player Choice</li>
				<li>Scepter of Ra - Player Choice</li>
				<li>Viper and Dragon - Player Choice</li>
			</ul>

			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>Strife</b> - Forecastle (500p)
				</li>
				<li>
					<b>Essex Model 07</b> - Forecastle (500p)
				</li>
				<li>
					<b>RK 7 Garrison</b> - Bridge (700p)
				</li>
				<li id="saug">
					<b>Saug 9mm</b> - State Rooms (750p)
				</li>
				<li>
					<b>Escargot</b> - Bridge (1000p)
				</li>
				<li id="mog">
					<b>MOG 12</b> - State Rooms (1000p)
				</li>
				<li>
					<b>Spitfire</b> - Upper Grand Staircase (1150p)
				</li>
				<li>
					<b>Swordfish</b> - Lower Grand Staircase (1200p)
				</li>
				<li id="mozu">
					<b>Mozu</b> - Main Hall (1300p)
				</li>
				<li>
					<b>MX9</b> - Gallery (1300p)
				</li>
				<li>
					<b>GKS</b> - Aft Decks/Promenade Starboard Deck (1300p)
				</li>
				<li id="m1897">
					<b>M1897 Terbuchet</b> - 1st Class Lounge (1400p)
				</li>
				<li>
					<b>Maddox RFB</b> - 3rd Class Berths (1400p)
				</li>
				<li>
					<b>KN-57</b> - Poop Deck (1450p)
				</li>
				<li>
					<b>ICR-7</b> - Provisions (1550p)
				</li>
				<li id="vapr">
					<b>Vapr-XKG</b> - Mail Rooms/Sun Deck (1550p)
				</li>
				<li id="auger">
					<b>Auger DMR</b> - Boat Deck (1550p)
				</li>
				<li>
					<b>Bowie Knife</b> - 1st Class Lounge/Gallery (3000p)
				</li>
				<li>
					<b>Titan</b> - Cargo Hold (3750p)
				</li>
				<li>
					<b>Koshka</b> - Engine Room (4500p)
				</li>
			</ul>

			<h3 id="mysterybox">Mystery Box</h3>
			<h4>Locations</h4>
			<ul>
				<li>Cemetery</li>
				<li>Library</li>
				<li>Gardens</li>
				<li>Dining Room</li>
				<li>Grand Staircase</li>
				<li>Forest</li>
			</ul>
			<h4>Weapons</h4>
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
				<li>
					<TabLink tab="wonder-weapon" target="alistairsfolly">
						Alistair's Folly
					</TabLink>
				</li>
				<li>
					<TabLink tab="wonder-weapon" target="savageimpaler">
						Savage Impaler
					</TabLink>{" "}
					(after obtaining it from the Crypts)
				</li>
				<li>Homunculus</li>
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
			<h2>Super Blood Wolf</h2>
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
						<td>Power Up!</td>
						<td>Activate the Sentinel Artifact.</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Hat Trick</td>
						<td>Kill Zombies with 3 Unique Weapons.</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Pool Party</td>
						<td>Sink all the Billiard Balls.</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Board Silly</td>
						<td>All Boards Must be in Place at the End of the Round.</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Piss Around</td>
						<td>Use Unpacked Pistols Only.</td>
					</tr>
					<tr>
						<td>6</td>
						<td>Stay Down!</td>
						<td>Weapons Can Only be Used While Prone.</td>
					</tr>
					<tr>
						<td>7</td>
						<td>Unfriendly Dinner</td>
						<td>Defend the Dining Room While Avoiding Friendly Fire.</td>
					</tr>
					<tr>
						<td>8</td>
						<td>BowDie</td>
						<td>Bowie Knife Kills Only.</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Be-Were</td>
						<td>Survive the Werewolf Onslaught.</td>
					</tr>
					<tr>
						<td>10</td>
						<td>Corner Pocket</td>
						<td>Defend the Billiard Room.</td>
					</tr>
					<tr>
						<td>11</td>
						<td>Ranger</td>
						<td>Move Less Than 100m During the Round.</td>
					</tr>
					<tr>
						<td>12</td>
						<td>Packoshka</td>
						<td>All Players Must Possess a Packed Koshka by the End of the Round.</td>
					</tr>
					<tr>
						<td>13</td>
						<td>Stake in the Ground</td>
						<td>Get 25 Kills with the Stake Knife.</td>
					</tr>
					<tr>
						<td>14</td>
						<td>Muzzle Flesh</td>
						<td>Zombies Only Appear When You are Shooting.</td>
					</tr>
					<tr>
						<td>15</td>
						<td>Green Thumb</td>
						<td>Defend the Greenhouse Laboratory.</td>
					</tr>
					<tr>
						<td>16</td>
						<td>Tactical Error</td>
						<td>Use Unpacked Tactical Rifles Only.</td>
					</tr>
					<tr>
						<td>17</td>
						<td>Debit or Credit?</td>
						<td>Kills Drain Points. Damage and Death Points are Disabled for the Round.</td>
					</tr>
					<tr>
						<td>18</td>
						<td>Cross Eyed</td>
						<td>At Least One Player Must Possess the Savage Impaler by the End of the Round.</td>
					</tr>
					<tr>
						<td>19</td>
						<td>Phantom Pain</td>
						<td>Stay Close to the Ghost or Take Damage.</td>
					</tr>
					<tr>
						<td>20</td>
						<td>Put a Cork In It</td>
						<td>Defend the Wine Cellar.</td>
					</tr>
					<tr>
						<td>21</td>
						<td>Perk Drunk</td>
						<td>More Perks. More Blurry Vision.</td>
					</tr>
					<tr>
						<td>22</td>
						<td>Stock Crash</td>
						<td>All Weapons Only Have One Ammo Clip.</td>
					</tr>
					<tr>
						<td>23</td>
						<td>Cursed</td>
						<td>Vampire Bites Will Slowly Kill You.</td>
					</tr>
					<tr>
						<td>24</td>
						<td>Scope It Out</td>
						<td>Use Unpacked Sniper Rifles Only.</td>
					</tr>
					<tr>
						<td>25</td>
						<td>Mousetrap</td>
						<td>Defend the Mausoleum.</td>
					</tr>
					<tr>
						<td>26</td>
						<td>Re-Roll</td>
						<td>Active Perks are Randomly Replaced. Perk Altars are Disabled for the Round.</td>
					</tr>
					<tr>
						<td>27</td>
						<td>Nosferatu</td>
						<td>Survive the Nosferatu Onslaught.</td>
					</tr>
					<tr>
						<td>28</td>
						<td>Bankrupt</td>
						<td>Have Less Than 1000 Points at the End of the Round.</td>
					</tr>
					<tr>
						<td>29</td>
						<td>Re-Possessed</td>
						<td>Possess the Auger DMR and ICR-7 (Packed or Unpacked) by the End of the Round.</td>
					</tr>
					<tr>
						<td>30</td>
						<td>The Main Event</td>
						<td>Defend the Main Hall.</td>
					</tr>
				</tbody>
			</table>
			<VideoPlayer url="9wK147UrDsA" />
		</section>
	);
}

// ============================================================
// PERKS
// ============================================================

function Perks() {
	return (
		<section className="tab-content">
			<h3>Danu</h3>
			<p>Always spawns in Entrance Hall</p>
			<h3>Ra, Odin, Zeus</h3>
			<p>Switches Locations every game</p>
			<ul>
				<li>Mausoleum in the middle of the Cemetary</li>
				<li>Gardens</li>
				<li>Forest Terrace or Wine Cellar</li>
			</ul>
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
				Audio Cylinders -{" "}
				<a href="https://www.youtube.com/watch?v=ZC1tHZ9_seU" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Around the map there are 6 Audio Cylinders that can be picked up and played on the gramophone in the music room. knife to remove a currently playing one. (only 1 cylinder can be held at a time)</p>
			<ul>
				<li>
					Infront of the Mausoleum on the railing across from the{" "}
					<TabLink tab="weapons" target="auger">
						Auger wallbuy
					</TabLink>
				</li>
				<li>In the Billiards room on the chiar in the corner</li>
				<li>In the Forest Terrace on the right side railing directly infront of you</li>
				<li>In the Entrance hall on the desk to the left after entering</li>
				<li>Dining Room on the corner of the table</li>
				<li>
					Inside the greenhouse Laboratory on the table across from the{" "}
					<TabLink tab="wonder-weapon" target="alistairsannihilator">
						Alistairs Annihilator
					</TabLink>{" "}
					Workbench
				</li>
			</ul>
			<h2>Stone Jumpscare</h2>
			<p>During the Main EE step when you find the stones and can look inside them, doing this repeatedly on the same stone will yield a jumpscare.</p>
			<h2>Painting Jumpscare</h2>
			<p>Stare down your sights at the painting of the girl in the West Gallery for a few seconds.</p>
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
						<td>Electric Trap</td>
						<td>Electrocutes zombies, instantly killing them</td>
						<td>Greenhouse</td>
						<td>1500 Points</td>
					</tr>
					<tr>
						<td>
							<TabLink tab="buildables" target="firetrap">
								Fire Trap
							</TabLink>
						</td>
						<td>Sets Zombies on fire</td>
						<td>Library/Greenhouse/Mausoleum/Entrance Hall</td>
						<td>1500 Points</td>
					</tr>
				</tbody>
			</table>
			<h2>Fast Travel</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Portal Location</th>
						<th scope="col">Ending Location</th>
						<th scope="col">Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Greenhouse Laboratory</td>
						<td>Main Hall</td>
						<td>500 Points</td>
					</tr>
					<tr>
						<td>Mausoleum</td>
						<td>Main Hall</td>
						<td>500 Points</td>
					</tr>
					<tr>
						<td>Forest</td>
						<td>Main Hall</td>
						<td>500 Points</td>
					</tr>
				</tbody>
			</table>
			<h2>Special Enemies</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Enemy Name</th>
						<th scope="col">Special Abilities</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nosferatu</td>
						<td>Fast running, will prevent you from regening health for roughly 5 seconds after being hit.</td>
					</tr>
					<tr>
						<td>Crimson Nosferatu</td>
						<td>Similar to the standard vampires, but with an additional pounce attack that prevents the player from moving while the vampire bites you. It also has more health than a standard vampire.</td>
					</tr>
					<tr>
						<td>Werewolf</td>
						<td>Will rush at the player and melee them. They take increased damage when shot with silver bullets.</td>
					</tr>
					<tr>
						<td>Fire Catalyst</td>
						<td>Walks slowly towards players. If a player gets too close to it it will explode.</td>
					</tr>
					<tr>
						<td>Poison Catalyst</td>
						<td>Does damage to players who walk near it. It turns other zombies in the nearby area also into Poison Catalysts.</td>
					</tr>
					<tr>
						<td>Electric Catalyst</td>
						<td>Charges up and can unleash a blinding scream that can impair a players vision.</td>
					</tr>
					<tr>
						<td>Water Catalyst</td>
						<td>Actively avoids players and can infect normal zombies and make them have more health.</td>
					</tr>
				</tbody>
			</table>
			<h2>Achievements</h2>
			<AchievementTable mapId="bo4/dead-of-the-night" rows={achievementRows} />{" "}
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
			<Source href="https://callofduty.fandom.com/wiki/Dead_of_the_Night" name="Dead of the Night" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://www.reddit.com/r/CODZombies/wiki/dead-of-the-night" name="Dead of the Night | Complete Map Guide" author="u/memesnthat" source="r/CODZombies" />
			<Source href="https://callofduty.fandom.com/wiki/Gauntlet_(Black_Ops_4)" name="Gauntlet" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://www.youtube.com/watch?v=fNNtcAIzcKw" name="DEAD OF THE NIGHT - HOW TO OPEN 3 SECRET DOORS (Black Ops 4 Zombies)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=pDsLWlROEZE" name="Dead of the Night's Impossible Free Perks (COD Zombies)" author="VaryenVybes" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=8mQ3-FkzIX0" name="I Completed EVERY Dead Of The Night Side EE - MENTAL" author="xD" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=OtQ-yQRKkWA" name="DEAD OF THE NIGHT - PACK A PUNCH GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=T1XzE1qPdTg" name="DEAD OF THE NIGHT - SILVER BULLETS GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=g1jCKOUqkEk" name="DEAD OF THE NIGHT - BALLISTIC SHIELD GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=z-RmuJwL1uc" name="DEAD OF THE NIGHT - ALISTAIR'S ANNIHILATOR GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=kScE8pGXjkY" name="DEAD OF THE NIGHT - CHAOS THEORY GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=c7phH17Kgek" name="DEAD OF THE NIGHT - FREE ALISTAIR'S FOLLY WONDER WEAPON GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=OSk-jTCih-E" name="DEAD OF THE NIGHT - STAKE KNIFE GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=pjjCua2dK54" name="DEAD OF THE NIGHT - SAVAGE IMPALER GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=ZC1tHZ9_seU" name="DEAD OF THE NIGHT - ALL 6 AUDIO CYLINDER LOCATIONS AND RECORDINGS (Black Ops 4 Zombies)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=PCvxZyaeCkQ" name="DEAD OF THE NIGHT - SOLO EASTER EGG GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function DeadOfTheNight() {
	return (
		<MapNavigationProvider>
			<DeadOfTheNightContent />
		</MapNavigationProvider>
	);
}

function DeadOfTheNightContent() {
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

export const Route = createFileRoute("/maps/bo4/dead-of-the-night")({
	staticData: { title: "Dead of the Night" },
	component: DeadOfTheNight,
});
