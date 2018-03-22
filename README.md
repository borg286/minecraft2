
*Modded Minecraft 1.12.2 Early-Mid game *

**_Feel free to add your own tips, or entire sections. Just type away._**

*Status: Draft *

*Author: borg286*

*Working on: late game*

This document is targeted at both beginners and veterans of Modded Minecraft. If you've only played vanilla see the next section below. If you’re coming from 1.7.10 we have lots you’ll find familiar (decent trade), and lots that’ll will get you excited to jump back in. [Here](#heading=h.hblz2iuf0lp7) are the major changes.

This document focuses on getting good bang for the buck. I'll favor slimeslings over jetpacks due to the entry cost. I like to ask the question, but what does this let me actually do (I’m talking to you Thaumcraft). Machines that open up further machines are less of a concern for me.

I also happen to be playing All the Mods, so if you find a tip that I haven't tagged with the mod it comes from, sorry. This document is trying to work well for most mod packs.

### How do I get into Modded Minecraft?

Historically, in modded Minecraft, installing mods used to be difficult and just for the tech savvy. But we're in 2018, and modded Minecraft is big enough for easy solutions to exist. These solutions are called "Modpack Launchers", and they’re basically alternate applications (which substitute or wrap around the Official Minecraft Launcher) that allow you to install and launch modpacks without having to mess with the files yourself (although, if you’re used to modding on other games or just very tech savvy, you could very well mess with the files yourself to customize your experience, as none of these launchers stop you. But we’re not focusing on that here).

* [Windows/Mac](https://app.twitch.tv/download): The Twitch App should recognize your Minecraft install and offer you a Mods tab. Browse for [FTB Revelations](https://www.feed-the-beast.com/projects/ftb-revelation), [All the Mods 3](https://minecraft.curseforge.com/projects/all-the-mods-3), or other modpacks. Click Install and play.

* [GNU/Linux](https://multimc.org/#Download) (Or Windows and Mac if you prefer a less guided and more manual approach to your modding experience): Download the modpack files from Curse and create an instance in MultiMC, selecting the Modpack from your files.

### Minimum requirements

Here are some good Java optimizations to make Modded Minecraft run on even 4 gigs of RAM. For CPU multi-core doesn't help much as most Minecraft is single threaded, thus a fast single core is all you need. 2.5 GHz should be plenty.

#### Too much ram

Too much ram can be a problem due to Java garbage collection. Java creates objects, like the blocks in the chunk you just wandered through, and keeps it in memory in case you turn around. Textures and models also take up sizable bits of ram. Tons of ram means Java doesn't need to clean up old objects, but at some point you will run out of this space. At that point you get a huge freeze as Java does cleanup and pointer spelunking. 5-8 gigs of RAM with appropriate Java flags( UseConcMarkSweepGC, Xmx5G or Xmx8G depending on avaliable ram) help spread out the garbage collection over your gameplay so that you don't notice(MaxGCPauseMillis).

#### Twitch

TODO: insert image for tweaking ram

#### MultiMC


-d64 -Xmx5G -XX:+DisableExplicitGC -XX:+UseConcMarkSweepGC -XX:MaxGCPauseMillis=50 -XX:+UseStringDeduplication -XX:+UseCompressedOops -XX:+UseCodeCacheFlushing -XX:ParallelGCThreads=12 -Dfml.ignoreInvalidMinecraftCertificates=true -Dfml.ignorePatchDiscrepancies=true

# Early Game

## Punching Trees

Starting off you'll punch trees and make vanilla tools like normal. Most modpacks add in lots of flora and tree types, which can clog up your inventory unless you’re focused. Here are some tips to help keep your inventory and goal focused.

* Flower basket [Biomes O' Plenty]: Free up inventory from most plantable things

* Stone AIOT[Actually Additions]: craft a Stone pickaxe, Sword, Hoe, Shovel, Axe and then craft them all together. Hotbar slots are precious. This tool relieves the pressure on your hotbar from having 5 tools. from the hotbar needing each tool.

* Stone sickle[Extra Utilities 2]: Clear 5x5 of plants

* Stone Hoe clears 3x3[Quark] and can till dirt which might spit out worms[Actually Additions] for hydrating/growing a farm

* Crafting table on a stick[Actually Additions]: Craft a sign and crafting table to make a poor man's wireless crafting terminal

* What to hunt down:

    * Cobble and Wood

    * Clay, gravel, sand (1-2 stacks each) for Tinkers Construct later

        * Rivers are the best place to hunt these.

    * Rubber wood[IndustrialCraft 2]: You only need a couple blocks

    * String from flax[Actually Additions] found in forests

    * Rice[Actually Additions] is useful for tools, machines, and food. Also found near rivers

    * Animal meat: Tinkers Construct lets you turn it into Leather; useful for backpacks.

    * Search high in mountains for Amaranth[Astral Sorcery](drops glowstone)

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_0.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_1.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_2.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_3.png)

## Your first hovel

### 9x9

Alternatively carve out a 9x9x6 tall room, with torches centered on each wall should be room enough to get you through to end game.

Consider making a Mob Filter(player) to replace your front door.

### [MineColonies] Supplyboat

### ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_4.png)

If you have [MineColonies] craft 5x boats -> Supply Boat (see image)

1. Apply to shore to get your first base

2. Build a dock with steps for easy access

### Sleep

If after crafting your first bed you still have some wool then craft a Sleep charm[Dark Utilities] from a second bed, open inventory, click on circle to open baubles. Pop the charm in. Now sleep is instant.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_5.png)

Sleeping Mat[Cyclic]: Portable bed which can toggle if you reset your spawn point

### Waypoints and Teleportation

[Journey Map] (That map in the upper right) lets you set waypoints that are visible from anywhere so you never get lost.

1. Move to a place you want to remember

2. Hit 'j' to open the Journey Map UI. Click the diamond at the bottom. Click ‘New’ and give your current location a name and save it.

3. If cheats are enabled you can click 'teleport' on any waypoint

Teleport home[Bukkit plugin]

1. Stand on a block higher than the normal ground floor. Destroy the block afterwards.

2. Open the console with /

3. /sethome

4. This will set your current position as home. Next time you run '/home' then you will be teleported back to that spot. Sometimes a half block lower, which is why you got higher when you set it.

### Early Automation

CraftFurnace[Terraqueous]

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_6.png)

This furnace has 6 slots for each of its inputs and outputs and cooks 2 items at a time. It also has 3 slots for fuel. It also keeps its place when fuel or items runs out, so no wasted fuel nor ores that waste fuel that almost was enough.

1. Make a furnace as usual

2. Smelt 8 cobble into stone, and upgrade to the CraftFurnace

3. Craft all the Grout(gravel, sand, clay) for a Tinker's Construct Smeltery later (doubles ore, makes alloys)

4. Cook all your meat, wood and sand. 

5. Chunkloading

    1. Open the inventory and click on the friends button in the upper left. Shift click, then shift right click on chunks you want to always be running instead of freezing in time when you go away. This keeps machines working, and entities from despawning. F3+g shows chunk boundaries.

6. Later when you get redstone and can make things like Transport Pipes and Transfer Nodes, then you can feed the furnace with a larger input buffer, and automatically pipe the product into your main storage. Open the gear on the left to configure which side does what.

### Gardening

1. Place your worms[Actually Additions] on flat ground. They till grass, water, and periodically bone meal a 3x3.

2. Plant wheat for food

3. Plant your Rice. Rice can be turned into rice seeds if you want to invest in the future rather than use the rice now. Note that some modpacks removed sugarcane-> paper recipe, with rice being the replacement.

*Ability: Gaining fast travel and Removing falling damage*

1. Craft Rice[Actually Additions] into Rice Dough, Craft 4 with a bucket of water to get Rice Ball

2. 9 rice balls -> Slime cube -> 9 Green slime balls -> 2.25 Slime blocks![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_7.png)

3. 2  slime blocks + 2 rice/slime balls = Slime boots

4. 3 rice/slime balls + 2 string + 1  slime block = Slimesling

5. Take 20 Rice Dough before heading out to mine iron

Watering can[Extra Utilities 2]![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_8.png) Right click on water to fill up, Right click on crops to water 3x3, albeit slowly

See [optional Magical Agriculture quest](#heading=h.u6dar7pz86o1) if you're into farming.

### Leather and Food

Drying rack[Tinker's Construct] is made from vanilla wood planks (acatia, oak, spruce…). Place on walls for drying out meats.

By now your meat should be all cooked. To get leather hang cooked meat on the rack and wait

* Cooked meat -> Leather

* Zombie meat -> jerky (eat this instead)

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_9.png)

## More inventory and flight

### Home Inventory

#### Poor Man's ME system

Storage crate[Actually Additions]: The small version has as much as 4 chests and doesn't need open air above it.

Crafting station[Tinker's Construct]: This has access to the inventory of an adjacent inventory like the above crate.

#### [Jei]

You may have noticed the list of items on the right when you open your inventory. This is Just Enough items.

This is like the crafting guide in a vanilla Crafting Bench, only better. Use the search field to find items, clicking on them opens their recipes. 

* For the advanced user you can use [regular expressions.](https://en.wikipedia.org/wiki/Regular_expression)

* Click anywhere to take focus off the search field, then Hover your mouse over a searched item and press 't'. This makes that item smoke in nearby chests. If it doesn’t check the controls for the right key binding.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_10.png)

* Opening a vanilla chest you can search for items to highlight them [Quark]. Sadly other chests (crates,...) won't get this. See Poor man’s ME system below if you want to go this route

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_11.png)

#### Personal Inventory

* Click the Merge button[Quark] to drop off any matching items

* Click the Export to drop off everything not in hotbar

* Click the Re-stock button[Quark] to top up on matching items

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_12.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_13.png)

* [Quark] also adds a button to your personal inventory to drop off all non-hot-bar items. Holding sneak turns this into a merge function so chests that have at least 1 of that item can vacuum it from your inventory. Easy way to drop your stuff off when get home from a mining trip.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_14.png)

* Empty sack of holding[Cyclic] can pick up chests and **crates** w/o weighing you down like dollies did. This makes mining trips super productive. No longer do you need to manage your personal inventory.

* Leather Backpack[Iron Backpacks]: Seems like equipping the backpack is often disabled, but can be right clicked to give you 2 more rows of inventory slots. Iron, Gold, and Diamond progressively upgrades them.

* Digger's Backpack[Forestry] passively holds Cobble, Dirt, Gravel, netherrack, Sand[stone], Clay, Flint

* Flower Basket[Biome's a Plenty] holds most seeds and saplings

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_15.png)

* [Cyclic] lets you permanently add a crafting table and large chest's worth of inventory slots by eating special food. Search for "Inventory Crafting Table" and “Inventory Upgrade” for the recipe. The most expensive items are Ender chest for the inventory upgrade, and a diamond and emerald for both upgrades.

#### Falling With Style: Elytra but different

* Glider[OpenBlocks] ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_16.png)(12 leather)

* Right click to equip and jump off a ledge to glide. Sneak to go faster.

* Unlike the Elytra, you need to keep it selected, and you can't pull up

* Later you'll get a slimesling[Tinkers]![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_17.png) to get altitude; no need for fireworks

## [Optional] I found a Village

Depending on what buildings are in the village you can get some short cuts.

### Farm

Harvest the wheat and potatoes then find a farmer villager to trade in for emeralds. See the RFTools section down below.

### Actually additions

With 3 emeralds in hand head to the atomic reconstructor and convert them to emeraldine. A pickaxe made from this will last you forever.

### Industrial

### Smithery

## Tinkers Construct

* Start by crafting 20 Blank Patterns

    * These are used to craft the tool benches and parts we need.

    * Search up Stencil Table, Pattern Chest, Part Builder, Part Chest, Tool Station in Jei and assemble them like below. Adding a Crafting station to the mix gives you access to all of them in one UI. The Stencil table must touch the Pattern chest for access, and so forth in the order above.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_18.png)

Open any of these and start with the Stencil Table to make patterns. Store those in the pattern chest, Use the pattern to make parts. Use the Tool Station to assemble those parts into a tool. The tool station shows you what parts are needed for each tool. You can replace your parts later on, so know that your choice of material isn't going to kill your future.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_19.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_20.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_21.png)

* Flint pickaxe with a bone handle, Wooden short bow with flint heads on the arrows

    * If going for Obsidian AIOT then don't worry about the other tools for now.

* Sharpening Kits are useful for restoring damage on the run. Whatever material you craft for your head, consider if you have enough for a kit, it costs 2 units of the base material. A cheaper alternative is to take a Tool Station with you in your backpack. This approach doesn't work well in the heat of battle.

* Most modpacks have Tinkers Leveling, which adds modifier slots the more you use your tool. Read up on "materials and you" for more info on these awesome slots.

### Tool Forge

The Tool Forge opens advanced tools and requires 4 iron blocks, sometimes it is any metal; just check JEI.

### Slime Islands

Slime Islands are high up in the air and come in 3 flavors: Green, Blue, and lastly Orange in the Nether.

If you think you'll get into bows then be sure to take shears when you go up to take the leaves for fletchings. Fast leaf decay is going to be a bit annoying so you’ll need to be quick about getting the leaves. Take any saplings and some slimy dirt to plant it on. If playing on a server always replant one for the next guy.

Take some slime blocks as they are useful for tools, especially the blue slime.

The nice thing about slime is that you can make great parts from the slime crystals (balls+dirt+sand and bake) that only need the Tool Station to make, not the smeltery.

### Knight Slime

Once you have a smeltery and access to a purple slime island find the purple slime cubes and balls. Smelt 1 ball with 1 Iron and 4 cobble. This material has very high durability and has the coveted Unnatural modifier(see below).

### Great tools

#### Pickaxes

Modifiers to care about

* Unnatural (Knight Slime):  Having a mining level beyond what's needed increases your mining speed

* Magnetic(Iron): Broken blocks are attracted to you. Fewer blocks wasted in lava, or along the sides of shafts

* Momentum(Cobalt): The longer you use the tool w/o stopping the faster it goes.

* Petramour(Ardite): Repairs itself from mining cobble

Pickaxes to build

* Mid-game pickaxe: Knight Slime handle, Iron head, Slime binding with obsidian sharpening kit.

* Late game pickaxe

    * Pre-water temple: Iron Binding, Cobalt head, Ardite handle; Modifiers: Nether star (soul bound), Diamond (durability and speed), Lapis (fortune 3), and Redstone (speed 1)

    * Post-water temple: Sponge handle (Silk touch, 1.2x durability), Prismarine Binding, Cobalt head; Modifiers: Nether Star(soul bound), Emerald(durability multiplier), Redstone (haste 2)

#### Hammers

Modifiers to care about

Width++: Mines a 5x3 rather than a 3x3.

See pickaxes for other modifiers that matter for hammers

* Mid-game hammer: 

    * Non-slime island: Bone head, Bone Handle, Bone faceplate, Stone faceplate (top slot) for easy repairs

    * Slime island access: Blue slime handle, Green slime head and faceplates. 3k durability

        * Use either stone or obsidian + flint to fix up the mining level.

* Late game hammer: Ardite handle, Cobalt Head and faceplates; Modifiers: Redstone (haste 2), Width++

    * Optionally replace the top faceplate with Iron to trade a bit of speed for magnetism and easier repairs.

#### Shurikens

Shurikens have low range, medium damage, but importantly have high rate of fire and lots of modifiers we can apply early on. It requires the Tool Forge, so must wait till you have 4 Iron blocks. It is easier on inventory and resupplying, as the material needed to repair is only needs to match the upper left material. Netherrack is a common material used to get levels out of it.

##### Mid-game shuriken

Netherrack (repairing), Bone(splintering for chance of 2x damage), 2x Manyulin(damage and durability)

##### Late game shuriken

Pick your base:

* 2x supremium [Mystical Agriculture] 1x prismarine and 1x paper

* 1x Manyullyn, 1x supremium, 1x cactus/bone/flint, 1x paper

1. Fire your shuriken until you have 1 durability left (Due to this you get an additional 7+ extra damage from prismarine)

2. Add 5x reinforced to make it unbreakable and you have a range weapon with unlimited usage!

3. [Optional] Emboss it with end stone and you have a great tool to kill endermans without them teleporting away

#### Bows

Bows come in 3 flavors: Short bow (available on day 1), Longbows and Crossbows, both of which require the Tool Forge. Short bow is the fastest rate of fire, Longbows maximize damage, and crossbows maximize accuracy. As with most tools redstone boosts the speed. Note Effects of bow material don't bestow on ammunition, so optimize for speed on the bow, and effects for the arrow. 

The damage to look out for on bow materials is the "bonus damage" rather than the base damage.

* Mid-game bow: Magma limbs short bow

* Mid-game arrow/bolt: Steel head, bone shaft, feather fletchings

* Late game bow: Electrum limb Longbow, cobalt plate with max redstone

* Mid-game arrow/bolt: End-rod shaft, Manyulin head, Purple slime fletchings

#### Swords

Modifiers to care about

Splintering: The more you hit, the harder you hit, up to a point.

Crude II: +10% damage vs. unarmored targets

Sacred(Bake rotten flesh+dirt+bonemeal): Nearly doubles damage vs. undead

* Early-game Mattock: Flint axe head, bone shovel head, bone handle

    * Repairs with material from either head. Works as axe and shovel also. More damage than diamond sword

* Late game Broadsword: Bone handle, Manyullyn wide guard and blade; Modifiers: Max Quartz (damage)

    * Optionally use Necrotic Bone for life steal, and Lapis for fortune (good when fighting wither skeletons.

## Mining time: I has a bucket

## ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_22.png)

Before heading out take 

* 3+ stone drums[Extra Utilties 2] (for lava)

* 10+ wood (for torches)

* Food

* Paper (Rice) for filter module

* **Empty Sack of Holding[Cyclic] holding a Crate[Actually Additions] for having nigh infinite slots**

What ores should I focus on? What level should I mine?

* Open Jei, Search for the ore, and open the World gen tab to see its spawn level.

* Quartz[Embers] > black quartz[Actually Additions] >Certus Quartz[Applied Energistics 2]

* Iron > Tin > Lead > Aluminium > Copper > Osmium

* Obviously grab all the Redstone, Gold, Diamonds, Emeralds, Inferium[Mystical agriculture], and Prosperity[Mystical Agriculture] you can find. These last 2 cannot be quarried. Go out of your way to acquire these.

Light: Tiny torches[Actually Additions] or stone sticks[Tinkers]

* If you have lots of wood, split your coal into 8 tiny coal and make tiny torches

* If you don't then turn cobble into cobble sticks-> stone torches

Bucket

* Make slime sling with the Rice dough you brought.

* Fill up Stone Drums[Extra Utilities 2] with lava

Mining Dimension[Aroma1997's Dimensional world] 

The Mining Dimension is accessed like the Nether, through a portal you create with the Mining Tool. This tool is usually one of the first things I create with my first Iron. 

1. Head on the top of a hill otherwise the portal in the Mining Dimension will end up underground

2. Cook some Cobble into 12 stone

3. Craft the stone into Stone Bricks

4. Craft a stone pickaxe (you can't use your dirty old used one), Flint and Steel, and 2 Stone Bricks to get the Mining Tool.

5. Craft your remaining Stone bricks with the Tool to make Portal Frames

6. Build a portal with the frames and use the Mining Tool on them as if it was flint and steel.

7. Step into the portal **and Sneak**

I often have my first base in this world. A word of wisdom if choosing this path. Place your bed in the overworld near the portal. Just like trying to sleep in the Nether results in an explosion, so does it here. You might want to light up around your bed for the few moments you come to sleep. Lighting up your main base in the Mining Dimension is also easier due to how flat it is. It also doesn't rain here.

Finding Lava pools and cave entrances in the Mining Dimension are much easier. A big change seems to be that the Mining Dimension is topped with Grass rather than stone, and doesn't seem to spawn cows, only sheep. See Tinker’s Drying Racks to get leather from cooked Lamb.

Miner's backpack[Forestry]

These backpacks are fairly cheap (2 iron + 4 string + 2 wool) and only need to be in your inventory to vacuum up drops.

TODO: see if right clicking the backpack on a crate drops the stuff into it.

Holds both the ore and ingot form of items it holds

* Apatite

* Gold

* Iron

* Lead

* Silver

* Tin

* Coal

* Diamond

* Emerald

## Must go deeper

## ![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_23.png)

A Tinkers construct smeltery is a fast an easy way to get obsidian w/o needing diamonds first. You can make them as small as a 3x3, leaving only 1 block for smelting. Smeltery bricks on the bottom and walls(excluding the any corners), a smeltery controller, drain and tank. If you're low on Grout then use a seared window(5 glass + 4 seared bricks) instead of a Seared Tank(1 glass + 8 seared bricks).

Note that the amount of lava this takes is proportional to the number of batches of ore you try to process. Thus throwing in 1 dust takes the same lava as 64.

Obsidian

Instead of making a diamond pickaxe, put water and lava into the smeltery drain with a bucket. They combine to form Obsidian. Pour out 25 blocks into a casting basin.

Sharpening kit: An Obsidian sharpening kit upgrades the mining level of Tinkers Construct tools to Cobalt, the highest. That's what we’re about to go get.

Aiot[Actually Additions] upgrade: An obsidian AIOT will serve long as your non-mining tool (Same damage as diamond sword). Also helpful in the nether for preserving durability on your main pickaxe.

### Nether portal

Use 10 obsidian above to make a portal. If you didn't make a smeltry but have lava then fall back to making a case.

Note: this portal must be made in the over world, not the mining Dimension.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_24.png)

### Armor Up: Chestplate

The nether is more dangerous than you're used to. Ghouls, blazes outside fortresses, highly explosive creepers. Prepare with some armor. Here are some good materials to use for a chestplate. Be sure to take your slime boots, slimesling and hang glider if you have one.

* Lapis Lazuli[MekanismTools](5)

* Osmium[Mekanism](5)

* Iron (6)

* Black Quartz[ActuallyAdditions](6)

* Boron[Nuclearcraft](7)

* Diamond(8)

* Refined Obsidian[Mekanism](12)

Things to Collect

Get Nether quartz, Cobalt![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_25.png), 5 ardite![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_26.png), and a handful of magma blocks.

## My first Ender pearl

Lots of mods gate mid-tier machines on ender pearls. We'll be able to make endermen spawners later on, but bootstrapping into it all is a pain.

* Be sure to have a hang glider and slime boots.

* Find either Plains or Desert during the night, look at an enderman to drag him to a relatively clear area, then drop down and duke it out.

# Machine tier

*Note to veterans of Modded Minecraft from 1.7.10: most mods have been ported to 1.12, some key ones (Ender IO) are still behind. At the end of this document there is a migration guide to help.*

If you don't have a particular goal or machine mod that will guide you then follow the Mekanism setup guide below. That should get your feet wet and enable you to Branch out easily.

If you don't have Mekanism then start by building a grindstone[Applied Energistics] with a crank on top. This will give you access to dust versions of ores. Next Grind up 2 iron ores and 1 nickel ore and craft together to make Invar. Now craft. an Induction Smelter[Thermal Expansion]. It will double your ores, open up key alloys, has the most recipes for joining base materials together, and runs off of most power supplies.

Next we'll want a way to run power cables around, which is best done with Power cables[Cyclic].

## Tips on getting common components

### Metal Alloys

Not every machine that can mix metals has the recipes for all alloys, so you'll often find you need 2 or 3 to make mod-specific alloys you need. But we can order them as to which you’re likely to get first and second.

* Smeltery[Tinker's Construct]

    * Pros: Common to have one built as part of your first base. Can melt lots of ores in parallel.

    * Cons: Doesn't get all alloys. Very easy to get unintended alloys when mixing molten metals. Pouring out metal into blocks is slow.

* Metallurgic Infuser[Mekanism]

    * Pros: Combined with a Enrichment Chamber you can make the Coal 8x as effective

    * Cons: Only alloy this makes is Bronze and Steel. Iron needs 2 passes to make Steel blend, which further needs to be smelted in Smeltery.

* Induction Smelter[Thermal Expansion]

    * Pros: Has the Most recipes for combining things for alloying, making it more friendly for other builds. Doubles ores, and can even tripple them with certain catalysts (Nickel Ore + Cinnabar -> 3 Nickel+Platinum)

    * Cons: Takes 2 invar ingots to create, nickel is a bit rare

* Alloy Furnace[NuclearCraft 2]

    * Pros: Makes all the important alloys you'd need

    * Cons: Requires Graphite to make. Harder to bootstrap into.

* Blast Furnace[IndustrialCraft2]

    * Pros: Only takes Iron and Copper to create, can turn iron directly into steel

    * Cons: Needs EU. Takes lots of iron to create. Only function is to make steel.

### Circuit chip, which is easiest

Most mod packs treat certain chips as equal. Which one to build comes down to preference. Do you want to frontload the investment in more machines to make the chips less expensive, or do you want to skip teching into a mod you're not really into.

#### Low entry, medium cost per chip

Carpenter[Forestry] block is built from x bronze and a little water and power to turn

* 1 tin + 6 redstone -> Basic circuit board[Forestry]

* Basic Circuit Board + 4 redstone + 2 glowstone + 2 lapis -> Advanced Circuit[IndustrialCraft2]

#### High Entry to get low cost per chip, Opens doors to fast automation

Mekanism is the most efficient when it comes to creating chips and steel, but takes an Enrichment Chamber to get there. Ie. invest in grinding steel early on returns cheaper chips and steel.

* redstone + Osmium -> basic control circuit

    * With Enrichment Chamber: 1 redstone + 8 osmium -> 8 basic control circuit

* 1 basic + 2 Enriched Alloy (1 iron+1 redstone) -> Advanced Control Circuit

#### No machines and no power, high cost per chip

IndustrialCraft2 only needs an ample supply of rubber

* Tools Needed: Forge Hammer(5 iron), Cutter(5 iron)

* 2 redstone + Iron + 6 plastic + 3 copper->Electronic Circuit

* Electronic Circuit + 4 redstone + 2 glowstone + 2 lapis -> Advanced Circuit[IndustrialCraft2]

### Plastic [Industrial Foregoing]

Quite a few mods are relying on plastic, which is a bit of a pain to get. Rubber trees have Latex liquid which must be extracted with a Tree Fluid Extractor. This Latex must be piped into a Latex Processing unit and joined with water to make Tiny Dry Rubber. 9 of those make Dry rubber which smelts into plastic. Normally a Tree Fluid Extractor would eventually break the rubber block, but we can work around that by breaking and replacing it periodically.

1. Craft a Sink[Cooking For Blockheads] to make an infinite water supply

2. Craft 64 Transfer Pipes[Extra Utilities 2] (they come in packs of 64)

3. Craft 4 Transfer Nodes (Liquid)[Extra Utilities 2] (they come in packs of 4)

4. Craft 4 Transfer Nodes (Items)

5. Place the Latex Processing unit down

6. 1 block away place the Tree Fluid Extractor

7. Attach the Fluid Transfer Node on the Extractor, another one on the Sink

8. Shift right click the Transfer Pipe to send their output liquid into the Latex Processing Unit

9. Power the Processor and place your Rubber Wood to confirm latex and water are being piped to the Processor.

10. Remove the Rubber wood before it breaks entirely (Normally takes like 5 minutes so no sweat).

11. Place a dispenser such that it would place[Quark] the Rubber Wood down.

    1. If you don't have Quark find an appropriate block placer machine.

12. Place an Auto-Breaker[Actually Additions] on another side of the wood

    2. Only needs redstone to break blocks, no RF power :)

    3. Use a redstone torch to toggle it to break blocks on a low redstone signal

13. Use an Transfer Node (Items) to pipe what it broke into the Dispenser

14. Place a Redstone Clock[Cyclic] to emit a very long high redstone signal followed by a short 0 redstone signal

    4. The high signal will cause the Dispenser to attempt placing the block.

    5. The low signal triggers the Auto-Breaker.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_27.png)![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_28.png)

### Metal plates

The Forge Hammer[IndustrialCraft2] can flatten a single metal ingot into its plate form, all in the crafting grid.

### Pulverized ores

Pulverizing ores often produces 2 dusts of that ore, each can make an ingot. Unlike the Smeltery, pulverizing keeps ores from inadvertently joining into alloys without explicitly combining them.

Alloys that can be combined with crafting dust together:

* 3 Copper dust + 1 Tin Dust -> Bronze Blend

* Gold + Silver -> Electrum Blend

* 2 Iron + Nickel -> Invar Blend

#### Grindstone[Applied Energistics 2]

This is an easy machine to make, requiring only certus quartz, 3 stone, and an aluminum gear. Normally you need to attach a Crank and wind it to grind ores and ingots into dust. 

#### Manufactory[Mekanism]

Fairly cheap at 4 lead + 8 copper + 4 iron + 1 redstone. This machine pulverizes any ore you throw at it. It can be upgraded to an Alloy Furnace[NuclearCraft] when you have the steel to make an Enrichment Factory[Mekanism].

This is one of the few machines that can make Graphite.

#### Pulverizer[Thermal Expansion]

The benefit with the Pulverizer is that it doesn't require any prerequisite machines. As a Thermal Expansion block it can pull and push its input and output items on any side

#### Crusher[Actually Additions]

Requires the Atomic Reconstructor, and thus power, to build.

### Steel

Getting steel is done in 2 parts. Getting either Smelting Steel dust via Mekanism (see Mekanism Setup below) or through Graphite/Coal Coke and then combining those in some alloying machine.

#### Graphite

Create a Manufactory (4 lead, 16 copper, 9 iron). This machine can turn Pulverized Coal/Charcoal into Graphite Dust. If you need the Ingot form of Graphite then smelt in a furnace. 2 Graphite dust + iron in an Alloy Furnace [NuclearCraft] gives steel

#### Coal Coke

Coal Coke[Immersive Engineering] is the product of using Coal in a [Coke Oven](https://ftb.gamepedia.com/Coke_Oven_(Immersive_Engineering)). 

 It must be arranged in a 3x3x3 solid cube to work. After it is arranged in that pattern, the player must right-click one of the center blocks with an [Engineer's Hammer](https://ftb.gamepedia.com/Engineer%27s_Hammer), then the multi-block is complete. Input the Coal and a very long time later you get Coal Coke.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_29.png)

#### Alloying machines

While some alloys can be made in the Tinker's Smeltery, others require an alloying machine. Here is a list of those that can make steel.

* Alloy Furnace[NuclearCraft]: Takes both Coal Coke or Graphite Dust 

* Industrial Blast Furnace[Tech Reborn]: Does not take Coal Coke

* Blast Furnace[Immersive Engineering]: Requires Blaze rods and Nether bricks to make this multiblock structure

## Mekanism Setup

Mekanism has Circuits, Ore doubling, Universal power cables, Parallel processing, and can do it all efficiently. You can also make cool upgrades like increased speed, reduced power consumption, 

Osmium belongs to this mod, but only smelt as much as you immediately need. The ore is useful later on.

1. Bootstrap some kind of power supply (see below)

2. Make a Metalurgic Infuser (4 iron, 2 redstone, 1 osmium)

3. Infuse 4 redstone + 4 osmium -> 2 Basic Control Circuit

4. Upgrade Infuser by crafting it with Control Circuits + Iron + redstone -> Basic Infusing Factory(does 3 items)

5. Make 2 more Basic Control Circuits

6. Infuse Iron + 4 coal -> 4 Enriched Iron + 4 coal -> 4 Steel Blend

7. Smelt Steel Blend in Smeltery -> 4 steel

8. Steel + osmium + redstone + iron -> Enrichment Chamber + Circuits + redstone + iron -> Basic Enriching Factory (does 3 items)

    1. This Enrichment Chamber acts like a pulverizer

9. Enrich a handful of Coal, Redstone

10. Now 1 coal enriched into Compressed Carbon can enrich 8 iron instead of 1. Same for Redstone.

11. Create a handful of Enriched Alloy (enrich compressed redstone into iron)

12. Enrich the Osmium Ore (not ingots which require a crusher) into osmium dust

13. Combine the osmium dust, Enriched Alloys and glass into speed upgrades.

    2. Replace the Osmium dust with gold dust for energy upgrades.

## Power

### General Power tips and tricks

#### Measuring RF

RFTools has a Network Monitor that has a checkbox to see RF/t going in/out of things on most power networks.

#### Converting EU to RF

IndustrialCraft2 still runs off of EU, a legacy power system requiring special power cables to convert from RF, the standard power unit.

Mekanism has Basic Universal Cable which can convert, but requires steel. See above for your prefered path to getting steel.

Alternatively you can get a tech reborn solar panel to power these legacy machines

#### Bootstrapping generator

To bootstrap your first set of machines that help you build your first power supplier you probably want something that runs off of coal or wood and isn't too expensive. This generator produces the most power per coal and is easy to make.

Coal Generator[Actually Additions] creates 48k RF per coal at 30 RF/t

Some other coal generators can produce 40 RF/t, but burn much less efficiently (36 kRF/coal) that simply making 2 Actually Additions Coal Generators should suit more demanding bootstrapping needs.

#### Charging Items

Normally an Energetic Infuser[Thermal Expansion] is the machine to build that can charge up just about any item that stores RF to use it. It is easy to make, taking a handful of iron, tin, copper, silver, gold and redstone. I'm unaware of any battery blocks that do the same.

### Good power setups

#### Solar Panel[Tech Reborn] 1024 RF/t per unit

* *Material Cost for setup: None*

* *Material Requirements for 1st and any subsequent power units: 20 redstone, 4 glowstone, 4 lapis, 3 diamond, 7 glass, 14 iron, 4 copper, 10 tin, 16 coal*

* *Material Requirements for Helper Machines: 12 copper, 5 tin, 17 iron, 6 redstone*

1. 14 bronze->Carpenter

    1. Make 2 Basic Circuit Board

2. Basic Circuit Board + Laps + redstone + glowstone -> Advanced Circuit 

3. Forge Hammer

    2. 8 Iron Plate

    3. X Tin Plate

    4. X Bronze Plate

4. 1 Basic Machine Casing

5. Basic Circuit Board + Machine Casing -> Compressor[industrial Craft 2]

6. 9 iron -> Hammer[Terraqueous]

7. Hammer the Coal -> Dust -> Raw Carbon Fibre, Compress into Carbon Plate[industrial Craft 2]

8. 2(Iron,Tin,Bronze plate) -> Mixed Metal Ingot[industrial Craft 2]

9. Advanced Alloy[Industrial Craft 2]

10. Advanced machine Frame [Tech Reborn]

11. Reinforced Glass[Tech Reborn]

12. 2 Diamond Dust + 3 Reinforced Glass + 2 Advanced Circuit -> Ultimate Solar Panel

#### Magmatic generator[Extra Utilities 2] 40 RF/t per unit

* *Material Cost for setup: 5 gold, 2 lava, 33 iron, 8 redstone, 2 Nickel, 1 lead, 8 obsidian, 8 blaze rods, 2 ender pearl, 9 Diamonds*

* *Material Requirements for 1st and any subsequent power units: 5 gold, 1 lava, 9 iron, 8 redstone*

* *Material Requirements for Helper Machines: None, Everything goes towards setup and generators.*

1. Obsidian + Diamond + Iron Pickaxes -> Ranged Pump[Ranged Pumps]

2. 2(blaze rods + crucible + obsidian + ender pearl) -> 2 Ender tank[EnderStorage]

3. Iron + redstone + lava + gold-> Magmatic Generator

4. Iron + nicket -> Invar + lead -> Opaque Hardened Fluiduct

5. In the Nether place Pump over lava

6. Pipe output into Fluiduct and into an Ender Tank

7. Ender Tank sits over a Magmatic Generator with the tank's handle turned down

8. Universal Pipe feeds RF back to the pump

9. Bootstrap generator with a bucket of lava

10. Place the other Ender Tank at home base to feed another magmatic Generator

11. Add more generators as your power needs increase

#### Storing Power

##### RFTools 

RFToolshas 4 tiers of Power storage blocks. Skip the Simple and go straight for Powercell. Get the Prismarine by using the Atomic Reconstructor[Actually Additions] to convert quartz into Prisamarine.

This gives you 1M RF storage. 

##### Thermal Expansion 5 

Energy Cell holds 2M RF. Fully upgraded with the Holding enchantment will get you to 150 M RF.

The vast majority of Minecraft machines can't be enchanted like a diamond sword, but Thermal Expansion breaks this mold with the Holding enchantment. Since it is the only enchantment that works, you’re bound to get this option when you use an enchanting table. Holding 4 gives 3x power.

#### Wireless/Multidimensional Power

Powercell[RFTools] allow you to link cells together using a Powercell Card. Make 2+ cards. Right click a card in one powercell. Open the UI of that Powercell and place the 2nd card in the Link: slot. This will link the 2 cards onto the same network. In a second Powercell simply right click a linked powercell card in and voila, you have wireless power. 

To get the Prismarine needed for the cards use the Atomic Reconstructor[Actually Additions] to convert nether quartz.

## Atomic Reconstructor

Actually Additions have 2 tiers of machines, accessible with the Atomic Reconstructor for Teir 1, and X for Teir 2.

A handy tip is that villages sometimes have a cool looking house with an Atomic reconstructor already charged up. Take the coal out of the generator and mine the coal block in the corner. See if you can make 4 blocks. Drop them in front of the atomic reconstructor and press the button. Quick access to a Medium Storage Crate.

### Atomic Reconstructor

The only hard thing to find for making this machine is redstone and Black Quartz. This can either be found mining, or crafted with nether quartz and coal.

Unlike most mods that you either input material in an input slot and it spends energy and time to make some output material, the atomic reconstructor zaps items in front of it.

It converts

* Coal -> Void Crystal (Makes decent armor and weapons)

* Redstone -> Restonia

* Iron -> Enori Crystal

* Diamond -> Diamatine

By default the Atomic Reconstructor is enabled and will start firing when you place it next to power. So first place it, use a redstone torch on it to toggle activation mode, then place it next to power. Then attach a button for selective use.

Zapping takes the same amount of power regardless of how many items you convert, so to save power try to plan ahead.

Some of the first things to make is a 4 void crystal blocks to upgrade your small crate to a large crate. Often these blocks of coal are found waiting to be zapped in specially marked houses in villages. Don't try and take the machines; the creator didn’t want you to cheat, but he wanted to show you how you can get wireless power to an atomic reconstructor. Just press the button and you have 

### Empowerer

When upgrading to an Empowerer you'll need 5 Display stands, one of which becomes the empowerer. The total quartz you’ll need for all 5 is 30 blocks of quartz. Get a chisel to convert half to chisseled quartz. The Double battery takes 5 iron, and 10 redstone. Atomically reconstruct all of it. Throw in a dash of Iron Casings(Iron + black quartz) and gold and voila you have an empowerer. Set it up with the display stands 3 blocks away N,S,E,and W, and power each.

Recipes take 1 block you place in the center, and 4 related blocks on each display stand. Once it is done just right click the floating product.

Add hoppers to automate construction of advanced materials

## [Optional] Magical Agriculture

Magical Agriculture allows you to grow resources, out of thin air, built the some of the most OP armor in the game, and do gardening for draconium and uranium.

However the entry cost is high, as is the investment in time and machines. Plan on not reaping the rewards till after your garden has had a few weeks of in-game time to grow and you've got your hands on 12 prosperity shards.

Progression into Magical agriculture is in 3 phases, Pre-Master Infusion Crystal, Getting the Crystal, and then Post.

The goal is getting 16 stacks of Inferium essence and 12 shards of Prosperity so you can finally get to making a healthy supply of high tier seeds. Trying to cash too much in earlier than that significantly delays getting to the higher tier capabilities.

[Here](http://www.9minecraft.net/mystical-agriculture-mod/) is the mod description page.

### Pre-Master infusion crystal

Prerequisite: About 200 inferium essence and some seeds, Iron, Worms, Power, Plant sower, and Plant harvester

Goal: 16 stacks of Inferium essence needed to make a master infusion crystal.

#### Planters

You typically only need 1 planter for your entire garden, and the Plant Sower[Industrial Foregoing] is your best bet. Add on the biggest radius upgrade you can afford.

#### Gatherers

Often the plants grow faster than most produce gathering machines can gather, it is best to avoid having a single gatherer. Rather use 4 gatherers each with a cheaper smaller area upgrade.

* Plant Gatherer[Industrial Foregoing]

* Farmer[Actually Additions]: Limited to planting and harvesting 9x9

#### Growing your Inferium garden

These plants grow with normal bonemeal, and thus quite a few mods offer helper tools. I'll list these helpers from the most cheap to most expensive.

* Worms[Actually Additions]: Simply till dirt and worms pop out. Occupies a 1x1, and infrequently bonemeals a plant in its neighborhood of 3x3, which it keeps hydrated

* Fertile soil[Rustic]: Dirt and Bonemeal. No need for water. Can't trample plants, increases plant growth

* Sprinkler[Cyclic]: Iron + bucket of water + bone. 

* Plant Fertilizer[Industrial Foregoing]: Plastic, Machine casing, Iron, Redstone. Supply with power and bonemeal and it will bonemeal your plants for you.

* Greenhouse glass[Actually Additions]: Empowered Lapis block + glass. Place over the plant to increase plant growth.

* Growth Accelerator[Mystical Agriculture]

#### What to Plant

Tier 1 Inferium seeds

#### Cashing in

Inferium, Prudentium, Intermedium, Superium, and lastly Supremium can be used to create seeds, like Iron Seeds. While it may be tempting to turn your pile of Inferium into superium and make a handful of Lapis Lazuli seeds, **DON'T**.

Converting your essence into higher tier essence requires using an Infusion Crystal (limited to 250 conversions to higher tier essence), and you don't have the Master version yet(infinite uses). This means that if you use up your finite (250) uses Infusion crystal then you won’t have enough to make the Master Infusion Crystal. That would mean you’d have to go out mining for more prosperity, or built a Void Miner, find some way to power it, and then wait.

But how many uses does crafting the Master Infusion Crystal actually take? 340. This means that we need 2 Infusion Crystals, giving us 160 uses leftover to use before we have our 16 stacks of Inferium essence. What can we do with that?

##### Dye seed (tier 2 seed)

Dye essence is very useful. Depending on how you arrange the essence you can get any dye color you need. No longer do you need to go out picking flowers trying to find one that is lime green, or pink.

Each dye seed takes 16 uses (8 Prudentium + Tier 1 seed -> Tier 2 seed, 4 prudentium + tier 2 seed -> Dye seed).

I recommend making about 3 Dye seeds and spending some time with a watering can.

Total cost = 12 infusion uses per seed

##### Nether Quartz Seed

Nether quartz is common to sink into Tinker's construct weapons, and generally useful for quartz.

1 nether quartz seeds cost 4 Intermedium + 1 tier 3 seed.

1 Tier 3 seeds and 4 intermedium costs 48 prudentium, a tier 2 seed and 12 infusion uses

1 tier 2 seed and 48 prudentium costs 200 inferium, a tier 1 seed and 50 infusion uses

Total cost = 72 infusion uses per seed

Seeing that we only have 160 uses from 2 Infusion crystals, we can either make 2 Nether quartz seeds and 1 Dye seed, or 1 nether quartz seed and 7 dye seeds. Not much cashing in, is it.

If you happen to have an abundance of Prosperity Shards then by all means.

### Getting a Master Infusion Crystal

Prerequisite: 12 prosperity shards

1. Craft 2 Infusion Crystals: Out of the 500 total uses of these we're going to use 340 for this phase

2. Craft 4 stacks of Inferium on top and bottom of an Infusion Crystal to upgrade to the next tier of essence

3. Repeat till you have 4 supremium

4. Craft your Master Infusion Crystal

### Post-Master Infusion Crystal

Now that you have a Master Infusion shard you can upgrade your inferium ad infinitum. Consider upgrading your Tier 1 seeds to Tier 2 or Tier 3. Realize that a Tier 3 seed doesn't spit out intermedium, but rather only 3 inferium. Thus spending 64 inferium to upgrade a single seed to Tier 3 doesn’t have that much return on investment. Rather upgrading to a higher tier seed is only really done to immediately convert into a resource seed that you want to harvest.

#### Useful Tools

Supremium armor grants creative flight and is strong enough to withstand the chaos guardian.

#### Useful Resources

I [extracted](https://docs.google.com/spreadsheets/d/1C64kWPZMNuodtchSfCWJTI8QfS904-0ha5sYX0ebDq0/edit?usp=sharing) the seed types from code and summarized the good ones here.

<table>
  <tr>
    <td>Tier 1 (use)</td>
    <td>Tier 2 (use)</td>
    <td>Tier 3</td>
    <td>Tier 4</td>
    <td>Tier 5</td>
  </tr>
  <tr>
    <td>Wood</td>
    <td>Rubber</td>
    <td>Iron</td>
    <td>Gold</td>
    <td>Diamond</td>
  </tr>
  <tr>
    <td>Stone</td>
    <td>Silicon</td>
    <td>Nether Quartz</td>
    <td>Lapis Lazuli</td>
    <td>Emerald</td>
  </tr>
  <tr>
    <td>Zombie (pig iron)</td>
    <td>Aluminum</td>
    <td>Redstone</td>
    <td>Blaze</td>
    <td>Wither Skeleton</td>
  </tr>
  <tr>
    <td>Ice (snow + torch)</td>
    <td>Copper</td>
    <td>Skeleton Bones</td>
    <td>Ghast</td>
    <td>Uranium [238]</td>
  </tr>
  <tr>
    <td></td>
    <td>Apatite (fertilizer)</td>
    <td>Tin</td>
    <td>Ender pearls</td>
    <td>Iridium</td>
  </tr>
  <tr>
    <td></td>
    <td>Dye</td>
    <td>Lead</td>
    <td>Steel</td>
    <td>Enderium</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Electrical Steel</td>
    <td>Nickel</td>
    <td>Vibrant Alloy</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Conductive Iron</td>
    <td>Invar</td>
    <td>Starmetal</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Quartz Enriched Iron</td>
    <td>Mithril</td>
    <td>Draconium</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>Signalum</td>
    <td>Yellorium</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>Cobalt</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>Solarium</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>Dark steel</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>Fluix</td>
    <td></td>
  </tr>
</table>


# Self contained Magic mods

## Astral Sorcery

<Some description>

The [Comforts] mod gives you a Hammock which lets you sleep through the day, so you can get back to moon light.

# Quarry time

You are going to have 1-2 main options for most mod packs. The Builder[RFTools] with a Quarry card and the Digital Miner, both of which now take a Vertical Miner from Actually Additions.

## Builder[RFTools]

The Builder takes cards that program the builder. The card we want is the Quarry card. There are 2 ways to define what to quarry. 1) Specifying the 2 corners of a cube, 2) Typing in the dimensions and offset from the builder. Option 2 is better for quarrying large quantities deep in the earth.

After inserting the card and providing power the Builder spits out anything not voided below itself. A small or medium crate will do fine, although an ender chest makes the Mining Dimension easier.

### Teching to Builder Quarry

See [Black Quartz](#heading=h.v5c222qmu2zd) for a walkthrough on obtaining a Vertical Digger

### Using the Quarry card

Option 1: Right click the Quarry Card and match the numbers below. You'll have to change middle offset (y axis) to instruct the builder to quarry a number of blocks below it. If you’re in the mining dimension you’re feet will be at y=100. Thus if you want to access y=10 you’ll want to set the offset to -90. If your builder is higher up then you’ll be 1 off.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_30.png)

Option 2: Shift right click the card on the Builder to establish the origin. Right click on opposite ends of a cube. Then insert the card into the Builder. This method is useful for becoming familiar with the Dimensions and offsets above.

### Filtering

Filter Module[RFTools] allows you to filter for just the stuff you want, or filter out items that the Quarry card doesn't have built in. Use the module and apply the block(s) you want to search for, then toggle the whitelist/blacklist button.

Note: To get Diamonds you sneak right click with the filter on a diamond ore block in the world to add it to the filter.  Either that or make a Combiner[Mekanism] to combine diamond dust and Cobble into the ore, then use that in the filter.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_31.png)

## Digital Miner

The Digital Miner lets you create filters for ores, and pay for mining just those items. The range is limited to 100 blocks, so you may want to have wireless power and storage if you plan on mining lots from this machine

### Teching to Digital Miner

See [Black Quartz](#heading=h.v5c222qmu2zd) for a walkthrough on obtaining a Vertical Digger

See [Mekanism](#heading=h.edro78d0i5ia) to get required machines.

1. Infuse Diamond dust onto Enriched Alloy

2. Make an Osmium Compressor and a handful of Refined Obsidian Ingot

    1. Go ahead and make a Obsidian Chestplate (Armor 12 vs Diamond's 8)

3. Craft a Robbit and 2 Logistical Sorters

4. Lastly 4 atomic Alloys + 2 diamonds -> Teleportation Cores

5. Make your Digital Miner

6. It requires too much power initially so you'll want to put in 5-6 energy upgrades.

    2. These energy upgrades are multiplicative so the latter ones will have the greatest impact.

### Using the Digital Miner

[Watch this tutorial](https://www.youtube.com/watch?v=jWJNhrV4c8k)

Filtering for rare gems: *Diamonds

Filtering for ores: ores*

Filtering for Iron, Quartz, and 

## Void Miner

Certain ores are only available with through physical mining or with the Void Miner. Many mods set up their gateways on these items forcing you to have teched up to a sufficiently high power level, and void miner level. 

### Items uniquely available to void and physical mining

All Tiers: Prosperity Ore (See [Magical Agriculture](#heading=h.iuars5macivv))

Tier 1: Litherite

Tier 2: Erodium

Tier 3: Kyronite

Tier 4: Pladium

Tier 5: Ionite

Tier 6: Aethium

### Teching to a Void Miner

See this [thread](https://forum.feed-the-beast.com/threads/environmental-tech-blocks-required-list.263949/) for resource requirements.

# Flight and teleport

Getting flight is usually made difficult, or at least comes with a price reducing effectiveness. Flight let's you get out of a chasm, get out of Dodge, find a good biome, get to slime islands, fight the ender/chaos dragon and wither, go ghast hunting, and generally helps speed up the game. Getting flight is a great goal to direct your minecrafting.

## Early game

Tinkers construct offers the slimesling, made from slime balls. Farming rice and making rice balls and converting them into a slime cube and into slime balls is an easy way to get this tool early. Another option is to pillar your way up to a slime island, defeat some slime mobs.

You use this tool by holding right click like an arrow at a point on the ground you want to fling **away** from. The closer to your feet the higher. The further away from your feet the farther you will be slung. The falling damage will easily kill you, thus you should craft slime boots. The color doesn't matter. These boots stop all fall damage at the cost/benefit that you bounce with roughly the same momentum. You can hold shift to stop the bounce and just take the crash in the knees.

Combine the slime sling with a hang glider and you have a great method of flight. Slinging yourself horizontally and then equipping your hang glider preserves your horizontal speed. This means you can fly across very quickly, often putting heavy load on the server. Circling around in loaded chunks is the best way to wait.

Note that the hang glider becomes more chaotic in higher altitudes, and rain. Also that your maximum hight is determined by how high the slime sling can sling you, so slime islands will still need pillaring.

In modpacks without the hang glider you'll need to be more proficient in slinging yourself around.

## Mid-game

Once you are fet up with trying to figure out which way is the opposite of the way you want to go, or got punched one too many times by a zombie while you were charging up the slimesling, then it is time to venture into other flight options. These options vary by entry costs, flight speeds, slots used and power consumption.

### Simply Jetpacks

This mod provides teired RF powered Jetpacks that go in the armor slot. You'll use an energetic empowerer to charge these babies up, each tier holding more capacity.

There is a hotkey to enable hover mode, with each tier getting progressively better at actually holding.

The base model(leadstone jetpack) is usually good enough for most needs.

Because the jetpack takes the armor slot it can take quite a bit on your overall armor. You can make armored Jetpacks, but know that you can't upgrade to a higher tier jetpack when you get the resources. I find the 3rd tier the best to turn into armor.

### Actually additions

The **Ring of the Squid**(?) Is the cheapest flight ring avaliable. Know that this requires Grid Power, which, while a less common power source, is avaliable everywhere, thus obviating the need to ever charge it.

#### Actually baubles

This mod let's you convert any of the above rings into baubles freeing you up from holding it.

### X

### Y

## Creative flight

**Draconic Leggings**[Draconic evolution] have varied recipe costs depending on the modpacks, but at least cost Awakened Draconium. See Draconic Evolution for more info.

**Supremium armor**[Mystical agriculture] gives flight while wearing the full set. See Mystical agriculture on how to tech into the armor.

Ring of the X[?] 

## Teleporting options

Astral pedestal(?)

RFTools Teleportation System

# Routing

## Vanilla

Hoppers are the vanilla item used to move items around. They are quirky, expensive, slow, and generally rarely used item in modded minecraft. But they still form the framework of how routing is done. I will explain a simple example that introduces the concepts that this section will use.

Goal: Queue up iron to be smelted, Have a supply of coal, store the iron ingots in a chest.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_32.png)

The top chest holds your Iron Ore. The top hopper sucks items out and puts them into the top of the furnace. There are 3 slots in the furnace. By putting things into the top it knows that the main input slot of the furnace is where these items go. Next the coal chest has a hopper pulling coal out and putting them in the back of the furnace. Pushing in the back tells the furnace to try and feed that into the fuel slot. Lastly the Hopper on the bottom is trying to suck things out. By sucking from the bottom the furnace maps this to the slot where its products are put.

Most items in modded minecraft allow you to configure which faces of the machine pull/push to which slots in thier UI.

## Early game routing

Outside of the expensive Hoppers, most routing pipes require at least some redstone. 

Note that most of these items deposit their payload on the first inventory available. 

Here is the earliest piping tools you should get to automate your machines.

**Item cable**[Cyclic]** **only takes 4 iron nuggets and brick stairs, but leaves it to you to push or pull items. Thus this works best for machines that can export items already, and you need to extend the reach.

**Item/Fluid Extractor**[Cyclic]:Acts like a hopper, but pulls out very fast. Seems 1 item / tick.

**Bundled Cable**[Cyclic]** **costs the same as Itemcable but uses Obsidian. This can transfer items, fluids, and energy. Again you provide your own way of pushing/pulling items/fluids.

**Transfer pipe**[Extra Utilities 2] only takes 1 redstone and stone slabs -> 64 transfer pipe. These must be paired up with one of 3 nodes, depending on what you want to transfer. 

**Transfer Node (Item/Fluid/Energy)**[Extra Utilities 2] acts like a hopper but is cheaper, and upgradable. Attach this onto the machine that has the stuff you want to move out, then attach transfer pipes out to the thing you want those items to be moved into.

Tip: Using an anvil you can "squish" your Transfer Nodes into 4x as many and can be between 2 adjacent blocks. This makes for compact machining. The drawback is that Transfer Pipes no longer work to pipe the items around. The other tricky bit is that you need to place the source block first, then attack the Flat Transfer Node, then place the block that the item is going into. This is often the reverse of the way you think. Normally you think. I want a chest to feed this machine. But with Flat Transfer nodes you need to place the chest first, then the transfer node, then the machine.

**Retrieval Node[**Extra Utilities 2]: Like the Transfer Node but pulls from inventories on the network of Transfer Pipes.

**Itemduct**[Thermal Dynamics]/**Fluiduct** is cheap to make(lead+?->opaque itemduct) and like the above options requires either a servo or a reciever to extract items.

**Servo**[Thermal Dynamics] attached to itemducts/fluiducts and pulls items out at their end and sends them down. Bote: Servos and Retrievers must be configured to run without a redstone signal. Do this by right clicking the servo, opening the redstone pane, and clicking ignore. The base tier allows blacklisting, next you get filtering that takes metadata like sword durability or types of wood into account (ignoring or filtering on it), next tier the main benefit is how it selects which inventory to push to (Nearest first, furthest first, Randon, and **round robin**), next tier doesn't offer much more. Each tier upgrade allows for larger stack sizes to transfer.

**Retriever**[Thermal Dynamics] Requires an Eye of Ender but is attached at the receiving end, and pulls from blocks on it's network. Thus you don't have to have every source block with it's own servo. The features for different tiers are the same as servos.

### Cyclic bundled cables

Cyclic has cables that can transfer power, items and liquids. Use the appropriate Extractor[Cyclic] to push the resources on the line you need.

## Mid-game routing

### Xnet

Xnet allows you to hook up various machines on a network, connecting to whatever side you like, and let a connected controller route items/fluids/power around. Lots of power in configuring it to do just about anything.

Watch [this video](https://www.youtube.com/watch?v=ksaJgiipaOg) on a tutorial on how to use Xnet.

## Late-game routing

Cross Dimensional Tesseract equivalent?

# ME System

There are 4 main ways that people handle their massive storage needs

1. [Storage Drawers] + External Storage[Refined Storage]/Storage Bus[Applied Energistics 2] + crafting terminal

    1. Pros: Cheap to expand and build, Low power consumption, accessible when power goes down

    2. Cons: No auto-crafting, Visual glitches when you get really big, No automation from true ME system

2. [RFTools] storage

    3. Pros: Can be attached to existing chest layout, Cheap but finite wireless storage

    4. Cons: Buffered retrieval and UI takes some getting used to, (Autocrafting?)

3. [Refined Storage]

    5. Pros: no need to hunt presses, Can autocraft arbitrarily nested recipes you teach it.

    6. Cons: As expensive as an ME system normally is

4. [Applied Energistics]

    7. Pros: Tried and trusted. You only need Skystone to craft all your presses.

    8. Cons: Meteors are still a pain to find and mine.

## Storage Drawers

Storage Drawers can hold 1-4 items with 32 stacks max per block. When chained to a Drawer Controller all of their inventories can be used, but sadly not by a Crafting Station. Native use cases are right clicking on the controller sucks items that are already in drawers out of your inventory. But with a crafting terminal and External Storage we get access to all the items. Expanding storage means building out the drawers, often covering up existing faces. We need to provide a trickle of power to an energy acceptor on the ME network. The drawer controller has a max radius of 16 blocks; but you'll hit rendering issues long before reading this limit. Covering up helps.

The big pro here is that you don't have to invest into massive inscriber speed and materials for storage chips. You just need to get your feet wet into Refined Storage and you’re done.

For storing massive quantities of items this solution can handle anything that can be compressed (cobblestone, metal ingots, redstone, lapis…) using the Compressing drawer. Sadly non-compressible items need to go into a line of jabba barrels[JABBA] or Crates[Actually Additions].

I think a wireless terminal would work, though I haven't tested it out yet.

## RFTools storage

**A note about RFTools crafting grids**

RFTools has taken the approach of having their crafting grid a ghost grid where items are simply stamped out, and no item actually exists in the crafting grid. This allows for storing recipes without actually pulling the items out of storage, and using JEI to populate the crafting grid with a recipe, even for items you don't have.

The downside is that because this ghost grid allows any item to populate it, jei doesn't know that you’re missing any ingredients. Thus validating you have all needed items requires you to click the '+’ button to pull the recipe down, then hover your mouse over the ‘1’ button in the RFTools crafting area and have the crafting grid tell you what is missing. Many minecrafters say it takes some getting used to.

There are 2 main independent paths that Remote Module storage works.

**Wireless Crafting Tablet**

RFTools uses tiered Storage Modules to store items, Tier 1 holds up to 100 stacks of items, Tier 2 holds 200, Tier 3 holds 300. The Storage modules don't cost much, nor to upgrade (Tier 3 takes 2 blocks of gold). The real cost is the Emerald needed to make the Storage Tablet. This tablet gives you access to the Storage Modules on the go, only needing to be recharged based on how much it is used. Without this portable tablet the modules must be installed in a Remote/Storage Module which ties you down. If you do go this route and are unhappy with the UI, you can place a Crafting Station next to it to get a simpler UI.  Sadly you’ll have to get used to this UI when using the tablet.

See the Power section for charging the tablet up.

**Storage Scanner**

The storage scanner indexes anything nearby that has an inventory. You can configure the radius. 

Watch [this video](https://www.youtube.com/watch?v=TVgbo1-gCEg) on a tutorial on how to use it.

The primary benefit here is that you can leave your organized chests in place, configure priorities and routes, and expand it with more chests.

Part of this functionality is free in Extra Utilities 2, with the 'Search nearby inventories' ability. This feature lets you hover your mouse over an item (often the item in JEI using its search feature) and press ‘t’ (you usually need to click off the search field to remove focus on the search field). You are then dropped out of your search and any chest that has that item starts smoking. You can change the keybinding.  You still have to look for the smoke, open that chest, look for the item, and move it into your inventory. 

The Storage Scanner lets you more easily fetch that item, and even pipe things around with other blocks.

## Refined Storage

I don't have any tips to speed up creating a Refined Storage ME system. One of the iconic things about a proper ME system is that you can make autocrafters, which show up in the main inventory but with no stack size. Clicking on it instructs autocrafters to get to work, even being able to send stuff through other machines, not just a crafting grid.

[Here](https://youtu.be/mLFJxP6kmjw?t=18m24s) is a video of a youtuber progressing through quickly.

## Applied Energistics

The progression and ability is the same as in Refined Storage only you use AE specific items and presses for base items.

Unlike in 1.7.10 you can create presses by using a Metallurgic Infuser [Mekanism] to infuse redstone into Skystone Dust. From there you can craft the rest of the presses with more dust.

![image alt text]({{ site.url }}/public/BMbpD6rCZ1qoniF20u7H2A_img_33.png)

## Autocrafting

<Description>

<Tips>

# Mob grinding tips

### Poor Man's mob grinder

The Fan[Cyclic] or Fan[Open Blocks] is an easy way to push mobs down a long drop. They only require a lever to power. Hoppers collect drops just as well as they did before. Filtering is much easier than vanilla. Creating a large platform is easy with Builder Wands.

### Mid-game mob grinder

While spelunking you'll encounter spawners. Placing a torch on top will prevent it from working. You can take the spawner with a cardboard box[Mekanism]. To make this box you’ll need one of the following machines based on the tech you’ve built up

* Carpenter[Forestry]

* Precision Sawmill[Mekanism]

* Sawmill[Tech Reborn]

* Sawmill[Thermal Expansion]

A mob grinding room should be 12 by 12 big so that spawns don't appear outside the room.

Get a Mob Crusher[Industrial Foregoing] as it is the cheapest of all the grinder options.

2 easy ways to move mobs into the grinder are Fans[Cyclic] and Vector Plate[Dark Utilities]

If you want more safety keeping up your grinder you can upgrade the spawners to Resturbed[Extra Utilities 2], which disable them with a redstone signal.

Often mobs will drop damaged weapons and odd items. The Reinforced Servo[Thermal Dynamics] allows easy whitelisting items and ignoring the damage data. Pipe these crappy items into a trash can, leaving the rest for you to reap later.

If you want to see into your grinder get Dark Glass[Extra Utilities 2] to let you see through, but not letting light in.

#### Wither skulls, Blaze rods, and Ender pearls

Spawner Changer[Actually Additions] lets you capture a mob, and change a spawner to produce that type, consuming the Spawner changer in the process. This item is gated behind the Empowerer, and converting a diamond block. Odds are that you will have destroyed 4 spawners by this point. You can get Magma cream by pulverizing the common Magma Blocks in the Nether.

### Wither grinder

For the first while you're going to be manually assembling the Wither in a cage using Wither Dust Blocks. Optionally the illumination wand [astral sorcery] makes wither proof blocks. Take a Cleaver to cut through the Wither’s armor 4.

Later we'll use the Wither Builder[Industrial Foregoing] which will need to be provided with Soul sand and Wither skeleton heads from some grinder. The tricky bit is to only give it 1 set at a time. Configure it to activate on a redstone pulse. Note: It builds the wither facing North-South, not East to West, ie. ignoring the orientation of the builder block.

An Atomic Reconstructor can be used with a Lens of the Killer to take him out in a few seconds. Power and careful redstone timing are all that's left.

An Item Collector[Cyclic] can be used to vacuum up items at a distance.

Wither Blocks[Dark Utilities] cannot be blown up by wither explosions. But it does let the explosion through, so add a layer of obsidian to contain the actual explosion. Care must be taken to pipe the redstone signal into an obsidian block underneath the Wither Builder. Thus keeping the fragile redstone dust as far away from the explosion as possible.

# Going nuclear

When solar or a fleet of magmatic generators fail to keep up with your demands here it is time to invest in a nuclear reactor.

### NuclearCraft

Watch [this tutorial ](https://www.youtube.com/watch?v=DW_1kg7d2zc)on how to get started. Beyond that I don't have any tips and tricks.

### Extreme Reactors

Again search online for tutorials. Both nuclear options are fairly realistic when it comes to the tedium of processing radioactive materials.

# Teleporting options

Astral pedestal(?)

RFTools Teleportation System

## Major changes for 1.7.10 veterans

### Minefactory Reloaded -> Industrial Foregoing

Rubber trees no longer drop raw rubber. Instead you need a tree fluid extractor to get liquid latex. Process that into rubber pellets, and craft that into plastic.

Most of the rest has just undergone a name change.

Help anyone?

### Big Reactors -> Extreme Reactors

Help anyone?

### Applied energistics 2 -> Refined Storage

Help anyone?

### Extra Utilities -> Extra Utilities 2

Help anyone?

### Magical Crops -> Magical Agriculture

Mobs still drop the base essence needed to make the seeds, but the tiers of crops are now gated on recipes that have high level ingredients. Also combining base essence into higher tier is done with 1 of 2 crystals. Both crystals can combine any tier of essence. The base tier crystal has limited uses (250), so is only good for bootstrapping into full automation. Without the Master crystal, making enough high tier essence needed for high tier seeds, is unprofitable. Thus you must invest heavily in a farm of Inferium to produce massive quantities of the base essence, like before. The big difference is that you really need to reach the milestone of getting the Master crystal before you have a reliable way of producing enough quality seeds to make a farm from.

The list of resources you can grow is much better.

You can't grow nether stars.

### Ender IO -> :(

Ender IO might never be ported to 1.12. Here are some of their items, and what to replace them with

#### Conduits

There is a possibility that the conduits will be split into their own mod. The devs have limited time to work on the refactor.

##### Thermal Dynamics approach

Thermal Dynamics has Signalum-plated ducts that can transfer items & power or fluids & power together. There's even a Redstone Relay now for transferring redstone signals along any type of duct.

* Items (itemduct)

* Fluid (fluiduct)

* Energy (fluxduct)

* Energy & Items (signalum-plated itemduct)

* Energy & Fluids (signalum-plated fluiduct)

Item ducts also have a speed upgrade (impulse), and there is a signalum version of this (signalum-plated impulse itemduct).

Fluiducts have two upgrades, hardened and super-laminar. Hardended ducts can handle laval and gelid cryotheum. Super-laminars are a further upgrade, capable of moving 4000mb/t. However, only the hardened can be upgraded to signalum-plated.

##### Extra Utilities 2 approach

Extra Utilities transfer pipes are capable of transfering items and fluids.

##### XNet Approach

Xnet can do all types but is a bit more investment to set up and all routing is crammed into the controller UI rather than distributed to the pipes interfaces themselves. The controller takes power to run and is better on the server.

##### Mekanism Pipes Approach

TODO: This needs more study as to how this system works. I'm sure the configurator is powerful, but it is different.

#### Priority based sorting

XNet can do priority based item sorting and filtering based on damage values. This does require a controller. But having a proper controller and Routing GUI is better when you want complex sorting.

#### SAG Mill and Alloy Smelter

Thermal Expansion's Sawmill, Pulverizer and Induction Smelter are best here.

#### Dimensional Transceiver

?[Mekanism]

PowerCell[RFTools] + Ender chests/tanks

#### Teleportation

None of the following options are as refined as the staff of travel, but probably gets the job done.

?[Actually Additions]: 

?[Not enough wands]: 

?[Psi]: 

#### XP Drain

XP Drain[Openblocks]

#### Enchanter

Disenchantment Lens[Actually Additions]: 

Mana Enchanter[Botania]: 

#### Dark Steel

Nothing I can think of

#### Vacuum chest

Ranged Collector[Actually Additions]: Doesn't require power

Absorption Hopper[Mob Grinding Utils]

Item Vacuum[Embers]

