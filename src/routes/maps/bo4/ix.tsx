/* ---- v2.1.0 ---- */
import { createFileRoute } from "@tanstack/react-router";
import { MapNavigationProvider, useMapNavigation } from "../../../context/MapNavigationContext";

import MapTabs from "../../../components/MapTabs";
import InfoBox from "../../../components/InfoBox";
import Source from "../../../components/Source";
import TabLink from "../../../components/TabLink";
import ImageContainer from "../../../components/ImageContainer";
import VideoPlayer from "../../../components/VideoPlayer";

import { mapModules } from "../../../data/mapModules";

import AchievementTable from "../../../components/AchievementTable";

const achievementRows = [
	{
		id: "my-home-is-the-arena",
		name: "My Home is the Arena",
		description: "Survive to Round 20 without opening a gate",
		goal: (
			<>
				<span>Spawn with MOG 12 with Long Barrel, Fast Mags, Rapid Fire, and Dragon's Breath (one-hit kill headshots till round 15)</span>
				<span>
					Wall Power elixir + Strife for remaining rounds (or{" "}
					<TabLink tab="extras" target="freestrife">
						free PaP Strife from challenges
					</TabLink>
					)
				</span>
			</>
		),
	},
	{
		id: "venerated-warrior",
		name: "Venerated Warrior",
		description: "Defeat the most venerated opponent",
		goal: (
			<>
				Complete the <TabLink tab="main-ee">main EE</TabLink>
			</>
		),
	},
	{
		id: "skilled-adversary",
		name: "Skilled Adversary",
		description: "Have a challenge banner with all 9 medallions",
		goal: (
			<>
				Complete 9{" "}
				<TabLink tab="extras" target="challenges">
					challenges
				</TabLink>
			</>
		),
	},
	{
		id: "the-slaughterhouse",
		name: "The Slaughterhouse",
		description: "Dismember 13 limbs in a single game while in the pit",
		goal: "Shoot zombies with body shots for them to lose their arms",
	},
	{
		id: "gong-like-the-wind",
		name: "Gong like the Wind",
		description: (
			<>
				Defeat all 8 challengers summoned by a{" "}
				<TabLink tab="side-ee" target="gong">
					gong
				</TabLink>{" "}
				within 5 mins
			</>
		),
		goal: "5 minutes starts upon loading in",
	},
	{
		id: "gift-of-serket",
		name: "Gift of Serket",
		description: "Acquire the Serket's Kiss",
		goal: (
			<>
				<TabLink tab="side-ee" target="pap">
					PaP
				</TabLink>{" "}
				the{" "}
				<TabLink tab="wonder-weapon" target="deathoforion">
					Death of Orion
				</TabLink>{" "}
				(acquired via Mystery Box or side EE)
			</>
		),
	},
	{
		id: "here-kitty-kitty",
		name: "Here Kitty, Kitty",
		description: "Kill a Zombie Tiger with a Brain Rotted Tiger",
		goal: "",
	},
	{
		id: "acidic-alchemy",
		name: "Acidic Alchemy",
		description: (
			<>
				Get a kill with the{" "}
				<TabLink tab="side-ee" target="acidtrap">
					acid trap
				</TabLink>{" "}
				in each of its [4] craftable locations
			</>
		),
		goal: (
			<>
				<span>Acquire all of the parts then build in each of the following locations:</span>
				<ul>
					<li>Entrance to Ra Tower</li>
					<li>Entrance to Danu Tower</li>
					<li>Stairs leading up into Odin Altar Room</li>
					<li>Stairs leading up into Zeus Altar Room</li>
				</ul>
			</>
		),
	},
	{
		id: "constellation-prize",
		name: "Constellation Prize",
		description: (
			<>
				Kill 9 zombies with a single uncharged shot from the{" "}
				<TabLink tab="wonder-weapon" target="deathoforion">
					Death of Orion
				</TabLink>
			</>
		),
		goal: (
			<>
				<span>CANNOT be done with the upgraded Serket's Kiss</span>
				<span>Hoard up a bunch of zombies and fire an uncharged shot at their heads</span>
			</>
		),
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
			<h2>IX</h2>
			<p>
				IX (pronounced Nine) is the second Zombies map featured in Call of Duty: Black Ops 4, and the twenty-sixth map overall. Chronologically, it is the third map in the Chaos story. This map introduces two new special enemies: the Destroyers and the Marauders. There are also Zombified Tigers that appear randomly throughout the map. The map also introduces a new wonder weapon, the{" "}
				<TabLink tab="wonder-weapon" target="deathoforion">
					Death of Orion
				</TabLink>
				, as well as a new variant of the shield, the{" "}
				<TabLink tab="buildables" target="shield">
					Brazen Bull
				</TabLink>
				.
			</p>
			<h2>Overview</h2>
			<p>
				IX is set in a gladiatorial arena in Egypt during the time of the Roman Empire. The map is relatively small, with players spawning in a tunnel that leads into the main arena. From there, the player can either buy the door to the Danu temple or Ra temple, with the Odin and Zeus temple gates being accessible from the inside. Each of the temples hold their respective Perk Altars and connect to a circular underground chamber, which leads into the main temple that contains the{" "}
				<TabLink tab="side-ee" target="pap">
					Pack-a-Punch
				</TabLink>{" "}
				Altar.
			</p>
			<h2>Features</h2>
			<p>IX shares similar mechanics to previous maps in the Zombies franchise. As each round progresses, difficulty gradually increases. A new element unique to this map is that in certain key areas the floors are fitted with a device that produces streams of fire. The pattern in which they go off is randomized by each round, but rotates through a few specific patterns.</p>
			<h3>Crowd Affinity</h3>
			<p>With the setting of a gladiatorial arena, you are measured by the crowd from how well you perform in the game. This is measured by the skeletal hand right above your character icon and points. The hand will gradually move to a thumbs-up the better you do and gradually move to a thumbs-down the worse you do.</p>
			<p id="posaff">To increase your affinity, you simply kill zombies. The speed in which you kill zombies matters too. The longer you take to advance between rounds might make your affinity go up slower. Killing Gladiators or Brawlers increases the affinity the most.</p>
			<p id="negaff">To lose affinity, you simply take damage. By taking damage from any zombie enemy, you have a chance of lowering the affinity. Taking damage from traps has a much higher chance to lower your affinity. Going down guarantees you lose affinity. Another way to lose affinity is by attacking the crowd by throwing a Frag Grenade, Acid Bomb, or Wraith Fires at them.</p>
			<p>When your affinity is close to being completely good or bad, the crowd will start to give you rewards. If your affinity is good or almost good, then every round the crowd will throw a random power-up to the Arena. If your affinity is bad or almost bad, then the crowd will throw a chunk of poop to the Arena. Picking up the poop makes you lose 250 points and might cause a small amount of damage to you. If you’re in the arena while your affinity is this low, the crowd might even hurl things at you, causing a decent amount of damage.</p>

			<h3>Trials</h3>
			<p>
				<span>Next to each entrance of the temples in the Arena, there is a banner that's held up by rope. By knifing the rope, you will start off a set of challenges, shown towards the left of your screen. Most of the challenges are random, but the rewards will be the same for each challenge number. The rewards spawn in the very center of the arena in a bowl that is in the direction of the temple depending on the banner you chose. The next challenge won’t start until the reward from the current challenge is picked up. The rewards will not disappear.</span>
			</p>
			<br />
			<p>Rewards</p>
			<ul>
				<li>Challenge 1: Self-Revive</li>
				<li>Challenge 2: Bonus Points Power-Up</li>
				<li>Challenge 3: Pack-A-Punch'ed Strife</li>
				<li>Challenge 4: Max Ammo Power-Up</li>
				<li>Challenge 5: Full Power Power-Up</li>
				<li>Challenge 6: A random Assault or Tactical Rifle</li>
				<li>Challenge 7: Extra Perk Power-Up</li>
				<li>Challenge 8: Max Ammo Power-Up</li>
				<li>Challenge 9: A Pack-A-Punch'ed Hades</li>
			</ul>

			<h3>Free Doors</h3>
			<p>
				Upon completion of the <TabLink tab="main-ee">main EE</TabLink>, the player will be able to open doors on any map (except Alpha Omega and Tag der Toten) for free for the remainder of the game session. This ability persists until the player closes the game. In a co-op Private Match, only the party host will gain this ability, and the ability will extend to other players as long as they are playing in the same lobby with said host.
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
			<h2>Prerequisites</h2>
			<ul>
				<li>
					<TabLink tab="side-ee" target="pap">
						PaP Open
					</TabLink>{" "}
					(4 gongs)
				</li>
				<li>
					<TabLink tab="wonder-weapon" target="deathoforion">
						Death of Orion
					</TabLink>{" "}
					(for step 3)
				</li>
				<li>Fire Bomb PaP (for step 8)</li>
				<li>
					<TabLink tab="buildables" target="shield">
						Shield
					</TabLink>{" "}
					(for step 11)
				</li>
			</ul>

			<h2>Recommended Setup</h2>
			<ul>
				<li>Specialist - Viper and Dragon</li>
				<li>Equipment - Wraith Fire</li>
				<li>Start Weapon - Strife (With Stiletto Knife)</li>
				<li>
					<b>Perks</b>
					<ul>
						<li>Bandolier Bandit</li>
						<li>Victorious Turtle</li>
						<li>Dying Wish</li>
						<li>Modifier - Stamin-Up OR Winter's Wail</li>
					</ul>
				</li>
				<li>
					<b>Elixirs</b>
					<ul>
						<li>Anywhere But Here</li>
						<li>Stock Option</li>
						<li>Equip Mint</li>
						<li>Temporal Gift</li>
					</ul>
				</li>
				<li>
					<b>During the Game</b>
					<ul>
						<li>Homunculus</li>
						<li>Hellion Salvo PaP</li>
						<li>Spitfire PaP</li>
					</ul>
				</li>
			</ul>

			<h2>
				Main EE -{" "}
				<a href="https://www.youtube.com/watch?v=frTN3VfLXB0" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li>In the PaP Room, find a skull with a symbol on its forehead (12 possible locations)</li>
				<ImageContainer>
					<img src="\images\guides\bo4\ix\ix-skull1.jpg" alt="Skull Locations 1-6" />
					<img src="\images\guides\bo4\ix\ix-skull2.jpg" alt="Skull Locations 7-12" />
				</ImageContainer>
				<li>Pull out your specialist to make the skull fall. Pick it up.</li>
				<li>
					Find the skull in the flooded crypt area by interacting with the grinder to place the skull and shooting it with 3 charged{" "}
					<TabLink tab="wonder-weapon" target="deathoforion">
						Death of Orion
					</TabLink>{" "}
					shots
				</li>
				<li>Pick up the bone mesh under the grinder</li>
				<li>
					Get the Poop and Chunk of Wood
					<ul>
						<li>
							<b>Chunk of Wood</b>

							<ol>
								<li>Get a gladiator (spawns around round 10, CANNOT be from special round) to throw his axe at one of the wood stacks in the arena. Pick up the wood chunk that flies off</li>
								<li>
									<span>Place the chunk of wood onto the chain above the cauldron in the Odin Tower</span>
									<span>
										<b>Wait a round or 2</b> (until wood looks charred)
									</span>
								</li>
								<li>Pick it back up</li>
							</ol>
						</li>
						<li>
							<b>Poop</b> - Get{" "}
							<TabLink tab="overview" target="negaff">
								Negative Affinity
							</TabLink>{" "}
							(step into arena fire and throw grenades at the crowd, indicated by red thumbs down) and wait for the crowd to throw poop into the arena. Pick it up.
						</li>
					</ul>
				</li>
				<li>
					<span>Head to the Zeus Tower Bath House and place all the ingredients into the Bowl on the right side</span>
					<span>
						<b>Wait 2 Rounds</b> (until the mixture is stinky)
					</span>
				</li>
				<li>
					<span>Place the poop again in between the trees at the bottom level of Danu Tower</span>
					<span>
						<b>Wait 2-3 Rounds</b> (Until poop becomes stinky again)
					</span>
				</li>
				<li>Get a zombie on top of the poop and kill it using the Fire Bomb PaP (screen flashes white when successful)</li>
				<li>Stand on top of the glowing poop and interact with it until screen flashes white again and you get transported</li>
				<li>On each floor, find and shoot down the glowing red pockets off the walls. (Max ammos spawn after each is destroyed)</li>
				<li>
					<span>
						Find and shoot 4 stone plates with the{" "}
						<TabLink tab="buildables" target="shield">
							shield
						</TabLink>{" "}
						gun (9 locations)
					</span>
					<span>
						<b>AFTER a symbol has been shot, a gladiator will spawn. Simply kill him and continue with the next symbol location.</b>
					</span>

					<ul>
						<li>
							<b>Arena</b> - Located above the gate that closed when you first entered the arena
						</li>
						<li>
							<b>Odin-Zeus Bridge</b> - Located on the Zeus Tower, you will notice the symbol while standing on the bridge
						</li>
						<li>
							<b>Odin-Zeus Temple Entrance</b> - Located on the Zeus side, you will find the part near the cracked arch that is hanging in ivy
						</li>
						<li>
							<b>Danu Altar Room</b> - Hidden inside the zombie window, facing the crowd
						</li>
						<li>
							<b>Flooded Crypt</b> - Located past the barricade where zombies spawn, you will find the symbol through an open door
						</li>
						<li>
							<b>Temple</b> - Located through one of the zombie windows, that happens to be next to a burning torch
						</li>
						<li>
							<b>The Pit</b> - Located above eye level, you can just make out the symbol through a crack in the wall
						</li>
						<li>
							<b>Danu Tunnel</b> - Located next to a zombie window, with a torch nearby
						</li>
						<li>
							<b>Ra Burial Chamber</b> - Through hole in the wall sitting on top of a pillar
						</li>
					</ul>
				</li>
				<li>
					<span>Go to the top of the Ra tower nad interact with the glowing blue symbol on the pillar in the center of the room.</span>
					<span>The pillar will then show you 4 symbols corresponding to 4 enemy types which you must memorize and kill in that order (bottom to top)</span>
					<span>Repeat once for a total of 8 symbols. You are allowed to kill normal zombies during this step, just not special ones. Symbols stay blue after completion</span>
					<span>
						<b>WARNING: Fire and Poison zombies explode when you're near them and counts as them dying!</b>
					</span>
					<span>Step cannot be completed on special rounds</span>
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-symbols.png" alt="Ra Pillar Symbols" />
					</ImageContainer>
				</li>
				<li>
					<span>Interact with the podium in the center of the arena to be locked into the underground temple. Find and shoot 4 hanging metal rods behind barriers to move them all the way up.</span>
					<span>
						Fastest way is to use{" "}
						<TabLink tab="buildables" target="shield">
							shield
						</TabLink>{" "}
						ammo and purchase new{" "}
						<TabLink tab="buildables" target="shield">
							shield
						</TabLink>{" "}
						when you run out
					</span>
					<ul>
						<li>Odin Tunnel - near Maddox RFB wallbuy</li>
						<li>Danu Tunnel - near Mozu wallbuy</li>
						<li>Collapsed Tunnel - near MX9 wallbuy</li>
						<li>The Cursed Room - near KN-57 wallbuy</li>
					</ul>
				</li>
				<li>
					<span>Head back to the Arena and locate the 4 prongs on the outside walls</span>
					<span>Kill 15 zombies affected by Kill-O-Watt BEFORE Kill-O-Watt kills them within the circles around the prongs (shoot zombies once for Kill-O-Watt and again for the progress)</span>
					<span>Alternatively, you can get Gladiator kills to fill the prongs halfway instantly (2 kills = full) Circle disappears when the prong is full</span>
				</li>
				<li>
					<span>Have all players interact with the 4 podiums in the middle of the arena. You will be given an unlimited specialist weapon and must survive against gladiators, tigers and brawlers for 1-2 minutes.</span>
					<span>Screen goes white upon completion.</span>
				</li>
				<li>
					Go down to the temple area and trick-shot 9 symbols (in groups of 3) so that a single shot from the{" "}
					<TabLink tab="wonder-weapon" target="deathoforion">
						Death of Orion
					</TabLink>{" "}
					hits 3 symbols. Symbols will remain glowing if hit properly
					<ul>
						<li>Danu Tunnel - Located on one of the pillars, simply jump to shoot at it to achieve the correct angle</li>
						<li>The Pit - Located on a brick wall, you will want to aim between a broken wall and directly beneath the hanging chain to get the correct angle</li>
						<li>The Crypts - Located on the cracked wall that is equip with hanging chains. You should try aiming slightly towards the right corner of the broken wall, just beneath the chains to get the correct angle</li>
						<ImageContainer>
							<img src="\images\guides\bo4\ix\ix-danu-symbol.png" alt="Danu Symbol Line-Up (Jump)" />
							<img src="\images\guides\bo4\ix\ix-pit-symbol.png" alt="Pit Symbol Line-Up" />
							<img src="\images\guides\bo4\ix\ix-crypts-symbol.png" alt="Crypts Symbol Line-Up" />
						</ImageContainer>
					</ul>
				</li>
				<li>
					<span>Head to the Pit area, stand on the podium near the grate to start a lockdown (screen glows white when activated)</span>
					<span>The max ammos will not despawn during this step</span>
					<span>When the zombies stop spawning and the Blightfather is dead, walk over to the grate and collect the sparing key</span>
					<span>
						<b>TIP: Zombies will not continue spawning until the key has been picked up (break time)</b>
					</span>
				</li>
				<li>Head back to the arena and interact with the gate to enter the boss fight when ready</li>
			</ol>

			<h2>Boss Fight</h2>
			<p>Any max ammos the boss fight supplies will not despawn.</p>
			<p>The boss consist of 3 phases:</p>
			<ol>
				<li>Waves of Gladiators, Tigers, and Brawlers</li>
				<li>First elephant</li>
				<li>Second elephant</li>
			</ol>
			<p>To take down the elephant, shoot its side armor (red weak spots) until it falls off, then attack the weak spots on its stomach and forehead</p>
		</section>
	);
}

// ============================================================
// SIDE EASTER EGGS
// ============================================================

function SideEE() {
	return (
		<section className="tab-content">
			<h2 id="pap">
				PaP -{" "}
				<a href="https://www.youtube.com/watch?v=rqx3rVWMau4" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<ol>
				<li id="gong">Ring the Gong at the top of all 4 towers and kill the boss that spawns. Collect the head power-up they drop</li>
				<li>
					Head down into the temple area underground and interact with the spikes to unlock{" "}
					<TabLink tab="side-ee" target="pap">
						Pack-a-Punch
					</TabLink>
				</li>
			</ol>

			<h2 id="acidtrap">
				Acid Trap -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=7ElqAoa70v-JgJ0b&t=345" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>
					Required to get the{" "}
					<TabLink tab="wonder-weapon" target="deathoforion">
						Death of Orion
					</TabLink>
				</span>
				<span>Build at either Ra or Danu tower entrance</span>
			</p>
			<ul>
				<li>
					<b>Pot</b>
					<ol>
						<li>
							Knife the Rope on the wall of the colosseum to start the{" "}
							<TabLink tab="extras" target="challenges">
								challenges
							</TabLink>
						</li>
						<li>After completing the first 3, claim the upgraded Strife in the center and grab the pot that spawns</li>
					</ol>
				</li>
				<li>
					<b>Cog & Chain</b>
					<ol>
						<li>In the PaP temple area on either side collect the Cog under the cage and chain hanging from the lamp (Spawn on opposite sides of same room)</li>
					</ol>
				</li>
			</ul>

			<h2>
				Viking Free Perk Easter Egg -{" "}
				<a href="https://www.youtube.com/watch?v=q3JWmJQYfF0" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Requires Wraith Fire Equipment + Recommend Equip Mint Elixir</p>
			<ol>
				<li>
					Grab the cup in the Danu-Ra Temple Entrance near gold statue buried in pots and sand
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-cup.png" alt="Cup Location" />
					</ImageContainer>
				</li>
				<li>Grab Sword in lowest right side crypt in the crypts area (laying next to skeleton)</li>
				<li>
					Golden helmet on weapon wrack in Odin Tower Entrance
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-helmet.png" alt="Golden Helmet Location" />
					</ImageContainer>
				</li>
				<li>
					Head up to the top of Odin Temple and interact with the skeleton in the boat 3 times to place sword, helmet, and cup in the appropriate places
					<ul>
						<li>Sword in Hands</li>
						<li>Cup in Boat's Mouth</li>
						<li>Helmet on Skeleton's Head</li>
					</ul>
				</li>
				<li>
					Throw your wraith fire from the Zeus tower with a lineup which will make it land on the boat (boat will stay lit)
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-lineup.png" alt="Line-Up for Wraith Fire" />
					</ImageContainer>
				</li>
				<li>Survive 7 Rounds before returning and picking up the Viking power-up beside the boat</li>
			</ol>

			<h2>
				Fire & Trap Immunity -{" "}
				<a href="https://www.youtube.com/watch?v=n9hXz4KOGuM" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Awards the player the ability to not take damage from the specific arena fire and less damage from spike and acid traps for the duration of the round</p>
			<ol>
				<li>
					Build the{" "}
					<TabLink tab="side-ee" target="acidtrap">
						Acid Trap
					</TabLink>{" "}
					and kill each of the 4 catalyst type zombies and a tiger using the trap (can be through multiple activations)
				</li>
				<li>Purchase a spike trap and slide under it without taking damage</li>
				<li>
					Purchase the{" "}
					<TabLink tab="side-ee" target="acidtrap">
						Acid Trap
					</TabLink>{" "}
					and slide under it without taking damage (will play a noise when successful)
				</li>
				<li>
					<span>Step through the arena fire once to activate the immunity (will take damage on first walk-through)</span>
					<span>Must be done for every bit of fire in the arena and every new round for immunity to take effect</span>
				</li>
			</ol>

			<h2 id="shieldupgrade">
				Iron Bull Shield Upgrade -{" "}
				<a href="https://www.youtube.com/watch?v=hx91p5y-0hw" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>
					Requires the{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>
				</span>
				<span>Parts + Upgrade are per person (everyone in a multiplayer game will need to do it themselves)</span>
			</p>
			<ol>
				<li>
					Head to the top of Zeus tower and shoot 3 bull heads so their eyes light on fire
					<ul>
						<li>Above blue banner next to cauldron in front of pillar</li>
						<li>On the roof on a golden square</li>
						<li>On top of the 3rd pillar from the left</li>
					</ul>
				</li>
				<li>
					Go to the temple and look for the sparkling piece on the ceiling above{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>
					. Shoot the piece and pick it up
				</li>
				<li>
					<span>
						Ignite the{" "}
						<TabLink tab="buildables" target="shield">
							shield's
						</TabLink>{" "}
						blade from a special enemy melee kill 4 times. (catalyst zombies, brawlers and gladiators count)
					</span>
					<span>Easiest to do by getting 8 melee kills normally then getting the 9th with a special zombie type</span>
				</li>
				<li>The part will be available on a statue in the Odin-Zeus temple entrance in the bottom</li>
				<li>
					Kill a brawler, gladiator, and tiger with the ignited{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>{" "}
					blade (you can kill normal zombies during this step as well)
				</li>
				<li>Grab the part on top of the doorway leading out of the fallen hero area by shooting it</li>
				<li>
					Go to the{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>{" "}
					workbench to grab the{" "}
					<TabLink tab="buildables" target="shield">
						Iron Bull Shield
					</TabLink>
				</li>
			</ol>

			<h2>
				Guitar Riff Max Ammo -{" "}
				<a href="https://www.youtube.com/watch?v=KA-q8QodHHI" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Rewards: Guitar Riff Plays on Max Ammo Rounds</p>
			<p>
				Requires:{" "}
				<TabLink tab="side-ee" target="pap">
					PaP
				</TabLink>{" "}
				and{" "}
				<TabLink tab="buildables" target="shield">
					Shield
				</TabLink>
			</p>
			<ol>
				<li>
					During a max ammo round, shoot one of the gladiators playing the drums above the arena door with your{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>{" "}
					(will make guitar riff)
				</li>
				<li>Get Kill-O-Watt and get 9 headshot kills (each kill will make guitar riff)</li>
				<li>
					Pull out the{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>{" "}
					and fully charge the knife. Head to the Odin Altar Room and shoot the bottom of the Zeus statue with the{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>
				</li>
				<ImageContainer>
					<img src="\images\guides\bo4\ix\ix-statue.png" alt="Bottom of Zeus Statue Lineup" />
				</ImageContainer>
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
				Mad Hatter -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=ffxyBQSDpbeOU87Z&t=753" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Plays Mad Hatter by Avenged Sevenfold</p>
			<ul>
				<li>You Must Shoot each of the Colored Coins around the map</li>
				<li>
					<b>Red</b> - In the Burial Chamber of the Ra Tower, behind a chest to the right of the room's{" "}
					<TabLink tab="weapons" target="mysterybox">
						Mystery Box
					</TabLink>{" "}
					location
				</li>
				<li>
					<b>Green</b> - Outside the left barrier in the entrance of the Danu Tower, on the underside of a wooden platform
				</li>
				<li>
					<b>Blue</b> - On the side of a wall in the grated-off hole in the entrance of the Odin Tower
				</li>
				<li>
					<b>Pink</b> - In the Zeus Altar Room of the Zeus Tower, on the side of the base of the statue adjacent from the Titan wallbuy
				</li>
			</ul>
			<h2>
				Nos Fideles -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=bg6_pYS2yC6cUvUB&t=850" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Intro Cutscene song for IX</p>
			<ul>
				<li>Survive 5 full rounds on the challenge podium</li>
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
			<h2 id="deathoforion">
				Death of Orion -{" "}
				<a href="https://www.youtube.com/watch?v=keZVPlPiYR8" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>Either pull from the Mystery Box or complete the following EE</span>
				<span>
					<b>
						Prerequisites: Build{" "}
						<TabLink tab="side-ee" target="acidtrap">
							Acid Trap
						</TabLink>{" "}
						(step 4)
					</b>
				</span>
			</p>
			<ol>
				<li>
					Activate{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>
				</li>
				<li>Go through the door to the Danu-Ra Temple Entrance and shoot a cauldron at the back of the window straight forwards</li>
				<li>
					Go to the drawbridge between the towers and look at the direction the fire arrow on the ground is facing. Go to the bottom level of that tower and grab the stone head
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-head.png" alt="Stone Head Locations" />
					</ImageContainer>
				</li>
				<li>
					Build the{" "}
					<TabLink tab="side-ee" target="acidtrap">
						Acid Trap
					</TabLink>
				</li>
				<li>Interact with the grate under the trap to place the skull. Activate the trap and collect the new part when it finishes.</li>
				<li>
					Maintain{" "}
					<TabLink tab="overview" target="posaff">
						Positive crowd affinity
					</TabLink>{" "}
					(Straight up thumb) for 1-2 rounds until you get the "Gift from Serket" Dialogue.
				</li>
				<li>In the Arena, pick up the vase that was thrown.</li>
				<li>
					<span>Head to the Danu Tower Arboretum and find the hole in the far back tree. Knife it to place the key and interact with the floor below to place the vase.</span>
					<span>
						<b>Wait 1 Round</b>
					</span>
				</li>
				<li>Pick up the Vase (should be full)</li>
				<li>
					Head to the{" "}
					<TabLink tab="weapons" target="mysterybox">
						Mystery Box
					</TabLink>{" "}
					and poison it by interacting with the heads on the left side. Spin the box to get a guaranteed{" "}
					<TabLink tab="wonder-weapon" target="deathoforion">
						Death of Orion
					</TabLink>
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
			<h3 id="tables">Table Locations</h3>
			<ul>
				<li>The Pit ground level against the stone pillar/wall area</li>
			</ul>

			<h2 id="shield">Shield</h2>
			<p>
				<TabLink tab="side-ee" target="shieldupgrade">
					Upgrade EE Available
				</TabLink>
			</p>
			<ul>
				<li>
					<b>Top Visor</b> - Top Floor of Ra Tower (3 locations)
				</li>
				<li>
					<b>Middle</b> - Odin Tower (one location per floor)
					<ul>
						<li>Floor next to support beam on bottom level</li>
						<li>
							On{" "}
							<TabLink tab="buildables" target="shield">
								shield
							</TabLink>{" "}
							rack on first level
						</li>
						<li>Leaning on the barrel near stairs on top level</li>
					</ul>
				</li>
				<li>
					<b>Key</b> - Zeus Tower (One location per floor)
					<ul>
						<li>In front of wall engraving on mantel on bottom floor</li>
						<li>In the hand of the statue across from stairs going up on first floor</li>
						<li>By the foot of a statue on top floor</li>
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
				<li>Chakrams of Vengeance</li>
				<li>Hammer of Valhalla</li>
				<li>Scepter of Ra</li>
				<li>Viper and Dragon</li>
			</ul>

			<h3>Wall Weapons</h3>
			<ul>
				<li>
					<b>ICR-7</b> - Zeus Tower Entrance (1550p)
				</li>
				<li>
					<b>Maddox RFB</b> - Odin-Zeus Temple Entrance (1450p)
				</li>
				<li>
					<b>KN-57</b> - The Crypts (1450p)
				</li>
				<li>
					<b>Vapr-XKG</b> - Odin Tower: Entrance (1550p)
				</li>
				<li>
					<b>Escargot</b> - Ra Tower: Entrance (1000p)
				</li>
				<li>
					<b>Spitfire</b> - The Pit (1150p)
				</li>
				<li>
					<b>MX9</b> - The Collapsed Tunnel (1300p)
				</li>
				<li>
					<b>Saug 9mm</b> - Danu Tower: Arboretum (750p)
				</li>
				<li>
					<b>GKS</b> - Flooded Crypt (1300p)
				</li>
				<li>
					<b>Swordfish</b> - Temple (1200p)
				</li>
				<li>
					<b>Essex Model 07</b> - Arena (500p)
				</li>
				<li>
					<b>Auger DMR</b> - Odin Altar Room (1550p)
				</li>
				<li>
					<b>Titan</b> - Zeus Altar Room (3750p)
				</li>
				<li>
					<b>Bowie Knife</b> - Ra Tower: Burial Chamber (3000p)
				</li>
				<li>
					<b>RK 7 Garrison</b> - Danu Tower: Entrance (700p)
				</li>
				<li>
					<b>M1897 Trebuchet</b> - Ra Altar Room (1400p)
				</li>
				<li>
					<b>Mozu</b> - Danu Temple (1300p)
				</li>
				<li>
					<b>Strife</b> - Arena (500p)
				</li>
				<li>
					<b>MOG 12</b> - Danu Altar Room (1000p)
				</li>
			</ul>

			<h3 id="mysterybox">Mystery Box</h3>
			<h4>Locations</h4>
			<ul>
				<li>Ra Tower: Burial Chamber</li>
				<li>Ra Altar Room</li>
				<li>The Cursed Room</li>
				<li>Fallen Hero</li>
				<li>Danu Tower: Arboretum</li>
				<li>Danu Altar Room</li>
				<li>Odin Tower: Cauldron</li>
				<li>Odin Tower Altar Room</li>
				<li>Zeus Tower: Bath House</li>
				<li>Zeus Tower Altar Room</li>
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
				<li>Swordfish</li>
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
				<li>RK 7 Garrison</li>
				<li>KAP 45</li>
				<li>SG12</li>
				<li>MOG 12</li>
				<li>Rampage</li>
				<li>Argus</li>
				<li>Hellion Salvo</li>
				<li>Ballistic Knife</li>
				<li>Reaver C86</li>
				<li>
					<TabLink tab="wonder-weapon" target="deathoforion">
						Death of Orion
					</TabLink>
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
			<h2>Veni, Vidi, Zombie!</h2>
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
						<td>What's the Point</td>
						<td>Taking Any Damage Drains All of Your Points.</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Speed Demons</td>
						<td>Survive an Onslaught of Sprinters.</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Straight Shooter</td>
						<td>Missed Shots hurt.</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Ride Shotgun</td>
						<td>Use the MOG 12 Shotgun Only.</td>
					</tr>
					<tr>
						<td>5</td>
						<td>Shielded</td>
						<td>
							Possess the{" "}
							<TabLink tab="buildables" target="shield">
								Shield
							</TabLink>{" "}
							at the End of the Round.
						</td>
					</tr>
					<tr>
						<td>6</td>
						<td>Open Sesame</td>
						<td>Open All Doors.</td>
					</tr>
					<tr>
						<td>7</td>
						<td>By The Horns</td>
						<td>
							<TabLink tab="buildables" target="shield">
								Shield
							</TabLink>{" "}
							Attacks Only.
						</td>
					</tr>
					<tr>
						<td>8</td>
						<td>Creeper</td>
						<td>Weapons and Elixirs are only usable while crouched.</td>
					</tr>
					<tr>
						<td>9</td>
						<td>IX Lives</td>
						<td>Sacrifice 9 Gladiators on the dais/podium.</td>
					</tr>
					<tr>
						<td>10</td>
						<td>Temple of Gloom</td>
						<td>Defend the Temple.</td>
					</tr>
					<tr>
						<td>11</td>
						<td>Shoot From the Hip</td>
						<td>Hip Fire Only.</td>
					</tr>
					<tr>
						<td>12</td>
						<td>Slowpoke</td>
						<td>Sprinting is Disabled.</td>
					</tr>
					<tr>
						<td>13</td>
						<td>Pack It In</td>
						<td>
							<TabLink tab="side-ee" target="pap">
								Pack-a-Punch
							</TabLink>{" "}
							Two Different Weapons during the Round.
						</td>
					</tr>
					<tr>
						<td>14</td>
						<td>Board to Death</td>
						<td>Earn 1000 Points from Boarding Openings.</td>
					</tr>
					<tr>
						<td>15</td>
						<td>When in Rome</td>
						<td>Defend the Bath House.</td>
					</tr>
					<tr>
						<td>16</td>
						<td>Perks of the Job</td>
						<td>Complete the Round with 3 Active Perks.</td>
					</tr>
					<tr>
						<td>17</td>
						<td>Shotgun Wedding</td>
						<td>Use the MOG 12 Shotgun Only.</td>
					</tr>
					<tr>
						<td>18</td>
						<td>Heads Up</td>
						<td>Kill Zombies with Headshots Only.</td>
					</tr>
					<tr>
						<td>19</td>
						<td>IX Minutes of Hell</td>
						<td>Survive for Nine Minutes.</td>
					</tr>
					<tr>
						<td>20</td>
						<td>Coliseum Carnage</td>
						<td>Defend the Arena.</td>
					</tr>
					<tr>
						<td>21</td>
						<td>You Made Your Point(s)</td>
						<td>Damage to You Causes Points Drain.</td>
					</tr>
					<tr>
						<td>22</td>
						<td>Packing Heat</td>
						<td>Possess 2 Fully-Packed Weapons at the End of the Round.</td>
					</tr>
					<tr>
						<td>23</td>
						<td>Easy, Tiger</td>
						<td>Survive the Tiger Offensive.</td>
					</tr>
					<tr>
						<td>24</td>
						<td>Feeling Trapped</td>
						<td>Kill Zombies with Traps.</td>
					</tr>
					<tr>
						<td>25</td>
						<td>Into the Pit</td>
						<td>Defend the Pit.</td>
					</tr>
					<tr>
						<td>26</td>
						<td>Weapon Roulette</td>
						<td>Your Guns Randomly Swap, and All Buys Are Disabled.</td>
					</tr>
					<tr>
						<td>27</td>
						<td>Give It Your Best Shot(gun)</td>
						<td>Use the MOG 12 Shotgun Only.</td>
					</tr>
					<tr>
						<td>28</td>
						<td>Perk-o-Late</td>
						<td>End the Round will all 4 Perks.</td>
					</tr>
					<tr>
						<td>29</td>
						<td>The Whole IX Yards</td>
						<td>Reach Each of the Destinations in Time.</td>
					</tr>
					<tr>
						<td>30</td>
						<td>... in the Room</td>
						<td>Defeat the Elephant.</td>
					</tr>
				</tbody>
			</table>
			<VideoPlayer url="ZptAaP6xPKU" />
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
			<p>Danu Altar Room</p>
			<h3>Ra</h3>
			<p>Ra Altar Room</p>
			<h3>Zeus</h3>
			<p>Zeus Altar Room</p>
			<h3>Odin</h3>
			<p>Odin Altar Room</p>
		</section>
	);
}

// ============================================================
// EXTRAS
// ============================================================

function Extras() {
	return (
		<section className="tab-content">
			<h2 id="challenges">Challenge Banners</h2>
			<p>Each player has their own Banner which they must knife down in the main arena</p>
			<table>
				<thead>
					<tr>
						<th scope="col">Tier</th>
						<th scope="col">Possible Challenges</th>
						<th scope="col">Reward</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tier 1</td>
						<td>
							<ul>
								<li>Get 5 consecutive head shot kills</li>
								<li>Melee kill 13 zombies</li>
								<li>Get 6 equipment kills</li>
							</ul>
						</td>
						<td>1 Free Self Revive</td>
					</tr>
					<tr>
						<td>Tier 2</td>
						<td>
							<ul>
								<li>Get 5 Headshots in a row</li>
								<li>Melee kill 13 zombies</li>
								<li>Get 6 equipment kills</li>
							</ul>
						</td>
						<td>500 Bonus Points (Only given to the player who picks it up)</td>
					</tr>
					<tr>
						<td>Tier 3</td>
						<td>
							<ul>
								<li>Kill 10 zombies with your Special Weapon</li>
								<li>Slide underneath a Spike Log trap without taking damage</li>
							</ul>
						</td>
						<td id="freestrife">Free Z Harmony (Pack-A-Punched Strife)</td>
					</tr>
					<tr>
						<td>Tier 4</td>
						<td>
							<ul>
								<li>Kill 5 Zombie Tigers</li>
								<li>Survive a full round inside the Temple</li>
								<li>Stop 3 Catalyst transformations</li>
								<li>
									Get 9 kills with the{" "}
									<TabLink tab="buildables" target="shield">
										Brazen Bull
									</TabLink>
								</li>
								<li>Break off 9 pieces of Gladiator Armor</li>
							</ul>
						</td>
						<td>Max Ammo Power-Up</td>
					</tr>
					<tr>
						<td>Tier 5</td>
						<td>
							<ul>
								<li>Kill 5 Zombie Tigers</li>
								<li>Survive a full round inside the Temple</li>
								<li>Stop 3 Catalyst transformations</li>
								<li>
									Get 9 kills with the{" "}
									<TabLink tab="buildables" target="shield">
										Brazen Bull
									</TabLink>
								</li>
								<li>Break off 9 pieces of Gladiator Armor</li>
							</ul>
						</td>
						<td>Full Power Power-Up</td>
					</tr>
					<tr>
						<td>Tier 6</td>
						<td>
							<ul>
								<li>Kill 5 Zombie Tigers</li>
								<li>Survive a full round inside the Temple</li>
								<li>Stop 3 Catalyst transformations</li>
								<li>
									Get 9 kills with the{" "}
									<TabLink tab="buildables" target="shield">
										Brazen Bull
									</TabLink>
								</li>
								<li>Break off 9 pieces of Gladiator Armor</li>
							</ul>
						</td>
						<td>Free LMG</td>
					</tr>
					<tr>
						<td>Tier 7</td>
						<td>
							<ul>
								<li>Maintain maximum crowd affinity for 2 minutes</li>
								<li>Kill 9 Gladiators</li>
								<li>Strike the killing blow on a Blightfather</li>
								<li>
									Hit 9 zombies with a single charged shot from the{" "}
									<TabLink tab="wonder-weapon" target="deathoforion">
										Death of Orion
									</TabLink>
								</li>
								<li>Kill a Blightfather while being grappled by its tongue</li>
							</ul>
						</td>
						<td>Free 5th Perk</td>
					</tr>
					<tr>
						<td>Tier 8</td>
						<td>
							<ul>
								<li>Maintain maximum crowd affinity for 2 minutes</li>
								<li>Kill 9 Gladiators</li>
								<li>Strike the killing blow on a Blightfather</li>
								<li>
									Hit 9 zombies with a single charged shot from the{" "}
									<TabLink tab="wonder-weapon" target="deathoforion">
										Death of Orion
									</TabLink>
								</li>
								<li>Kill a Blightfather while being grappled by its tongue</li>
							</ul>
						</td>
						<td>Max Ammo Power-Up</td>
					</tr>
					<tr>
						<td>Tier 9</td>
						<td>
							<ul>
								<li>Maintain maximum crowd affinity for 2 minutes</li>
								<li>Kill 9 Gladiators</li>
								<li>Strike the killing blow on a Blightfather</li>
								<li>
									Hit 9 zombies with a single charged shot from the{" "}
									<TabLink tab="wonder-weapon" target="deathoforion">
										Death of Orion
									</TabLink>
								</li>
								<li>Kill a Blightfather while being grappled by its tongue, Get 20 kills without leaving the Challenge Podium</li>
							</ul>
						</td>
						<td>Acheron Alliterator (PaP Hades)</td>
					</tr>
				</tbody>
			</table>
			<h2>
				Homunculus Crowd Wave -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=ddnH8PNC9IHEp5jf&t=1063" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Throwing a Homunculus (from the box) into the crowd outside the arena makes them do the wave</p>
			<h2>
				Blood Bath House -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=quiCDe7kNzQrAGHT&t=1601" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>Killing 830 zombies in the Zeus tower bath house makes the name change to "Blood Bath House"</span>
				<span>Supposedly to reference a Dev's son's birthday (August 30th)</span>
			</p>
			<h2>
				Oracle Scrolls -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=McQ4xGNNdINbGC4Y&t=1917" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Interacting with each of the following scrolls plays a quote. No gameplay changes or buffs, Only Quotes. Purely for Lore.</p>
			<ul>
				<li>
					Within the pot in the Ra Tower Burial Chamber (sarcophagus room)
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-coin1pot.png" alt="Oracle Scroll 1 Pot" />
						<img src="\images\guides\bo4\ix\ix-coin1.png" alt="Oracle Scroll 1 Location" />
					</ImageContainer>
				</li>
				<li>
					Inside a fallen bucket in The Pit
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-oraclescroll1.png" alt="Oracle Scroll 2 Location" />
					</ImageContainer>
				</li>
				<li>
					Within the cage in the Temple Area
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-oraclescroll2.png" alt="Oracle Scroll 3 Location" />
					</ImageContainer>
				</li>
				<li>
					Behind a barred window in the Flooded Crypt
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-oraclescroll3.png" alt="Oracle Scroll 4 Location" />
					</ImageContainer>
				</li>
			</ul>
			<h2>
				Barton Scrolls -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=KtuPU0mEWtyG_vF4&t=2266" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>
				<span>Purely for lore (no gameplay changes or buffs)</span>
				<span>Interact with each of the following scrolls to trigger an audio Log</span>
			</p>
			<ul>
				<li>
					In The Crypts laying next to a skeleton
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-barton1.png" alt="Barton Scroll 1 Location" />
					</ImageContainer>
				</li>
				<li>
					In the Odin Tower Entrance laying on top of a barrel
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-barton2.png" alt="Barton Scroll 2 Location" />
					</ImageContainer>
				</li>
				<li>
					In the Odin-Zeus Temple Entrance in a skeleton on the floor
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-barton3.png" alt="Barton Scroll 3 Location" />
					</ImageContainer>
				</li>
				<li>
					In the Danu Tower Arboretum next to the wall of rocks (not visible and very finnicky. Keep laying down and interacting in the corner)
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-barton4.png" alt="Barton Scroll 4 Location" />
						<img src="\images\guides\bo4\ix\ix-barton4spec.png" alt="Barton Scroll 4 Location" />
					</ImageContainer>
				</li>
			</ul>
			<h2>
				Prisoner's Quest -{" "}
				<a href="https://youtu.be/E_rjvY3MbQE?si=-2f9GBiPAIxwOPJz&t=1634" target="_blank" rel="noopener noreferrer">
					Video
				</a>
			</h2>
			<p>Reveals a Cipher which translates to "All that you believe in will crumble to dust" (no gameplay changes or rewards, purely for Lore)</p>
			<ol>
				<li>
					<span>
						Go to the pit and interact with the left corner of the{" "}
						<TabLink tab="buildables" target="shield">
							shield
						</TabLink>{" "}
						table (no message will pop up)
					</span>
					<span>After hitting the right spot, a piece of paper will spawn in a nearby empty pot/torch. Interact with it. (no noise)</span>
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-paper1.png" alt="First Page in Prisoner's Quest" />
					</ImageContainer>
				</li>
				<li>
					Go to the hallway towards Odin to find another piece of paper. Interact with it.
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-paper2.png" alt="Second Page in Prisoner's Quest" />
					</ImageContainer>
				</li>
				<li>
					Go to the temple railing overlooking{" "}
					<TabLink tab="side-ee" target="pap">
						PaP
					</TabLink>{" "}
					to find another piece. Interact with it.
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-paper3.png" alt="Final Page in Prisoner's Quest" />
					</ImageContainer>
				</li>
				<li>
					In the temple you'll hear a crying man. Go near the wall where the sound is coming from and interact with it.
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-crying1.png" alt="First Crying Wall in Prisoner's Quest" />
					</ImageContainer>
				</li>
				<li>
					Head outside the bottom entrance of Odin Tower and you'll hear him crying again. Interact with the wall.
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-crying2.png" alt="Second Crying Wall in Prisoner's Quest" />
					</ImageContainer>
				</li>
				<li>
					Near the Zeus entrance you'll hear him again. Interact with the wall.
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-crying3.png" alt="Final Crying Wall in Prisoner's Quest" />
					</ImageContainer>
				</li>
				<li>Head to The Cursed Room and lay down in the middle of the room on the circle. Interact with the floor to get another quote.</li>
				<li>Head to the temple and interact with the torch next to the snake symbol.</li>
				<li>Head to The Pit and interact with the lion fountain spewing blood on the wall</li>
				<li>Head to the bottom of Ra Tower and interact with the sarcophagus in the middle of the room</li>
				<li>
					Head to the bottom floor of Odin and interact with the middle{" "}
					<TabLink tab="buildables" target="shield">
						shield
					</TabLink>{" "}
					on the wall with the wolves
				</li>
				<li>
					Interact with the wall near the entrance to Odin
					<ImageContainer>
						<img src="\images\guides\bo4\ix\ix-finalwall.png" alt="Last Wall in Prisoner's Quest" />
					</ImageContainer>
				</li>
				<li>The wall will burst open revealing the cipher</li>
			</ol>
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
						<td>Acid Trap</td>
						<td>Melts the undead horde with corrosive acids.</td>
						<td>-</td>
						<td>1000 Points</td>
					</tr>
					<tr>
						<td>Spike Log</td>
						<td>Slices zombies to death as they run into the blades</td>
						<td>Stone Bridge/The Pit/Flooded Crypt</td>
						<td>1500 Points</td>
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
						<td>Zombie Tiger</td>
						<td>Zombie Tigers can pounce onto players doing 100 damage. They often move very slowly until they go to attack.</td>
						<td>
							<a href="https://i.imgur.com/KvsZCVq.jpg" rel="nofollow noopener noreferrer" target="_blank">
								Here
							</a>
						</td>
					</tr>
					<tr>
						<td>Gladiator</td>
						<td>Has 2 giant axes that can be hurled at players. Its armor can be shot off in order to get a good shot at its bare limbs.</td>
						<td>
							<a href="https://i.imgur.com/1cmDcx6.jpg" rel="nofollow noopener noreferrer" target="_blank">
								Here
							</a>
						</td>
					</tr>
					<tr>
						<td>Brawler</td>
						<td>A zombie than can charge up and jump at players. Its helmet can be knocked off to deal massive damage to its head.</td>
						<td>
							<a href="https://i.imgur.com/eHs2ngZ.jpg" rel="nofollow noopener noreferrer" target="_blank">
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
						<td>Charges up and can unleash a blinding scream that can impair a player's vision.</td>
						<td></td>
					</tr>
					<tr>
						<td>Water Catalyst</td>
						<td>Actively avoids players and can infect normal zombies and make them have more health.</td>
						<td></td>
					</tr>
					<tr>
						<td>Blightfather</td>
						<td>The Blightfather can spit acid and lock wall buys with his acid. Can also grab onto players with its massive tongue. Its weak spot is the bulbs on its back.</td>
						<td>
							<a href="https://i.imgur.com/D8JZ4TP.jpg" rel="nofollow noopener noreferrer" target="_blank">
								Here
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<h2>Achievements</h2>
			<AchievementTable mapId="bo4/ix" rows={achievementRows} /> <h2>Dark Ops Challenges</h2>
			<table>
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Quest</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Sands of Time</td>
						<td>
							Complete the IX <TabLink tab="main-ee">Main Quest</TabLink> in under 99 minutes
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
			<Source href="https://www.youtube.com/watch?v=rqx3rVWMau4" name="IX - PACK A PUNCH GUIDE IN 40 SECONDS (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=keZVPlPiYR8" name="IX - DEATH OF ORION GUIDE IN 2 MINUTES (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=frTN3VfLXB0" name="IX - SOLO EASTER EGG GUIDE IN 12 MINUTES (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=q3JWmJQYfF0" name="IX - FREE VIKING PERK EASTER EGG GUIDE IN 80 SECONDS (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=n9hXz4KOGuM" name="IX - FIRE AND TRAP IMMUNITY GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=vLgB9wof4QQ" name="IX - COMPLETE TROPHY GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=hx91p5y-0hw" name="IX - IRON BULL UPGRADE GUIDE (Black Ops 4 Zombies Tutorial)" author="Fast Guides Glitch" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=8-zysFeYrfU" name='THE MOST ACCURATE "IX" EASTER EGG TUTORIAL' author="Joltz" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=KJowaZD-8To" name="IX, 2026 EASTER EGG GUIDE (EASY)." author="MrTLexify" source="YouTube" />
			<Source href="https://www.youtube.com/watch?v=KA-q8QodHHI" name="NEW IMPOSSIBLE EASTER EGG SOLVED IN BLACK OPS 4 ZOMBIES! (IX Guitar Riff Easter Egg)" author="MrDalekJD" source="YouTube" />
			<Source href="https://www.reddit.com/r/CODZombies/comments/cwzuuk/weapon_locations_table/" name="Weapon locations table" author="u/StreetRaging" source="r/CODZombies" />
			<Source href="https://www.reddit.com/r/CODZombies/comments/eyzo6q/confirmed_new_music_ee_on_ix_survive_for_5_full/" name="Confirmed New Music EE on IX. Survive for 5 Full Rounds on Challenge Podium to Play Intro Cutscene Music. Credit to u/RealBlazeStorm for Info." author="u/MistuhWhite" source="r/CODZombies" />
			<Source href="https://www.youtube.com/watch?v=E_rjvY3MbQE" name="ALL SIDE EASTER EGGS - IX - BLACK OPS 4 ZOMBIES" author="ZombieSlayaMr" source="YouTube" />
			<Source href="https://callofduty.fandom.com/wiki/IX" name="IX" author="Call of Duty Wiki" source="Fandom" />
			<Source href="https://www.reddit.com/r/CODZombies/wiki/ix/" name="IX | Complete Map Breakdown" author="r/CODZombies" source="r/CODZombies" />
		</section>
	);
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function IX() {
	return (
		<MapNavigationProvider>
			<IXContent />
		</MapNavigationProvider>
	);
}

function IXContent() {
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

export const Route = createFileRoute("/maps/bo4/ix")({
	staticData: { title: "IX" },
	component: IX,
});
