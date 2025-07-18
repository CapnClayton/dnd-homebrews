SpellsList["divine knife"] = {
    name : "Divine Knife",
    classes : ["sorcerer"],   
    source : ["HB", 1],
    level : 0,
    school : "Conj",
    time : "1 a",
    range : "120 ft",
    components : "S,M",
    compMaterial : "Sliver of opaque glass",
    duration : "1 round",
    description : "Spell attack for 1d10 Piercing dmg; emits 5ft/5ft of light until the start of your next turn",
    descriptionFull : "You conjure an opaque, glass dagger and hurl it at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. The dagger sheds dim light in a 10ft radius until the start of your next turn."  + "\n   " + AtHigherLevels + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};

// Reflavor for Tasha's Caustic Brew
SpellsList["scars of the delver"] = {
    name : "Scars of the Delver",
    nameAlt : "Scars of the Delver",
    classes : ["cleric", "sorcerer"],   
    source : ["T", 115],
    level : 1,
    school : "Evoc",
    time : "1 a",
    range : "30-ft line",
    components : "S,M",
    compMaterial : "A bit of gold dust",
    duration : "Conc, 1 min",
    description : "Crea in line save or 2d4+2d4/SL Psychic dmg at start of turn; action remove from self or adjacent crea",
    descriptionFull : "A stream of gold dust emanates from your external scars in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in mind-ensnaring gold dust for the spell's duration or until a creature uses its action to scrape or wash the gold dust off itself or another creature. A creature covered in the gold dust takes 2d4 psychic damage at start of each of its turns."  + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
};

SpellsList["shatter the mask"] = {
    name : "Shatter the Mask",
    nameAlt : "Shatter the Mask",
    classes : ["cleric"],   
    source : ["HB", 1],
    level : 3,
    school : "Ench",
    time : "1 a",
    range : "60ft",
    components : "S,M",
    compMaterial : "Golden thread",
    duration : "1 round",
    save : "Cha",
    description : "20-ft. rad Choose creatures 6d6 + 1d6/SL Radiant dmg; save halves; secondary effect on fail.",
    descriptionFull : "A golden spool of thread attaches to your fingers and you; invoking the lament of experiences, yours or with those whom you have delved; unleash a wave of sorrow that lashes through the minds of creatures. Pain that the creatures have suppressed rise to the surface and manifest as translucent masks which crack and shatter in a radiant light as you tug on the golden threads.\n" + "Each creature of your choice in a 20-foot-radius sphere within range must make a Charisma saving throw, as the spell surfaces sorrowful memories and assaults their inner sense of self. On a failure, they take 5d6 radiant damage and suffer one of the following effects (your choice when you cast the spell - only one effect may be selected per casting):\n" + "\t*Unmasking Light* – The creature cannot benefit from invisibility, illusions, or shapechanging until the end of your next turn. Any such effects already active are suppressed (not ended) for the duration.\n" + "\t*Fragmented Will* – The creature has disadvantage on its next saving throw until the end of your next turn.\n" + "\t*Fractured Resolve* – The creature has disadvantage on its next attack roll until the end of your next turn.\n" + "\t*Heavy Heart* – The creature’s speed is reduced by half until the end of your next turn.\n" + "On a successful save, the creature takes half damage and suffers no additional effects\n" + "\t*At Higher Levels:* When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};

// PHB 2024 Spells (Not necessary on later versions of MPMB)
SpellsList["elementalism"] = {
	name : "Elementalism",
	classes : ["sorcerer"],
	source : ["PHB", 1],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Create a minor elemental effect",
	descriptionFull : "You exert control over the elements, creating one of the following effects within range: \n *Beckon Air.* You create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot cube. Doors and shutters being held open by someone or something aren’t affected. \n *Beckon Earth.* You create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand. \n *Beckon Fire.* You create a thin cloud of harmless embers and colored, scented smoke in a 5-foot cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke’s scent lingers for 1 minute. \n *Beckon Water.* You create a spray of cool mist that lightly dampens creatures and objects in a 5-foot cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute. \n *Sculpt Element.* You cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot cube to assume a crude shape (such as that of a creature or an object) for 1 hour.",
	ritual : false,
	psionic : false,
};

SpellsList["sorcerous burst"] = {
	name : "Sorcerous Burst",
	classes : ["sorcerer"],
	source : ["PHB", 1],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 crea 1d8 choice of Acid/Fire/Lightning/Poison/Psychic/Thunder dmg; on d8, roll another d8",
	descriptionFull : "You cast sorcerous energy at one creature or object within range. Make a ranged attack roll against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder. \n If you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell’s damage equals your spellcasting ability modifier. \n  The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
	ritual : false,
	psionic : false,
};
