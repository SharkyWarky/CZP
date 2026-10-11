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
			<h2>Ancient Evil</h2>
			<p>Ancient Evil is the sixth Zombies map featured in Call of Duty: Black Ops 4, and the thirtieth map overall. Chronologically, it is the fourthand final map in the Chaos story. The map was released on March 26th, 2019 on PlayStation 4, and was released on April 2nd, 2019 for Xbox One and PC.</p>
			<p>The map takes place in Delphi, Greece, and serves as the finale to the Chaos storyline in Call of Duty: Black Ops 4. It features the return of the "Chaos" crew featured in Voyage of Despair and IX.</p>
			<h2>Overview</h2>
			<p>Ancient Evil is set in the underground city of Delphi, Greece; the Delphi aboveground is a red herring, a decoy according to Shaw in order to hide the real city's presence from its enemies. A Sentinel Artifact has already been activated within the city, and the trial contained within it has been going on for thousands of years, leaving the ancient city frozen in time and littered withthe undead.</p>
			<p>The map is divided into two major parts; the first part is set within the city of Delphi itself, featuring many temples and monuments dedicated to Greek legends. The map's Sentinel Artifact is located in the Amphitheater, and will allow access to the lower parts of the city after it is activated. The player can also ride Pegasus, a mystical horse that will initially transport players to the other half of the map. However, in order to ride Pegasus, the player must first locate the Golden Bridle, which can be found somewhere within the city.</p>
			<p>When all of the players board Pegasus at the Spartan Monument area of the map, Pegasus will fly the players to the "Dark Side" part of the map. There, the players will be trapped in this area until the Pack-a-Punch Machine at the Center of the World area is unlocked, which can be achieved by unlocking the two eagle cages witha Special Weapon and later defending the Center of the World area while the eagles reveal the Pack-a-Punch Machine. This Dark Side area features four key areas; the River of Sorrows, where players enter the area from withPegasus, the Cliff Ruins, where the Pegasus Strike can be crafted, the Python Pass, an area located inside a massive dead snake, and the Center of the World, where the Pack-a-Punch Machine is located. Once Pack-a-Punch is unlocked, a few portals will spawn at certain areas, allowing for fast travel between the two halves of the map.</p>
			<p>The map features two new enemies; the Gegenees and Spartoi. Returning from Voyage of Despair and IX, the Blightfathers appear as well.</p>
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
						Sentinel Artifact Active
					</TabLink>
				</li>
				<li>
					<TabLink tab="wonder-weapon">All Hands</TabLink> to Redeemed (except Gaia)
				</li>
				<ul>
					<li>
						<TabLink tab="wonder-weapon" target="charon">
							Redeemed Hand of Charon
						</TabLink>{" "}
						(step 2)
					</li>
					<li>
						<TabLink tab="wonder-weapon" target="gaia">
							Fallen Hand of Gaia
						</TabLink>{" "}
						(step 6, can be upgraded but not required)
					</li>
					<li>
						<TabLink tab="wonder-weapon" target="hemera">
							Redeemed Hand of Hemera
						</TabLink>{" "}
						(step 11)
					</li>
					<li>
						<TabLink tab="wonder-weapon" target="ouranos">
							Redeemed Hand of Ouranos
						</TabLink>{" "}
						(step 16)
					</li>
				</ul>
				<li>
					Unlock{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>
				</li>
				<li>
					<TabLink tab="buildables" target="shield">
						Shield
					</TabLink>
				</li>
				<li>
					<TabLink tab="buildables" target="pegasusstrike">
						Pegasus Strikes
					</TabLink>{" "}
					(step 16 but helpful for others)
				</li>
				<li>
					Turn the{" "}
					<TabLink tab="extras" target="eternalflame">
						Eternal Flame
					</TabLink>{" "}
					blue.
				</li>
			</ul>

			<h2>Recommended Setup</h2>
			<ul>
				<li>
					<b>Elixers</b>
					<ul>
						<li>Anywhere but Here</li>
						<li>Equip Mint</li>
						<li>Arsenal Accelerator</li>
						<li>Temporal Gift</li>
					</ul>
				</li>
				<li>
					<b>Perks</b>
					<ul>
						<li>Dying Wish</li>
						<li>Victorious Tortoise</li>
						<li>Stamin-Up</li>
						<li>Modifier - Zombshell</li>
					</ul>
				</li>
				<li>Specialist - Hammer of Valhalla</li>
				<li>Equipment - Wraith Fire</li>
				<li>Starting Weapon - Strife + Stiletto Knife</li>
			</ul>

			<h2>
				Main EE -{" "}
				<a href="https://www.youtube.com/watch?v=_lRIl5j40ns" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>
					Light your Shield's Spear on fire in the Eternal Flame by meleeing it and light 3 oil trails on fire
					<ul>
						<li>On rock in Upper Road beside some statues</li>
						<li>On the wall near zombie spawn in Intersection of Treasuries</li>
						<li>On half wall near middle stairs statue in Spartan Monument</li>
					</ul>
				</li>
				<li>With Redeemed hand of Charon, head to where pegasus picked you up and shoot a charged shot at your feet. Lookign at the statues around you, shoot the ones with glowing blue eyes (must be done with 4 statues). Can be done using multiple charged shots</li>
				<li>
					Shoot and destroy 3 glowing walls using a gun or shield spear
					<ul>
						<li>On the back wall on middle statue area of Spartan Monument stairs</li>
						<li>Outside the map near giant arrow in Intersection of Treasuries</li>
						<li>To the right of you when exiting the same area above</li>
					</ul>
				</li>
				<li>Look into the wall and shoot your spear at it as the smaller cog is touching the larger one (smaller gear will stop when successful</li>
				<li>Throw a spear into a cog in the far back area of the Stoa of Athenians when all the statues are facing inwards</li>
				<li>
					Grab the Hand of Gaia and shoot a series of roots with a single shot from the hand (1-2-3)
					<ol>
						<li>Off the left side of the stairs leading down into OFfering of the Attalids on the far wall (aim directly at it and shoot)</li>
						<li>While still on the stairs you should move around until you see 2 green flashed from beside the Danu perk statue, then fire a shot around the danu perk statue and it should hit both green flashes</li>
						<li>Position yourself down on the ground in the same room around the pillar until you see the 3 green flashes. Fire at the top set of roots and it should hit them all.</li>
					</ol>
				</li>
				<li>When the mini boss spawn, bring him over to the Intersection of Treasuries and get him to shield blast the left most red crystal with the Ra Perk Ank in it</li>
				<li>Kill him using your specialist and pick up his spear, then pick up the piece that now dropped.</li>
				<li>Return to the Offering of the Attalids area and interact with the center hole in the golden circles on the floor to place the spear.</li>
				<li>Kill an electric zombie over the sun dial. One symbol in the clock should be blue and you'll see an electric line on the dial. You must count the gold slates between the hole and the line and time it so when you stop the dial, the blue is under that electric line. Interact with the spear to stop the rotating. (repeat 2 more times with the other 2 rings. wait for screen to stop shaking before doing another. Speed and windows will change but the location will not change between rings.)</li>
				<li>Grab the Redeemed Hand of Hemera (should also get maxed out MOG 12, pegasus strikes, specalist, full shield, all perks, max ammo)</li>
				<li>Return the part you got earlier to the Ra Perk Statue and interact with it to give the statue the Hand of Hemera. You now need to defend the beam of light from skeletons with shields until the wall breaks. (if the light is blocked for too long, the beam will stop and you will need to grab the Hand and place it back down again to restart)</li>
				<li>Grab the part from within the now broken wall and return it to the Ra Perk Statue.</li>
				<li>Grab your prefered Hand gauntlet and head to the Amphitheater and stand on the blue light. Everytime a light shines, you need to run and stand in it and kill the zombies that spawn with a single activation of your weapon (you can walk around after initially entering the light) When your screen turns grey, return to the blue symbol and do it again. The process needs to be repeated 3 times (for 3 acts)</li>
				<li>
					Head to the River of Sorrows via Fast Travel and you'll find a door with symbols on it to your right. You need to shoot 6 symbols on it in the correct order using a PaP'd weapon (order and positions will never change)
					<ImageContainer>
						<img src="/images/guides/bo4/ancient-evil/symbols.webp" alt="Symbol Order" />
					</ImageContainer>
				</li>
				<li>Interact with the door and place a Pegasus Strike down on the blue symbol behind you. Fire a Charged attack with the Redeemed Hand of Ouranos at the crossbow to turn it</li>
				<li>Ignite your spear in the Eternal Flame at spawn and walk through the venom trap in Python Pass with your shield in yoru hand. (spears fire should turn green)</li>
				<li>Melee the crossbow at the top of the stairs to fire the bolt.</li>
				<li>You can now enter the BOSS FIGHT via the new golden portal behind PAP</li>
			</ol>

			<h2>Boss Fight</h2>
			<p>
				<b>Pegasus Stage</b>
			</p>
			<ul>
				<li>Damage pegasus while he's flying over you. Once he lands, use your specialist to deal damage.</li>
				<li>When pegasus gets back up, leave the island quickly and continue to shoot him. (you must down him 3 times) After the first time, an island will be destroyed, stopping you from being able to travel to it.</li>
				<li>If you step into the fire from the spears, it will damage you quite a bit but also regenerate your specialist quicker.</li>
				<li>After this phase ends, an island will be destroyed, making it inaccessable.</li>
			</ul>
			<p>
				<b>Perseus Stage</b>
			</p>
			<ul>
				<li>When Perseus teleports onto the island, damage him. Other then that, survive the waves of zombies.</li>
				<li>After shooting his glowing weak spots, he'll keel over and you need to damage him using your specialist.</li>
				<li>Once he's dead, pick up the key to finish the EE.</li>
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
			<p>Sentinel Artifact is located in the Amphitheater (head out back side of spawn and right)</p>

			<h2 id="pap">
				PaP -{" "}
				<a href="https://www.youtube.com/watch?v=gSPfXNeMzAE" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>Turn on Sentinel Artifact</li>
				<li id="bridle">
					Obtain the Golden Bridle (will spawn mini boss)
					<ul>
						<li>On white pedastol on left of Intersection of Treasuries</li>
						<li>Middle of Stoa of the Athenians near white gem</li>
					</ul>
				</li>
				<li>Interact with the circle under pegasus in the Spartan Monument (all players must be in the circle to be teleported)</li>
				<li>Go along the left side and attack the cage using your specialist melee</li>
				<li>Keep going all the way around until you find another cage hanging on the roof. Shoot the chain to make it fall then melee with specialist.</li>
				<li>Follow the eagle back to where they circle. Several skeleton will spawn that you need to kill.</li>
				<li>Once complete, PaP will appear where the large red crystal was in the center of that area.</li>
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
				Stormbound -{" "}
				<a href="https://www.youtube.com/watch?v=PF3TjuumBWw" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Find and shoot 4 coins</p>
			<ul>
				<li>Back fo zombie spawn to the left of the workbench in Marketplace</li>
				<li>On railing through broken wall in Spartan Monument with golden statue in middle stairs area</li>
				<li>To left of statue on the right in River of Sorrow after riding pegasus</li>
				<li>under table on right side of forge room in Cliff Ruins</li>
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
			<h3>TIP</h3>
			<p>Once you have unlocked a hand, at any time you can return it to the shrine to hold it and get another or to store for later.</p>

			<h2 id="dormanthand">
				Prerequisite for all hands (Dormant Hand) -{" "}
				<a href="https://www.youtube.com/watch?v=dTeQaYC1eWY" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Find one of the 4 Dormant Hands. You will find a sparkling thing in the locations which you must knife to destroy then pick up the item. (20 locations, only 4 will spawn per game). Talking with the Oracle in spawn will give you hints on which locations to check.</p>
			<ul>
				<li>Chaos of Treasures - On the red crystal when entering Intersection of Treasuries from Gymnasium Bathhouse (knife the cracked part)</li>
				<li>Near the Purple Blossoms - On the floor in Intersection of Treasuries at bottom of stairs</li>
				<li>Barque of Gold - in the Stoa of the Athenians pot at the end of the boat (knife the pot)</li>
				<li>The Shieldbearer's Fountain - next to the shield beside the Stoa of the Athenians giant fountain</li>
				<li>General's Column - at base of column when heading down to Spartan Monument from fountain</li>
				<li>Fallen Statesman - On left side by fallen statue in Spartan Monument when coming down from column</li>
				<li>Beneath the Watchful Gaze of Seus - On the ground across from the Zues perk statue in Spartan Monument (where pegasus picks you up))</li>
				<li>Golden Taurus - On the ground leaning against the pillar with the bull statue</li>
				<li>Where the Arrow Splits - In the pile of rocks beneath the giant arrow in Intersection of Treasuries (knife the pile of rocks)</li>
				<b>
					THE FOLLORING LOCATIONS ARE AFTER RIDING{" "}
					<TabLink tab="side-ee" target="bridle">
						PEGASUS
					</TabLink>
				</b>
				<li>Where Sorrows Flow Beneath - Down the stairs below 2 sticks leaning on marble torch after riding pegasus</li>
				<li>Sorrow Washes Over - Down to the left of the odin perk (knife the pile of dirt)</li>
				<li>Wheel of Water - In the Cliff RUins forge room to the left of the big fire by the wheel of water</li>
				<li>(workbench clue) - In Cliff Ruins forge room ontop of table to the right of fire</li>
				<li>Where the Serpent Snared the Eagle - On the ground ot the left of the caged eagle in Cliff Ruins</li>
				<li>Broken Bridge - On right side of broken bridge connecting Cliff Ruins and Center of the World</li>
				<li>The Shrine of Wind and Sky - To the left of the Ouranos alter in the Center of the World</li>
				<li>Top of the CEnter of the World - next to the fast travel at the top of the Center of the World</li>
				<li>Chaos Venom - Ontop of a red crystal just before entering Python Pass from Center of the World</li>
				<li>
					Where the Mighty Titan Points - red crystal to the left of the{" "}
					<TabLink tab="weapons" target="titan">
						Titan Wallbuy
					</TabLink>
				</li>
				<li>The Steps of Flesh and Bone - To the left of the charon altarjust before entering River of Sorrows from Python Pass infront of white pyre</li>
			</ul>

			<h2 id="ouranos">
				Fallen + Redeemed Hand of Ouranos (Wind) -{" "}
				<a href="https://www.youtube.com/watch?v=_hTs430DUYs" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<b>Fallen Hand of Ouranos</b>
				<li>
					Obtain a{" "}
					<TabLink tab="wonder-weapon" target="dormanthand">
						Dormant Hand
					</TabLink>{" "}
					and ride{" "}
					<TabLink tab="side-ee" target="bridle">
						Pegasus
					</TabLink>
				</li>
				<li>Find the Ouranos shrine infront of PaP and give your hand to the statue (will start a lockdown)</li>
				<li>Kill 10 glowing blue zombies while inside the circle</li>
				<li>Pick up the hand from the shrine.</li>
			</ol>
			<ol>
				<b>Redeemed Hand of Ouranos</b>
				<li>
					Use the Fallen Hand to launch 3 zombies into giant arrows feathers. a glowing feather will fly out that you need to shoot atleast twice to land near the shrine (where you did the lockdown)
					<ul>
						<li>Left of PaP in Center of the World</li>
						<li>By Charon shrine in Python Pass (near the entrance from River of Sorrows)</li>
						<li>When entering Cliff Ruins from River of Sorrows near the mystery box</li>
					</ul>
				</li>
				<li>A portal should now spawn at the shrine which you need to enter. You must use the Redeemed hand against the wave of zombies (you have unlimited ammo)</li>
			</ol>

			<h2 id="gaia">
				Fallen + Redeemed Hand of Gaia (Green) -{" "}
				<a href="https://www.youtube.com/watch?v=rczZsec28ZY" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<b>Fallen Hand of Gaia</b>
				<li>
					Obtain a{" "}
					<TabLink tab="wonder-weapon" target="dormanthand">
						Dormant Hand
					</TabLink>
				</li>
				<li>Head to the Gaia Shrine in the Spartan Monument and give the shrine the hand (will start lockdown)</li>
				<li>You must kill 10 glowing green zombies while inside the circle</li>
				<li>Pick up the hand from the shrine.</li>
			</ol>
			<ol>
				<b>Redeemed Hand of Gaia</b>
				<li>
					Shoot 3 glowing stones in 3 glowing plants using the hand. Grabbing the small plant that spawns and returning it to the shrine.
					<ul>
						<li>On the temple Terrace right outside spawn</li>
						<li>To the left of the boat area in the Stoa of the Athenians</li>
						<li>To the left of the wallbuy in the Intersection of Treasuries by the arrow</li>
					</ul>
				</li>
				<li>A portal should now spawn at the shrine which you need to enter. You must use the Redeemed hand against the wave of zombies (you have unlimited ammo)</li>
			</ol>

			<h2 id="hemera">
				Fallen + Redeemed Hand of Hemera (Light) -{" "}
				<a href="https://www.youtube.com/watch?v=-mCI4aCOhgw" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<b>Fallen Hand of Hemera</b>
				<li>
					Obtain a{" "}
					<TabLink tab="wonder-weapon" target="dormanthand">
						Dormant Hand
					</TabLink>
				</li>
				<li>Head to the Hemera Shrine in the Monument of Craterus and give the shrine the hand (will start lockdown)</li>
				<li>You must kill 10 glowing yellow zombies while inside the circle</li>
				<li>Pick up the hand from the shrine.</li>
			</ol>
			<ol>
				<b>Redeemed Hand of Hemera</b>
				<li>
					<span>You now need to return 3 orbs of light to the shrine by doing the following steps</span>
					<span>Shoot the mirror with a gun to look vertically, shoot the mirror using the hand, pick up the orb by meleeing it and return it to the shrine by meleeing one of the 3 bowls on the shrine.</span>
					<span>The orbs are timed so they need to be returned quickly. If you fail, you can shoot the hand at the mirror again to get another orb.</span>

					<ol>
						<li>on one of the pillars on spawn building, visible from Gymnasium Bathhouse. Appears in bowl on the stairs</li>
						<li>on the far bridge visible from Upper Road bridge. Orb in bowl on the end of the bridge</li>
						<li>On a spawn building pillar visible from the Temple Terrace area on the left side. Bowl directly below the mirror</li>
					</ol>
				</li>
				<li>A portal should now spawn at the shrine which you need to enter. You must use the Redeemed hand against the wave of zombies (you have unlimited ammo)</li>
			</ol>

			<h2 id="charon">
				Fallen + Redeemed Hand of Charon (Fire) -{" "}
				<a href="https://www.youtube.com/watch?v=1eytUjHK1Fs" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<b>Fallen Hand of Charon</b>
				<li>
					Obtain a{" "}
					<TabLink tab="wonder-weapon" target="dormanthand">
						Dormant Hand
					</TabLink>{" "}
					and ride{" "}
					<TabLink tab="side-ee" target="bridle">
						Pegasus
					</TabLink>
				</li>
				<li>Head to the Charon Shrine in the Python Pass (to the right after riding Pegasus) and give the shrine the hand (will start lockdown)</li>
				<li>You must kill 10 glowing red zombies while inside the circle</li>
				<li>Pick up the hand from the shrine.</li>
			</ol>
			<ol>
				<b>Redeemed Hand of Charon</b>
				<li>Get kills with the Fallen hand while in the River of Sorrow. When given the option, drink from the River.</li>
				<li>
					<span>You now need to find and collect 3 highligthed coins (There will be several dud coins which cannot be picked up, you need the 3 actual ones which will have a hold to pick up prompt and make a noise when picked up)</span>
					<span>The best strategy is to jsut walk around the entire PaP and surrounding area looking on the floor and walls for coins until all 3 have been found.</span>
					<span>WARNING: You will not regenerate health while in this vision.</span>
				</li>
				<li>Once all 3 coins have been found, interact with the shrine.</li>
				<li>A portal should now spawn at the shrine which you need to enter. You must use the Redeemed hand against the wave of zombies (you have unlimited ammo)</li>
			</ol>

			<h2 id="exalted">
				Exalted Hands Upgrade -{" "}
				<a href="https://www.youtube.com/watch?v=_JzVJ7HUR6w" target="_blank" rel="noopener noreferrer">
					Video (sightly inaccurate)
				</a>
			</h2>
			<p>
				<span>Increases ammo (40 -{">"} 50) and increases damage</span>
				<span>
					<b>REQUIREMENTS:</b> must have one of the aforementioned hands,{" "}
					<TabLink tab="buildables" target="shield">
						Shield
					</TabLink>
					,{" "}
					<TabLink tab="extras" target="eternalflame">
						Eternal Flame
					</TabLink>
				</span>
			</p>
			<ol>
				<li>Knife the Eternal Flame using your shields spear to light it on fire</li>
				<li>Take a left out of the temple (when facing the flame) and shoot your spear slightly above the bowl way high up on a pillar. It should light on fire.</li>
				<li>
					Kill a certain catalyst in each circle for each hand (must do all even if hands are locked)
					<ul>
						<li>Fire - Gaia</li>
						<li>Electric - Hemera</li>
						<li>Poison - Charon</li>
						<li>Water - Ouranos</li>
					</ul>
				</li>
				<li>After the circle has been charged, get 10 kills to fill each soul box (will stop accepting souls when complete)</li>
				<li>
					Head to PaP and interact with the machine to re-do the trials (You will not be given unlimited ammo but may use other weapons. you will be given time to get ready between each trial)
					<ul>
						<li>Gaia - All Catalyst Zombies</li>
						<li>Ouranos - All Skeletons</li>
						<li>Hemera - 3 Mini Bosses</li>
						<li>Charon - 3 Blightfathers</li>
					</ul>
				</li>
				<li>You can now PaP the hands to upgrade them.</li>
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
				<li>Marketplace - Shield</li>
				<li>Cliff Ruins (rock) - Pegasus Strikes</li>
			</ul>

			<h2 id="shield">
				Apollo's Will (Shield) -{" "}
				<a href="https://www.youtube.com/watch?v=q3SbaY09Ap8" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				Requires{" "}
				<TabLink tab="side-ee" target="power">
					sentinel artifact
				</TabLink>{" "}
				(Build at Marketplace)
			</p>
			<ul>
				<li>
					Display - Upper Roads
					<ul>
						<li>Resting on right side column at the base of the bridge</li>
						<li>On rock directly across the bridge</li>
						<li>On rock down by river</li>
					</ul>
				</li>
				<li>
					Spear
					<ul>
						<li>Leaning up against column near boat at Stoa of Athenians</li>
						<li>Intersection of Treasuries just past the cart</li>
						<li>Across form the Auger Wallbuy in Intersections of Treasuries at the base of the statue</li>
					</ul>
				</li>
				<li>
					Circle Part - Dropped by mini boss when picking up the{" "}
					<TabLink tab="side-ee" target="bridle">
						Bridle
					</TabLink>
				</li>
			</ul>

			<h2 id="pegasusstrike">
				Pegasus Strike -{" "}
				<a href="https://www.youtube.com/watch?v=nNbV-R3WONI" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				Requires{" "}
				<TabLink tab="side-ee" target="bridle">
					riding pegasus
				</TabLink>{" "}
				(Build on rock in Cliff Ruins blacksmith area)
			</p>
			<ul>
				<li>
					Sharp Thing - River of Sorrow
					<ul>
						<li>In rock on the left after riding pegasus</li>
						<li>Backwards and to the left on a square rock near a door</li>
						<li>To right of Odin perk in goblet of fire</li>
					</ul>
				</li>
				<li>
					Glowing Hammer - Python Pass
					<ul>
						<li>Leaning up against bones</li>
						<li>Leaning up against rock to the right of box location</li>
						<li>Down towards eagle cage on another rock just before walking on the snake</li>
					</ul>
				</li>
				<li>
					Anvil - Cliff Ruins
					<ul>
						<li>Behind pillar when going left after pegasus drops you off (by box location)</li>
						<li>On left side rock when entering Cliff Ruin blacksmith area</li>
						<li>On piece of stone across from the bird cage past the blacksmith area</li>
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
				<li>WraithFire - Player Choice</li>
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
					<b>Strife</b> - Temple of Apollo (500p)
				</li>
				<li>
					<b>Essex Model 07</b> - Temple of Apollo (500p)
				</li>
				<li id="saug">
					<b>Saug 9mm</b> - Marketplace (750p)
				</li>
				<li id="mog">
					<b>MOG 12</b> - Temple Terrace (1000p)
				</li>
				<li>
					<b>Spitfire</b> - River of Sorrow (1150p)
				</li>
				<li>
					<b>Swordfish</b> - Upper Road (1200p)
				</li>
				<li id="mozu">
					<b>Mozu</b> - Intersection of Treasuries (1300p)
				</li>
				<li>
					<b>MX9</b> - Offering of the Attalids (1300p)
				</li>
				<li>
					<b>GKS</b> - Monument of Craterus (1300p)
				</li>
				<li id="m1897">
					<b>M1897 Terbuchet</b> - Gymnasium Bathhouse (1400p)
				</li>
				<li>
					<b>Maddox RFB</b> - Stoa of Athenians (1400p)
				</li>
				<li>
					<b>KN-57</b> - Amphitheater (1450p)
				</li>
				<li>
					<b>ICR-7</b> - Spartan Monument (1550p)
				</li>
				<li id="vapr">
					<b>Vapr-XKG</b> - River of Sorrow (1550p)
				</li>
				<li id="auger">
					<b>Auger DMR</b> - Intersection of Treasuries (1550p)
				</li>
				<li>
					<b>Bowie Knife</b> - Amphitheater (3000p)
				</li>
				<li id="titan">
					<b>Titan</b> - Python Pass (3750p)
				</li>
				<li>
					<b>Koshka</b> - Cliff Ruins (4500p)
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
					<TabLink tab="buildables" target="pegasusstrike">
						Pegasus Strike
					</TabLink>{" "}
					(After being built)
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
			<h2>Labours of Hercules</h2>
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
						<td>Quick Kills</td>
						<td>Melee Kill All Zombies within the Time Limit.</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Turret Mode</td>
						<td>Players are Locked in Place. Unless They are Downed.</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Sub Par</td>
						<td>Use Unpacked SMGs Only.</td>
					</tr>
					<tr>
						<td>4</td>
						<td>That's the Spear It</td>
						<td>Get Required Number of Kills withthe Apollo's Will Spear Throw.</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Hot Day</td>
						<td>Players Take Damage if Not Standing in Water.</td>
					</tr>
					<tr>
						<td>6</td>
						<td>Dark Side</td>
						<td>End the Round in the Dark Side.</td>
					</tr>
					<tr>
						<td>7</td>
						<td>Loaded</td>
						<td>End the Round withGuns and Equipment at Full Ammo.</td>
					</tr>
					<tr>
						<td>8</td>
						<td>Double Damage</td>
						<td>Enemies Do Double Damage.</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Half Speed</td>
						<td>Players' Movement Speeds are Halved. Sprinting and Sliding are Disabled.</td>
					</tr>
					<tr>
						<td>10</td>
						<td>Apollo-gy Accepted</td>
						<td>Defend the Temple of Apollo.</td>
					</tr>
					<tr>
						<td>11</td>
						<td>Handy</td>
						<td>Possess a Redeemed Hand Weapon.</td>
					</tr>
					<tr>
						<td>12</td>
						<td>Shopaholic</td>
						<td>Buy Something Every 20 Seconds.</td>
					</tr>
					<tr>
						<td>13</td>
						<td>Cat-aclysm</td>
						<td>Survive a Catalyst Onslaught.</td>
					</tr>
					<tr>
						<td>14</td>
						<td>Assault on the Senses</td>
						<td>Use Unpacked Assault Rifles Only.</td>
					</tr>
					<tr>
						<td>15</td>
						<td>The Big Show</td>
						<td>Defend the Amphitheater.</td>
					</tr>
					<tr>
						<td>16</td>
						<td>Tribute</td>
						<td>Each Player Must Earn an Epic Tribute Reward. Current Tribute Level is Reset.</td>
					</tr>
					<tr>
						<td>17</td>
						<td>Spartoi Scramble</td>
						<td>Defeat a Wave of Spartoi - No Headshot Kills Allowed.</td>
					</tr>
					<tr>
						<td>18</td>
						<td>Oracle's Boon</td>
						<td>Only Weapons from Temple of Apollo Can Be Used. All Purchases Except Fast Travel are Disabled.</td>
					</tr>
					<tr>
						<td>19</td>
						<td>Stop Drop and Roll</td>
						<td>Go Prone to Stop Random Damage.</td>
					</tr>
					<tr>
						<td>20</td>
						<td>Worldly</td>
						<td>Defend the Center of the World.</td>
					</tr>
					<tr>
						<td>21</td>
						<td>Blindsided</td>
						<td>Players are Randomly Blinded</td>
					</tr>
					<tr>
						<td>22</td>
						<td>Make It Rain</td>
						<td>Take Damage If You Have Over 5000 Points.</td>
					</tr>
					<tr>
						<td>23</td>
						<td>Trial of the Gods</td>
						<td>Survive the Round.</td>
					</tr>
					<tr>
						<td>24</td>
						<td>Run Away! Run Away!</td>
						<td>Kill All Zombies within the Time Limit. Zombies Will Run Away From Players.</td>
					</tr>
					<tr>
						<td>25</td>
						<td>Stoa-ic</td>
						<td>Defend the Stoa of the Athenians.</td>
					</tr>
					<tr>
						<td>26</td>
						<td>Shots! Shots! Shots!</td>
						<td>Weapon Fire Drains Points</td>
					</tr>
					<tr>
						<td>27</td>
						<td>Keep It Light</td>
						<td>Use Unpacked LMG's Only</td>
					</tr>
					<tr>
						<td>28</td>
						<td>Farewell to Arms</td>
						<td>Kill Zombies with10 Different Weapons or Equipment.</td>
					</tr>
					<tr>
						<td>29</td>
						<td>Dinner and a Play</td>
						<td>Go to the Amphitheater witha Redeemed or Exalted Hand and Act in the Play.</td>
					</tr>
					<tr>
						<td>30</td>
						<td>Hot Perse-uit</td>
						<td>Defeat Perseus.</td>
					</tr>
				</tbody>
			</table>
			<VideoPlayer url="xhNtRjVZsn8" />
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
			<p>Offering of the Attalids</p>
			<h3>Ra</h3>
			<p>Gymnasium Bathhouse</p>
			<h3>Zeus</h3>
			<p>Spartan Monument</p>
			<h3>Odin</h3>
			<p>River of Sorrows</p>
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
				Oracle Greek Mythology Tales -{" "}
				<a href="https://youtu.be/sziIzXQjEJE?si=y-wF2A0S3tadHdEw&t=2140" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Interacting with certain wall arts will trigger the oracle dialogue about the tale.</p>
			<ul>
				<li>Apollo on chariot on left wall in spawn building</li>
				<li>Several People art on right wall in spawn</li>
				<li>broken wall art bellow giant lion statue</li>
				<li>
					pegasis and gryphin wall art before entering Amphitheater with{" "}
					<TabLink tab="side-ee" target="power">
						Sentinel Artifact
					</TabLink>
				</li>
				<li>On wall when leaving Amphitheater</li>
				<li>Statue to the left of perk machine near spawn</li>
				<li>Large golden statue in Stoa of the Athenians</li>
				<li>Box within cart in Intersection of Treasuries</li>
				<li>Art of 2 people on wall in Intersection of Treasuries when heading towards Ra Perk Statue</li>
				<li>Golden chest on Intersection of Treasuries near a large red crystal</li>
				<li>Bull statue at Spartan Monument</li>
				<li>Small Vase in Spartan Monument in corner near pyre</li>
				<li>Statue in River of Sorrow (on the right after riding pegasus)</li>
				<li>Golden apple at base of large golden statue after riding pegasus on the right</li>
				<li>Blue Fire pit in the Cliff Ruins blacksmith</li>
				<li>Golden box near torch in Cliff Ruins (on right when first entering blacksmith area)</li>
				<li>Wall art in cliff ruins before encountering the bird cage (mosaic)</li>
				<li>Small Vase when first entering Cliff Ruins on the left</li>
				<li>Large golden arrow in Python Pass</li>
				<li>Tiny scales when leaving Python Pass on the snake on the right nessled between red crystal and rock</li>
			</ul>

			<h2>
				Scrolls -{" "}
				<a href="https://youtu.be/sziIzXQjEJE?si=7u8lJDCPcrFWmaeF&t=2654" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Interacting with each scroll triggers dialogue</p>
			<ul>
				<li>On bench on the left when first entering the Amphitheater</li>
				<li>On marble bench near piles of scrolls in Intersection of Treasuries</li>
				<li>Beside tipped over torch near large bull statue in Spartan Monument</li>
				<li>Beside the boat in Stoa Of the Athenians on the left side floor</li>
				<li>
					Near{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>{" "}
					machine in nearby pile of rocks in center
				</li>
				<li>On left side beside a bowl in River of Sorrows (after riding pegasus)</li>
				<li>on the ground on the bridge path before PaP on the right side.</li>
				<li>In Python Pass on floor when entering from the back entrance accross from glowign mushrooms</li>
			</ul>

			<h2 id="tributes">Tributes</h2>
			<p>Inside Apollo's Temple and the Cliff Side: Forge there are bowls that can be interacted with to give points and start a Tribute Challenge. Doing these challenges will build up a reward you can pick up, rewards can rank from Common to Epic rarity. By doing more and more challenges you can build your way up to an Epic Reward. List of possible Tribute Challenges:</p>
			<ul>
				<li>Hold Position in a certain Location</li>
				<li>Kill Zombies in a certain Location</li>
				<li>Kill Zombies with Apollo's Will</li>
				<li>Kill Zombies with Head Shots</li>
				<li>Take Damage and Recover Health</li>
				<li>Kill Zombies with Special Weapons</li>
				<li>Kill Zombies with God Hand Wonder Weapons</li>
				<li>Do not take Damage</li>
				<li>Kill Zombies with Equipment</li>
			</ul>
			<p>List of Possible Tribute Awards:</p>
			<table>
				<thead>
					<tr>
						<th scope="col">Tier</th>
						<th scope="col">Rewards</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Common</td>
						<td>Double Points, Self Revive, Insta-Kill, Bowie Knife</td>
					</tr>
					<tr>
						<td>Rare</td>
						<td>Fire Sale, Max Ammo, PAP'd Strife, PAP'd Escargot, RK 7 Garrison PAP'd</td>
					</tr>
					<tr>
						<td>Legendary</td>
						<td>Max Ammo, Full Power, Bullet Boost, PAP'd Rampage, PAP'd Switchblade X9, PAP'd Grav</td>
					</tr>
					<tr>
						<td>Epic</td>
						<td>Free Extra Perk, Self Revive, Pegasus Strike, PAP'd Swat RFT, PAP'd Daemon 3XB, PAP'd SDM</td>
					</tr>
				</tbody>
			</table>

			<h2 id="eternalflame">Eternal Flame</h2>
			<p>The Eternal Flame can be fully lit and turned blue at the reward redemption area in Apollo's Temple by obtaining 9 Tribute Points per player in your match:</p>
			<ul>
				<li>
					<b>Solo</b> - 9 Tribute Points
				</li>
				<li>
					<b>2-Player</b> - 18 Tribute Points
				</li>
				<li>
					<b>3-Player</b> - 27 Tribute Points
				</li>
				<li>
					<b>4-Player</b> - 36 Tribute Points
				</li>
			</ul>
			<p>Different Tiers of Rewards give different amounts of Tribute Points.</p>
			<table>
				<thead>
					<tr>
						<th scope="col">Tier</th>
						<th scope="col">Rewards</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Common</td>
						<td>0.5 Tribute Points</td>
					</tr>
					<tr>
						<td>Rare</td>
						<td>1 Tribute Point</td>
					</tr>
					<tr>
						<td>Legendary</td>
						<td>4 Tribute Points</td>
					</tr>
					<tr>
						<td>Epic</td>
						<td>6 Tribute Points</td>
					</tr>
				</tbody>
			</table>

			<h2>Traps (2)</h2>
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
						<td>Venom Trap</td>
						<td>Melts the undead horde withthe snake titan's venom.</td>
						<td>Python Pass</td>
						<td>1000 Points</td>
					</tr>
					<tr>
						<td>Boiling Pool</td>
						<td>Boils the player and the undead withscalding hot water.</td>
						<td>Gymnasium Bathhouse</td>
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
						<td id="gegenees">Gegenees</td>
						<td>The Gegenees can throw spears and shield blast players. It's easily defeated by throwing spears at its head.</td>
						<td>(Big Guy)</td>
					</tr>
					<tr>
						<td>Spartoi</td>
						<td>Skeleton warriors that use shields and spears to heigthen their defense and offense. They can only be killed by headshot, otherwise they will reform after being destroyed.</td>
						<td>
							<a href="https://i.imgur.com/TPYohAA.png" rel="nofollow noopener" target="_blank">
								Here
							</a>
						</td>
					</tr>
					<tr>
						<td>Fire Catalyst</td>
						<td>Walks slowly towards players. If a player gets too close to it it will explode.</td>
						<td></td>
					</tr>
					<tr>
						<td>Poison Catalyst</td>
						<td>Does damage to players who walk near it. It turns other zombies in the nearby area also into Poison Catalysts.</td>
						<td></td>
					</tr>
					<tr>
						<td>Electric Catalyst</td>
						<td>Charges up and can unleash a blinding scream that can impair a players vision.</td>
						<td></td>
					</tr>
					<tr>
						<td>Water Catalyst</td>
						<td>Actively avoids players and can infect normal zombies and make them have more health.</td>
						<td></td>
					</tr>
					<tr>
						<td>Blightfather</td>
						<td>The Blightfather can spit acid and lock wall buys withhis acid. Can also grab onto players withits massive tongue. Its weak spot is the bulbs on its back.</td>
						<td>
							<a href="https://i.imgur.com/D8JZ4TP.jpg" rel="nofollow noopener" target="_blank">
								Here
							</a>
						</td>
					</tr>
				</tbody>
			</table>

			<h2>Fast Travel</h2>
			<p>
				Fast Travel opens AFTER{" "}
				<TabLink tab="side-ee" target="pap">
					PaP
				</TabLink>{" "}
				has been opened
			</p>
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
						<td>Spartan Monument</td>
						<td>River of Sorrow</td>
						<td>500 Points</td>
					</tr>
					<tr>
						<td>Amphitheater</td>
						<td>Cliff Side</td>
						<td>500 Points</td>
					</tr>
					<tr>
						<td>River of Sorrow</td>
						<td>Market Place</td>
						<td>500 Points</td>
					</tr>
					<tr>
						<td>Center of the World</td>
						<td>Temple Terrace</td>
						<td>500 Points</td>
					</tr>
					<tr>
						<td>Stoa of the Athenians</td>
						<td>Python Pass</td>
						<td>500 Points</td>
					</tr>
				</tbody>
			</table>

			<h2>Achievements</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Description</th>
						<th scope="col">How to Obtain</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Greek Tragedy</td>
						<td>In Ancient Evil, finish what was started</td>
						<td>
							<TabLink tab="main-ee">Complete the Main Quest</TabLink>
						</td>
					</tr>
					<tr>
						<td>Devoted Follower</td>
						<td>In Ancient Evil, survive the first 20 rounds without leaving the interior of the Temple of Apollo</td>
						<td>Complete the first 20 rounds staying inside Apollo's Temple without leaving it. You can use bots and they can leave the Temple but make sure you do not. Use Wraith Fire grenades and a strong Specialist Weapon in order to make this easier.</td>
					</tr>
					<tr>
						<td>A Worthy Tribute</td>
						<td>In Ancient Evil, fully reignite the Eternal Flame by round 15</td>
						<td>
							<TabLink tab="extras" target="eternalflame">
								Light the flame
							</TabLink>{" "}
							inside of Apollo's Temple blue before round 15. How to do so is stated earlier in this guide{" "}
							<TabLink tab="extras" target="eternalflame">
								here
							</TabLink>
							.
						</td>
					</tr>
					<tr>
						<td>Move Mountains</td>
						<td>
							In Ancient Evil, impale 8 zombies with one charged attack from the{" "}
							<TabLink tab="wonder-weapon" target="gaia">
								Hand of Gaia
							</TabLink>
						</td>
						<td>Train up a horde of zombies in a large area such as the Amphitheater. Then charge up the Redeemed/Exalted Hand of Gaia and fire it at the horde.</td>
					</tr>
					<tr>
						<td>No Obol</td>
						<td>
							In Ancient Evil, drag 15 zombies to the underworld with one charged attack from the{" "}
							<TabLink tab="wonder-weapon" target="charon">
								Hand of Charon
							</TabLink>
						</td>
						<td>Train up a horde of zombies in a large area such as the Amphitheater. Then charge up the Redeemed/Exalted Hand of Charon and fire it at the ground near the horde.</td>
					</tr>
					<tr>
						<td>Too Close to the Sun</td>
						<td>
							In Ancient Evil, incinerate 20 zombies with one channel attack from the{" "}
							<TabLink tab="wonder-weapon" target="hemera">
								Hand of Hemera
							</TabLink>
						</td>
						<td>Train up a horde of zombies in a large area such as the Amphitheater. Then charge up the Redeemed/Exalted Hand of Hemera and kill all of the zombies in the horde with the light beam. Make sure you do not stop firing the beam until all of the zombies in the horde are dead.</td>
					</tr>
					<tr>
						<td>A Mighty Wind</td>
						<td>
							In Ancient Evil, fling 20 zombies with one channel attack from the{" "}
							<TabLink tab="wonder-weapon" target="ouranos">
								Hand of Ouranos
							</TabLink>
						</td>
						<td>Train up a horde of zombies in a large area such as the Amphitheater. Then charge up the Redeemed/Exalted Hand of Ouranos and kill all of the zombies in the horde with the wind blast. Make sure you do not stop firing the wind blast until all of the zombies in the horde are dead.</td>
					</tr>
					<tr>
						<td>Fly Like an Eagle</td>
						<td>In Ancient Evil, free the Eagles without switching weapons</td>
						<td>After dropping the cage with the eagle in it in the Python Pass make sure the doors to the cage in the Cliff Side are open. Use the beam from the Scepter of Ra or shot of Viper &amp; Dragon to shoot open one of the eagle cages and then quickly run over to the other cage and shoot that one open. Make sure this is done without losing your Specialist Weapon (Stamin-Up can be used to make this easier).</td>
					</tr>
					<tr>
						<td>The Best Offense is a Good Defense</td>
						<td>
							In Ancient Evil, kill a{" "}
							<TabLink tab="extras" target="gegenees">
								Gegenees
							</TabLink>{" "}
							using only{" "}
							<TabLink tab="buildables" target="shield">
								Apollo's Will
							</TabLink>
						</td>
						<td>Kill a Gegenees by only using the spear of your Apollo's Will. This can be easily done by just throwing the spears at the Gegenee's head.</td>
					</tr>
					<tr>
						<td>Four Old Gods</td>
						<td>In Ancient Evil, complete all the Primordial God Trials</td>
						<td>
							Complete the 4 challenges at the end of the quest to get{" "}
							<TabLink tab="wonder-weapon" target="exalted">
								Exalted
							</TabLink>{" "}
							Hands.
						</td>
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
			<Source href="https://callofduty.fandom.com/wiki/Ancient_Evil" name="Ancient Evil" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://www.reddit.com/r/CODZombies/wiki/ancient-evil" name="Ancient Evil | Complete Map Breakdown" author="/u/The_Beebat" source="r/CODZombies" />
			<Source href="https://www.youtube.com/watch?v=sziIzXQjEJE" name="Ancient Evil - All Easter Eggs and Secrets (Black Ops 4 Zombies) (4K)" author="JokerAlex 21" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=_JzVJ7HUR6w" name="ANCIENT EVIL - EXALTED HANDS UPGRADE GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=gSPfXNeMzAE" name="ANCIENT EVIL - PEGASUS PACK A PUNCH GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=q3SbaY09Ap8" name="ANCIENT EVIL - APOLLO'S WILL SHIELD GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=nNbV-R3WONI" name="ANCIENT EVIL - PEGASUS STRIKE EQUIPMENT GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=_hTs430DUYs" name="ANCIENT EVIL - FALLEN AND REDEEMED HAND OF OURANOS GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=rczZsec28ZY" name="ANCIENT EVIL - FALLEN AND REDEEMED HAND OF GAIA GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=-mCI4aCOhgw" name="ANCIENT EVIL - FALLEN AND REDEEMED HAND OF HEMERA GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=1eytUjHK1Fs" name="ANCIENT EVIL - FALLEN AND REDEEMED HAND OF CHARON GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
			<Source href="https://www.youtube.com/watch?v=_lRIl5j40ns" name="ANCIENT EVIL - SOLO EASTER EGG GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="Youtube" />
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function AncientEvil() {
	return (
		<MapNavigationProvider>
			<AncientEvilContent />
		</MapNavigationProvider>
	);
}

function AncientEvilContent() {
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
