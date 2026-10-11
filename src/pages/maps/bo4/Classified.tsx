/* ---- v2.0.1 ---- */
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

const tabs = [mapModules.overview, mapModules.mainEE, mapModules.sideEE, mapModules.musicEE, mapModules.wonderWeapon, mapModules.buildables, mapModules.weapons, mapModules.gauntlet, mapModules.perks, mapModules.extras, mapModules.credits];

// ============================================================
// OVERVIEW
// ============================================================

function Overview() {
	return (
		<section className="tab-content">
			<h2>Classified</h2>
			<p>Classified is a Zombies map that is included with the Black Ops Pass for Call of Duty: Black Ops 4. The fourth map featured in the game and the twenty-eighth map overall, it is a reimagining of the map "Five", which was previously featured in Call of Duty: Black Ops.</p>
			<p>The map features the "Ultimis" crew - the original versions of"Tank" Dempsey, Nikolai Belinksi, Takeo Masaki and Edward Richtofen - as the four playable characters, replacing John F. Kennedy, Robert McNamara, Richard Nixon, and Fidel Castro. The map's story follows them as they investigate The Pentagon after being teleported there from Shangri-La via overloading a teleporter with the 31-79 JGb215</p>
			<p>With the release of Operation Grand Heist, Classified can now be purchased as a standalone map without having to acquire the Black Ops Pass for $7.99 USD</p>

			<h2>Overview</h2>
			<p>Being a reimagining of "Five", Classified's layout is mostly identical. However, like Blood of the Dead, the remake of Mob of the Dead, there are a few new rooms added to the map, including the Central Filing and Main Offices on the first floor, and the Server Room in the War Room. The Perk-a-Colas are replaced by the new perk system introduced in Black Ops 4. In addition to this, the steps taken to reach the Pack-a-Punch Machine have also changed. There are also several new Mystery Box locations as well, with the initial Mystery Box location being either in the Main Offices or on the upper level of the War Room.</p>

			<h2>Story</h2>
			<p>In Classified's Intro Cutscene, the Ultimis crew is shown attempting to teleport from Shangri-La to Groom Lake in order to continue Richtofen's Grand Scheme. Just as they are about to leave, Tank fires the 31-79 JGb215, accidentally overloading the teleporter and sending them hurtling through space and time to the Pentagon in 1963. Ultimis, finding the Pentagon mostly abandoned, begin to loot the facility of its weapons and supplies, including the Winter's Howl. Samantha Maxis, still in control of the Zombies and trapped in the M.P.D on the moon, witnesses these events</p>
			<p>Simultaneously, Anton Gersh and Yuri Zavoyski activate a Gersh Device for the first time trapping Gersch inside the Casimir Mechanism and allowing Samantha to corrupt Yuri and send him to the Pentagon. Upon arrival, Yuri initiates a Zombie outbreak but is prevented from participating himself by Samantha. The Zombies attack Ultimis</p>
			<p>Ultimis endeavors to leave the Pentagon and arrive at Groom Lake, building the Teleporter Signal Amplifier in order to do so. Upon arriving, however, they discover a mostly abandoned Groom Lake with no known connection to the Moon. Samantha also speaks directly to Richtofen, discouraging him from continuing his quest and insuring him she will do everything in her power to make him fail</p>
			<p>Through unknown means, Ultimis is able to re-link the Groom Lake teleporter with Griffin Station, and the events of Moon play out as they originally did. Some time after, Ultimis returns to Earth and travels to some point in time before it was destroyed. They are captured and imprisoned by the remains by American forces, but are rescued by "Primis". "Primis" Nikolai recruits them to fight in the Great War, and the two groups depart through a portal</p>

			<h2>Gameplay</h2>
			<p>As could be expected, the map plays much like "Five". The map is split into three floors, the Office Floor, War Room, and Laboratories. Initially, the player can only travel between levels using Elevators, which cost 500 points to use. After turning on the power, teleporters activate on all floors, allowing the map to be more quickly and easily traversed. The location the player will teleport to is random, but the player can at least control what level they go to by paying attention to the symbol floating in the teleporter. An Office Chair brings the player to the Offices, A Control Panel brings the player to the War Room, and A Flask brings the player to one of the teleporters in the labs</p>
			<p>Once the power is on, 4 "DEFCON" switches can be flipped in the War Room to lower the Pentagons security and allow the player to teleport to new areas. Initially, activating DEFCON 5 will bring the player to the "Panic Room". The Panic room includes a piece of the Teleporter Signal Amplifier, and is initially free of Zombies for 30 seconds, providing players with a slight break. Once the Teleporter Signal Amplifier is built and in place, the War Room's central teleporter will bring players to Groom Lake, where they can use the Pack-a-Punch Machine</p>
			<p>The map also introduces two new buildables; the Riot Shield and the Teleporter Signal Amplifier, the latter being used to access the Pack-a-Punch Machine. With this modified teleporter, players are able to use the Pack-a-Punch Machine found in Groom Lake, the same place featured in the map Moon. The Electro-Shock Defenses return as well, although the locations for the parts needed to repair them are in different locations, with one spawning in the Server Room and the other spawning in the Porcine Research lab. The Winter's Howl also returns, and is obtainable from the Mystery Box and through completing the Project Skadi quest</p>
			<p>Unlike the original version, the Pentagon Thief is absent; he is instead replaced by Hellhounds. Like the original map, the Crawler Zombies return, and can now spawn on other levels of the map instead of just the Laboratories. The Bonfire Sale power-up also returns, and can be acquired by opening up areas of Groom Lake, which is achieved by surviving in said area every few rounds without leaving or going down</p>
			<p>Unlike other maps in Black Ops 4, Classified does not have a main quest. Instead, the ending cutscene plays automatically once players complete round 150</p>
		</section>
	);
}

// ============================================================
// MAIN EASTER EGG
// ============================================================

function MainEE() {
	return (
		<section className="tab-content">
			<h2>Recommended Setup</h2>
			<ul>
				<li></li>
			</ul>

			<h2>Main EE</h2>
			<ol>
				<li>Reach Round 150.</li>
			</ol>

			<VideoPlayer url="pNk_Z_bpL54" />
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
			<p>Go Down both elevators to the Labs and flip the switch in the middle room</p>
			<h2 id="pap">
				PaP -{" "}
				<a href="https://www.youtube.com/watch?v=yyiqYAC8kSc" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>
					<b>Circle Part Thing</b>
					<ul>
						<li>Main office under desk in lower roof area (lonely desk)</li>
						<li>On the right side of the knocked over desk in the middle of the room</li>
						<li>Leaning against the desk on the left side of the brew machine</li>
						<ImageContainer>
							<img src="\images\guides\bo4\classified\classified-pap1under.png" alt="PaP 1 Under Desk" />
							<img src="\images\guides\bo4\classified\classified-pap1over.png" alt="PaP 1 on flipped desk" />
							<img src="\images\guides\bo4\classified\classified-pap1beside.png" alt="PaP 1 beside brew machine" />
						</ImageContainer>
					</ul>
				</li>
				<li>
					<b>Cabling</b>
					<ul>
						<li>On the head of the corpse in the machine in the Morgue</li>
						<li>Sitting on the chair in the Morgue Office</li>
						<li>At the end of the metal table in the morgue</li>
						<ImageContainer>
							<img src="\images\guides\bo4\classified\classified-pap2corpse.png" alt="PaP 2 Corpse" />
							<img src="\images\guides\bo4\classified\classified-pap2chair.png" alt="PaP 2 on Chair" />
							<img src="\images\guides\bo4\classified\classified-pap2table.png" alt="PaP 2 end of metal table" />
						</ImageContainer>
					</ul>
				</li>
				<li>
					<b>Bigger Circle Thing</b>
					<ol id="panicroom">
						<li>
							Activate all of the Defcons switches in any order
							<ul>
								<li>Left side wall of War Room Upper Level</li>
								<li>War Room Upper Level on far side</li>
								<li>War Room Lower Level across from the stairs</li>
								<li>On the wall in the server room</li>
							</ul>
						</li>
						<li>Teleport to the Panic room through the teleporter in the center of the war room (glowing blue head) (After PaP is open, the Panic room can be accessed after reaching defcon 5 and going through the teleporter in the back of the server room)</li>
						<li>Grab the part where the wall has opened (far end)</li>
					</ol>
				</li>
				<li>
					Build at a Workbench (Knife the table to change what you want to craft)
					<ul>
						<li>Weapon Testing area in the first room on the left after exiting the elevator</li>
						<li>Corner of central filing room at spawn</li>
					</ul>
				</li>
				<li>
					<span>Go back to the central teleporter and interact with it to place it</span>
					<span>Behind you a new teleporter will be open to take you to PaP (must reach defcon 5 again to re-open)</span>
				</li>
			</ol>

			<h2 id="gloomlakesurvival">Groom Lake Survival</h2>
			<p>
				<span>Rewards: Max Ammo and Bonfire Sale</span>
				<span>
					Same as the final step for{" "}
					<TabLink tab="wonder-weapon" target="coldwarremedy">
						Cold War Remedy
					</TabLink>{" "}
					(can be completed before cold war remedy and winter's howl will still spawn later)
				</span>
			</p>
			<ul>
				<li>Survive 3 full rounds in Groom Lake (PaP Area) and the debris on the left side of PaP will open revealing the Power-Ups</li>
				<li>The Bonfire Sale will only spawn if the amount of hits taken is not more then the current round amount (ie. round 5 means no more then 5 hits)</li>
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
			<h2>
				Shockwave -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=eggZaKOI9O6-b9Af&t=456" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>Plays Shockwave by Kevin Sherwood</span>
				<span>Interact with 3 whiskey bottles around the map.</span>
			</p>
			<ul>
				<li>Central Filing, in the center of the room, placed on top of a set of filing cabinets</li>
				<li>War Room on the bottom floor, under one of the control panels</li>
				<li>
					Labs within the Porcine Research Lab, within a cabinet in the left most corner of the room
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-bottle1.webp" alt="Bottle 1" />
						<img src="\images\guides\bo4\classified\classified-bottle2.webp" alt="Bottle 2" />
						<img src="\images\guides\bo4\classified\classified-bottle3.webp" alt="Bottle 3" />
					</ImageContainer>
				</li>
			</ul>

			<h2>
				This Jazz is Classified -{" "}
				<a href="https://www.youtube.com/watch?v=1eqkCaETMzo" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Interact with 5 terminals in the War Room Lower Level in the following Order</p>
			<ol>
				<li>
					Under the yellow US sign
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-terminal1.png" alt="Terminal 1" />
					</ImageContainer>
				</li>
				<li>
					Across from the far back window
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-terminal2.png" alt="Terminal 2" />
					</ImageContainer>
				</li>
				<li>
					Farthest left terminal in the Server Room
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-terminal3.png" alt="Terminal 3" />
					</ImageContainer>
				</li>
				<li>
					In the main room under the defcon sign at end of stairs
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-terminal4.png" alt="Terminal 4" />
					</ImageContainer>
				</li>
				<li>
					In the server room on the terminal in the middle
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-terminal5.png" alt="Terminal 5" />
					</ImageContainer>
				</li>
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
			<h2 id="coldwarremedy">
				Cold War Remedy (Free Winter's Howl) -{" "}
				<a href="https://www.youtube.com/watch?v=LnNDzHcv4Yw" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>
					Often considered the main EE of Classfiied since the <TabLink tab="main-ee">cutscene</TabLink> doesn't require any EE-esque steps
				</span>
				<span>Rewards: Free Winter's Howl, Max Ammo Power-Up, Bonfire Sale Power-Up</span>
			</p>
			<ol>
				<li>
					Grab a gold key from the keybox by the cola perk machine in the war room
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-key.png" alt="Cold War Remedy - Keybox" />
						<img src="\images\guides\bo4\classified\classified-key1.png" alt="Cold War Remedy - Golden Key" />
					</ImageContainer>
				</li>
				<li>
					<span>Head to the middle desk in the Main Offices area and interact with the keyhole to unlock the drawer</span>
					<span>Record the number and image/map within (Der Riese)</span>
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-keyhole.png" alt="Cold War Remedy - Keyhole" />
					</ImageContainer>
				</li>
				<li>
					<span>Go into the labs area and leave the power room from the left door to reach a window with a chrome thing through it.</span>
					<span>Throw a grenade/acid grenade into or behind it. record number on picture to the left of the window (Shangri-La)</span>
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-window.png" alt="Cold War Remedy - Chrome Window" />
						<img src="\images\guides\bo4\classified\classified-chrome.png" alt="Cold War Remedy - Chrome Thing" />
					</ImageContainer>
				</li>
				<li>
					Access the Panic room by activating the defcons in this specific order
					<ol>
						<li>Upper level by giant screen</li>
						<li>Server Room</li>
						<li>To left of entrance elevator on upper level</li>
						<li>below the previous on lower level</li>
					</ol>
				</li>
				<li>Interact with the static tv on the left to move it back into the wall. record the number on the photo (Kino der Toten)</li>
				<li>
					Unlock{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>{" "}
					and PaP a weapon
				</li>
				<li>
					Shoot the plaques in the deserted hallway in the order 1-3-2-4
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-plaques.png" alt="Cold War Remedy - Plaques" />
					</ImageContainer>
				</li>
				<li>Record the number on the image that is in the now opened first plaque (Shi No Numa)</li>
				<li>
					Enter the codes into the machine by shooting the numbers in the center of the war room then interacting with the button in the following order
					<ol>
						<li>Shi No Numa</li>
						<li>Der Riese</li>
						<li>Shangri-La</li>
						<li>Kino Der Toten</li>
					</ol>
				</li>
				<li>
					<span>
						When screen says "Project Skadi Retrieved" head back to PaP and{" "}
						<TabLink tab="side-ee" target="gloomlakesurvival">
							survive 3 full rounds
						</TabLink>
					</span>
					<span>Once Completed the area to the left of PaP will open</span>
					<span>Grab the winter's Howl from the icy briefcase in the back of the new area</span>
				</li>
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
			<h2>
				Shield -{" "}
				<a href="https://www.youtube.com/watch?v=58g_vg0r5r8" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ul>
				<li>
					Part 1 - Central Filing
					<ul>
						<li>Right side of the metal detector laying against the wall</li>
						<li>Leaning against the filing cabinets</li>
						<li>Between the 2 windows on the far side</li>
						<ImageContainer>
							<img src="\images\guides\bo4\classified\classified-shield1.png" alt="Shield Part 1 - Metal Detector" />
							<img src="\images\guides\bo4\classified\classified-shieldcabinet.png" alt="Shield Part 1 - Filing Cabinets" />
							<img src="\images\guides\bo4\classified\classified-shield1window.png" alt="Shield Part 1 - Metal Detector" />
						</ImageContainer>
					</ul>
				</li>
				<li>
					Part 2 - War Room: Lower Level
					<ul>
						<li>Under the left side stairs</li>
						<li>Against the wall in the central teleporter area</li>
						<li>Leaning on the side of the computer near the window at the back right</li>
						<ImageContainer>
							<img src="\images\guides\bo4\classified\classified-shield2stairs.png" alt="Shield Part 2 - under stairs" />
							<img src="\images\guides\bo4\classified\classified-shield2wall.png" alt="Shield Part 2 - Teleporter wall" />
							<img src="\images\guides\bo4\classified\classified-shield2computer.png" alt="Shield Part 2 - Computer" />
						</ImageContainer>
					</ul>
				</li>
				<li>
					Part 3 - South & North Laboratories
					<ul>
						<li>Resting on the boxes to the left of power switch</li>
						<li>Next to the crate near teleporter 3</li>
						<li>Teleporter 2 against barrels</li>
						<ImageContainer>
							<img src="\images\guides\bo4\classified\classified-shield3boxes.png" alt="Shield Part 3 - Ontop of Boxes" />
							<img src="\images\guides\bo4\classified\classified-shield3crate.png" alt="Shield Part 3 - teleporter 3" />
							<img src="\images\guides\bo4\classified\classified-shield3barrels.png" alt="Shield Part 3 - Teleporter 2" />
						</ImageContainer>
					</ul>
				</li>
				<li>
					Build at a Workbench (Knife the table to change what you want to craft)
					<ul>
						<li>Weapon Testing area in the first room on the left after exiting the elevator</li>
						<li>Corner of central filing room at spawn</li>
					</ul>
				</li>
			</ul>

			<h2 id="electrotrap">Electro-Shock Defenses</h2>
			<p>Each part can be used to construct either the Deserted Hallway or Side Passage Electro-Shock Trap</p>
			<ul>
				<li>
					Part 1 - Server Room
					<ul>
						<li>Under the main console in the center</li>
						<li>Between a small console and server wall near door</li>
						<li>On a small Cart under a tipped over server box</li>
						<ImageContainer>
							<img src="\images\guides\bo4\classified\classified-box1.webp" alt="Box Part - Main Console" />
							<img src="\images\guides\bo4\classified\classified-box2.webp" alt="Box Part - Near Door" />
							<img src="\images\guides\bo4\classified\classified-box3.webp" alt="Box Part - Trolley" />
						</ImageContainer>
					</ul>
				</li>
				<li>
					Part 2 - Porcine Research
					<ul>
						<li>On the bottom shelf of the cupboard in the corner</li>
						<li>On the bottom of the table near the sink and wallbuy</li>
						<li>Inside the cage in the corner</li>
						<ImageContainer>
							<img src="\images\guides\bo4\classified\classified-box4.webp" alt="Box Part - bottom shelf cupboard" />
							<img src="\images\guides\bo4\classified\classified-box5.webp" alt="Box Part - under table near wallbuy" />
							<img src="\images\guides\bo4\classified\classified-box6.webp" alt="Box Part - in corner" />
						</ImageContainer>
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

			<h3 id="special_weapons">Specialists</h3>
			<ul>
				<li>Hellfire</li>
				<li>Overkill</li>
				<li>Path of Sorrows</li>
				<li>Ragnarok DG-5</li>
			</ul>

			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>Strife</b> - Side Passage (500p)
				</li>
				<li>
					<b>Essex Model 07</b> - Conference Room (500p)
				</li>
				<li id="RK_7_Garrison">
					<b>RK 7 Garrison</b> - Central Filing (700p)
				</li>
				<li>
					<b>Saug 9mm</b> - Main Offices (750p)
				</li>
				<li>
					<b>Escargot</b> - Main Offices (1000p)
				</li>
				<li>
					<b>MOG 12</b> - Deserted Hallway (1000p)
				</li>
				<li>
					<b>Spitfire</b> - War Room Upper Level (1150p)
				</li>
				<li>
					<b>MX9</b> - War Room Upper Level (1300p)
				</li>
				<li>
					<b>M1897 Trebuchet</b> - War Room Lower Level (1400p)
				</li>
				<li>
					<b>Maddox RFB</b> - North Laboratories (1400p)
				</li>
				<li>
					<b>KN-57</b> - Porcine Research (1450p)
				</li>
				<li>
					<b>ICR-7</b> - War Room Lower Level (1550p)
				</li>
				<li>
					<b>Vapr-XKG</b> - Server Room (1550p)
				</li>
				<li>
					<b>Auger DMR</b> - North Laboratories (1550p)
				</li>
				<li id="bowieknife">
					<b>Bowie Knife</b> - Weapon Testing (3000p)
				</li>
				<li>
					<b>Titan</b> - Morgue (3750p)
				</li>
				<li>
					<b>Koshka</b> - Weapon Testing (4500p)
				</li>
			</ul>

			<h3>Mystery Box</h3>
			<h4>Locations</h4>
			<ul>
				<li>Side Passage</li>
				<li>Main Offices</li>
				<li>War Room Upper Level</li>
				<li>War Room Lower Level</li>
				<li>Server Room</li>
				<li>Morgue</li>
				<li>Procine Research</li>
				<li>Weapon Testing</li>
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
				<li>Daemon 3XB</li>
				<li>Switchblade X9</li>
				<li>VMP</li>
				<li>MicroMG 9mm</li>
				<li>SwordFish</li>
				<li>Essex Model 07</li>
				<li>ABR 223</li>
				<li>S9 Stingray</li>
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
				<li>
					<TabLink tab="wonder-weapon" target="coldwarremedy">
						Winter's Howl
					</TabLink>
				</li>
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
			<h2>Death-Con Five</h2>
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
						<td>Share the Health</td>
						<td>Kill enemies to regenerate depleting health.</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Slippery</td>
						<td>Players can only attack while sliding.</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Flag Protocol</td>
						<td>Players can only attack when standing next to a flagpole.</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Bursting With Excitement</td>
						<td>
							Players can only use the{" "}
							<TabLink tab="weapons" target="RK_7_Garrison">
								RK 7 Garrison
							</TabLink>{" "}
							pistol.
						</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Tower Defense</td>
						<td>Walking, running, or sprinting causes damage.</td>
					</tr>
					<tr>
						<td>6</td>
						<td>Power Trip</td>
						<td>Activate the power before the end of this Hellhound round.</td>
					</tr>
					<tr>
						<td>7</td>
						<td>Eat and Run</td>
						<td>All enemies are sprinting.</td>
					</tr>
					<tr>
						<td>8</td>
						<td>Special Forces</td>
						<td>
							Kill 10 enemies with a{" "}
							<TabLink tab="weapons" target="special_weapons">
								Special Weapon
							</TabLink>{" "}
							this round.
						</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Brittle</td>
						<td>Complete the round with a limited number of hits across all players.</td>
					</tr>
					<tr>
						<td>10</td>
						<td>You've Been Served</td>
						<td>Defend the Server Room.</td>
					</tr>
					<tr>
						<td>11</td>
						<td>High Gas Prices</td>
						<td>Nova 6 Crawler gas causes point drain.</td>
					</tr>
					<tr>
						<td>12</td>
						<td>Down the Rabbit Hole</td>
						<td>Use 10 unique teleporters during this round.</td>
					</tr>
					<tr>
						<td>13</td>
						<td>Bear a Grudge</td>
						<td>Hunt down and open the Mystery Box 6 times this round.</td>
					</tr>
					<tr>
						<td>14</td>
						<td>No Gen</td>
						<td>No health regeneration.</td>
					</tr>
					<tr>
						<td>15</td>
						<td>Whole Hog</td>
						<td>Defend the Porcine Research Lab.</td>
					</tr>
					<tr>
						<td>16</td>
						<td>Bursting With Fear</td>
						<td>
							Players can only use the{" "}
							<TabLink tab="weapons" target="RK_7_Garrison">
								RK 7 Garrison
							</TabLink>{" "}
							pistol.
						</td>
					</tr>
					<tr>
						<td>17</td>
						<td>Walled In</td>
						<td>Make 5 unique wall buys.</td>
					</tr>
					<tr>
						<td>18</td>
						<td>Shock and Awe</td>
						<td>Get 55 trap kills and survive for 5:55.</td>
					</tr>
					<tr>
						<td>19</td>
						<td>Teleporter Tango</td>
						<td>Teleport before your timer runs out or you start taking damage.</td>
					</tr>
					<tr>
						<td>20</td>
						<td>Time to Panic</td>
						<td>Defend the Panic Room during this Nova 6 Crawler round.</td>
					</tr>
					<tr>
						<td>21</td>
						<td>Anywhere but WTF?</td>
						<td>Players randomly teleport, complete the round under the time limit.</td>
					</tr>
					<tr>
						<td>22</td>
						<td>Make It Rain</td>
						<td>Take damage while you have over 5000 points.</td>
					</tr>
					<tr>
						<td>23</td>
						<td>CQZ</td>
						<td>Zombies can only be damaged in close quarters.</td>
					</tr>
					<tr>
						<td>24</td>
						<td>Double Trouble</td>
						<td>Enemies do double damage.</td>
					</tr>
					<tr>
						<td>25</td>
						<td>Conference Call</td>
						<td>Defend the Conference Room and Hallways.</td>
					</tr>
					<tr>
						<td>26</td>
						<td>On the Clock</td>
						<td>Complete the round before the timer expires.</td>
					</tr>
					<tr>
						<td>27</td>
						<td>Bursting Your Bubble</td>
						<td>
							Players can only use the{" "}
							<TabLink tab="weapons" target="RK_7_Garrison">
								RK 7 Garrison
							</TabLink>{" "}
							pistol.
						</td>
					</tr>
					<tr>
						<td>28</td>
						<td>Out of Order</td>
						<td>Teleporters and elevators are disabled.</td>
					</tr>
					<tr>
						<td>29</td>
						<td>Nothing Special</td>
						<td>
							<TabLink tab="weapons" target="special_weapons">
								Special Weapons
							</TabLink>{" "}
							are disabled.
						</td>
					</tr>
					<tr>
						<td>30</td>
						<td>Doom Lake</td>
						<td>Defend Groom Lake.</td>
					</tr>
				</tbody>
			</table>

			<VideoPlayer url="AHy1jWfEXy4" />
		</section>
	);
}

// ============================================================
// PERKS
// ============================================================

function Perks() {
	return (
		<section className="tab-content">
			<h3>Perk Brew</h3>
			<p>Mail Offices</p>
			<h3>Perk Cola</h3>
			<p>War Room Lower Level</p>
			<h3>Perk Soda</h3>
			<p>South Laboratories</p>
			<h3>Perk Tonic</h3>
			<p>Porcine Research</p>
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
				Jumpscare EE -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=G8FfhZ7nPOOSKtUL&t=425" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Jumpscares the player by showing Primis Richtofen and playing the most annoying screeching noise</p>
			<ul>
				<li>
					Aim at the light on a building in the left hand side of Groom Lake with a sniper rifle
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-jumpscare.png" alt="Jumpscare Location" />
						<img src="\images\guides\bo4\classified\classified-jumpscarerich.png" alt="Jumpscare Image" />
					</ImageContainer>
				</li>
			</ul>

			<h2 id="knockknock">
				Knock Knock EE -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=LvhwuowyQV8GXOLF&t=151" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>
					Interact with the door in the Main Offices after the dialogue ends several times until Samantha gets mad and spawns ~30 nova crawlers
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-knockknock.png" alt="Knock Knock Door" />
					</ImageContainer>
				</li>
			</ol>

			<h2>
				Hidden Portrait EE -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=RhoK735PHOsXGnls&t=293" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Purely Lore (no gameplay changes or buffs)</p>
			<ol>
				<li>
					Turn on{" "}
					<TabLink tab="side-ee" target="power">
						Power
					</TabLink>{" "}
					and purchase the{" "}
					<TabLink tab="weapons" target="bowieknife">
						Bowie knife
					</TabLink>
				</li>
				<li>
					Return to the office level and melee 5 portraits to make them straight
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-portrait1.png" alt="Portrait 1" />
						<img src="\images\guides\bo4\classified\classified-portrait2.png" alt="Portrait 2" />
						<img src="\images\guides\bo4\classified\classified-portrait3.png" alt="Portrait 3" />
						<img src="\images\guides\bo4\classified\classified-portrait4.png" alt="Portrait 4" />
						<img src="\images\guides\bo4\classified\classified-portrait5.png" alt="Portrait 5" />
					</ImageContainer>
				</li>
				<li>Activate Defcon 5, in the panic room interact with the blank portrait</li>
			</ol>

			<h2>
				Samantha Nursery Rhyme -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=M1AwVkRH78ur6g7Z&t=369" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Standing in a specific corner in the Morgue for roughly a minute will make Samantha recite a Nursery Rhyme</p>
			<ImageContainer>
				<img src="\images\guides\bo4\classified\classified-corner.png" alt="Samantha Nursery Rhyme Corner" />
			</ImageContainer>

			<h2>
				Samanthas Wisps -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=NmbuiXlZvPOUf8zY&t=1578" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Each character can find a yellow wisp which can be shot to get a samantha dialogue the character</p>
			<ul>
				<li>
					Richtofen - Porcine Research (through window beside the courtain)
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-wisprichtofen.png" alt="Richtofen - Porcine Research" />
					</ImageContainer>
				</li>
				<li>
					Dempsey - Weapon Testing (through window beside the courtain)
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-wispdempsey.png" alt="Dempsey - Weapon Testing" />
					</ImageContainer>
				</li>
				<li>
					Takeo - South Laboratories (through window near teleporter 3)
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-wisptakeo.png" alt="Takeo - South Laboratories" />
					</ImageContainer>
				</li>
				<li>
					Nikolai - Morgue (in the barrel holder in the office)
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-wispnikolai.png" alt="Nikolai - Morgue" />
					</ImageContainer>
				</li>
			</ul>

			<h2>
				Red Phones -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=DS6gkv2GxKUSqjvL&t=3084" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Activate 3 Red Phones around the map by shooting them with a Kill-O-Watt gun (depending on which phone was shot last determines the audio log played. can be done once per game)</p>
			<ul>
				<li>Side Passage on the table at the end of the hall (by FDR Plaque) (Stuhlinger)</li>
				<li>
					In the{" "}
					<TabLink tab="side-ee" target="panicroom">
						panic room
					</TabLink>{" "}
					on the table to your immediate left (Samantha)
				</li>
				<li>
					infront of the{" "}
					<TabLink tab="side-ee" target="power">
						power switch
					</TabLink>{" "}
					on the table with blue-print (Maxis)
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-phone1.webp" alt="Stuhlinger" />
						<img src="\images\guides\bo4\classified\classified-phone2.webp" alt="Samantha" />
						<img src="\images\guides\bo4\classified\classified-phone3.webp" alt="Maxis" />
					</ImageContainer>
				</li>
			</ul>

			<h2>
				Film Reels -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=LQ40kfb7KEXs44eE&t=1988" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Five Film Reels can be found around the map and played on the Morgue projector individually</p>
			<ul>
				<li>
					Central filing on the desk
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-reel1.png" alt="Film Reel 1 - Central Filing" />
					</ImageContainer>
				</li>
				<li>
					War Room Lower Level on the computer to the right of the teleporter
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-reel2.png" alt="Film Reel 2 - War Room: Lower Level" />
					</ImageContainer>
				</li>
				<li>
					Server Room on the shelf to the left of the defcon sign
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-reel3.png" alt="Film Reel 3 - Server Room" />
					</ImageContainer>
				</li>
				<li>
					Porcine Research on the edge of the sink
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-reel4.png" alt="Film Reel 4 - Porcine Research" />
					</ImageContainer>
				</li>
				<li>
					Morgue on the table next to the sink
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-reel5.png" alt="Film Reel 5 - Morgue" />
					</ImageContainer>
				</li>
			</ul>

			<h2>
				Punch Cards Audio -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=4NzqW-2zs_iFL8KP&t=564" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>There are 7 punch cards around the map that can be picked up.</span>
				<span>To play the tapes, you need the battery in weapon testing on the shelf</span>
				<span>You can insert the battery into a server in the Server Room and shocking it with Kill-O-Watt to activate it. Punch cards can now be inserted to play.</span>
				<span>AFTER completing the punch cards, a grenade can be thrown at hangar 4 to get additional dialogue</span>
			</p>
			<ImageContainer>
				<img src="\images\guides\bo4\classified\classified-battery.webp" alt="Battery Location" />
				<img src="\images\guides\bo4\classified\classified-server.webp" alt="Server Location" />
			</ImageContainer>
			<ul>
				<li>
					Central Filing
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-card1.webp" alt="Punch Card 1 - Central Filing" />
					</ImageContainer>
				</li>
				<li>
					Server Room
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-card2.webp" alt="Punch Card 2 - Server Room" />
					</ImageContainer>
				</li>
				<li>
					<TabLink tab="side-ee" target="panicroom">
						Panic Room
					</TabLink>
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-card3.webp" alt="Punch Card 3 - Panic Room" />
					</ImageContainer>
				</li>
				<li>
					Weapon Testing
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-card4.webp" alt="Punch Card 4 - Weapon Testing" />
					</ImageContainer>
				</li>
				<li>
					War Room: Upper Level
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-card5.webp" alt="Punch Card 5 - War Room: Upper Level" />
					</ImageContainer>
				</li>
				<li>
					Main Office
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-card6.webp" alt="Punch Card 6 - Main Offices" />
					</ImageContainer>
				</li>
				<li>
					<TabLink tab="side-ee" target="pap">
						Groom Lake (PaP)
					</TabLink>
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-card7.webp" alt="Punch Card 7 - Groom Lake (PaP)" />
					</ImageContainer>
				</li>
			</ul>

			<h2>
				Audio Reel -{" "}
				<a href="https://youtu.be/31E8kCaeohU?si=YHZx1Gqafkwc8Z7l&t=2582" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>There are 5 radios around the map which can be interacted with to play dialogue</p>
			<ul>
				<li>
					Central Filing
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-radio1.png" alt="Audio Reel 1 - Central Filing" />
					</ImageContainer>
				</li>
				<li>
					Main Offices
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-radio2.png" alt="Audio Reel 2 - Main Offices" />
					</ImageContainer>
				</li>
				<li>
					War Room: Upper Level
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-radio3.png" alt="Audio Reel 3 - War Room: Upper Level" />
					</ImageContainer>
				</li>
				<li>
					Server Room
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-radio4.png" alt="Audio Reel 4 - Server Room" />
					</ImageContainer>
				</li>
				<li>
					<TabLink tab="side-ee" target="pap">
						Groom Lake (PaP)
					</TabLink>
					<ImageContainer>
						<img src="\images\guides\bo4\classified\classified-radio5.png" alt="Audio Reel 5 - Groom Lake (PaP)" />
					</ImageContainer>
				</li>
			</ul>

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
						<td>Shocks zombies with high voltages and kills them instantly.</td>
						<td>Side Passage/Deserted Hallway</td>
						<td>1000 Points</td>
					</tr>
				</tbody>
			</table>

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
						<td>Nova Six Crawlers</td>
						<td>Zombies that crawl on the ground and will explode and disperse blinding Nova Six gas when killed with a bullet gun.</td>
						<td>
							<a href="https://i.imgur.com/FxWRK7H.jpg" rel="nofollow noopener" target="_blank">
								Here
							</a>
						</td>
					</tr>
					<tr>
						<td>Hellhounds</td>
						<td>Hellhounds run faster than any other zombie but have much less health.</td>
						<td>
							<a href="https://i.imgur.com/UDLmktJ.jpg" rel="nofollow noopener" target="_blank">
								Here
							</a>
						</td>
					</tr>
				</tbody>
			</table>

			<h2>Achievements</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Description</th>
						<th scope="col">Goal</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<TabLink tab="wonder-weapon" target="coldwarremedy">
								Cold War Remedy
							</TabLink>
						</td>
						<td>In Classified, retrieve and equip the Project Skadi prototype</td>
						<td>
							Complete the{" "}
							<TabLink tab="wonder-weapon" target="coldwarremedy">
								Free Winter's Howl EE
							</TabLink>
						</td>
					</tr>
					<tr>
						<td>Breaking the Ice</td>
						<td>In Classified, shatter 115 zombies in a single game</td>
						<td>Easiest with the upgraded Winter's Howl (Freeze with Winter's Howl then shoot with gun)</td>
					</tr>
					<tr>
						<td>Shock Value</td>
						<td>In Classified, kill 115 zombies with electric traps in a single game</td>
						<td>
							Build the{" "}
							<TabLink tab="buildables" target="electrotrap">
								Shock Trap
							</TabLink>{" "}
							and alternating which trap you kill with
						</td>
					</tr>
					<tr>
						<td id="powerstruggle">Power Struggle</td>
						<td>In Classified, reach round 20 without turning on the power</td>
						<td>
							<span>
								Complete at the same time as{" "}
								<TabLink tab="extras" target="thehighestoffice">
									The Highest Office
								</TabLink>
							</span>
							<span>Restart game until mystery box spawns in the mail office (can be completed on casual and with bots (not recommended))</span>
						</td>
					</tr>
					<tr>
						<td>Preemptive Strike</td>
						<td>In Classified, kill 50 Nova 6 Crawlers without letting them explode in a single game</td>
						<td>
							Get ~30 via the{" "}
							<TabLink tab="extras" target="knockknock">
								Knock Knock EE
							</TabLink>{" "}
							and kill the rest over time
						</td>
					</tr>
					<tr>
						<td id="thehighestoffice">The Highest Office</td>
						<td>In Classified, reach round 20 without using an elevator</td>
						<td>
							<span>
								Complete at the same time as{" "}
								<TabLink tab="extras" target="powerstruggle">
									Power Struggle
								</TabLink>
							</span>
							<span>Restart game until mystery box spawns in the mail office (can be completed on casual and with bots (not recommended))</span>
						</td>
					</tr>
					<tr>
						<td>Crawl for Help</td>
						<td>In Classified, while in last stand use a teleporter and then get revived in a single game</td>
						<td>Can be done solo with a revive token</td>
					</tr>
					<tr>
						<td>Step on the Gas</td>
						<td>In Classified, kill 50 zombies while affected by Nova 6 Crawler gas in a single game</td>
						<td>shoot a nova crawler to make it explode and get zombies to walk through it before killing them</td>
					</tr>
					<tr>
						<td>Pent-up-agon</td>
						<td>In Classified, complete 5 consecutive rounds without leaving the war room elevator in a single game</td>
						<td>
							Get as many points as possible (
							<TabLink tab="extras" target="knockknock">
								knock knock EE
							</TabLink>
							) to get set-up. End a round while in the elevator then don't leave until the achievement pops
						</td>
					</tr>
					<tr>
						<td>Going Everywhere Fast</td>
						<td>In Classified, use a teleporter 7 times in less than a minute in a single game</td>
						<td>Open most of the map then run through every possible teleporter until the trophy pops</td>
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
			<Source href="https://callofduty.fandom.com/wiki/Gauntlet_(Black_Ops_4)" name="Gauntlet" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://callofduty.fandom.com/wiki/Classified" name="Classified" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://www.youtube.com/watch?v=1eqkCaETMzo" name="CLASSIFIED Easter Eggs: 'This Jazz is Classified' (Intro Music) Guide (4K)" author="JokerAlex 21" source="Youtube" />
			<Source href="https://www.reddit.com/r/CODZombies/wiki/classified/" name="Classified | Complete Map Breakdown" author="u/The_BeeBat" source="r/CODZombies" />
			<Source href="https://www.youtube.com/watch?v=31E8kCaeohU" name="ALL SIDE EASTER EGGS - CLASSIFIED - BLACK OPS 4 ZOMBIES" author="ZombieSlayaMr" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=58g_vg0r5r8" name="CLASSIFIED - RIOT SHIELD GUIDE IN 60 SECONDS (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=LnNDzHcv4Yw" name="CLASSIFIED - FREE WINTER'S HOWL GUIDE IN 3 MINUTES (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=yyiqYAC8kSc" name="CLASSIFIED - PACK A PUNCH GUIDE IN 90 SECONDS (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=zQqr-G00QiM" name="CLASSIFIED - COMPLETE TROPHY GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function Classified() {
	return (
		<MapNavigationProvider>
			<ClassifiedContent />
		</MapNavigationProvider>
	);
}

function ClassifiedContent() {
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
