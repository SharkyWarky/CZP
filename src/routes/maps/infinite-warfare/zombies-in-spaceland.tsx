import { MapNavigationProvider, useMapNavigation } from "../../../context/MapNavigationContext";

import InfoBox from "../../../components/InfoBox";
import MapTabs from "../../../components/MapTabs";
import Source from "../../../components/Source";
import TabLink from "../../../components/TabLink";
/*
import ImageContainer from "../../../components/ImageContainer";
import VideoPlayer from "../../../components/VideoPlayer";
*/

import { createFileRoute } from "@tanstack/react-router";
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
            <h2>Zombies in Spaceland</h2>
            <p>Zombies in Spaceland is the first Zombies map featured in Call of Duty: Infinite Warfare, launching with the rest of the game on November 4 for the Playstation 4, Xbox One, and PC. It features a brand new cast of four aspiring actors who audition for a role in eccentric filmmaker Willard Wyler's newest film, the titular Zombies in Spaceland. However, Wyler commits a ritual that sucks the four actors into the film, causing them to be the stars of Zombies in Spaceland.</p>
            <h2>Overview</h2>
            <p>Zombies in Spaceland is set entirely in the "Spaceland" amusement park, allowing players to ride rides, play games, and explore the behind the scenes aspects of a theme park all while surviving against the Zombie horde. The map features brand new mechanics such as arcade machines like the Ghosts N Skulls and David Hasselhoff as the park's DJ.</p>
            <p>The map contains many classic elements of the Treyarch Zombies mode, although most features have been retooled or at least given a new look to better fit Infinite Warfare's aesthetic. Gameplay basics such as zombies, rounds, points, and difficulty increases as the game goes on are all present. Power-Ups, Perks, and the Pack-a-Punch Machine all return. The Mystery Box is also present, but now known as the Magic Wheel.</p>
            <p>Perks are now Candy Perks, and are mostly equivalent or slightly modified from the Perk-a-Cola of previous games. Zombies in Spaceland does introduce a completely new perk, Trail Blazers. Similarly, the selection of Power-Ups is nearly equivalent to past games, with the addition of the Infinite Ammo and Infinite Grenades power-ups.</p>
            <p>Buildables also return in Zombies in Spaceland. The buildables in this map include N31L the robot, the Seti-Com, and the four Weapons of Rock Wonder Weapons; the Shredder, the Head Cutter, the Dischord, and the Face Melter.</p>
            <br />
            <p>In addition to the Weapons of Rock, the map contains two more Wonder Weapons. The Forge Freeze, which can be obtained as a prize from the arcade, and the Arcane Core attachment which gives regular projectile weapons Wonder Weapon like powers and effects.</p>
            <p>While players do fight standard Zombies, Zombies in Spaceland introduces two other primary enemies; the special round Clown Zombie and the elite Brute.</p>
            <p>Being that Zombies in Spaceland is the first map in the Infinite Warfare zombies series, it also introduces many new items and gameplay staples of this iteration of the mode. The Armageddon, the Cryo Grenade, Rewind, Transponder, Portal Generator, Black Hole Grenade, Plasma Grenade, Cluster Grenade, C4, Concussion Grenade, Bio Spike and Gas Grenade throwables are all introduced. The map brings the new Souvenir Coin Machine for you to build traps that can help you deal with the horde. The map also includes the Arcade and the Lost and Found mechanics. Unique to this map, players may find Shades, allowing them to see hidden targets around the map.</p>
            <p>The maps Easter Egg directly pits players against a hostile faction of Alien (Infinite Warfare), in order to obtain a piece of the Soul Key and allow the actors to escape the film.</p>

            <h2>Layout</h2>
            <p>Zombies in Spaceland is a large map, with more open lanes. The map is split into five different sections:</p>
            <h3>Entrance/Junction</h3>
            <p>The players spawn at the entrance of Spaceland, where a power switch can be located at the back room to their left, which powers up the area of the entrance and the Junction area. Players can purchase the Hailstorm or the M1 at the entrance for 500 points per weapon, or buy Up 'N Atoms (500 on solo up to three times, 1500 in co-op).</p>
            <p>A barricade stands between the entrance and the Junction area. Here, the players can find a Souvenir Token machine, N31L the Robot, a Fortune Teller, as well as a possible spawn location for a Seti-Com part. The Banshee and Oni are also available for purchase.In the center is the main Portal, where after the other four Portals have been traversed, will open the entrance to the Pack-a-Punch projector machine. While inside the Pack-a-Punch room, players have 30 seconds to upgrade their weapons, activate the Trap UFOs, or complete the crystal cabinet inside in order to build the Exquisite Core. After accessing the room, it will become unavailable for some time. From the Junction, the players can choose to go to one of the three areas by donating and opening barriers to: Journey into Space, Polar peak, or Kepler System.</p>

            <h3>Journey into Space</h3>
            <p>
                Journey into Space, going left from the Junction, is comprised of three separate areas (four if the Astrocade is counted). The first area is immediately beyond its corresponding junction door and contains an Erad wall-buy, a Magic Wheel, a trap, a DJ spawn location, a souvenir station, a path to the Astrocade, a door to the Underground and another door to the second area. Here players can also find the board to place parts for the Face Melter quest buildable weapon. The second area contains a Volk wall-buy, another Magic Wheel, another trap, a Fortune Teller, a Teleport Portal, the Tuff Nuff perk and a door. This door leads to the third area which contains a continually-active trap in the form of Dodgems carts (which are permanently active or disabled depending on whether the power is on or not), the Blue Bolts perk, a Karma-45 wall-buy, a second entrance to the Astrocade and another entrance to the Underground. Between the Dodgems cart trap and the Astrocade entrance
                is another Magic Wheel.
            </p>
            <h3>Polar Peaks</h3>
            <p>Polar Peaks is straight ahead from the Junction. Up the long tunnel players will first see an RPR EVO wall buy and a trap. To the right is a portal, a door which to the left are the spaceship fountains or down straight to a door to the underground. Here players can also find the board to place parts for the Head Cutter quest buildable weapon. Up the stairs either direction are two Magic Wheels, an HVR and Volk wall buy, Quickies, a door down towards the Astrocade, and the Triton roller coaster game ride.</p>
            <h3>Kepler System</h3>
            <p>To the right of the Junction is the Kepler System part of the park. To the left past the barricade is a souvenir machine, a portal, and up the left stairs is a Magic Wheel and another barricade going down towards Triton Mountain or the spaceship fountains. To the right is the Octonian Hunter shooting game. A permanent trap is in the form of a tick-tocking crocodile mouth which crushes anything under its jaws after 3 seconds of a player stepping in its mouth, which can also down a player even with Tuff Nuffs. Past that are an Erad and HVR wall buy, a trap, a Fortune Teller, a Magic Wheel, Bomb Stoppers, and Slappy Taffy.</p>
            <h3>Spaceship Fountains</h3>
            <p>The Spaceship Fountains is a circle of water spouts that fire upward once the power is turned on, shooting the player up into the air, and killing Zombies that get caught in it. The only way to get here is by a path either from Polar Peaks or an Underground door and over a tiny bridge past a DJ location. Here players can buy Bang Bangs. One of the fountains is tilted and shoots at an angle, and when standing on it, will catapult the player over into the Kepler System. Past this area is another small bridge that leads to a Magic Wheel, and next to that is a slide that goes back down to the Junction area and next to the Polar Peak entrance.</p>
            <h3>Underground</h3>
            <p>The Underground has three entrances and acts as an underground tunnel system between the Astrocade, Journey into Space and Kepler System. The Kepler system entrance is located between Polar Peak and Kepler System, while the other two entrances are both located near Journey into Space and the Astrocade. The first Underground entrance located between Journey into Space and Astrocade is located just beyond the path to the Astrocade at the main junction door and this entrance leads to approximately halfway between Kepler System and the other entrance in the Underground. The Underground contains a Banshee wall-buy and an HVR wall-buy, as well as the Racin' Stripes perk. Here players can also find the board to place parts for the Shredder quest buildable weapon.</p>
            <h3>Astrocade</h3>
            <p>The Astrocade has three entrances (one that leads to Journey into Space, another that leads to Polar Peak and a third that leads to the main junction) and contains the Disco trap, multiple arcade machines (some of which are playable and reward tickets), a Teleport Portal and an NV4 wall-buy. In the back corner is a prize booth where players can exchange tickets for ammo refill, grenade refill, Cryo grenades, or the Forge Freeze. The Golden Teeth can be purchased for 300 tickets in order to open the cabinet inside the crocodile trap in the Kepler System. Here players can also find the board to place parts for the Dischord quest buildable weapon</p>
            <h3>Triton Rollercoaster</h3>
            <p>Players can ride the roller coaster that also serves as a shooting game. Throughout the ride, players have to shoot targets to earn tickets, disable lasers and open doors. Zombie Clowns will also appear on the tracks, and players must shoot them or else take lots of explosive damage and get downed in the middle of the ride.</p>
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
                        PaP
                    </TabLink>{" "}
                    Open (4 portals)
                </li>
                <li>
                    <TabLink tab="side-ee" target="power">
                        Power
                    </TabLink>{" "}
                    on in all districts
                </li>
                <li>
                    <TabLink tab="buildables" target="seticom">
                        Seticom
                    </TabLink>
                </li>
            </ul>

            <h2>Recommended Setup</h2>
            <ul>
                <li>
                    <TabLink tab="perks">Perks</TabLink>
                </li>
                <ul>
                    <li>Racing Stripes</li>
                    <li>Up N' Atoms</li>
                    <li>Tuff 'Nuff</li>
                    <li>Bombstoppers</li>
                    <li>Mule Munchies</li>
                </ul>
                <li>Loadout</li>
                <ul>
                    <li>
                        <TabLink tab="weapons" target="m1">
                            M1 Garand
                        </TabLink>{" "}
                        (
                        <TabLink tab="side-ee" target="arcane-cores">
                            arcane core
                        </TabLink>
                        )
                    </li>
                    <li>Starting Pistol PaP</li>
                    <li>
                        <TabLink tab="wonder-weapon">Any Wonderweapon</TabLink>
                    </li>
                </ul>
            </ul>

            <h2>
                Main EE -{" "}
                <a href="https://www.youtube.com/watch?v=DuRAYom8tX4" target="_blank" rel="noopener noreferrer">
                    Video
                </a>
            </h2>
            <p>Rewards: Double PaP for 10000p after putting alien fuse in PaP machine (can also upgrade the Weapons of Rock for 5000p)</p>
            <ol>
                <li>
                    Get the Seticom and defend it in 3 locations (60, 90, then 120 seconds), SUGGESTED: Turret (2 green 1 red)
                    <ol type="a">
                        <li>Inside entrance to journey to space</li>
                        <li>Outside bumper cars area</li>
                        <li>Over bridge at entrance to polar peak</li>
                        <li>In polar peaks giftshop</li>
                        <li>Top right side of fountains area</li>
                        <li>Across from bombstoppers near alligator trap</li>
                        <li>Below the map inside the break room</li>
                    </ol>
                </li>
                <li>Return the seticom to hasselhof and return to him for the speakers</li>
                <li>Place speakers at 4 circles around the PaP portal (always placed in YBGR order). Interact with one to start simon says.</li>
                <li>Memorize which color speakers are where. when the ship flashes 4 colours, hit the speakers in that order. repeat this step 3 times. (brute spawns on failure)</li>
                <li>Clowns will start rapidly spawning. kill them near the PaP portal to fill with souls.</li>
                <li>Defeat the boss(es)</li>
                <li>Pick up the aliens fuses and return them to the PaP machine to double PaP</li>
                <li>Shoot all 5 lights on the spaceland sign to change their colour. Make sure the ship is above PaP before shooting the last one</li>
                <li>Pick up the soul key. FIN!</li>
            </ol>
            <h2>Boss Fight</h2>
            <p>Note: Number of bosses depends on the number of player (1-1, 2-2, etc.)</p>
            <ol>
                <li>Damage the alien shock collar until it turns red. Once the force field is gone, melee his backpack to break a fuse.</li>
                <li>Repeat several times until you have to damage him more to finally kill him.</li>
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
            <p>Flip the switches on the walls in each of the areas</p>
            <ol>
                <li>In spawn, to the right of Lost and Found in the small room.</li>
                <li>In Journey Into Space in the hallway between Rover Rampage(Bumper Cars) and the Star Mission trap</li>
                <li>In Kepler at the Moonlight Cafe</li>
                <li>In Polar Peak opposite the Quickies perk, near the entrance roller coaster ride</li>
                <li>In the Astrocade directly next to the Portal on the bottom floor</li>
            </ol>
            <h2 id="pap">PaP</h2>
            <p>Activate and go through all the portals in each area of the map (requires power on per section)</p>
            <ol>
                <li>In Journey Into Space behind the Cosmic Tunes booth. The Volk Assault Rifle wallbuy is also near by</li>
                <li>In Kepler down the stairs from the Power Switch in Moonlight Cafe</li>
                <li>In Polar Peak in a corner in the Gift Shop</li>
                <li>Astrocade directly next to the Power Switch</li>
            </ol>
            <h2 id="arcane-cores">Arcane Core Powerups</h2>
            <p>Requires a weapon with the arcane core to pickup (purchase at ticket stand for 300 tickets)</p>
            <ol>
                <li>Open the Pack-A-Punch room and interact with the UFO toys on the left side of the room</li>
                <li>The UFOs will now orbit four traps: Chromosphere Trap (Kepler), Steel Dragon Trap (Polar Peaks), Star Mission Trap (Journey into the Space) and Disco Ball Trap (Arcade)</li>
                <li>
                    Travel to the Trap Associated with the Upgrade the player would like to acquire
                    <ul>
                        <li>Fire - Chromosphere (Kepler)</li>
                        <li>Wind - Steel Dragon Trap (Polar Peak)</li>
                        <li>Electricity - Star Mission Trap (Journey into Space)</li>
                        <li>Laser - Disco Ball Trap (Astrocade)</li>
                    </ul>
                </li>
                <li>Turn on the trap and let it kill at least 20 zombies IN ONE ACTIVATION. The UFO will glow its corresponding color and will start flying around the region</li>
                <li>With the Arcane Core weapon, kill ~15 zombies near the UFO toy. When it is complete, the UFO will drop the elemental core</li>
            </ol>
            <h2 id="x-quisite">X-Quisite Core</h2>
            <ol>
                <li>
                    Get an{" "}
                    <TabLink tab="side-ee" target="arcane-cores">
                        Arcane Core
                    </TabLink>{" "}
                    and place it into the cabinet in PaP
                </li>
                <li>Repeat for all 4 Arcane Cores</li>
                <li>Follow the pink element to the Crocodile</li>
                <li>Purchase for $2000 ontop of crystals</li>
            </ol>
            <h2>N31L Challenges EE</h2>
            <ol>
                <li>
                    Grab the{" "}
                    <TabLink tab="buildables" target="N31L">
                        head
                    </TabLink>{" "}
                    and place it on N31L
                    <ul>
                        <li>Always spawns on a cart in front of the entrance to Polar Peak</li>
                    </ul>
                </li>
                <li>Complete the following Challenges</li>
                <table>
                    <thead>
                        <tr>
                            <th>Challenge</th>
                            <th>1 Player</th>
                            <th>2 Player</th>
                            <th>3 Player</th>
                            <th>4 Player</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kill Zombies with Melee</td>
                            <td>5 kills / 90s</td>
                            <td>7 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>10 kills / 90s</td>
                        </tr>

                        <tr>
                            <td>Get Mulikills</td>
                            <td>2 Multikills / 120s</td>
                            <td>4 Multikills / 90s</td>
                            <td>5 Multikills / 90s</td>
                            <td>5 Multikills / 60s</td>
                        </tr>

                        <tr>
                            <td>Kill Zombies from a Distance</td>
                            <td>5 kills / 120s</td>
                            <td>8 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>12 kills / 60s</td>
                        </tr>

                        <tr>
                            <td>Kill Zombies While Jumping</td>
                            <td>5 kills / 120s</td>
                            <td>8 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>10 kills / 60s</td>
                        </tr>

                        <tr>
                            <td>Do Not Go Into Last Stand</td>
                            <td>120s</td>
                            <td>90s</td>
                            <td>90s</td>
                            <td>60s</td>
                        </tr>
                    </tbody>
                </table>
                <li>
                    Interact with N31L, wait for Hasselhoff to leave, then grab the auxiliary battery and return it to N31L
                    <ul>
                        <li>On top of a trash can to the left of the RPR Evo wallbuy in Polar Peak</li>
                        <li>On the gift shop counter in Polar Peak</li>
                        <li>In a shoe shelf inside the roller coaster room in the upstairs area of Polar Peak</li>
                        <li>On a yellow cart directly in front of the Chromosphere</li>
                        <li>On top of a trash can in the area above Bombstoppers</li>
                        <li>On a yellow bench between the Alligator Head and the DJ's booth in Kepler System</li>
                    </ul>
                </li>
                <li>Complete all of the following challenges</li>
                <table>
                    <thead>
                        <tr>
                            <th>Challenge</th>
                            <th>1 Player</th>
                            <th>2 Player</th>
                            <th>3 Player</th>
                            <th>4 Player</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kill Zombies Without Taking Damage</td>
                            <td>5 kills / 90s</td>
                            <td>7 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>10 kills / 90s</td>
                        </tr>

                        <tr>
                            <td>Kill Crawling Zombies</td>
                            <td>5 kills / 120s</td>
                            <td>7 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>10 kills / 60s</td>
                        </tr>

                        <tr>
                            <td>Rebuild Barriers</td>
                            <td>15 Boards / 90s</td>
                            <td>30 Boards / 90s</td>
                            <td>45 Boards / 90s</td>
                            <td>60 Boards / 120s</td>
                        </tr>

                        <tr>
                            <td>Kill Zombies Within a Distance</td>
                            <td>5 kills / 120s</td>
                            <td>8 kills / 120s</td>
                            <td>10 kills / 90s</td>
                            <td>12 kills / 90s</td>
                        </tr>

                        <tr>
                            <td>Dismember Zombies' Legs</td>
                            <td>5 Legs / 120s</td>
                            <td>7 Legs / 90s</td>
                            <td>10 Legs / 90s</td>
                            <td>10 Legs / 60s</td>
                        </tr>

                        <tr>
                            <td>Defend a Player (Co-op Only)</td>
                            <td>N/A</td>
                            <td>90s</td>
                            <td>90s</td>
                            <td>60s</td>
                        </tr>
                    </tbody>
                </table>
                <li>
                    Grab Floppy Disk and return it to N31L
                    <ul>
                        <li>Guaranteed to spawn in the underground area; either on a bench or on a red tool cart</li>
                    </ul>
                </li>
                <li>Complete the final set of challenges</li>
                <table>
                    <thead>
                        <tr>
                            <th>Challenge</th>
                            <th>1 Player</th>
                            <th>2 Player</th>
                            <th>3 Player</th>
                            <th>4 Player</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kill Zombies From A Marked Point</td>
                            <td>5 kills / 90s</td>
                            <td>7 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>12 kills / 60s</td>
                        </tr>

                        <tr>
                            <td>Kill Zombies That Damaged You</td>
                            <td>5 kills / 120s</td>
                            <td>8 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>10 kills / 60s</td>
                        </tr>

                        <tr>
                            <td>Kill Marked Zombies Before Any Others</td>
                            <td>3 kills / 120s</td>
                            <td>5 kills / 90s</td>
                            <td>5 kills / 90s</td>
                            <td>8 kills / 60s</td>
                        </tr>

                        <tr>
                            <td>Kill Zombies With Headshots</td>
                            <td>5 kills / 120s</td>
                            <td>8 kills / 90s</td>
                            <td>10 kills / 90s</td>
                            <td>10 kills / 60s</td>
                        </tr>

                        <tr>
                            <td>Dismember Zombies' Arms</td>
                            <td>5 Arms / 120s</td>
                            <td>7 Arms / 90s</td>
                            <td>10 Arms / 90s</td>
                            <td>10 Arms / 60s</td>
                        </tr>

                        <tr>
                            <td>Do Not Bleed Out (Co-op Only)</td>
                            <td>N/A</td>
                            <td>120s</td>
                            <td>150s</td>
                            <td>180s</td>
                        </tr>
                    </tbody>
                </table>
                <li>Interact with N31L to finish the Quest</li>
            </ol>
            <p>
                <b>Rewards:</b>
            </p>
            <ul>
                <li>Tickets for each task completed</li>
                <li>Hasselhoff can be called at any time for $5000</li>
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
            <h2 id="mw1">MW1 Theme - The Spaceland Mix</h2>
            <p>Shoot 3 polaroid pictures of a teddy brear in various "Employee of the Month" calendars.</p>
            <ul>
                <li>Inside the room containing Racin' Stripes in the underground section</li>
                <li>Inside the barrier by Cryptid Attack inside the Astrocade</li>
                <li>On the wall in a small office in the underground section</li>
                <li>Across from the Shredder assembly station in the underground section</li>
                <li>Inside the barrier to the left of the Karma-45</li>
                <li>Behind the control booth to the right of the entance to the Triton Rollercoaster in Polar Peaks</li>
                <li>On the wall in the barrier at the top of the Hyper Slopes</li>
                <li>Inside a dark lighted barrier near the Magic Wheel location by Bombstoppers in the Kepler System</li>
            </ul>
            <h2 id="mw2">MW2 Theme - Radical 80s Mix</h2>
            <p>Find 5 teddy bears around the map. (~54 Locations)</p>
            <ul>
                <li>
                    <b>Spawn</b>
                    <ul>
                        <li>Outside the barrier by the spawn power switch, leaning behind a pillar.</li>
                        <li>Through the right shutter closest to the right pathway of the bridge at spawn.</li>
                    </ul>
                </li>
                <li>
                    <b>Cosmic Way</b>
                    <ul>
                        <li>In the displaycase for the Space Depot.</li>
                        <li>Near some popcorn machines inside the barrier of Crater Cakes.</li>
                        <li>To the left of the bridge between the Cosmic Way and Polar Peaks.</li>
                    </ul>
                </li>
                <li>
                    <b>Underground</b>
                    <ul>
                        <li>To the left of the astronaut cutout in the first room coming from Journey into Space.</li>
                        <li>Between two arcade machines past a shutter on the path to the Astrocade.</li>
                        <li>In the rafters heading from the break room towards the Astrocade.</li>
                        <li>Behind a nearly closed garage door next to the Shredder assembly station.</li>
                        <li>On the ladder to the left of the "Weapons of the Future" stand.</li>
                        <li>Face down behind a pile of debris next to the "Employees Only" office.</li>
                        <li>On a chair next to the "Employees Only" Office.</li>
                        <li>In the "Employees Only" office on the chair nearest the door.</li>
                        <li>In the "Employees Only" office, underneath the desk in the back.</li>
                        <li>Sitting on the shelf behind the Shredder cutout.</li>
                        <li>Sitting against the filing cabinet to the left of the Shredder cutout.</li>
                        <li>In a door on the staircase connecting Journey into Space to the underground section.</li>
                        <li>On one of the chairs on the left in the first room coming from Journey into Space.</li>
                        <li>Underneath the Racin' Stripes machine.</li>
                        <li>Next to a Yeti foot behind the prize stand.</li>
                        <li>Inside the Janitor's Closet.</li>
                        <li>In bathroom door going towards Fountain area between Polar Peaks and the Kepler System.</li>
                    </ul>
                </li>
                <li>
                    <b>Journey into Space</b>
                    <ul>
                        <li>Sitting inside the Moon Shakes concession stand by Tuff 'Nuff.</li>
                        <li>On the balcony above the Moon Shakes concession stand.</li>
                        <li>Inside either of the rooms on the wall between the Moon Shakes concession stand and Tuff 'Nuff.</li>
                        <li>In between the astronaut's legs across from the Magic Wheel by Roller Rampage.</li>
                        <li>On the ledge to the upper left of Blue Bolts.</li>
                        <li>In Roller Rampage, just to the left of the entrance from the rocket trap.</li>
                        <li>Behind one of the bumper cars, just to the left of the entrance from the rocket trap.</li>
                        <li>Inside a barrier near Escape Velocity.</li>
                    </ul>
                </li>
                <li>
                    <b>Astrocade</b>
                    <ul>
                        <li>On one of the main signs outside of the Astrocade.</li>
                        <li>Inside the claw machine near the Disco floor.</li>
                        <li>On the top shelf, just right of the Golden Teeth.</li>
                        <li>Near the Forge Freeze.</li>
                        <li>Near the barrier that has the lockers inside of it.</li>
                        <li>Next to a blue astronaut toy at the prize table.</li>
                    </ul>
                </li>
                <li>
                    <b>Polar Peak</b>
                    <ul>
                        <li>In a cave to the right just inside the entrance tunnel.</li>
                        <li>To the left of the Yeti in the entrance tunnel from the Cosmic Way.</li>
                        <li>In the entrance tunnel sitting on top of the toolbox between Work Pod 01 and 02.</li>
                        <li>In the first barricade just past the entrance tunnel to the right.</li>
                        <li>Just to the right of the portal, sitting next to some cookies.</li>
                        <li>On the ledge to the upper left of the portal.</li>
                        <li>In the barricade of the portal room peeking around the corner in the back right.</li>
                        <li>Upstairs sitting in the chair behind the desk next to the rollercoaster.</li>
                        <li>Behind the barricade upstairs in the room with the rollercoaster.</li>
                        <li>Upstairs in the rollercoaster room between the red vending machine and the trash can.</li>
                        <li>To the right of the DJ Station.</li>
                        <li>By the foot of the Yeti sitting in the chair.</li>
                        <li>Between two trashcans outside Rollercoaster room.</li>
                        <li>Next to Yeti in the long hallway going up to the rollercoaster.</li>
                    </ul>
                </li>
                <li>
                    <b>Kepler System</b>
                    <ul>
                        <li>In the entrance to Spaceship Splash.</li>
                        <li>Inside the Hyper Slopes ticket booth, sitting in the chair closest to the slides.</li>
                        <li>In the back of the Hyper Slopes ticket booth, sitting in the chair next to the red door.</li>
                        <li>On a hill next to a lamp, to the left of the Chromosphere.</li>
                        <li>Inside zombie spawn in the Octonian Hunter game. Very difficult to see.</li>
                        <li>Inside the alien display to the right of the Chromosphere.</li>
                        <li>On top of the Gator trap. Stand upstairs by Cone Lord.</li>
                        <li>To the left of the DJ Booth.</li>
                        <li>Inside the Chromosphere employee booth.</li>
                    </ul>
                </li>
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
            <h2>Prerequisites For All</h2>
            <ul>
                <li>Golden Teeth (300 tickets in Astrocade)</li>
                <li>Break monsters teeth by getting a brute to get crushed by them</li>
                <li>Replace broken teeth with the golden ones</li>
            </ul>

            <h2>
                Head Cutter -{" "}
                <a href="https://www.youtube.com/watch?v=7eQnW6eyIbE" target="_blank" rel="noopener noreferrer">
                    Video
                </a>
            </h2>
            <ul>
                <li>
                    <b>Battery</b>
                    <ol>
                        <li>Throw cryo grenade at animatronic yeti next to polar peak entrance, causing it to spew frozen breath.</li>
                        <li>Get 10 headshot kills from frozen zombies</li>
                        <li>After hearing a roar, a battery will spawn on another yeti statue next to the teleporter</li>
                    </ol>
                </li>
                <li>
                    <b>Toy</b>
                    <ol>
                        <li>Place 3 green yeti coins into the polarpeak machine</li>
                    </ol>
                </li>
                <li>
                    <b>Crystal</b>
                    <ol>
                        <li>Shoot far left machine in monsters mouth with wind element.</li>
                    </ol>
                </li>
                <li>Build in polar peak gift shop.</li>
            </ul>

            <h2>
                Dischord -{" "}
                <a href="https://www.youtube.com/watch?v=5CFG-bFqaQ4" target="_blank" rel="noopener noreferrer">
                    Video
                </a>
            </h2>
            <ul>
                <li>
                    <b>Battery</b>
                    <ol>
                        <li>
                            Using the shades which zombies drop, find 5 targets that glow red and grey. Afterwards, the battery will appear in the center of the dance floor in the astrocade
                            <ol type="a">
                                <li>
                                    Spawn Area/Cosmic Way
                                    <ol>
                                        <li>On the bush before the Infinity Bridge, on the left.</li>
                                        <li>Hanging from the overhang above the left hand side ATM.</li>
                                        <li>Under the bridge to Polar Peak</li>
                                        <li>In the mouth of the Mountain that the roller coaster is coming out of</li>
                                    </ol>
                                </li>
                                <li>
                                    Astrocade
                                    <ol>
                                        <li>Above the power switch, parallel to the ceiling</li>
                                        <li>Inside a claw machine near the water race game</li>
                                        <li>Inside the boardable window on the 2nd floor</li>
                                        <li>Behind the cardboard cutout across from the prize counter</li>
                                        <li>Behind the prize counter, parallel to the floor</li>
                                        <li>Top floor, inside the trash can closest to the ball drop game</li>
                                    </ol>
                                </li>
                                <li>
                                    Back of Astrocade
                                    <ol>
                                        <li>Hanging from the furthest booth in the alleyway</li>
                                        <li>Inside the bumper cars area, tucked behind the piled up cars in the corner</li>
                                    </ol>
                                </li>
                                <li>
                                    Between Arcade and Polar Peak
                                    <ol>
                                        <li>Tucked away along the track by a Yeti monster along the path between the arcade and Polar Peak catwalk</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>
                    <b>Toy</b>
                    <ol>
                        <li>Place one of each colour coin in the atrocade alleyway machine</li>
                    </ol>
                </li>
                <li>
                    <b>Crystal</b>
                    <ol>
                        <li>Get the laser power on a gun and shoot the 3rd machine in the monsters mouth</li>
                    </ol>
                </li>
                <li>Build in the Astrocade</li>
            </ul>

            <h2>
                Shredder -{" "}
                <a href="https://www.youtube.com/watch?v=5VOSm2QiXrg" target="_blank" rel="noopener noreferrer">
                    Video
                </a>
            </h2>
            <ul>
                <li>
                    <b>Battery</b>
                    <ol>
                        <li>Shoot a battery off a boat in between keplar and polar peak, pick it up in the water spouts</li>
                    </ol>
                </li>
                <li>
                    <b>Toy</b>
                    <ol>
                        <li>Get 3 red coins and put them in the machine in keplar</li>
                    </ol>
                </li>
                <li>
                    <b>Crystal</b>
                    <ol>
                        <li>Get the fire element on a gun and shoot the machine in the monsters mouth</li>
                    </ol>
                </li>
                <li>Build in underground section</li>
            </ul>

            <h2>
                Face Melter -{" "}
                <a href="https://www.youtube.com/watch?v=9T8iZhlXGZ0" target="_blank" rel="noopener noreferrer">
                    Video
                </a>
            </h2>
            <ul>
                <li>
                    <b>Battery</b>
                    <ol>
                        <li>In the Journey to Space section of the map, beyond the $1500 barrier is one of the teleporters. After turning on the power and linking the teleporter with the mainframe, activate the teleporter again and throw a grenade into the portal</li>
                        <li>The grenade will bounce out of the teleport and will be blinking red. Pick up the grenade before it explodes and throw the grenade towards the central teleporter located in the Cosmic Way section of the map</li>
                        <li>Continue this hot potato process, ending by throwing the blinking red grenade into the central teleporter</li>
                        <li>After the red grenade has been thrown into the teleporter enough times, the battery will appear next to the player</li>
                    </ol>
                </li>
                <li>
                    <b>Rocket Ship</b>
                    <ol>
                        <li>Place 3 Blue Space Man coins in the Souvenir Machine in the Journey to Space section of the map, located across from the barrier into the maintenance section of the map and around the corner from the DJ booth, one at a time</li>
                    </ol>
                </li>
                <li>
                    <b>Blue Crystal</b>
                    <ol>
                        <li>Get the lightning arcane core and shoot the 2nd from the left machine in the monsters mouth</li>
                    </ol>
                </li>
                <li>Build in Journey to Space</li>
            </ul>
        </section>
    );
}

// ============================================================
// BUILDABLES
// ============================================================

function Buildables() {
    return (
        <section className="tab-content">
            <h2 id="seticom">Seticom</h2>
            <ul>
                <li>
                    <b>Umbrella</b>
                    <ul>
                        <li>Bench near slides in main courtyard thing</li>
                        <li>Corner near rocket booster trap</li>
                        <li>Polar peak gift shop counter</li>
                    </ul>
                </li>
                <li>
                    <b>Boombox</b>
                    <ul>
                        <li>Bridge to spawn from main courtyard thing</li>
                        <li>Outside cafeteria in keplar</li>
                        <li>In underground kitchen</li>
                    </ul>
                </li>
                <li>
                    <b>Calculator</b>
                    <ul>
                        <li>In bench on keplar near jug ripoff</li>
                        <li>In arcade ontop of a trash can in the upper section</li>
                        <li>On bench near PaP Portal</li>
                    </ul>
                </li>
                <li>Give the parts to Hasselhoff and wait for the UFO to play tones. Return to him to get the Seticom</li>
            </ul>
            <h2 id="N31L">N31L</h2>
            <p>Check Side EEs for complete N31L Questline</p>
            <ul>
                <li>
                    <b>Head</b>
                    <ul>
                        <li>Always spawns on a cart in front of the entrance to Polar Peak</li>
                    </ul>
                </li>
                <li>
                    <b>Auxiliary Battery</b>
                    <ul>
                        <li>On top of a trash can to the left of the RPR Evo wallbuy in Polar Peak</li>
                        <li>On the gift shop counter in Polar Peak</li>
                        <li>In a shoe shelf inside the roller coaster room in the upstairs area of Polar Peak</li>
                        <li>On a yellow cart directly in front of the Chromosphere</li>
                        <li>On top of a trash can in the area above Bombstoppers</li>
                        <li>On a yellow bench between the Alligator Head and the DJ's booth in Kepler System</li>
                    </ul>
                </li>
                <li>
                    <b>Floppy Disk</b>
                    <ul>
                        <li>Guaranteed to spawn in the underground area; either on a bench or on a red tool cart</li>
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
                <li>Kendall 44</li>
                <li>Fragmentation Grenades</li>
                <li>Willard's Dagger (When Playing as Willard Wyler)</li>
            </ul>
            <h3>Wall Weapons</h3>
            <ul>
                <li id="m1">
                    <b>M1</b> - Starting Room (500p)
                </li>
                <li>
                    <b>Hailstorm</b> - Starting Room (500p)
                </li>
                <li>
                    <b>Oni</b> - On bench behind PaP portal(750p)
                </li>
                <li>
                    <b>Banshee</b> - next to N31L in PaP portal area or underground tunnel (750p)
                </li>
                <li>
                    <b>Karma-45</b> - just outside bumper cars (1250p)
                </li>
                <li id="erad">
                    <b>Erad</b> - Journey into Space next to Escape Velocity trap (1250p)
                </li>
                <li>
                    <b>RPR Evo</b> - Polar Peak next to steel dragon trap in upper hallway(1250p)
                </li>
                <li>
                    <b>HVR</b> - underground tunnel on a tool bench (1250p)
                </li>
                <li>
                    <b>NV4</b> - in astrocade neat the power switch (1500p)
                </li>
                <li>
                    <b>Volk</b> - Journey into Space near portal or Polar Peak near the giftshop/roller coaster entrance area (1500p)
                </li>
            </ul>
            <h3>Magic Wheel</h3>
            <h4>Locations</h4>
            <ul>
                <li>Journey Into Space</li>
                <ul>
                    <li>
                        Located next to an{" "}
                        <TabLink tab="weapons" target="erad">
                            Erad wall buy
                        </TabLink>
                        , directly next to a barrier and the Escape Velocity trap.
                    </li>
                    <li>Located outside the Bumper Cars trap, near a Ticket Vendor. (Possible Initial)</li>
                    <li>Located underneath the Star Mission trap.</li>
                </ul>
                <li>Astrocade</li>
                <ul>
                    <li>Located on the top ledge of the Arcade, near a Portal.</li>
                    <li>Located on the catwalk that joins the Arcade to the Roller Coaster. (Possible Initial)</li>
                </ul>
                <li>Polar Peak</li>
                <ul>
                    <li>
                        Located on the second floor, near the{" "}
                        <TabLink tab="perks" target="quickies">
                            Quickies
                        </TabLink>{" "}
                        machine, a{" "}
                        <TabLink tab="side-ee" target="power">
                            Power Switch
                        </TabLink>{" "}
                        and entrance to the Roller Coaster. (Possible Initial)
                    </li>
                </ul>
                <li>Keplar System</li>
                <ul>
                    <li>Located on the top of the slide.</li>
                    <li>Located in front of the Moonlight Cafe area, next to a Power Switch and a Souvenir Coin Machine. (Possible Initial)</li>
                    <li>
                        Located above the{" "}
                        <TabLink tab="perks" target="bombstoppers">
                            Bombstoppers
                        </TabLink>{" "}
                        machine, near the Alligator Head.
                    </li>
                </ul>
            </ul>
            <h4>Wheel Weapons</h4>
            <ul>
                <li>R3K</li>
                <li>KBAR-32</li>
                <li>Type-2</li>
                <li>R-VN</li>
                <li>X-Eon</li>
                <li>G-Rail</li>
                <li>FHR-40</li>
                <li>VPR</li>
                <li>Trencher</li>
                <li>Raijin-EMX</li>
                <li>R.A.W.</li>
                <li>Mauler</li>
                <li>Titan</li>
                <li>Auger</li>
                <li>Atlas</li>
                <li>KBS Longbow</li>
                <li>EBR-800</li>
                <li>Widowmaker</li>
                <li>DMR-1</li>
                <li>Trek-50</li>
                <li>Proteus</li>
                <li>Reaver</li>
                <li>DCM-8</li>
                <li>Rack-9</li>
                <li>M.2187</li>
                <li>OSA</li>
                <li>MacTav-45</li>
                <li>TF-141</li>
                <li>S-Ravage</li>
                <li>Hornet</li>
                <li>EMC</li>
                <li>EDM</li>
                <li>Stallion .44</li>
                <li>Sparten SA3</li>
                <li>P-LAW</li>
                <li>Howitzer</li>
                <li>Axe</li>
            </ul>
            <h3>Buildable</h3>
            <ul>
                <li>Dischord</li>
                <li>Face Melter</li>
                <li>Head Cutter</li>
                <li>Shredder</li>
            </ul>
            <h3>Other</h3>
            <ul>
                <li>
                    <b>Forge Freeze</b> - 500 Tickets
                </li>
                <li>
                    <b>Cryo Grenade</b> - 350 Tickets
                </li>
                <li>
                    <b>Repulsor</b> - 50 Tickets
                </li>
                <li>
                    <b>Portal Generator</b> - 50 Tickets
                </li>
                <li>
                    <b>Armageddon</b> - 50 Tickets
                </li>
                <li>
                    <b>Rewind</b> - 25 Tickets
                </li>
                <li>
                    <b>Trip Mine</b> - 25 Tickets
                </li>
                <li>
                    <b>Black Hole Grenade</b> - 25 Tickets
                </li>
                <li>
                    <b>Transporter</b> - 25 Tickets
                </li>
                <li>
                    <b>Gas Grenade</b>
                </li>
                <li>
                    <b>Cluster Grenade</b>
                </li>
                <li>
                    <b>Concussion Grenade</b>
                </li>
                <li>
                    <b>Semtex</b>
                </li>
                <li>
                    <b>Plasma Grenade</b>
                </li>
                <li>
                    <b>C4</b>
                </li>
                <li>
                    <b>Bio Spike</b>
                </li>
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
            <h3 id="upnatoms">Up 'N Atoms (500p solo, 1500p coop)</h3>
            <p>Found right inside the spawn room next to the weapon wall-buy</p>
            <h3>Mule Munchies (2000p)</h3>
            <p>Located in Journey into Space by the Luna Terrace sign</p>
            <h3>Tuff 'Nuff (2500p)</h3>
            <p>Found near the Star Mission area in Journey into Space</p>
            <h3>Blue Bolts (1500p)</h3>
            <p>Situated near the bumper cars leading into the Astrocade</p>
            <h3>Slappy Taffy (2000p)</h3>
            <p>near the Kepler System / Moonlight Cafe area</p>
            <h3 id="bombstoppers">Bombstoppers (2000p)</h3>
            <p>near the Kepler System / Moonlight Cafe area</p>
            <h3 id="quickies">Quickies (3000p)</h3>
            <p>Positioned on the upper levels and ramps of Polar Peak</p>
            <h3>Trail Blazers (1500p)</h3>
            <p>Positioned on the upper levels and ramps of Polar Peak</p>
            <h3>Bang Bangs (2000p)</h3>
            <p>Found out near the Hyper Slopes fountain in Polar Peaks</p>
            <h3>Racin' Stripes (2000p)</h3>
            <p>Located in the underground employee pathways beneath Polar Peak</p>
        </section>
    );
}

// ============================================================
// EXTRAS
// ============================================================

function Extras() {
    return (
        <section className="tab-content">
            <h2 id="hasselhoff">Hasselhoff Character Unlock</h2>
            <p>After completing the EE input (left, right, left, up, down) in the pre-game lobby screen</p>

            <h2>Ghost 'N Skulls</h2>
            <p>Rewards: 1000xp, and perma perkaholic (except Up 'N Atoms when in Solo)</p>
            <p>
                <b>Requires:</b> <TabLink tab="main-ee">Main EE</TabLink> Compeleted
            </p>
            <ol>
                <li>Find 6 skulls by doing various Things</li>
                <ol>
                    <li>Pop all balloons next to Up 'N Atoms</li>
                    <li>Find skulls on various letters around the map (ADS on it to collect)</li>
                    <b>"G"</b>
                    <ul>
                        <li>The G on the "Galaxy Journey" Sign above where Mule Munchies is</li>
                        <li>The G on the "Rover Rampage" (Bumper Cars area) sign</li>
                    </ul>
                    <b>"H"</b>
                    <ul>
                        <li>The H on the "Hyper Slopes" Sign at the top of the Slides</li>
                        <li>The H on the "Chromosphere" Sign</li>
                    </ul>
                    <b>"O"</b>
                    <ul>
                        <li>The O in the "Journey to Space" sign</li>
                        <li>The O in the "Cosmic Tunes" Booth outside the Polar Peaks Gift Shop</li>
                    </ul>
                    <b>"S"</b>
                    <ul>
                        <li>The S on the "Star Mission" Sign near Tuff Nuff</li>
                        <li>The S on the "Astrocade" Sign above the Souvenir machine</li>
                    </ul>
                    <b>"T"</b>
                    <ul>
                        <li>The T on the Hunter portion of the "Octonian Hunter" Sign</li>
                        <li>The T on the "Moonlight Cafe" Sign</li>
                    </ul>
                    <li>
                        Head to the Dance floor in the Astrocade and get a certain number of kills while standing on a specific colour (check Ghost 'N Skulls machine for 3rd skull)
                        <ol>
                            <li>Green - 1 kill</li>
                            <li>Blue - 9 kill</li>
                            <li>Pink - 8 kill</li>
                            <li>Gray - 4 kill</li>
                        </ol>
                    </li>
                    <li>
                        Play each arcade game and complete a certain goal to gain the skulls
                        <ol>
                            <li>Basketball - score when the skull appears over the hoop</li>
                            <li>Throw Ball - hit the tooth that the skull appears on</li>
                            <li>Black Hole - get the ball in the 50 spot</li>
                            <li>Water Gun - reach the skull before the other zombies</li>
                            <li>skeeball - score in the hole the skull appears</li>
                        </ol>
                    </li>
                    <li>Put on the shades and look above PaP for a skull. wait for the skull to fly over the center of PaP and shoot the spaceland lights to launch the laser at it</li>
                    <li>Get a brute to spawn and fire its beam at the Ghosts 'N Skulls Machine</li>
                </ol>
                <li>You can now enter the Machine to play... or you could've just used the fate and fortune card</li>
            </ol>
            <p>
                <b>How To Play</b>
            </p>
            <p>
                <span>Shoot the ghosts at the skulls to remove them. They turn red when they start moving, target these first.</span>
                <span>If you let 3 skulls espace, you lose and must re-obtain skull 6.</span>
            </p>

            <h2>Cut Space Helmet EE</h2>
            <p>
                <span>Reaching Round 6000 causes the zombies to have a space helmet</span>
                <span>The helmet increases their health to a near unkillable extent</span>
                <span>The helmet is a cut EE which was put at round 6000 instead of unused</span>
            </p>

            <h2>Lobby Music</h2>
            <p>
                <span>Unlocks Up N' Atoms, Racing Stripes, and Slappy Taffy Lobby Music</span>
                <span>
                    <b>REQUIRES: Director's Cut (Super EE Complete)</b>
                </span>
            </p>
            <ol>
                <li>Obtain sunglasses on Scene 1 and make your way to the Rollercoaster</li>
                <li>Ride the Rollercoaster with the sunglasses on and once you are going down the steep hill section of the Rollercoaster and the next door opens, shoot the yeti animatronic on the right between the eyes. If done correctly you will have shot the white Talisman mask and unlocked the new Lobby Music</li>
            </ol>

            <h2>Souvenier Stations</h2>
            <p>There are 5 Souvenir Stations throughout the map that can be used to craft Souvenirs.</p>
            <ul>
                <li>Near the door to Journey Into Space in Cosmic Way</li>
                <li>Near Cosmic Tunes in Journey Into Space</li>
                <li>In the alleyway outside of the Astrocade</li>
                <li>In the gift shop in Polar Peak</li>
                <li>Near the staircase to Moonlight Cafe in Kepler</li>
            </ul>

            <h2>Souvenir Machine Combinations</h2>
            <table>
                <thead>
                    <tr>
                        <th>Coin Combination</th>
                        <th>Result</th>
                        <th>Special Item (when used at specific machine for wonder weapon)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BBB</td>
                        <td>Sentry Gun</td>
                        <td>Space Shuttle Toy</td>
                    </tr>

                    <tr>
                        <td>BBG</td>
                        <td>Electric Trap</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>BGG</td>
                        <td>Boom Box</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>GGG</td>
                        <td>Repocrator</td>
                        <td>Yeti Toy</td>
                    </tr>

                    <tr>
                        <td>GGR</td>
                        <td>Sentry Turret</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>GRR</td>
                        <td>Boom Box</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>RRR</td>
                        <td>Medusa Device</td>
                        <td>Chromosphere Toy</td>
                    </tr>

                    <tr>
                        <td>RRB</td>
                        <td>Fireworks</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>RBB</td>
                        <td>Window Laser Trap</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>RBG</td>
                        <td>Kindle Pops</td>
                        <td>Disco Ball Toy</td>
                    </tr>
                </tbody>
            </table>

            <h2>Traps</h2>
            <p>All Traps (except those that are free) award Tickets for Zombie kills.</p>
            <table>
                <thead>
                    <tr>
                        <th>
                            <strong>Trap</strong>
                        </th>
                        <th>
                            <strong>Price</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/YI28xs0.png" rel="nofollow noopener noreferrer" target="_blank">
                                Steel Dragon
                            </a>
                        </td>
                        <td>$750</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/taEbPgn.png" rel="nofollow noopener noreferrer" target="_blank">
                                Escape Velocity
                            </a>
                        </td>
                        <td>$750</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/gD0w4iV.png" rel="nofollow noopener noreferrer" target="_blank">
                                Chromosphere
                            </a>
                        </td>
                        <td>$750</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/ntumlRY.png" rel="nofollow noopener noreferrer" target="_blank">
                                Star Mission
                            </a>
                        </td>
                        <td>$750</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/OClRI36.png" rel="nofollow noopener noreferrer" target="_blank">
                                Cosmic Dance Party
                            </a>
                        </td>
                        <td>$750</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/AiDSb9f.png" rel="nofollow noopener noreferrer" target="_blank">
                                Space Croc Chomp
                            </a>
                        </td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/avRUmKp.png" rel="nofollow noopener noreferrer" target="_blank">
                                Rover Rampage
                            </a>
                        </td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://i.imgur.com/t6TNkCt.png" rel="nofollow noopener noreferrer" target="_blank">
                                Spaceship Splash Geysers
                            </a>
                        </td>
                        <td>Free</td>
                    </tr>
                </tbody>
            </table>

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
                        <td>Get Packed</td>
                        <td>
                            <TabLink tab="side-ee" target="pap">
                                PaP
                            </TabLink>{" "}
                            a weapon
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>The Bigger They Are</td>
                        <td>Defeat 5 brutes in one game without dying</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Rock On!</td>
                        <td>
                            Craft a <TabLink tab="wonder-weapon">weapon of rock</TabLink>
                        </td>
                        <td>Create one of the 4 wonder weapons</td>
                    </tr>

                    <tr>
                        <td>Brain Dead</td>
                        <td>Play 30 games and get to scene 10</td>
                        <td>
                            Reach round 10, get{" "}
                            <TabLink tab="perks" target="upnatoms">
                                Up 'N Atoms
                            </TabLink>
                            , die, interact with the atari machines 30 times
                        </td>
                    </tr>

                    <tr>
                        <td>Sooooul Key</td>
                        <td>Recover the piece of the Soul Key</td>
                        <td>
                            Complete the <TabLink tab="main-ee">Main EE</TabLink>
                        </td>
                    </tr>

                    <tr>
                        <td>Batteries Not Included</td>
                        <td>
                            Create an{" "}
                            <TabLink tab="side-ee" target="x-quisite">
                                Exquisite Core
                            </TabLink>
                        </td>
                        <td>Complete the X-Quisite Core Side EE</td>
                    </tr>

                    <tr>
                        <td>Hoff The Charts!</td>
                        <td>Unlock David Hasselhoff</td>
                        <td>
                            Complete the{" "}
                            <TabLink tab="extras" target="hasselhoff">
                                Hasselhoff Character Unlock
                            </TabLink>
                        </td>
                    </tr>

                    <tr>
                        <td>Sticker Collector</td>
                        <td>Find all of the quest items and compelete the sticker pack</td>
                        <td>
                            Requires the{" "}
                            <TabLink tab="side-ee" target="x-quisite">
                                X-Quisite Core
                            </TabLink>
                            ,{" "}
                            <TabLink tab="buildables" target="N31L">
                                N31L
                            </TabLink>
                            ,{" "}
                            <TabLink tab="buildables" target="seticom">
                                Seticom
                            </TabLink>
                            , and <TabLink tab="wonder-weapon">all 4 Wonder Weapons</TabLink>
                        </td>
                    </tr>

                    <tr>
                        <td>I Love the 80s</td>
                        <td>
                            Find the{" "}
                            <TabLink tab="music-ee" target="mw1">
                                MW1
                            </TabLink>{" "}
                            and{" "}
                            <TabLink tab="music-ee" target="mw2">
                                MW2
                            </TabLink>{" "}
                            Songs
                        </td>
                        <td>
                            Compelete their respective <TabLink tab="music-ee">music EE's</TabLink>
                        </td>
                    </tr>

                    <tr>
                        <td>Insert Coin</td>
                        <td>Play every Arcade game at least once</td>
                        <td>
                            <span>
                                <b>Must play each of the following games to completion (don't just run off): (all players ingame get the trophy)</b>
                            </span>
                            <span>Astrocade: BOTH Basketball machines, Blackhole, Throw Ball, Water Gun, skee ball, all atari game cabinets (can enter and immediately exit)</span>
                            <span>Afterlife Arcade: Shooting Game, Atari Games, Skee ball, water gun, throw ball, black hole, basketball</span>
                            <span>Polar Peak: Roller Coaster (hit one target atleast)</span>
                            <span>Keplar: Octanian Hunter (Target game to next to entrance)</span>
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
            <Source href="https://steamcommunity.com/sharedfiles/filedetails/?id=2462403426" name="ALL YOU NEED GUIDE TO ZOMBIES IN SPACELAND" author="ZombieSlaya Mr." source="Steam Guide" />
            <Source href="https://www.youtube.com/watch?v=DuRAYom8tX4" name="EASY ZOMBIES IN SPACELAND EASTER EGG GUIDE 2025!!!" author="MZC" source="Youtube" />
            <Source href="https://www.youtube.com/watch?v=5CFG-bFqaQ4" name="ZOMBIES IN SPACELAND EASTER EGG GUIDE: 'DISCHORD' TUTORIAL (Infinite Warfare Zombies Wonder Weapon)" author="MrRoflWaffles" source="Youtube" />
            <Source href="https://www.youtube.com/watch?v=5VOSm2QiXrg" name="ZOMBIES IN SPACELAND EASTER EGG GUIDE: 'SHREDDER' TUTORIAL (Infinite Warfare Zombies Wonder Weapon)" author="MrRoflWaffles" source="Youtube" />
            <Source href="https://www.youtube.com/watch?v=9T8iZhlXGZ0" name="ZOMBIES IN SPACELAND EASTER EGG GUIDE: 'FACEMELTER' TUTORIAL (Infinite Warfare Zombies WonderWeapon)" author="MrRoflWaffles" source="Youtube" />
            <Source href="https://www.youtube.com/watch?v=7eQnW6eyIbE" name="ZOMBIES IN SPACELAND EASTER EGG GUIDE: 'HEADCUTTER' TUTORIAL (Infinite Warfare Zombies WonderWeapon)" author="MrRoflWaffles" source="Youtube" />
            <Source href="https://www.youtube.com/watch?v=yOvdkLUxXLQ" name="ULTIMATE ZOMBIES IN SPACELAND EASTER EGG GUIDE! EASY INFINITE WARFARE ZOMBIES EASTER EGG TUTORIAL" author="MrRoflWaffles" source="Youtube" />
            <Source href="https://callofduty.fandom.com/wiki/Zombies_in_Spaceland" name="Zombies in Spaceland" author="Call of Duty Wiki" source="Fandom" />
            <Source href="https://www.reddit.com/r/CODZombies/wiki/zombies-in-spaceland" name="Zombies in Spaceland | Complete Guide" author="u/LackingAGoodName" source="r/CODZombies" />
        </section>
    );
}

// ============================================================
// MAIN MAP CONTENT
// ============================================================

export default function ZombiesInSpaceland() {
    return (
        <MapNavigationProvider>
            <ZombiesInSpacelandContent />
        </MapNavigationProvider>
    );
}

function ZombiesInSpacelandContent() {
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

export const Route = createFileRoute("/maps/infinite-warfare/zombies-in-spaceland")({
    staticData: { title: "Zombies in Spaceland" },
    component: ZombiesInSpaceland,
});
