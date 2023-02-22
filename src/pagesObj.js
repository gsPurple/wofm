var pages = [
        {
            current: 0,
            title: "HINTS ON PLAY",
            pageContent: "There is one true way through the Warlock's dungeon and it will take you several attempts to find it. Make notes and draw a map as you explore - this map will be invaluable in future adventures and enable you to progress rapidly through to unexplored sections.\n\nNot all rooms contain treasure; many merely contain traps and creatures which you will no doubt fall foul of. There are many 'wild goose chase' passages and whilst you may indeed progress through the dungeon, you will not take the Warlock's treasure unless you have picked up certain specific items on the way.\n\nSeveral keys will be found in dungeon rooms. Only by arriving at the Warlock's treasure with the correct keys to open his chest will you get to his treasure. You can expect many frustrations in Firetop Mountain.\nThe one true way involves a minimum of risk and any player, no matter how weak on initial rolls, should be able to get through very easily.\n\nMay the luck of the gods go with you on the adventure ahead!",
            choices: "menu",
            previous: -1
        },
        {
            current: 1,
            title: "INTRO",
            pageContent: "The Warlock of the Firetop Mountain is a different kind of book. You will embark on a perilous quest to find the Warlock's hidden treasure. The treasure is hidden deep within a dungeon which you must explore, populated with a multitude of underworld monsters which you must fight and kill - or be killed in the attempt.\n\nPart novel, with its exciting story, and part game, with its elaborate combat system, this book holds many adventures in store for you. Each page presents different challenges, and the choices you make will send you on different paths and into different battles. You may get lost in the maze, have your strength sapped by a hideous Wight, die in a battle with Orcs, or fall to any one of the dozens of creatures guarding the Warlock's treasure-vaults. Or, with courage, determination and a fair amount of luck, you may survive through all traps and battles to the innermost chambers of the Warlock's domain where the treasure is hidden.\n\nMagic and monsters are as real as life in this sword and sorcery treasure hunt which will keep you spellbound for hours on end!",
            choices: 0,
            previous: null
        },
        {
            current: 2,
            title: "HOW TO FIGHT CREATURES OF THE UNDERWORLD",
            pageContent: "Before embarking on your adventure, you must first determine your own strengths and weaknesses. You have in your possession a sword and a shield together with a rucksack containing provisions (food and drink) for the trip. You have been preparing for your quest by training yourself in swordplay and exercising vigorously to build up your stamina.\n\nTo see how effective your preparations have been, we will use a random roll to determine your initial SKILL and STAMINA scores.",
            choices: 0,
            previous: 1
        },
        {
            current: 3,
            title: "SKILL AND STAMINA",
            pageContent: "Your SKILL score reflects your swordsmanship and general fighting expertise - the higher the better. Your STAMINA score reflects your general constitution, your will to survive, your determination and overall fitness - the higher your STAMINA score, the longer you will be able to survive. Your LUCK score indicates how naturally lucky you are. Luck - and magic - are facts of life in the fantasy kingdom you are about to explore.\n\nBATTLES:\nYou will often come across battles against a creature of some sort. An option to flee may be given, but if not - or if you choose to attack the creature anyway - you must resolve the battle until you or the creature die (STAMINA reaches 0).\n\nESCAPING:\nWhen you run away from a battle the creature automatically gets in one wound on you (you lose 2 STAMINA) as you flee. Such is the price of cowardice. Note that the option to escape isn't always given to you.",
            choices: 0,
            previous: 2
        },
        {
            current: 4,
            title: "LUCK",
            pageContent: "At various times during your adventure, either in battles or when you come across situations in which you could either be lucky or unlucky, you may call on your luck to make the outcome more favourable. But beware! Using luck is a risky business and if you are unlucky, the results could be disastrous.\n\nTo use luck we will roll two dice. If the number rolled is equal to or less than your current LUCK score, you have been lucky and the result will go in your favour. If not, you have been unlucky and you will be penalized.\nThis procedure is known as Testing your Luck. Each time you do it, one point will be subtracted from your current LUCK score. Thus you will soon realize that the more you rely on your luck, the more risky this will become.\n\nWhen in battle, if you have just wounded the creature, you may test your Luck and, if you are lucky, you will do an extra 2 points of damage. However, if you are unlucky, you will only take 1 point from the creature's STAMINA.\nYou can also use luck to minimize the damage a creature does to you when you get wounded, but if you're unlucky you will suffer 3 points of damage, instead of the normal 2.",
            choices: 0,
            previous: 3
        },
        {
            current: 5,
            title: "RESTORING SKILL, STAMINA AND LUCK",
            pageContent: "Your stat scores can never exceed their initial value unless specifically instructed.\n\nSKILL - A Magic Weapon may increase your SKILL score, but remember that you can only use one weapon at a time!\n\nSTAMINA - This stat will change a lot during your adventure. As you near your goal, your STAMINA level may be dangerously low and battles may be particularly risky, so be careful!\nProvisions will restore 4 points of STAMINA, but you can only eat one at a time and only in certain occasions. Remember that you have a long way to go, so use your Provisions wisely!\n\nLUCK - When you are particularly lucky your LUCK score may increase.\n\nYou can also come across Potions that will restore your stat scores to their initial state. These can be used at any time.",
            choices: "menu",
            previous: 4
        },
        {
            current: 6,
            title: "YOUR STATS - STAMINA",
            pageContent: "Click the ROLL button on the left panel to roll the dice and get your STAMINA value.\n\nYour initial STAMINA will be the sum of the numbers rolled on both dice plus the base STAMINA value (12).",
            choices: 0,
            previous: -1
        },
        {
            current: 7,
            title: "YOUR STATS - LUCK",
            pageContent: "Click the ROLL button on the left panel to roll the dice and get your LUCK value.\n\nYour initial LUCK will be the number rolled on the die plus the base LUCK value (6).",
            choices: 0,
            previous: -1
        },
        {
            current: 8,
            title: "YOUR STATS - SKILL",
            pageContent: "Click the ROLL button on the left panel to roll the dice and get your SKILL value.\n\nYour initial SKILL will be the number rolled on the die plus the base SKILL value (6).",
            choices: 0,
            previous: -1
        },
        {
            current: 9,
            title: "POTIONS",
            pageContent: "A strange man shows you three potions. You don't know him, but you feel you can trust him as if you did...\n\n'Your quest intrigues me young adventurer' he said, leaning towards you. 'You may take a potion from my collection, to help you in your adventure!'\n\nPotion of Skill - restores SKILL points\nPotion of Strength - restores STAMINA points\nPotion of Fortune - restores LUCK points and adds 1 to initial LUCK",
            choices: ["Potion of Skill", "Potion of Strength", "Potion of Fortune"],
            previous: -1
        },
        {
            current: 10,
            title: "POTIONS",
            pageContent: "A strange man shows you three potions. You don't know him, but you feel you can trust him as if you did...\n\n'Your quest intrigues me young adventurer' he said, leaning towards you. 'You may take a potion from my collection, to help you in your adventure!'\n\nPotion of Skill - restores SKILL points\nPotion of Strength - restores STAMINA points\nPotion of Fortune - restores LUCK points and adds 1 to initial LUCK",
            choices: 0,
            previous: -1
        }
];
module.exports = {data: pages};
