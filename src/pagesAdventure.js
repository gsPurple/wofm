var advPages = [
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: 0,
        previous: -1
    },
    {
        current: 1,
        title: "POTIONS",
        pageContent: "A strange man shows you three potions. You don't know him, but you feel you can trust him as if you did...\n\n'Your quest intrigues me young adventurer' he said, leaning towards you. 'You may take a potion from my collection, to help you in your adventure!'\n\nPotion of Skill - restores SKILL points\nPotion of Strength - restores STAMINA points\nPotion of Fortune - restores LUCK points and adds 1 to initial LUCK",
        choices: ["Potion of Skill", "Potion of Strength", "Potion of Fortune"],
        previous: -1,
        choice0: "Potion of Skill",
        choice1: "Potion of Strength",
        choice2: "Potion of Fortune"
    },
    {
        current: 2,
        title: "RUMOURS",
        pageContent: "Only a foolhardy adventurer would embark upon such a perilous quest without first finding out as much as possible about the mountain and its treasures. Before your arrival at the foot of Firetop Mountain, you spent several days with the townsfolk of a local village some two days' journey from the base. Being a likeable sort of person, you found it easy to get on with the local peasants. Although they told many stories about the mysterious Warlock's sanctuary, you could not feel sure that all - or indeed any - of these were based on fact. The villagers had seen many adventurers pass through on their way to the mountain, but very few ever returned. The journey ahead was extremely dangerous, that you knew for certain. Of those who returned to the village, none contemplated going back to Firetop Mountain.\n\nThere seemed to be some truth in the rumour that the Warlock's treasure was stored in a magnificent chest with two locks, and the keys to these locks were guarded by various creatures within the dungeons. The Warlock himself was a sorcerer of great power. Some described him as old, others as young. Some said his power came from an enchanted deck of cards, others from the silky black gloves that he wore.",
        choices: 0,
        previous: -1
    },
    {
        current: 3,
        title: "RUMOURS",
        pageContent: "The entrance to the mountain was guarded by a pack of warty-faced Goblins, stupid creatures, fond of their food and drink. Towards the inner chambers, the creatures became more fearsome. To reach the inner chambers you would have to cross a river. The ferry service was regular, but the ferryman enjoyed a good barter, so you should save a Gold Piece for the trip. The locals also encouraged you to keep a good map of your wanderings, for without a map you would end up hopelessly lost within the mountain.\n\nWhen it finally came to your day of leaving, the whole village turned out to wish you a safe journey. Tears came to the eyes of many of the women, young and old alike. You couldn't help wondering whether they were tears of sorrow shed by eyes which would never see you alive again . . .",
        choices: 0,
        previous: 2
    },
    {
        current: 4,
        title: "1",
        image: 'wofm001.png',
        pageContent: "At last your two-day hike is over. You unsheathe your sword, lay it on the ground and sigh with relief as you lower yourself down on to the mossy rocks to sit for a moment's rest. You stretch, rub your eyes and finally look up at Firetop Mountain.",
        choices: 0,
        previous: -1
    },
    {
        current: 5,
        title: "1",
        pageContent: "The very mountain itself looks menacing. The steep face in front of you looks to have been savaged by the claws of some gargantuan beast. Sharp rocky crags jut out at unnatural angles. At the top of the mountain you can see the eerie red colouring - probably some strange vegetation - which has given the mountain its name. Perhaps no one will ever know exactly what grows up there, as climbing the peak must surely be impossible.\n\nYour quest lies ahead of you. Across the clearing is a dark cave entrance. You pick up your sword, get to your feet and consider what dangers may lie ahead of you. But with determination, you thrust the sword home into its scabbard and approach the cave.\n\nYou peer into the gloom to see dark, slimy walls with pools of water on the stone floor in front of you. The air is cold and dank. You light your lantern and step warily into the blackness. Cobwebs brush your face and you hear the scurrying of tiny feet: rats, most likely. You set off into the cave. After a few yards you arrive at a junction.",
        choices: ["Turn West - 71", "Turn East - 278"],
        previous: 4,
        choice0: 6,
        choice1: 9
    },
    {
        current: 6,
        title: "71",
        image: 'wofm002.png',
        pageContent: "There is a right-hand turn to the north in the passage. Cautiously you approach a sentry post on the corner and, as you look in, you can see a strange Goblin-like creature in leather armour asleep at his post. You try to tiptoe past him. If you're lucky, he will not wake up and remain snoring loudly - turn to 301. If not turn to 248.",
        choices: [],
        canTestLuck: true,
        lucky: 7,
        unlucky: 8,
        previous: -1
    },
    {
        current: 7,
        title: "301",
        pageContent: "To your left, on the west face of the passage, there is a rough-cut wooden door. You listen at the door and can hear a rasping sound which may be some sort of creature snoring.",
        choices: ["Open the door - 82", "Press on northwards - 208"],
        choice0: 13,
        choice1: 14,
        previous: -1
    },
    {
        current: 8,
        title: "248",
        pageContent: "You step with a crunch on some loose ground and his eyes flick open.\n\nThe creature that has just awakened is an ORC! He scrambles to his feet and turns to grasp at a rope which is probably the alarm bell. You must attack him quickly!",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Orc-6-5"],
        win: 7,
        previous: -1
    },
    {
        current: 9,
        title: "278",
        pageContent: "The passageway soon comes to an end at a locked wooden door. You listen at the door but hear nothing. Will you try to charge the door down or would you rather turn round and go back to the junction?",
        choices: ["Charge door - 156","Turn back - 92"],
        previous: -1,
        choice0: 10,
        choice1: 11
    },
    {
        current: 10,
        title: "156",
        pageContent: "You charge the door with your shoulder. Roll two dice. If the number rolled is less than or equal to your SKILL score, you succeed - turn to 343. If the number rolled is greater than your SKILL, you rub your bruised shoulder and decide against trying again. Turn to 92 to return to the junction.",
        choices: ["Test Skill"],
        choice0: "Test Skill",
        skill: 12,
        noSkill: 11,
        previous: -1
    },
    {
        current: 11,
        title: "92",
        pageContent: "You arrive back at the junction in the passage. You look left to see the cave entrance in the dim distance but walk straight on.",
        choices: ["Keep walking - 71"],
        choice0: 6,
        previous: -1
    },
    {
        current: 12,
        title: "343",
        pageContent: "The door bursts open and you fall headlong into a room. But your heart jumps as you realize you are not landing on the floor, but plunging down a pit of some kind! Luckily the pit is not particularly deep and you land in a heap less than two metres down.\n\nLose 1 STAMINA point for your bruises, climb out of the pit into the room and leave through the door, heading westwards.",
        choices: ["Go back - 92"],
        choice0: 11,
        updtlife: true,
        lifeAmount: -1,
        previous: -1
    },
    {
        current: 13,
        title: "82",
        pageContent: "The door opens to reveal a small, smelly room. In the centre of the room is a rickety wooden table on which stands a lit candle. Underneath the table is a small wooden box. Asleep on a straw mattress in the far corner of the room is a short, stocky creature with an ugly, warty face; the same sort of creature that you found asleep at the sentry post. He must be the guard for the night watch.\n\nYou may either return to the corridor and press on northwards or creep into the room and try to take the box without waking the creature. If you want to try to steal the box, Test your Luck. If you are Lucky, he does not wake up - turn to 147. If you are Unlucky, turn to 33.",
        choices: ["Return to corridor - 208"],
        canTestLuck: true,
        choice0: 14,
        lucky: 15,
        unlucky: 16,
        previous: -1
    },
    {
        current: 14,
        title: "208",
        pageContent: "Further up the passage along the west wall you see another door. You listen at it but hear nothing.\n\nYou can try to open the door or continue northwards.",
        choices: ["Open door - 397", "Continue northwards - 363"],
        choice0: 17,
        choice1: 18,
        previous: -1
    },
    {
        current: 15,
        title: "147",
        pageContent: "You leave the room and open the box in the passage. Inside you find a single Piece of Gold and a small mouse, which must have been the creature's pet. You keep the coin and release the mouse, which scurries off down the passageway.\n\nGain 2 LUCK points and continue.",
        updtGold: true,
        updtLuck: true,
        goldAmount: 1,
        luckAmount: 2,
        choices: ["Continue - 208"],
        choice0: 14,
        previous: -1
    },
    {
        current: 16,
        title: "33",
        pageContent: "The sleeping creature awakens startled. He jumps up and rushes at you, unarmed. With your sword you should be able to defeat him, but his sharp teeth look rather vicious. You may Escape through the door (turn to 320) or stand and fight the ORC who is attacking you.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        enemies: ["Orc-6-4"],
        win: 15,
        escape: 19,
        previous: -1
    },
    {
        current: 17,
        title: "397",
        pageContent: "The door opens to reveal a small room with a stone floor and dirty walls. There is a stale smell in the air. In the centre of the room is a makeshift wooden table on which is standing a lit candle. Under the table is a small box. In the far corner of the room is a straw mattress.\n\nYou may either open the box or leave the room.",
        choices: ["Open the box - 240", "Leave the room - 363"],
        choice0: 20,
        choice1: 18,
        previous: -1
    },
    {
        current: 18,
        title: "363",
        pageContent: "Further up the passage, on the west wall, you see another similar door. You listen at the door and grimace to hear the worst singing you have ever heard in your life!\n\nDo you want to go into the room to investigate this hideous din or walk on up the passageway?",
        choices: ["Investigate - 370", "Keep walking - 42"],
        choice0: 247,
        choice1: 23,
        previous: -1
    },
    {
        current: 19,
        title: "320",
        pageContent: "You run out of the room and slam the door shut behind you. You turn northwards up the passageway passing a similar-looking door further.",
        choices: ["Continue - 363"],
        choice0: 18,
        previous: -1
    },
    {
        current: 20,
        title: "240",
        image: "wofm003.png",
        pageContent: "You open the lid and a small Snake darts out to bite at your wrist!\n",
        choices: 0,
        previous: -1
    },
    {
        current: 21,
        title: "240",
        pageContent: "The box is light, but something rattles within. You open the lid and a small SNAKE darts out to bite at your wrist! You must fight the Snake.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Snake-5-2"],
        win: 24,
        previous: -1
    },
    {
        current: 22,
        title: "370",
        pageContent: "The door opens to reveal a small room. The room is dirty and unkempt. A straw mattress lies in one corner. In the centre of the room is a wooden table upon which a candle burns, lighting the room with its flickering flame. A small box rests under the table. Seated around the table are two small creatures with warty skin, dressed in leather armour. They are drinking some sort of grog and, by the way they stagger to their feet on your arrival, you assume they are very drunk. \n\nYou may either draw your sword and leap forward at them or slam the door quickly and run on up the passage.",
        choices: ["Attack them - 116", "Slam the door - 42"],
        choice0: 25,
        choice1: 23,
        previous: -1
    },
    {
        current: 23,
        title: "42",
        pageContent: "You eventually arrive at the end of the passage, at a three-way junction. You may turn either to the west or to the east.",
        choices: ["Turn west - 257", "Turn east - 113"],
        choice0: 26,
        choice1: 27,
        previous: -1
    },
    {
        current: 24,
        title: "145",
        pageContent: "The box has fallen to the ground during your fight with the Snake and out of it has fallen a bronze coloured key with the number 99 carved into it. You may take this key with you and leave the room. \n\nAdd 1 LUCK point and move on.",
        updtLuck: true,
        updtEquip: true,
        luckAmount: 1,
        equip: ["Key 99"],
        choices: ["Move on - 363"],
        choice0: 18,
        previous: -1
    },
    {
        current: 25,
        title: "116",
        pageContent: "The two drunken ORCS you now face are obviously startled at your entrance and, as quickly as they are able, they fumble around for the weapons. You must attack each one in turn. Their drunkenness will add 1 point to your dice roll when rolling to work out your Attack Strength, during each Attack Round",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        bonus: 1,
        enemies: ["Orc-5-4", "Orc-5-5"],
        win: 28,
        escape: 23,
        previous: -1
    },
    {
        current: 26,
        title: "257",
        pageContent: "The passageway runs straight for several metres and then ends at a wooden door. You listen at the door and hear angry shouting coming from within.\n\nWill you investigate or turn back?",
        choices: ["Investigate - 168", "Turn back - 293"],
        choice0: 29,
        choice1: 30,
        previous: -1
    },
    {
        current: 27,
        title: "113",
        pageContent: "You arrive at another junction in the passage.\n\nYou may either go northwards or continue eastwards.",
        choices: ["Go northwards - 285", "Go eastwards - 78"],
        choice0: 31,
        choice1: 32,
        previous: -1
    },
    {
        current: 28,
        title: "378",
        pageContent: "You wipe your bloodied sword on the mattress. The green blood leaves a slimy stain on the straw. Stepping over the bodies towards the table you flinch at the foul stench of the creatures. You pick up the box from under the table and examine it. It is a small wooden box with crude hinges. The name 'Farrigo Di Maggio' is inscribed on a brass nameplate on its lid.\n\nYou may open the box or, if you decide to leave it behind, leave the room.",
        choices: ["Open box - 296", "Leave room - 42"],
        choice0: 33,
        choice1: 23,
        previous: -1
    },
    {
        current: 29,
        title: "168",
        image: "wofm004.png",
        pageContent: "With the whip in his hand, the Orc Chieftain has been beating his servant, who is whimpering beneath him\n",
        choices: ["Next"],
        choice0: 34,
        previous: -1
    },
    {
        current: 30,
        title: "293",
        pageContent: "You arrive back at the junction in the passage and walk straight on eastward.",
        choices: ["Continue - 113"],
        choice0: 27,
        previous: -1
    },
    {
        current: 31,
        title: "285",
        pageContent: "You see a well-used door on the right-hand (east) side of the passageway. With your ear to the keyhole, you listen and hear a man screaming for help from inside.\n\nWill you open the door or walk on?",
        choices: ["Open door - 213", "Walk on - 314"],
        choice0: 37,
        choice1: 38,
        previous: -1
    },
    {
        current: 32,
        title: "78",
        pageContent: "The passage ends at a solid wooden door with metal hinges. Listening at the door, you hear strange mutterings and the clatter of what could be pots and pans. Whatever is in there, there are several of them.\n\nDo you want to go through the door or turn back?",
        choices: ["Through door - 159", "Turn back - 237"],
        choice0: 39,
        choice1: 40,
        previous: -1
    },
    {
        current: 33,
        title: "296",
        pageContent: "The box contains a small leather-bound book entitled 'The Making and Casting of Dragonfire'. You open the pages and begin to read. Fortunately it is written in your own language and so was probably not understood by the Orcs - otherwise this treasure would certainly not be as loosely guarded as it was.\n\nThe book is written in tiny handwriting by Farrigo Di Maggio. In it he tells the story of his life's work; the creation of the Dragonfire spell with which to fight evil Dragons.\n\nYou read how, in his last years, Farrigo finally perfected his spell but by then was too old to make use of it. So he completed his book, locked it in a chest and hid it in the depths of Firetop Mountain, afraid that it might fall into the wrong hands.",
        choices: ["Continue"],
        choice0: 41,
        previous: -1
    },
    {
        current: 34,
        title: "168",
        pageContent: "You open the door to a large room. A large chair behind a solid-looking table suggests to you that someone, or something, of rank uses this room. A chest in the centre catches your eye. In a corner of the room stands a man-sized creature with a warty face, standing over a smaller creature of similar race. With the whip in his hand, the ORC CHIEFTAIN has been beiting his servant, who is whimpering beneath him. \n\nWill you:",
        choices: ["Attack both - 372","Spring at the Chieftain in the hope that this servant will aid you - 65","Leave the room and head back for the junction - 293"],
        choice0: 35,
        choice1: 36,
        choice2: 30,
        previous: -1
    },
    {
        current: 35,
        title: "372",
        pageContent: "The battle commences!",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Orc Chieftain-7-6", "Servant-5-3"],
        win: 43,
        previous: -1
    },
    {
        current: 36,
        title: "65",
        pageContent: "As you spring at the Chieftain, his servant rises to his feet, picks up a hefty wooden stick and joins the melee. But to your disappointment he attacks you! Ungrateful wretch! Seeing this, you may Escape through the door down the corridor or continue the fight.\n\nIf you choose to Escape, you suffer normal escaping penalties.",
        choices: ["Escape", "Fight - 372"],
        choice0: 44,
        choice1: 35,
        previous: -1
    },
    {
        current: 37,
        title: "213",
        pageContent: "The door is locked. You may try to charge it down by rolling two dice. If the number rolled is equal to or less than your SKILL score, the door bursts open - turn to 36. If the number is greater than your SKILL score, the door remains locked, you lose 1 STAMINA point for your bruised shoulder and you must progress up the passage.",
        choices: ["Test Skill"],
        choice0: "Test Skill",
        skill: 45,
        noSkill: 46,
        previous: -1
    },
    {
        current: 38,
        title: "314",
        pageContent: "Further up the passage you see a door in the east wall. You listen hard, but can hear no sound.\n\nDo you want to open the door to investigate?",
        choices: ["Investigate - 223", "Continue moving - 300"],
        choice0: 47,
        choice1: 48,
        previous: -1
    },
    {
        current: 39,
        title: "159",
        pageContent: "You open the door into a large room which can only be the dining room of the same warty-faced creatures you now recognize. Sitting round a large table are five ORCS busily drinking and dribbling their bowls of rat-gizzard soup. All are involved in a rowdy argument as to who will get to chew the rat bones left in the large soup cauldron, so they do not see you enter.\n\nYou may be bold and prepare to attack them or you may not relish the prospect of taking on five of these creatures and try to escape.\n\nIf you wish to leave the room, 'Test your Luck'.\n\nIf you are Lucky, you get out without them noticing (turn to 237) and there is no penalty for escaping.\nIf you are Unlucky, they notice you. Prepare for battle and turn to 365.",
        choices: ["Attack them - 365"],
        choice0: 49,
        canTestLuck: true,
        lucky: 40,
        unlucky: 49,
        previous: -1
    },
    {
        current: 40,
        title: "237",
        pageContent: "You move swiftly down the passage and arrive back at the junction. Turn northwards this time.",
        choices: ["Go northwards - 285"],
        choice0: 31,
        previous: -1
    },
    {
        current: 41,
        title: "296",
        image: "wofm005.png",
        pageContent: "The last page reads:",
        choices: 0,
        previous: -1
    },
    {
        current: 42,
        title: "296",
        pageContent: "You say these words slowly and softly. Suddenly the pages seem to glow and as this glow disappears, so do the words on the pages of the book. You repeat the spell to yourself to memorize it and leave the room.",
        choices: ["Leave room - 42"],
        choice0: 23,
        previous: -1
    },
    {
        current: 43,
        title: "21",
        pageContent: "The green blood of the dead Orcs smells foul as it seeps from their bodies. You step around the corpses and investigate the chest. It is a sturdy affair, made of strong oak and iron, and it is firmly locked.\n\nYou may try to smash the lock with your sword or leave it alone and go through the open door.",
        choices: ["Smash lock - 339","Go through door - 293"],
        choice0: 50,
        choice1: 30,
        previous: -1
    },
    {
        current: 44,
        title: "65",
        pageContent: "You choose to avoid the fight, but still get hit while running away through the door.",
        choices: ["Run - 293"],
        choice0: 30,
        updtlife: true,
        lifeAmount: -2,
        previous: -1
    },
    {
        current: 45,
        title: "36",
        image: "wofm006.png",
        pageContent: "Inside the room the floor is covered with bones, rotting vegetation and slime.\n",
        choices: ["Continue"],
        choice0: 51,
        previous: -1
    },
    {
        current: 46,
        title: "213",
        pageContent: "You rub your bruised shoulder and continue up the passage.",
        choices: ["Continue - 314"],
        choice0: 38,
        updtlife: true,
        lifeAmount: -1,
        previous: -1
    },
    {
        current: 47,
        title: "223",
        pageContent: "The door is firmly locked.\n\nYou may try to force it open or you may continue along the corridor.",
        choices: ["Force the door open - 53","Continue along corridor - 300"],
        choice0: 54,
        choice1: 48,
        previous: -1
    },
    {
        current: 48,
        title: "300",
        pageContent: "On the east wall of the passage you see another door, this time made of solid metal. Listening at the door you hear the sound of tortured screams coming from within.\n\nYou may try opening the door or ignore this room and continue up the corridor.",
        choices: ["Try to open door - 102","Ignore the room - 303"],
        choice0: 55,
        choice1: 56,
        previous: -1
    },
    {
        current: 49,
        title: "365",
        pageContent: "The Orcs attack you one at a time.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        enemies: ["First Orc-6-5", "Second Orc-5-3","Third Orc-6-4","Fourth Orc-5-2","Fifth Orc-4-4"],
        win: 57,
        escape: 40,
        previous: -1
    },
    {
        current: 50,
        title: "339",
        pageContent: "The lock was obviously inadequate; it flies off and lands on the floor several metres away. You lift up the heavy lid and your eyes widen as you see the gold sheen coming from within. A fair number of Gold Pieces are inside. In one corner lies a small black bottle with a tight glass stopper, containing a liquid of some kind. Also in the chest is a silky black glove. But as you are admiring this treasure you hear a soft click and wince in pain as a small dart shoots forward into your stomach.\n\nRoll one die and subtract this number of points from your STAMINA to determine the effect of the poison on the dart tip.\n\nIf you are still alive, turn to 201.",
        choices: ["Roll"],
        choice0: "RollOne4Life",
        survived: 58,
        previous: -1
    },
    {
        current: 51,
        title: "36",
        pageContent: "The locked door bursts open and a nauseating stench hits your nostrils. Inside the room the floor is covered with bones, rotting vegetation and slime. A wild-haired old man, clothed in rags, rushes at you screaming. His beard is long and grey, and he is waving an old wooden chair-leg. Is he simply insane as he appears, or has this been some kind of trap?\n\nYou may either shout at him to try to calm him down or draw your sword and attack him.",
        choices: ["Shout at him - 263","Draw sword - 353"],
        choice0: 52,
        choice1: 53,
        previous: -1
    },
    {
        current: 52,
        title: "263",
        pageContent: "You shout: 'You are freed, old man!' at the top of your voice. Instantly, his rantings cease. He stops dead in his tracks and sinks to the floor, weeping loudly. As he gradually composes himself, he thanks you many times. You talk with him in the hope of discovering some of the secrets of the mountain and he begins to tell his story.\n\nMany years ago he was an adventurer like you in search of the Warlock's treasure. He was captured by the Orcs and thrown into his solitary cell as a sort of pet for the creatures. You ask whether he would like to accompany you into the mountain, but he simply wants to leave and see the world again. You ask him for advice but he says he knows little. He advises you to pay your respects to the boatman. He tells you that you must pull the right-hand lever on the wall ahead to open the iron gate at the end of the passage. He has also learned that the keys to the Boat House are guarded by a man and his dog.\n\nYou shake hands, leave the room and go your separate ways. You get 1 LUCK.",
        choices: ["Continue - 314"],
        choice0: 38,
        updtLuck: true,
        luckAmount: 1,
        previous: -1
    },
    {
        current: 53,
        title: "353",
        pageContent: "You lunge at the old man as he leaps towards you with outstretched arms - and run him through the chest with your sword. You curse as you realize that he was making no attempt to attack you; his wild excitement must merely have been relief after having been imprisoned for what had apparently been a very long time.\n\nYou will now get no information out of him on the perils of the adventure ahead. You progress up the passageway.",
        choices: ["Continue - 314"],
        choice0: 38,
        previous: -1
    },
    {
        current: 54,
        title: "53",
        pageContent: "You charge the door, hitting it squarely with your shoulder. Roll 2 dice.\n\nIf the number rolled is equal to or less than your SKILL score, the door opens (turn to 155). If the number exceeds your SKILL score, the door shudders but does not budge, and you wince in pain as you hit the door - lose 1 STAMINA point and continue up the corridor (turn to 300).",
        choices: ["Test Skill"],
        choice0: "Test Skill",
        skill: 59,
        noSkill: 60,
        previous: -1
    },
    {
        current: 55,
        title: "102",
        pageContent: "The door is not locked and opens. The room in front of you seems to be a small torture chamber, with various torture devices around the walls. In the centre of the room, two small, hunchbacked creatures are having their fiendish way with a Dwarf, who is tied to a hook in the ceiling by his wrists. The two hunchbacks are poking and cutting him viciously with their swords. The Dwarf lets out a final scream and falls silent, eyes closed. His captors make disappointed noises and look round angrily at you as if it were your fault that the Dwarf has collapsed. You must act quickly.\n\nWill you:",
        choices: ["Close the door quickly and continue up the corridor? - 303","Draw your sword and try to fight the creatures? - 19","Stride over to the Dwarf, give him a jab with your sword and put on an evil laugh for the torturers? - 68"],
        choice0: 56,
        choice1: 61,
        choice2: 62,
        previous: -1
    },
    {
        current: 56,
        title: "303",
        image: 'wofm007.png',
        pageContent: "An iron portcullis blocks your way and no amount of charging is going to budge it.\n\n",
        choices: ["Continue"],
        choice0: 63,
        previous: -1
    },
    {
        current: 57,
        title: "183",
        pageContent: "You search the bodies of the dead Orcs but find only a few teeth, nails, bones and knives in their pockets. You search the cupboards around the room but find only crude bowls, plates and spoons. But under the serving hatch you find a thin leather case half a meter long. You may open the case or you may leave it behind and walk out of the door.\n\nYou are proud of your victory and may add 1 SKILL and 5 STAMINA points.",
        choices: ["Open the case - 266","Walk out the door - 237"],
        choice0: 66,
        choice1: 40,
        updtlife: true,
        updtSkill: true,
        lifeAmount: 5,
        skillAmount: 1,
        previous: -1
    },
    {
        current: 58,
        title: "201",
        pageContent: "You sink to the floor. You pull the dart out and decide to bandage the wound. This gives some relief, but you still feel weak. You decide to take it easy and examine the contents of the chest, but if you wish you may eat some Provisions here.\n\nThere are 25 Gold Pieces and the label on the bottle shows it to be a Potion of Invisibility, good for one dose.\n\nThe glove is a mystery.\n\nYou may put any or all of these into your haversack and leave the room.",
        choices: ["Take Potion of Invisibility","Take the Glove","Leave the room - 293"],
        choice0: "Potion of Invisibility",
        choice1: "Take Glove",
        choice2: 30,
        canTakeProvisions: true,
        updtGold: true,
        goldAmount: 25,
        previous: -1
    },
    {
        current: 59,
        title: "155",
        image: "wofm155.png",
        pageContent: "A torch hangs from one wall lighting up a small armoury room stocked with swords, shields, helmets, daggers and the like\n\n",
        choices: ["Next"],
        choice0: 67,
        previous: -1
    },
    {
        current: 60,
        title: "53",
        pageContent: "You wince in pain as you hit the door.",
        choices: ["Continue - 300"],
        choice0: 48,
        updtlife: true,
        lifeAmount: -1,
        previous: -1
    },
    {
        current: 61,
        title: "19",
        pageContent: "These two evil creatures are GOBLINS. They attack you one at a time.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["First Goblin-5-5", "Second Goblin-5-6"],
        win: 68,
        previous: -1
    },
    {
        current: 62,
        title: "68",
        pageContent: "The two GOBLIN torturers look at each other amazed, then look at you. They chatter to themselves and then indicate for you to wait while they go off and get another Dwarf to give them some more fun. They disappear out of the room and you cut down the Dwarf who is, as you guessed, quite dead.\n\nYou decide it's best to leave and press on northwards up the corridor.",
        choices: ["Press on - 303"],
        choice0: 56,
        previous: -1
    },
    {
        current: 63,
        title: "303",
        pageContent: "You arrive at the end of the passage, where it meets another going east-west. But an iron portcullis blocks your way and no amount of charging is going to budge it. On the wall to your right are two levers and it seems likely that these levers have something to do with raising the portcullis.\n\nDo you wish to pull the right lever or the left lever?",
        choices: ["Right - 128","Left - 243"],
        choice0: 64,
        choice1: 65,
        previous: -1
    },
    {
        current: 64,
        title: "128",
        pageContent: "You hear a deep rumbling noise and the ground begins to shudder. Slowly and noisily the portcullis rises into the ceiling. You may now walk to the junction.\n\nWill you turn west or east?",
        choices: ["Turn West - 210","Turn East - 58"],
        choice0: 69,
        choice1: 70,
        previous: -1
    },
    {
        current: 65,
        title: "243",
        pageContent: "To your horror, you realize that this dummy lever was a trap! Although it looked like a handle it was in fact a wax-coated sword blade and it has now cut your hand badly. Did you use your right or your left hand?\n\nRoll one die. If the number you roll is odd, this was your sword hand and your fighting prowess has been severely hampered.\n\nLose 3 SKILL points and 1 STAMINA.\n\nIf you rolled an even number, you used your other hand, and so the injury is not quite so important.\n\nLose 1 SKILL point and 2 STAMINA.",
        choices: ["Roll one die"],
        choice0: "Hand Check",
        previous: -1
    },
    {
        current: 66,
        title: "266",
        image: "giverSleep.png",
        pageContent: "The case opens easily and inside you find a magnificent bow and one silver arrow\n",
        choices: ["Next"],
        choice0: 73,
        previous: -1
    },
    {
        current: 67,
        title: "155",
        pageContent: "The door splits along its length and you can wrench the timbers apart to let yourself in. A torch hangs from one wall lighting up a small armoury room stocked with swords, shields, helmets, daggers, breastplates and the like. You examine the weaponry and find nothing appearing superior to your own sword.\n\nHowever, a circular iron shield with a golden crescent at its centre catches your eye. You pick it up and feel its weight on your arm. If you wish to take this shield it will aid you in battles by helping to fend off wound damage inflicted by a creature on you.\n\nIf, in future during a battle in which you are using this shield, a creature wounds you, you may throw one die. If you throw a 6, the creature inflicts only 1 point of damage instead of the normal 2. If, for some reason, the creature would normally only inflict 1 point of damage, then a successful roll of 6 would mean that no damage is done.\n\nHowever, the shield is heavy and you will have to leave behind one item of equipment (adjust your Equipment List) to be able to carry it. You now leave the room and continue up the corridor.",
        choices: ["Take Shield","Continue - 300"],
        choice0: "Take Shield",
        choice1: 48,
        previous: -1
    },
    {
        current: 68,
        title: "317",
        pageContent: "You cut down the Dwarf. He is, as you guessed, dead. Going through the pockets of the two Goblins, you find a large piece of sweet-smelling Cheese.\n\nIf you wish to take this with you, put it in your pack and leave the room northwards.",
        choices: ["Take the cheese","Leave the room - 303"],
        choice0: "Take Cheese",
        choice1: 56,
        previous: -1
    },
    {
        current: 69,
        title: "210",
        pageContent: "Shortly along the passage you arrive at another junction where you may go either straight ahead westwards or northwards.",
        choices: ["Go westwards - 225","Go northwards - 357"],
        choice0: 74,
        choice1: 75,
        previous: -1
    },
    {
        current: 70,
        title: "58",
        image: "woodBench.png",
        pageContent: "At the corner there is a bench of solid wood, where you may stop and eat Provisions if you wish\n",
        choices: ["Next"],
        choice0: 76,
        previous: -1
    },
    {
        current: 71,
        title: "243",
        pageContent: "Ouch! You hurt your sword hand and your fighting prowess has been severely hampered.\n\nYou lost 3 SKILL points and 1 STAMINA.\n\nIf you wish, you can now pull the right lever. If you don't wish to pull the right lever, you won't be getting much further - and remember which hand you used!",
        choices: ["Pull the other lever - 128","Give up"],
        choice0: 64,
        choice1: "End Game",
        previous: -1
    },
    {
        current: 72,
        title: "243",
        pageContent: "You used your left hand, and so the injury is not quite so important.\n\nYou lost 1 SKILL points and 2 STAMINA.\n\nIf you wish, you can now pull the right lever. If you don't wish to pull the right lever, you won't be getting much further - and remember which hand you used!",
        choices: ["Pull the other lever - 128","Give up"],
        choice0: 64,
        choice1: "End Game",
        previous: -1
    },
    {
        current: 73,
        title: "266",
        updtLuck: true,
        updtEquip: true,
        luckAmount: 1,
        equip: ["Bow & Arrow"],
        canTakeProvisions: true,
        pageContent: "The case opens easily and inside you find a magnificent bow and one silver arrow. An inscription on the case says: 'The giver of sleep to those who never can'. You put the bow, arrow and case in your pack and leave the room, but you may eat Provisions first - and add 1 LUCK point.",
        choices: ["Leave the room - 237"],
        choice0: 40,
        previous: -1
    },
    {
        current: 74,
        title: "225",
        pageContent: "The passageway continues westwards and then turns due north. Some way up, you reach a junction where a narrow passage runs off to the west.\n\nWill you continue northwards or take the west way?",
        choices: ["Go northwards - 77","Go west - 63"],
        choice0: 79,
        choice1: 80,
        previous: -1
    },
    {
        current: 75,
        title: "357",
        pageContent: "The passage runs for some distance northwards and then starts to open into a large cavern with rough walls. There appears to be no way through.\n\nWill you return to the junction or enter the cavern?",
        choices: ["Return to junction - 269","Enter cavern - 57"],
        choice0: 81,
        choice1: 82,
        previous: -1
    },
    {
        current: 76,
        title: "58",
        pageContent: "Cautiously you creep along the passageway. After a short time it turns sharply to the north. At the corner there is a bench of solid wood and above the bench a sign reads 'Rest Ye Here Weary Traveller'\n\nHere you may stop and eat Provisions if you wish or continue.",
        choices: ["Stop and eat - 15","Continue - 367"],
        choice0: "Stop and eat",
        choice1: 78,
        previous: -1
    },
    {
        current: 77,
        title: "15",
        pageContent: "As you sit on the bench and eat your food, you begin to feel deeply relaxed and the aches from your body seem to be soothing themselves away.\n\nThis resting place is enchanted. You may restore 2 additional STAMINA points (but only if this does not exceed your Initial STAMINA score) and restore 1 SKILL point if any have been lost.\n\nWhen you are ready to continue, move along the passage.",
        choices: ["Move along - 367"],
        choice0: 78,
        updtlife: true,
        updtSkill: true,
        lifeAmount: 2,
        skillAmount: 1,
        previous: -1
    },
    {
        current: 78,
        title: "367",
        pageContent: "You arrive at another junction in the passageway.\n\nYou may turn westwards or go east.",
        choices: ["Turn westwards - 235","Go east - 323"],
        choice0: 83,
        choice1: 84,
        previous: -1
    },
    {
        current: 79,
        title: "77",
        pageContent: "Several metres up the passageway you arrive at a junction where you may turn either west or east. Set in the rock on the north wall is a small recess where you may rest and eat Provisions without being seen.\n\nIf you wish to take Provisions here, do so.\n\nAfterwards you may set off either eastwards or westwards.",
        canTakeProvisions: true,
        choices: ["Go east - 345","Go west - 18"],
        choice0: 85,
        choice1: 86,
        previous: -1
    },
    {
        current: 80,
        title: "63",
        pageContent: "As you walk along the corridor, you can see ahead that it is getting narrower. At one point you stoop, and as you do so, a deep, resonating laugh starts up around you.\n\nDo you wish to continue?",
        choices: ["Continue - 281","Turn back - 10"],
        choice0: 87,
        choice1: 88,
        previous: -1
    },
    {
        current: 81,
        title: "269",
        pageContent: "You arrive back at the junction and turn westwards.",
        choices: ["Turn westwards - 225"],
        choice0: 74,
        previous: -1
    },
    {
        current: 82,
        title: "57",
        pageContent: "As you enter the cavern you hear loud footsteps behind you, crunching heavily on the rocky floor. You crouch down beside the entrance in a small alcove in the rock.\n\nThe steps get louder and you see a great OGRE enter the cavern! He stands over two metres tall and is dressed in ill-fitting garments made from some sort of hide. He carries a large wooden club.\n\n What do you do?",
        choices: ["Attack him as he enters - 16","Try to creep out without him noticing you - 2","Try to distract him by throwing something into a far corner - 119"],
        choice0: 89,
        choice1: 90,
        choice2: 91,
        previous: -1
    },
    {
        current: 83,
        title: "235",
        pageContent: "You follow the passage westwards, then it turns sharply to the north and, some metres further on, a passage runs off to the west.\n\nYou can go along the westwards passage or carry on northwards.",
        choices: ["Take the westwards passage - 176","Carry on northwards - 5"],
        choice0: 92,
        choice1: 93,
        previous: -1
    },
    {
        current: 84,
        title: "323",
        pageContent: "After a few metres you reach another three-way junction.\n\nYou may go either northwards or eastwards.",
        choices: ["Go northwards - 8","Go eastwards - 255"],
        choice0: 94,
        choice1: 95,
        previous: -1
    },
    {
        current: 85,
        title: "345",
        pageContent: "You follow the passage eastwards for several metres, then it turns to the north.\n\nShortly you reach another junction where you may either go straight on or you may turn right, into an eastwards passage that soon turns north.",
        choices: ["Go straight - 381","Turn right - 311"],
        choice0: 96,
        choice1: 97,
        previous: -1
    },
    {
        current: 86,
        title: "18",
        pageContent: "You walk westwards along the passageway. After fifty metres or so, the way turns northwards. Two or three paces up the passage, you hear a crumbling beneath your feet and you try to leap back as the ground gives way.\n\nTest your Luck.\n\nIf you are Lucky, you manage to leap quickly backwards before a pit opens and are able to return to the junction (261).",
        choices: [],
        canTestLuck: true,
        lucky: 98,
        unlucky: 100,
        previous: -1
    },
    {
        current: 87,
        title: "281",
        pageContent: "The narrow passageway eventually becomes too small for you to walk along. You get down on your hands and knees, and crawl. Eventually, you will get no further and there seems to be no way through, so you decide to return to the main passage.\n\nYou head for the junction.",
        choices: ["Head back - 10"],
        choice0: 88,
        previous: -1
    },
    {
        current: 88,
        title: "10",
        pageContent: "You arrive back at the junction and turn northwards.",
        choices: ["Turn northwards - 77"],
        choice0: 79,
        previous: -1
    },
    {
        current: 89,
        title: "16",
        pageContent: "You draw your sword, and as you do so the OGRE hears you and prepares to attack.\n\nYou may Escape down the passage.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Ogre-8-10"],
        canEscape: true,
        win: 101,
        escape: 81,
        previous: -1
    },
    {
        current: 90,
        title: "2",
        pageContent: "Test your Luck.\n\nIf you are Lucky, you escape without attracting the Ogre's attention and creep down the corridor back to the crossroads (269).\n\nIf you are Unlucky, you curse as you kick a small stone which goes skidding across the cavern floor. You draw your sword in case the Ogre has heard it (16).",
        choices: [],
        canTestLuck: true,
        lucky: 81,
        unlucky: 89,
        previous: -1
    },
    {
        current: 91,
        title: "119",
        pageContent: "You open your pack and reach inside for something suitable to throw across the cavern.\n\nCheck your Equipment List, choose one item to throw and cross it off your List. If you have no Equipment you will have to throw a Gold Piece.",
        choices: ["Choose item"],
        choice0: "Throw Equips",
        choice1: 102,
        choice2: 103,
        previous: -1
    },
    {
        current: 92,
        title: "176",
        pageContent: "As you walk up the passage, it visibly widens and eventually you find yourself standing at the mouth of a rough cavern, a natural cave in the rock. As you look into the darkness, the cavern appears to be about 30 metres deep, with no visible exit.\n\nDo you want to go into the cavern or go back to the junction?",
        choices: ["Enter cavern - 270","Go back - 375"],
        choice0: 104,
        choice1: 105,
        previous: -1
    },
    {
        current: 93,
        title: "5",
        pageContent: "A rough timber doorway is on the east wall of the passage. You listen at the door and can hear a jolly sort of humming sound.\n\nDo you want to knock on the door and go in or will you continue northwards?",
        choices: ["Knock on door - 97","Continue northwards - 292"],
        choice0: 106,
        choice1: 107,
        previous: -1
    },
    {
        current: 94,
        title: "8",
        pageContent: "The passage ahead ends at a sturdy door. You listen but hear nothing. You try the handle, it turns, and you enter the room. As you look around you hear a loud cry from behind you and swing round to see a wild man leaping towards you wielding a large battle axe. He is a mad BARBARIAN and you must fight him!\n\nThere is a door in the north wall opposite, through which you may Escape during the battle (turn to 189).",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        enemies: ["Barbarian-7-6"],
        win: 109,
        escape: 108,
        previous: -1
    },
    {
        current: 95,
        title: "255",
        pageContent: "The passageway ends in a sturdy wooden door. If you want to, you can try opening it. You may also go back to the junction and try another route.",
        choices: ["Try to open door - 193","Try another route - 93"],
        choice0: 110,
        choice1: 111,
        previous: -1
    },
    {
        current: 96,
        title: "381",
        pageContent: "The passage ends at a wooden door, trimmed in iron. Various inscriptions adorn the door, but none makes any sense to you. You listen, but hear nothing.\n\nYou may either open the door or return to the junction.",
        choices: ["Open door - 84","Return to junction - 280"],
        choice0: 112,
        choice1: 113,
        previous: -1
    },
    {
        current: 97,
        title: "311",
        pageContent: "The room is completely bare, but the floor is covered in a mosaic of tiles.\n",
        image: "bareRoom.png",
        choices: ["Next"],
        choice0: 114,
        previous: -1
    },
    {
        current: 98,
        title: "261",
        pageContent: "You reach the junction and continue eastwards.",
        choices: ["Continue eastwards - 345"],
        choice0: 85,
        previous: -1
    },
    {
        current: 99,
        title: "348",
        image: "troll.png",
        pageContent: "A large, ugly head pokes around the corner and a Troll emerges from its chamber.\n",
        choices: ["Next"],
        choice0: 118,
        previous: -1
    },
    {
        current: 100,
        title: "18",
        pageContent: "Unlucky, you are too slow and you fall over two metres down into a pit - lose 1 STAMINA point (348).",
        choices: ["Continue - 348"],
        choice0: 99,
        updtlife: true,
        lifeAmount: -1,
        previous: -1
    },
    {
        current: 101,
        title: "50",
        pageContent: "The slain creature crashes to the ground. You go through his garments and find nothing, but a small pouch hangs around his neck. Inside this pouch is a small bronze key, with the number 9 cast into it. You may take this if you wish.\n\nNothing else is of value in the cavern so you leave and head back to the junction.",
        choices: ["Take Key 9","Back to junction - 269"],
        choice0: "Take Key 9",
        choice1: 81,
        previous: -1
    },
    {
        current: 102,
        title: "119",
        pageContent: "You throw the object across the cavern, where it lands with a clatter. The Ogre looks towards the noise, and goes over to investigate.\n\nMeanwhile you creep out, down the passage and back to the junction.",
        choices: ["Creep out - 269"],
        choice0: 81,
        previous: -1
    },
    {
        current: 103,
        title: "119",
        pageContent: "You throw the gold piece across the cavern, where it lands with a clatter. The Ogre looks towards the noise, and goes over to investigate.\n\nMeanwhile you creep out, down the passage and back to the junction.",
        updtGold: true,
        goldAmount: -1,
        choices: ["Creep out - 269"],
        choice0: 81,
        previous: -1
    },
    {
        current: 104,
        title: "270",
        pageContent: "You enter the cavern and look around to see dozens of beautifully coloured stalactites and stalagmites bordering the perimeter. Numerous drips can be heard, but the whole place seems like a magic grotto. Near the back of the cavern, you come across a pair of boots, which seem to have been made quite recently.\n\nWill you:",
        choices: ["Continue investigating the cavern? - 61","Try on the boots? - 394","Leave the cavern and return to the junction? - 375"],
        choice0: 121,
        choice1: 122,
        choice2: 105,
        previous: -1
    },
    {
        current: 105,
        title: "375",
        pageContent: "You arrive back at the junction and this time turn northwards.",
        choices: ["Turn northwards - 5"],
        choice0: 93,
        previous: -1
    },
    {
        current: 106,
        title: "97",
        image: "store.png",
        pageContent: "In the midst of all this clutter, you see a little old man in a grubby white gown swaying to and fro in a rocking chair.\n",
        choices: ["Next"],
        choice0: 123,
        previous: -1
    },
    {
        current: 107,
        title: "292",
        pageContent: "Northwards the passageway ends at a solid wooden door. You listen at the door but can hear nothing. There appears to be no choice but to open the door and enter the room, which you do.\n\nIt's a large, square room. You flash your lantern around the room and catch a quick glimpse of its emptiness - although there are murals on the wall - before your lantern suddenly goes out. You try to re-light it, but it will not catch. In the blackness you hear a succession of frightful noises. Howls, screams, cries and wails are getting louder and louder until they reach the pitch where you must cover your ears.\n\nDo you have a Blue Candle?",
        choices: [],
        choice0: 126,
        choice1: 127,
        previous: -1
    },
    {
        current: 108,
        title: "189",
        image: "decoratedRoom.png",
        pageContent: "This room is splendidly decorated, with a polished marble floor and rough walls painted white.\n\n",
        choices: ["Next"],
        choice0: 128,
        previous: -1
    },
    {
        current: 109,
        title: "273",
        pageContent: "A search of the room reveals nothing of any value, although an old box in the corner contains a wooden mallet and five short stumps of wood, sharpened at one end.\n\nYou may take these if you wish, and can now leave through the door in the north wall.",
        choices: ["Take Wooden Mallet and Stakes","Leave - 189"],
        choice0: "Take Wooden Mallet and Stakes",
        choice1: 108,
        previous: -1
    },
    {
        current: 110,
        title: "193",
        image: "oneEyeStatue.png",
        pageContent: "Mosaics and marble inlays give this room a kind of beauty you have never seen before\n\n",
        choices: ["Next"],
        choice0: 131,
        previous: -1
    },
    {
        current: 111,
        title: "93",
        pageContent: "You arrive back at the junction and this time you turn northwards.",
        choices: ["Turn northwards - 8"],
        choice0: 94,
        previous: -1
    },
    {
        current: 112,
        title: "84",
        image:"wizardAndGremlin.png",
        pageContent: "Seated at the table is an old man with a long grey beard, and squatting on his shoulder is a small winged beast\n\n",
        choices: ["Next"],
        choice0: 133,
        previous: -1
    },
    {
        current: 113,
        title: "280",
        pageContent: "You arrive back at the junction and this time take the passageway to the east. The passageway runs for several paces eastwards, then turns north.",
        choices: ["Turn north - 311"],
        choice0: 114,
        previous: -1
    },
    {
        current: 114,
        title: "311",
        pageContent: "The passageway ends in a door at which you listen but hear nothing. Trying the handle, you find that the door opens to reveal a large, square room. The room is completely bare, but the floor is covered in a mosaic of tiles.\n\nTwo shapes stand out on the floor; star-shaped tiles and hand-shaped tiles. A door on the opposite wall is the only way through.\n\nWill you:",
        choices: ["Walk across the room to the door? - 305","Walk across the room stepping only on stars? - 178","Walk across the room stepping only on hands? - 108"],
        choice0: 115,
        choice1: 116,
        choice2: 117,
        previous: -1
    },
    {
        current: 115,
        title: "305",
        pageContent: "Test your Luck three times.\n\nIf you are Lucky each time, you make it across to the far door and can leave the room. On the first throw that you are Unlucky, you step on a hand tile.",
        canTestLuck: true,
        lucky: 136,
        unlucky: 117,
        choices: [],
        previous: -1
    },
    {
        current: 116,
        title: "178",
        pageContent: "You tiptoe precariously across the room to the door in the north wall.\n\nYou open the door and proceed through it.",
        choices: ["Open door - 162"],
        choice0: 138,
        previous: -1
    },
    {
        current: 117,
        title: "108",
        pageContent: "The moment your foot touches a hand tile, you feel a vice-like grip on your ankle and look down to see a ghostly white hand gripping your leg.\n\nYou fight for your balance and manage to regain it. But to your horror you see that, from every hand-shaped tile in the floor, a similar apparition has appeared, and the floor across to the door is now scattered with ghoulish hands, flexing and snatching in the air. You draw your sword and chop at the hand.\n\nResolve this battle:",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Hand-6-4"],
        win: 139,
        previous: -1
    },
    {
        current: 118,
        title: "348",
        pageContent: "You are in a pit, a little bruised but not too seriously hurt. You look around as you get back on your feet and can see two passageways: a short one to the south which opens into a small chamber, and another heading northwards.\n\nYou are a little worried about the crash your fall has made, and even more by the gruntings you can hear coming from the chamber to the south. Before you can collect your thoughts, a large, ugly head pokes around the corner and a TROLL emerges from its chamber.\n\nYour ankle is twisted and you cannot move quickly, but the Troll is ready for a fight.\n\nYou will have to face the brute - but if you have a Potion of Invisibility you can use it now.",
        hasInvisibility: true,
        choices: ["Fight - 331"],
        choice0: 119,
        choice1: 120,
        previous: -1
    },
    {
        current: 119,
        title: "331",
        pageContent: "The creature is man-sized but its long arms look very powerful.\n\nResolve this battle:",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Troll-8-8"],
        win: 140,
        previous: -1
    },
    {
        current: 120,
        title: "51",
        pageContent: "You drink the Potion and can see the look of astonishment spread across the Troll's face.\n\nHe comes up to you and feels for you, but you step aside and he gropes the air fruitlessly. He thrashes around, clutching for you, but you are easily able to sidestep him. Eventually he gives up and returns to his chamber, just in time, as you feel yourself reappearing.\n\nAdd 2 LUCK points.\n\nYou may leave along the passage to the north.",
        choices: ["Go north - 287"],
        choice0: 140,
        updtLuck: true,
        luckAmount: 2,
        previous: -1
    },
    {
        current: 121,
        title: "61",
        pageContent: "As you investigate the cavern, you suddenly hear a scurry of steps behind you and swing round to face the grotesque black shape of a GIANT SPIDER which has been stalking you. The Spider's body is at least a metre across and you quickly draw your sword to defend yourself.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        enemies: ["Giant Spider-7-8"],
        win: 141,
        escape: 105,
        previous: -1
    },
    {
        current: 122,
        title: "394",
        image: "giantSpider.png",
        pageContent: "You crane round to see a large black shape shifting towards you. As it approaches you turn cold.\n\n",
        choices: ["Next"],
        choice0: 142,
        previous: -1
    },
    {
        current: 123,
        title: "97",
        pageContent: "A voice bids you 'Come in!' and you walk into a small room furnished with a table and chair, shelves, cupboards and the like, all of which have seen better days. Plates, bowls, cups and hundreds of old books line the shelves.\n\nIn the midst of all this clutter, you see a little old man in a grubby white gown swaying to and fro in a rocking chair, still humming happily to himself, his eyes fixed on you, but seeming at peace with the world. He bids you 'Good day.'\n\nDo you:",
        choices: ["Start to make conversation with him? - 334","Draw your sword and charge at him? - 247", "Decide not to waste time with him and leave, going northwards? - 292"],
        choice0: 124,
        choice1: 125,
        choice2: 107,
        previous: -1
    },
    {
        current: 124,
        title: "334",
        pageContent: "As you speak the old man rises to his feet. 'Oh my, oh my, a stranger!' he starts. 'Well, do come in, the shop is open. What can I get you? What would you like to buy? What takes your fancy? Which way are you headed? North? Well?'\n\nYou tell the old man your story. He listens intently and replies, 'Oh yes, in that case you will undoubtedly need one of my Blue Candles. That will be 20 Gold Pieces please. Cash if you don't mind. Yes, I know it's expensive, but isn't everything these days? Not so long ago these were only 5 Gold Pieces each; but you know what has happened to the price of candlewax since the Long Dark Night - oh, but you probably don't since you don't come from these parts. Never mind. I can guarantee it's still worth the price. You might need it sooner than you think.\n\nIf you decide to buy a candle, pay for it and add it to your Equipment List.\n\nYou are getting a little tired of his constant prattling.\nLeave the room and go northwards.",
        choices: ["Buy Candle","Leave room - 292"],
        choice0: "Buy Candle",
        choice1: 107,
        previous: -1
    },
    {
        current: 125,
        title: "247",
        pageContent: "He is a little startled by your onslaught, but simply raises his hand. As he does so, you suddenly collide heavily into ... apparently nothing. You sit on the floor in a heap, rubbing your nose.\n\nLose 2 STAMINA points.\n\nThe old man chuckles and says, 'You poor fool. Did you think I was defenceless in such a den of evil as this? You will regret your folly.'\n\nYou rise to your feet and return to the passageway, turning north up the corridor.",
        choices: ["Continue up the corridor - 292"],
        choice0: 107,
        updtlife: true,
        lifeAmount: -2,
        previous: -1
    },
    {
        current: 126,
        title: "239",
        pageContent: "You think back to the words of the old man. 'You might need it sooner than you think ...' You grope in your pack and pull out the candle.\n\nImmediately it lights itself of its own accord. The howling stops and the room appears bathed in a blue light from the candle. On the walls, the figures in the mural are moving! They are mouthing silent screams as if trapped in a two-dimensional hell.\n\nOn the wall opposite is another door, which you may leave through, or you may stay to investigate.\n\nAdd 1 LUCK for your foresight.",
        choices: ["Leave through door - 88", "Investigate - 149"],
        choice0: 144,
        choice1: 145,
        updtLuck: true,
        luckAmount: 1,
        previous: -1
    },
    {
        current: 127,
        title: "40",
        pageContent: "The ear-piercing sound gets louder and louder. The pain is unbearable. Reduce your SKILL score by 1 for the agony. You begin to grope in the dark for a wall.\n\nDo you head for:",
        choices: ["The west wall? - 355","The north wall? - 265","The east wall? - 181"],
        choice0: 146,
        choice1: 147,
        choice2: 148,
        updtSkill: true,
        skillAmount: -1,
        previous: -1
    },
    {
        current: 128,
        title: "189",
        pageContent: "The door opens into a short corridor which ends several metres ahead at another door, similar to the one you have just come through. You listen and hear nothing. You try the handle and it turns, allowing you into another room of a similar size. But this room is splendidly decorated, with a polished marble floor and rough walls painted white. On each of the four walls hangs a painting, and there is another door in the north wall.\n\nYou can either go straight through the room or you may stop to look at the paintings.",
        choices: ["Go straight - 90","Look at paintings - 25"],
        choice0: 129,
        choice1: 130,
        previous: -1
    },
    {
        current: 129,
        title: "90",
        pageContent: "You open the door into a narrow passage and follow it northwards. Some metres up the passageway, it turns to the east, then turns to the north. However, at this second bend, there is a small alcove in the rock.\n\nIt seems a convenient hiding place and a large rock forms a comfortable seat. You may stop here and eat Provisions if you wish.\n\nWhen you have rested, continue northwards.",
        choices: ["Continue northwards - 253"],
        choice0: 149,
        canTakeProvisions: true,
        previous: -1
    },
    {
        current: 130,
        title: "25",
        pageContent: "The paintings are portraits of men. Your spine shivers as you read the nameplate under the one on the west wall - it is that of Zagor, the Warlock whose treasure you are seeking. You look at his portrait and realize you are pitting yourself against an awesome adversary. You have the feeling that you are being watched and notice the piercing eyes following you as you move. You find yourself drawn towards his portrait and your fear rises. Lose 1 SKILL point.\n\nDo you have the courage to try to combat the Warlock?\n\nYou may either leave through the north door straightaway. Or you may look through your pack for a weapon to use against the Warlock's power.",
        choices: ["Escape through door - 90","Look for weapon - 340"],
        choice0: 151,
        choice1: 150,
        updtSkill: true,
        skillAmount: -1,
        previous: -1
    },
    {
        current: 131,
        title: "193",
        pageContent: "The door opens and you enter a small room. Your eyes widen as you look around to see that the walls of the room are covered in ornate stonework. Mosaics and marble inlays give this room a kind of beauty you have never seen before.\n\nIn a corner of the room is a large metal statue of a one-eyed creature. In its single eye is a sparkling jewel. As there appear to be no other ways through the room, you will have to go back to the junction - but that large jewel is very tempting.\n\nWill you leave it alone and go back to the junction or try to take the jewel with you?",
        choices: ["Leave the jewel - 93","Try to take the jewel - 338"],
        choice0: 111,
        choice1: 132,
        previous: -1
    },
    {
        current: 132,
        title: "338",
        pageContent: "You approach the statue cautiously. A scampering behind you makes you flash round ... but it is only a rat. You feel at the jewel, but it is solidly in place. You try to work your sword in behind it and as you work, you hear an ominous creaking noise.\n\nTo your horror the statue is beginning to move! You jump down and draw your sword. The IRON CYCLOPS cranes its head round towards you and steps down from its pedestal. You must fight!",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        enemies: ["Iron Cyclops-10-10"],
        win: 152,
        escape: 111,
        previous: -1
    },
    {
        current: 133,
        title: "84",
        pageContent: "The door opens into a small room, comfortably furnished with a table, several chairs and a large bookcase which covers one wall.\n\nSeated at the table is an old man with a long grey beard, and squatting on the old man's shoulder is a small winged beast. This creature is no more than six centimetres tall. It has two arms and legs; its skin is a dusty grey colour. It has tiny sharp white teeth and its wings are folded behind its back.\n\nThe old man says nothing as you walk in through the door, but he beckons you over to sit down at the table. He is tossing in his hand two small white objects.\n\nWill you:",
        choices: ["Sit down as he tells you? - 204","Leave the room and return to the junction? - 280","Draw your sword and rush forward? - 377"],
        choice0: 134,
        choice1: 113,
        choice2: 135,
        previous: -1
    },
    {
        current: 134,
        title: "204",
        pageContent: "The old man does not look up from the table, but his devilish little pet eyes you suspiciously and starts chattering in a small squeaky voice. The old man grunts and asks you whether you are game for a wager.\n\nWill you accept (you may only do so if you have at least one Gold Piece with you)? If not, you may either leave the room or attack the man.",
        choices: ["Accept wager - 130","Leave the room - 280","Attack the man - 377"],
        choice0: "Accept wager",
        choice1: 113,
        choice2: 135,
        previous: -1
    },
    {
        current: 135,
        title: "377",
        pageContent: "As you draw your sword, the WINGED GREMLIN flaps into the air and attacks you, while the old man rushes over to the bookshelf, touches a book and escapes through a secret doorway that opens for him.\n\nBut you must fight his pet.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Winged Gremlin-5-7"],
        win: 154,
        previous: -1
    },
    {
        current: 136,
        title: "305",
        pageContent: "You keep your balance and move forward.\n\nTwo steps left.",
        choices: [],
        canTestLuck: true,
        lucky: 137,
        unlucky: 117,
        previous: -1
    },
    {
        current: 137,
        title: "305",
        pageContent: "Just one more step to the door.",
        choices: [],
        canTestLuck: true,
        lucky: 138,
        unlucky: 117,
        previous: -1
    },
    {
        current: 138,
        title: "162",
        pageContent: "The passageway ahead runs northwards and you follow this until you reach another junction. Here you may either continue northwards or you may turn westwards.",
        choices: ["Continue northwards - 23","Turn westwards - 69"],
        choice0: 155,
        choice1: 156,
        previous: -1
    },
    {
        current: 139,
        title: "185",
        pageContent: "The hand withers and shrinks back into the floor. At the same time, the other hands stop dead and slowly fade away downwards into the riles. You decide this time to step on the star-shaped tiles, and step carefully across to the door in the north wall.\n\nThe door opens. Add 2 luck points.",
        updtLuck: true,
        luckAmount: 2,
        choices: ["Go through door - 162"],
        choice0: 138,
        previous: -1
    },
    {
        current: 140,
        title: "287",
        image: "rats.jpg",
        pageContent: "Gnawing at the bones are three Giant Rats which stop to look at you as you enter.\n\n",
        choices: ["Next"],
        choice0: 157,
        previous: -1
    },
    {
        current: 141,
        title: "29",
        pageContent: "Apart from the boots, which you decide to ignore, there appears to be little of value in the cavern.\n\nYou decide to head back the way you came.",
        choices: ["Head back - 375"],
        choice0: 105,
        previous: -1
    },
    {
        current: 142,
        title: "394",
        pageContent: "The boots are well-fashioned in a deep red leather. They are much sturdier than your own and fit you well. You try a few steps but are horrified to find that you cannot move, and the boots seem to be gripping your feet with considerable force. As you struggle to free yourself, you hear a crack and a smash as a stalactite falls from the roof; you crane round to see a large black shape shifting towards you. As it approaches, you turn cold. Several metres away is a GIANT SPIDER, at least a metre across, advancing towards you on spiny legs, mandibles clicking nervously in anticipation of its next meal. You draw your sword to defend yourself as it stalks you. You cannot move and thus will subtract 2 from each dice roll you make to calculate your Attack Strength.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        bonus: -2,
        enemies: ["Giant Spider-7-8"],
        win: 143,
        previous: -1
    },
    {
        current: 143,
        title: "232",
        pageContent: "Almost exhausted after your awkward fight with the Spider, you set to work on hacking the boots off with your sword.\n\nEventually they come free and you may leave the cavern down the passageway and back to the junction.",
        choices: ["Leave cavern - 375"],
        choice0: 105,
        previous: -1
    },
    {
        current: 144,
        title: "88",
        pageContent: "You enter another small room, bare except for a fountain in the middle. Not a particularly grand affair, the fountain is a small carved fish, and a short jet of water comes from its mouth.\n\nA wooden sign hangs from the fish and this bears a message. It is written in Goblin tongue, at which you are not very proficient. The first word you cannot understand, but the others read: '... not drink'. But you are extremely thirsty.\n\nWill you drink from the fountain? If not, you can pass it by and leave through a door in the north wall.",
        choices: ["Drink from fountain - 216","Leave through door - 384"],
        choice0: 160,
        choice1: 161,
        previous: -1
    },
    {
        current: 145,
        title: "149",
        pageContent: "As you watch the living mural, you are unaware of the speed with which your candle is burning. Suddenly it flickers and goes out!\n\nYou again begin to hear the piercing screams and their pitch grows to an unbearable level. You drop to your knees clutching your ears and crawl towards the wall.\n\nWhich wall will you crawl towards:",
        choices: ["The east wall - 181","The north wall - 265","The west wall - 355"],
        choice0: 148,
        choice1: 147,
        choice2: 146,
        previous: -1
    },
    {
        current: 146,
        title: "355",
        pageContent: "You grope along the wall but can find no way of escape. The noise is causing you to scream in pain!\n\nSubtract 1 SKILL point.\n\nYou may try either the east wall or the north wall.",
        choices: ["Try east wall - 181","Try north wall - 265"],
        choice0: 148,
        choice1: 147,
        updtSkill: true,
        skillAmount: -1,
        previous: -1
    },
    {
        current: 147,
        title: "265",
        pageContent: "You grope around the length of the wall and find a door. Quickly you fumble with the handle.\n\nIt opens!",
        choices: ["Go through door - 88"],
        choice0: 144,
        previous: -1
    },
    {
        current: 148,
        title: "181",
        pageContent: "You run along the wall searching for a door but find none. Your ears are on fire with the agony!\n\nLose 1 SKILL point.\n\nYou may try either the west wall or the north wall, but you must find a way out soon!",
        choices: ["Try west wall - 355","Try north wall - 265"],
        choice0: 146,
        choice1: 147,
        updtSkill: true,
        skillAmount: -1,
        previous: -1
    },
    {
        current: 149,
        title: "253",
        pageContent: "The passageway ends in another wooden door, this time a small one with a carved bone handle. You listen but hear nothing coming from inside. You try the handle and the door opens into a pear-shaped room with a rough stone floor, making walking across it somewhat awkward.\n\nIn one corner of the room is a pile of rubble, mainly stones and dust, but there are also two odd-shaped pieces of wood and a length of rope. A door in the north wall leads on.\n\nWill you:",
        choices: ["Examine the bits of wood - 328","Study the length of rope - 125","Leave through the north door - 73"],
        choice0: 162,
        choice1: 163,
        choice2: 164,
        previous: -1
    },
    {
        current: 150,
        title: "340",
        pageContent: "You try various items of equipment against the gaze of the painting, but none seems to work.\n\nYou may try any of the following if you have them:",
        choices: ["Slash the painting - 388","Hold a jewel up in front of it - 31","Plunge a wooden stake into it - 241","Throw cheese at it - 45"],
        choice0: 165,
        choice1: "Hold a jewel",
        choice2: "Plunge wooden stake",
        choice3: "Throw cheese at painting",
        previous: -1
    },
    {
        current: 151,
        title: "90",
        pageContent: "You feel a sharp pain inside you as you try to escape through the door - lose 1 STAMINA points.",
        choices: ["Continue"],
        choice0: 129,
        updtlife: true,
        lifeAmount: -1,
        previous: -1
    },
    {
        current: 152,
        title: "75",
        pageContent: "You sit back and rest from the exhausting battle. You may eat Provisions here.\n\nYou prise the jewel from the still statue. It is heavy in your hand and is worth 50 Gold Pieces. You put it in your pack. As you explore the room and the statue, you notice that one of its breastplate sections is loose.\n\nWhen you open this, a small key is inside. You examine this and notice the number 111 on it. With a smile you put the jewel and the key in your pack and set off back to the junction.\n\nAdd 3 LUCK points - you have a valuable artefact here",
        choices: ["Back to junction - 93"],
        choice0: 111,
        canTakeProvisions: true,
        updtLuck: true,
        luckAmount: 3,
        updtEquip: true,
        equip: ["Key 111"],
        previous: -1
    },
    {
        current: 153,
        title: "130",
        pageContent: "The old man asks you your stake. You may bet between 1 and 20 Gold Pieces (but not more than you possess!).\n\nHe tosses the white dice he has been playing with to you and asks you to roll. Roll two dice for yourself and for the old man.\n\nIf your total is higher, you win the amount of your stake from the old man. If his total is higher, you lose your stake. You may continue for as long as you have Gold Pieces, and then leave through the door and return to the junction.\n\nAdd 2 points to your skill, stamina and luck scores if you win.",
        choices: [],
        choice0: 169,
        choice1: 170,
        previous: -1
    },
    {
        current: 154,
        title: "196",
        pageContent: "You search the room. Try as you may you cannot find the secret switch to open the door in the bookshelf - the old man must have locked it from the inside. You do find 5 Gold Pieces in a drawer in the table.\n\nYou decide to return to the junction to the south.",
        choices: ["Leave the room - 280"],
        choice0: 113,
        updtGold: true,
        goldAmount: 5,
        previous: -1
    },
    {
        current: 155,
        title: "23",
        pageContent: "The passageway ends in a solid doorway and you are surprised to see a leather skirt tacked along the bottom of the door. You listen but hear nothing.\n\nWill you enter the room or return to the junction?",
        choices: ["Enter the room - 326","Return to junction - 229"],
        choice0: 171,
        choice1: 172,
        previous: -1
    },
    {
        current: 156,
        title: "69",
        pageContent: "Some way along the passage, the corridor bends round to the north and you follow it until you reach another junction. At this junction you see an arrow cut into the rock, pointing to the north, and you decide to try this direction.",
        choices: ["Follow the arrow - 244"],
        choice0: 173,
        previous: -1
    },
    {
        current: 157,
        title: "287",
        pageContent: "The passage continues for quite some time, then you reach the foot of a staircase cut into the rock. You ascend the stairs and they end at a wooden door with rusty hinges.\n\nListening at the door, you can hear some scratching sounds. You try the handle and the door creaks open. You step into a bare room scattered with bones. There is a door on the wall opposite.\n\nGnawing at the bones are three GIANT RATS which stop to look at you as you enter. Each is at least one metre long and their tatty coats indicate that they are fighters. You will have to take them on if you are going to get through the room, as they no doubt see you as a tasty meal.\n\nIf you have collected any Cheese during your adventure you may try throwing it to them.",
        choices: ["Attack them - 309"],
        choice0: 159,
        choice1: 158,
        previous: -1
    },
    {
        current: 158,
        title: "32",
        pageContent: "You toss the Cheese across the room at the Rats and they scramble for it, nipping and scratching each other as they fight for it.\n\nHaving distracted them, you pass through the room and leave by the door in the north wall.\n\nAdd 2 LUCK points for your good fortune.",
        choices: ["Leave through door - 124"],
        choice0: 174,
        updtLuck: true,
        luckAmount: 2,
        previous: -1
    },
    {
        current: 159,
        title: "309",
        pageContent: "You draw your sword and wait for the Rats to spring. As the leader prepares to jump, you shout loudly and leap forward at it. Your cry frightens off the other two and they scamper back a few paces.\n\nFight each of the Rats in turn:",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["First Rat-5-4","Second Rat-6-3","Third Rat-5-5"],
        win: 174,
        previous: -1
    },
    {
        current: 160,
        title: "216",
        pageContent: "The water is refreshing. As you drink more you feel a glow spreading through your body as if you were drinking at the fountain of life.\n\nAdd 4 STAMINA points, and restore your SKILL and LUCK scores to their Initial levels. The fountain of life for you must be the fountain of death for the evil Goblins.\n\nYou may eat Provisions here. When you have rested, leave through the north door.",
        choices: ["Leave through door - 384"],
        choice0: 161,
        canTakeProvisions: true,
        updtlife: true,
        lifeAmount: 4,
        updtLuck: true,
        luckAmount: 99,
        updtSkill: true,
        skillAmount: 99,
        previous: -1
    },
    {
        current: 161,
        title: "384",
        pageContent: "The door opens into a passage which you follow northwards. Shortly you reach a bend and follow it round to the east.\n\nSeveral metres on, you reach a junction at which you may either go north or continue eastwards.",
        choices: ["Go north - 262","Continue eastwards - 307"],
        choice0: 175,
        choice1: 176,
        previous: -1
    },
    {
        current: 162,
        title: "328",
        pageContent: "Both pieces of wood are y-shaped and smooth, as if washed up from a river. You may put these in your pack and then either leave through the north door or stay and examine the rope.\n\nIf you take the pieces of wood, you must leave behind one item from your pack.",
        choices: ["Leave through door - 73","Examine rope - 125","Take the wood"],
        choice0: 164,
        choice1: 163,
        choice2: "Take the wood",
        previous: -1
    },
    {
        current: 163,
        title: "125",
        pageContent: "You pick up the rope. It looks normal. In fact it looks as if it might be quite useful. You open your pack to put it in.\n\nSuddenly, it comes alive in your fingers, snakes quickly up your arm and attempts to wrap itself around your neck. You struggle to cut the rope with your sword before its grip tightens.\n\nTest your Luck.\n\nIf you are Lucky, you cut the rope and it drops to the ground allowing you to leave through the north door.\n\nIf you are not, the rope tightens - lose 1 STAMINA point.",
        choices: [],
        canTestLuck: true,
        lucky: 164,
        unlucky: 177,
        previous: -1
    },
    {
        current: 164,
        title: "73",
        pageContent: "The passage ahead leads you northwards. The rocky floor becomes sandy until eventually you are walking on a sort of coarse sand. You notice the passage is widening and ahead you can hear a flowing river.\n\nYou continue until you find yourself in a large cavern through which a river flows.",
        choices: ["Continue - 218"],
        choice0: 178,
        previous: -1
    },
    {
        current: 165,
        title: "388",
        pageContent: "Your sword flies out of your hand, into the air and you must leap aside as it comes down on you. It grazes your cheek as it falls. Lose 1 STAMINA point. You decide you'd better leave the room.\n\nPick up your sword.\n\nLose 1 more SKILL point in fear of the Warlock's power.",
        updtlife: true,
        lifeAmount: -1,
        updtSkill: true,
        skillAmount: -1,
        choices: ["Leave room - 90"],
        choice0: 129,
        previous: -1
    },
    {
        current: 166,
        title: "31",
        pageContent: "If you have the jewel from the Eye of the Cyclops, you hold it in front of the Warlock. His intimidating stare turns to an expression of pain.\n\nHe obviously feels the jewel's power.\n\nSuddenly his eyes turn white and his expression goes limp. Your confidence gains as you realize you have won your first real battle.\n\nGain 2 SKILL points. Put the jewel into your pack and leave through the north door.",
        choices: ["Leave through door - 90"],
        choice0: 129,
        updtSkill: true,
        skillAmount: 2,
        previous: -1
    },
    {
        current: 167,
        title: "241",
        pageContent: "As you attack the portrait with the wooden stake, you feel a wrench of pain in your wrist. You are forced by some unseen power to drop the stake.\n\nYou decide to run and leave through the north door.\n\nYou lose 1 more SKILL point in awe of the Warlock's power.",
        choices: ["Run - 90"],
        choice0: 129,
        updtSkill: true,
        skillAmount: -1,
        previous: -1
    },
    {
        current: 168,
        title: "45",
        pageContent: "The Cheese hits the portrait and bounces off. You hear an evil laugh coming from the walls and realize the Warlock is mocking you.\n\nYou decicle to leave the room by the north door.",
        choices: ["Leave room - 90"],
        choice0: 129,
        previous: -1
    },
    {
        current: 169,
        title: "130",
        pageContent: "You curse the man and leave the room angry.",
        choices: ["Leave the room - 280"],
        choice0: 113,
        previous: -1
    },
    {
        current: 170,
        title: "130",
        pageContent: "You pick up your winnings and leave the room.\n\nAdd 2 points to your SKILL, STAMINA and LUCK scores.",
        choices: ["Leave the room - 280"],
        choice0: 113,
        updtlife: true,
        lifeAmount: 2,
        updtLuck: true,
        luckAmount: 2,
        updtSkill: true,
        skillAmount: 2,
        previous: -1
    },
    {
        current: 171,
        title: "326",
        image: 'smallRoomKey.png',
        pageContent: "A small room with bare rocky walls. On the far wall hangs a golden key.",
        choices: ["Next"],
        choice0: 179,
        previous: -1
    },
    {
        current: 172,
        title: "229",
        pageContent: "You arrive back at the junction and this time turn right.",
        choices: ["Turn right - 69"],
        choice0: 156,
        previous: -1
    },
    {
        current: 173,
        title: "244",
        pageContent: "The passage runs northwards, and ahead you can hear the splashings of an underground river.\n\nThe air becomes cool and fresh. You soon reach a wide opening of a river bank but despair as you look across to see no way through on the other side. To the east the river flows through a cave in the rock.\n\nYou may either sit, rest and eat Provisions or continue by what seems to be the only way forward, jumping into the river and swimming downstream.",
        choices: ["Sit and rest - 143", "Swim - 399"],
        choice0: 181,
        choice1: 182,
        previous: -1
    },
    {
        current: 174,
        title: "124",
        pageContent: "The door opens into a wide passageway and you follow this for some distance before reaching a junction.\n\nHere you may either go northwards or turn to the east.",
        choices: ["Go northwards - 138", "Turn east - 76"],
        choice0: 183,
        choice1: 184,
        previous: -1
    },
    {
        current: 175,
        title: "262",
        pageContent: "Some way up the passage, you reach another junction where you may either go eastwards or turn westwards.",
        choices: ["Go eastwards - 199", "Turn westwards - 251"],
        choice0: 185,
        choice1: 186,
        previous: -1
    },
    {
        current: 176,
        title: "307",
        pageContent: "The passage twists and turns and eventually ends in a solid iron door. You listen but hear nothing.\n\nYou can try to open the door or you can go back to the junction.",
        choices: ["Try to open door - 134", "Go back - 87"],
        choice0: 187,
        choice1: 188,
        previous: -1
    },
    {
        current: 177,
        title: "125",
        pageContent: "The rope tightens - lose 1 STAMINA point.\n\nYou must Test your Luck again to try to cut the rope, and keep trying until you do. Each time you fail, you lose another stamina point (and reduce your luck score).\n\nIf you finally defeat the rope, you may leave through the north door.",
        choices: [],
        canTestLuck: true,
        lucky: 164,
        unlucky: 177,
        updtlife: true,
        lifeAmount: -1,
        previous: -1
    },
    {
        current: 178,
        title: "218",
        image: "wofm218.png",
        pageContent: "You are on the south bank of an underground river, facing across its black depths",
        choices: ["Continue"],
        choice0: 192,
        previous: -1
    },
    {
        current: 179,
        title: "326",
        pageContent: "You enter a small room with bare, rocky walls. On the far wall hangs a golden key. There appears to be no way through the room.\n\nDo you want to go for the key or leave it and return to the junction?",
        choices: ["Take the key - 35", "Return to junction - 229"],
        choice0: 180,
        choice1: 172,
        previous: -1
    },
    {
        current: 180,
        title: "35",
        pageContent: "As you step into the room, the door swings shut behind you. As it closes, there is a click and a hiss. From the centre of the ceiling, a jet of gas is filling the room with an acrid vapour. You breathe and cough deeply. You look at the door and then the key.\n\nWill you return to the door and escape quickly or hold your breath and dash for the key first?",
        choices: ["Return to door - 136", "Dash for the key - 361"],
        choice0: 197,
        choice1: 198,
        previous: -1
    },
    {
        current: 181,
        title: "143",
        image: "tubularworm.png",
        pageContent: "Suddenly a large tubular head breaks through the surface, twists around in the air and picks up your scent",
        choices: ["Continue"],
        choice0: 199,
        previous: -1
    },
    {
        current: 182,
        title: "399",
        pageContent: "The current is strong and takes you swiftly downstream. You are washed along through a narrow opening and out into a large cavern with banks on both sides. The current washes you on to the south bank.",
        choices: ["Get out of water - 218"],
        choice0: 178,
        previous: -1
    },
    {
        current: 183,
        title: "138",
        pageContent: "The passage widens and you realize you are about to enter a large cavern. You can hear noises coming from the cavern ahead and you proceed cautiously. As you approach, you can make out a large figure in the distance and you are overawed as you realize that this oversized human must be at least three metres tall! Dressed in a leather tunic, the creature is absorbed in a meal he is eating at a table.\n\nThe cavern is at least a hundred metres across and must be the home of this GIANT. A large table and two chairs are along one of the walls, and it is here that the creature sits. Intent on his meal (a large pig), he is unlikely to notice you. Around the rest of the cavern you can see his straw mattress, a great furry pelt which may be his blanket or a shawl, and a huge stone-headed hammer, which you would have no hope of budging. A fire burns in one corner of the cavern, under a hole in the ceiling. There appears to be no other way through the cavern.\n\nWill you take on this brute or return to the junction?",
        choices: ["Take on the brute - 163", "Return to the junction - 351"],
        choice0: 201,
        choice1: 202,
        previous: -1
    },
    {
        current: 184,
        title: "76",
        pageContent: "You arrive at another junction. An arrow on the wall points northwards and you decide to proceed in this direction.",
        choices: ["Go northwards - 244"],
        choice0: 173,
        previous: -1
    },
    {
        current: 185,
        title: "199",
        pageContent: "The passageway ahead widens and you can see a large cavern.  As you shine your lantern around it you can see crude stone weapons on the floor and a smouldering fire in the centre of the cave. But you see no way through. As you turn to make your way back you stop in your tracks to see two Neanderthal CAVEMEN barring your exit. They grunt aggressively at you.\n\nYou draw your sword and must prepare to fight.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        bonus: 1,
        enemies: ["Caveman-7-6", "Caveman-6-4"],
        win: 203,
        previous: -1
    },
    {
        current: 186,
        title: "251",
        pageContent: "As you stand on the pebbled bank you hear fluttering of wings and look up to see three Giant Bats swooping down",
        image: "wofm251.png",
        choices: ["Continue"],
        choice0: 204,
        previous: -1
    },
    {
        current: 187,
        title: "134",
        image: "wofm134.png",
        pageContent: "On the table there are two helmets: one of bronze and one of iron. Both are about your size",
        choices: ["Continue"],
        choice0: 189,
        previous: -1
    },
    {
        current: 188,
        title: "87",
        pageContent: "You arrive back at the junction and this time turn northwards.",
        choices: ["Turn northwards - 262"],
        choice0: 175,
        previous: -1
    },
    {
        current: 189,
        title: "134",
        pageContent: "The room is unoccupied and there seems to be no other means of exit. In the centre of the floor stands a table, and on this table are two helmets; one of bronze and one of iron. Both are about your size.\n\nWill you try one on, or is this worth the risk?",
        choices: ["Try on the bronze helmet - 202", "Try on the iron helmet - 325", "Return to the junction - 87"],
        choice0: 190,
        choice1: 191,
        choice2: 188,
        previous: -1
    },
    {
        current: 190,
        title: "202",
        pageContent: "You place the helmet on your head. It fits well. Suddenly a searing pain flashes across your forehead. You cannot think straight. This helmet is cursed and, try as you might, you cannot remove it! Reduce your SKILL score by 1. The pain soon subsides, but you still cannot shift the helmet. You stagger back to the junction, trying desperately to compose yourself.",
        choices: ["Go back to the junction - 87"],
        choice0: 188,
        updtSkill: true,
        skillAmount: -1,
        previous: -1
    },
    {
        current: 191,
        title: "325",
        pageContent: "You place the helmet on your head. It fits well. A glow begins to fill your body and you seem to possess a power and confidence beyond anything you have felt before. The helmet is blessed with magic and will allow you to add 1 point to all future dice rolls when computing your own Attack Strength during combat so long as you wear it.\n\nNote this on your Equipment List and return to the junction.",
        updtEquip: true,
        equip: ["Iron Helmet"],
        choices: ["Go back to the junction - 87"],
        choice0: 188,
        previous: -1
    },
    {
        current: 192,
        title: "218",
        pageContent: "You are on the south bank of an underground river facing across its black depths. There appear to be four ways of crossing. To your left, a rusted bell bears the sign 'Ferry Service 2 Gold Pieces - Please Ring'\n\nThere is a small raft in front of you on the bank with a long stick resting beside it: you could punt across the river. A rickety old bridge crosses on the right. If you don't trust any of these, you may swim.\n\nWhich will you choose?",
        choices: ["Ring the bell - 3", "Punt the raft across - 386", "Risk the bridge - 209", "Swim - 316"],
        choice0: 193,
        choice1: 194,
        choice2: 195,
        choice3: 196,
        previous: -1
    },
    {
        current: 193,
        title: "3",
        pageContent: "The bell gives a dull clang and after a few moments you see a withered old man climb into a small rowing boat moored on the north bank. He rows slowly across to you, moors the boat and limps towards you. He asks you for 3 Gold Pieces. When you protest at the price he mumbles some flimsy excuse about 'inflation'. He begins to get angry at your protestations.\n\nDo you pay him the 3 Gold Pieces or threaten him?",
        choices: ["Pay him - 272", "Threaten him - 127"],
        choice0: 206,
        choice1: 207,
        previous: -1
    },
    {
        current: 194,
        title: "386",
        pageContent: "You climb on the raft and start to punt your way across the river. The going is not easy. In the middle of the river the raft seems to take on a will of its own and bobs up and down dangerously. You realize it is attempting to capsize itself and throw you into the river!\n\nYou may either trust your strength and luck to hold on and keep punting to the north side or jump into the water and swim back to the south bank.",
        choices: ["Hold on - 55", "Jump into water - 166"],
        choice0: 208,
        choice1: 209,
        previous: -1
    },
    {
        current: 195,
        title: "209",
        pageContent: "The timbers of the bridge are rotting and decayed from years of neglect. A single plank snaps under your foot.\n\nRoll one die. A roll of 6 sends you splashing into the river below. A roll of 1-5 means you regain your footing.",
        choices: ["Test Roll"],
        choice0: "Test Roll",
        choice1: 210,
        choice2: 211,
        previous: -1
    },
    {
        current: 196,
        title: "316",
        pageContent: "The water is icy cold. You start to swim and notice that your splashings are attracting a moving 'turbulence' in the water. Will your strength and stamina hold out?\n\nRoll two dice. If the roll is equal to or less than your STAMINA score, you believe you can make it and swim furiously for the north bank. If the roll totals more than your STAMINA score, you decide not to risk it and return to the south bank.\n\nYou may eat Provisions on the south bank.",
        choices: ["Test Roll"],
        choice0: "Test Roll",
        choice1: 212,
        choice2: 213,
        previous: -1
    },
    {
        current: 197,
        title: "136",
        pageContent: "You arrive at the door, struggle with the lock and open the door. You burst out, closing the door behind you and take several deep breaths.\n\nReturn to the junction.",
        choices: ["Return to the junction - 229"],
        choice0: 172,
        previous: -1
    },
    {
        current: 198,
        title: "361",
        pageContent: "You snatch the key from its hook. It has the number 125 inscribed on it. But your lungs are bursting.\n\nRoll two dice.\n\nIf the number is less than or equal to your SKILL score, you make it across the room to the door. If it exceeds your SKILL score, you are forced to take a breath of poison gas. Reduce your SKILL score by 2 and your STAMINA score by 3 and dash for the door.",
        choices: ["Test Skill"],
        choice0: "Test Skill",
        skill: 197,
        noSkill: 214,
        previous: -1
    },
    {
        current: 199,
        title: "143",
        pageContent: "You squat on the sandy bank. As you prepare your meal you notice a movement in the sand a couple of metres to your left. The movement becomes quite turbulent and you spring to your feet, sword at the ready. Suddenly a large tubular head breaks through the surface, twists around in the air and picks up your scent. The smooth, segmented body of a GIANT SANDWORM rears up and sways over in your direction. As it does so a large orifice, with short, spiky teeth, opens in what must be it's head.\n\nYou must do battle with this creature. If you want to Escape, after three Attack Rounds, you may dive into the river and swim downstream, but you have lost the Provisions you started to eat.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Giant Sandworm-7-7"],
        win: 200,
        escape: 182, 
        previous: -1
    },
    {
        current: 200,
        title: "44",
        pageContent: "Panting after the struggle, you sit down to collect yourself and finish the Provisions you started. Eventually you pack your bag and wade into the stream.",
        choices: ["Wade into the stream - 399"],
        choice0: 182,
        canTakeProvisions: true,
        previous: -1
    },
    {
        current: 201,
        title: "163",
        pageContent: "You draw your sword and enter the cavern. The Giant stops in the middle of a mouthful, raises his head and snuffs the air. He swings round and catches sight of you approaching. Roaring loudly, he flings the pig's carcass at you.\n\nTest Your Luck.\n\nIf you are Lucky, it misses. If you are Unlucky, it hits you with quite some force.",
        choices: [],
        canTestLuck: true,
        lucky: 215,
        unlucky: 216,
        previous: -1
    },
    {
        current: 202,
        title: "351",
        pageContent: "You arrive back at the junction and turn eastwards.",
        choices: ["Turn eastwards - 76"],
        choice0: 184,
        previous: -1
    },
    {
        current: 203,
        title: "283",
        pageContent: "You arrive back at the junction and progress westwards.",
        choices: ["Go westwards - 251"],
        choice0: 186,
        previous: -1
    },
    {
        current: 204,
        title: "251",
        pageContent: "The passageway twists sharply northwards and ahead you can hear water flowing. You eventually reach the south bank of an underground river. As you stand on the pebbled bank you hear a fluttering of wings and look up to see three GIANT BATS swooping down on you to attack.\n\nFight these three as a single creature. You may Escape by jumping into the river:",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        enemies: ["Giant Bats-6-6"],
        win: 205,
        escape: 182,
        previous: -1
    },
    {
        current: 205,
        title: "344",
        pageContent: "You sheathe your sword and walk up to the water. Is it safe to swim? Although you cannot see any immediate signs of danger either in the water or around its banks, there is no way through on the north side of the river. You suddenly notice a gleaming sword lying on the river bed several steps in. You wade in to retrieve it. It is light in your hand, far less cumbersome than your own weapon, and it has a keen edge. This marvellous weapon will add 1 point to your SKILL whilst you use it.\n\nA mysterious voice speaking directly to your mind seems to be telling you to throw your own sword into the river. Will you? Or do you want to keep both swords?",
        choices: ["Throw sword into river - 56", "Keep both swords - 153"],
        choice0: 219,
        choice1: 220,
        updtEquip: true,
        equip: ["Light Sword"],
        previous: -1
    },
    {
        current: 206,
        title: "272",
        pageContent: "He calms down, takes the Gold (deduct this from your Gold) and rows you across to the north bank. After mooring the boat he ambles off down a passageway.",
        choices: ["Leave the boat - 7"],
        choice0: 221,
        previous: -1
    },
    {
        current: 207,
        title: "127",
        pageContent: "He doesn't take at all kindly to your threats. As you argue and his anger builds, you notice a transformation taking place. He begins to straighten up and grows physically stronger in front of your very eyes. His face and arms grow hairy. His teeth become sharp and pointed. You must make a quick decision.\n\nWill you offer him 5 Gold Pieces to calm him down, or prepare to attack him?",
        choices: ["Give him 5 Gold - 272", "Prepare to attack - 188"],
        choice0: 222,
        choice1: 223,
        previous: -1
    },
    {
        current: 208,
        title: "55",
        pageContent: "Roll two dice. If the total rolled is less than or equal to your LUCK score and is also less than or equal to your STAMINA score, then you manage to hold on and manoeuvre the raft across to the north bank (you will not lose a LUCK point). You arrive safely but as you step on to the bank, the raft drifts away and makes its own way across the river to the south bank.\n\nIf you exceed your LUCK and/or STAMINA totals, the raft throws you into the water and you start to swim back to the south bank.",
        choices: ["Test Roll"],
        choice0: "Test Roll",
        choice1: 221,
        choice2: 209,
        previous: -1
    },
    {
        current: 209,
        title: "166",
        pageContent: "You land in the icy water and frantically swim for the south bank. To your amazement the raft turns round in mid-stream and makes its own way back to the south bank. You quicken your pace, aware that your splashings may at any time attract the attentions of any underwater creatures living in the river.\n\nRoll one die. If you roll a 1, 2, 3 or 4 you make it safely back to the south bank. ",
        choices: ["Test Roll"],
        choice0: "Test Roll",
        choice1: 213,
        choice2: 210,
        previous: -1
    },
    {
        current: 210,
        title: "158",
        pageContent: "The water around you bristles with activity, as if an invisible hand is dropping unseen pebbles into the river. You gulp - PIRANHAS! - and you begin to feel their sharp teeth biting into your flesh. You kick with your limbs and slash with your weapons to keep them off until you reach the south bank.\n\nTreat the Piranhas as a single creature. If you win, you manage to srcramble out of the water and lie panting on the south bank.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Piranhas-5-5"],
        win: 213,
        previous: -1
    },
    {
        current: 211,
        title: "47",
        pageContent: "In the middle of the river, the bridge swings to and fro as it strains to take your weight. The handrail comes away suddenly as you lean on it.\n\nRoll one die. A roll of 6 sends you plunging into the river below. A roll of 1-5 means you regain your balance.",
        choices: ["Test Roll"],
        choice0: "Test Roll",
        choice1: 210,
        choice2: 224,
        previous: -1
    },
    {
        current: 212,
        title: "151",
        pageContent: "You gain ground on the 'turbulence' in the water but a few metres from the north bank you notice two sinister reptilian eyes on the surface of the water watching you. You are swimming straight for them.\n\nIf you decide you'd rather not face the owner of the eyes, you may turn round and head straight back to the south bank at full speed - you will arrive exhausted, and lose 1 STAMINA. Alternatively you can risk the eyes ahead.\n\nYou may also try a detour which will send you nearer the 'turbulence'.",
        choices: ["Head back - 218", "Risk the eyes - 86", "Try a detour - 158"],
        choice0: 226,
        choice1: 225,
        choice2: 210,
        previous: -1
    },
    {
        current: 213,
        title: "218",
        pageContent: "You make it back to the south bank and may eat Provisions now.",
        choices: ["Continue"],
        choice0: 192,
        canTakeProvisions: true,
        previous: -1
    },
    {
        current: 214,
        title: "136",
        pageContent: "You are forced to take a breath of poison gas before you manage to reach the door.\n\nYou lose 2 SKILL points and 3 STAMINA points.",
        choices: ["Continue"],
        choice0: 197,
        updtlife: true,
        updtSkill: true,
        lifeAmount: -3,
        skillAmount: -2,
        previous: -1
    },
    {
        current: 215,
        title: "163",
        pageContent: "You dodge the pig's carcass.",
        choices: ["Continue"],
        choice0: 217,
        previous: -1
    },
    {
        current: 216,
        title: "163",
        pageContent: "The pig's carcass hits you. You lose 1 STAMINA point.",
        choices: ["Continue"],
        updtlife: true,
        lifeAmount: -1,
        choice0: 217,
        previous: -1
    },
    {
        current: 217,
        title: "163",
        pageContent: "The Giant picks up his hammer and prepares to club you with it.\n\nResolve this battle.\n\nYou may Escape after three Attack Rounds down the passageway, where he will not be able to follow.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Giant-8-9"],
        win: 218,
        escape: 202,
        previous: -1
    },
    {
        current: 218,
        title: "28",
        pageContent: "The mighty Giant lies dead! You search his cavern and find little of use, although a purse in his belt contains 8 Gold Pieces. You are a little concerned about the second chair; to whom does it belong? You decide to leave the cavern the way you came.\n\nYou got 2 LUCK and 2 SKILL points for your victory.",
        choices: ["Leave cavern - 351"],
        choice0: 202,
        updtLuck: true,
        luckAmount: 2,
        updtSkill: true,
        skillAmount: 2,
        updtGold: true,
        goldAmount: 8,
        previous: -1
    },
    {
        current: 219,
        title: "56",
        pageContent: "As your sword splashes into the water, a bubbly voice says, 'Thank you!' It now seems that the only way onwards is to swim downstream to the east.\n\nYou plunge into the water.",
        choices: ["Plunge in - 399"],
        choice0: 182,
        previous: -1
    },
    {
        current: 220,
        title: "153",
        pageContent: "As you put the two swords into your belt, your new one seems to take on a mind of its own. It cuts your leg (lose 1 STAMINA point) and, as you draw it out, it turns rubbery in your hand. It's useless now so you fling it into the river. It seems that the only way forward is for you to swim eastwards down the river. You plunge in and start swimming.",
        choices: ["Plunge in - 399"],
        choice0: 182,
        previous: -1
    },
    {
        current: 221,
        title: "7",
        pageContent: "You are on the north bank of a fast-flowing river in a large underground cavern.",
        choices: ["Look around - 214"],
        choice0: 227,
        previous: -1
    },
    {
        current: 222,
        title: "272",
        pageContent: "He calms down, takes the Gold (deduct this from your Gold) and rows you across to the north bank. After mooring the boat he ambles off down a passageway.",
        choices: ["Leave the boat - 7"],
        choice0: 221,
        previous: -1
    },
    {
        current: 223,
        title: "188",
        pageContent: "He now stands just under two metres tall. He advances towards you. His body is hairy. His teeth are pointed. His eyes flash. His fingernails are sharp claws. His nose has become a rat like snout.\n\nHe is a WERERAT! If you decide to Escape, you may run over the rickety bridge.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        canEscape: true,
        enemies: ["Wererat-8-5"],
        win: 228,
        escape: 195,
        previous: -1
    },
    {
        current: 224,
        title: "298",
        pageContent: "The bridge is slippery from the splashings of the water. At one point you slip on a tuft of wet moss covering the timbers.\n\nRoll one die. A roll of 6 means you slip from the bridge into the water below and start swimming for the nearest bank. Any other roll is lucky; you managed to hold on and you reach the north bank.",
        choices: ["Test Roll"],
        choice0: "Test Roll",
        choice1: 225,
        choice2: 221,
        previous: -1
    },
    {
        current: 225,
        title: "86",
        pageContent: "A huge jaw yawns open in front of you. By the size of it, the CROCODILE you are swimming towards must be at least three metres long. The beast slaps its tail in the water and glides towards you. You must fight two Attack Rounds.\n\nYour combined trashings attract a 'turbulence' in the water that you had noticed before and this now makes its way towards your part of the river. Out of the corner of your eye you notice this and must decide what to do.\n\n If you believe that the Crocodile is on its last legs and you wish to continue the battle, then do so. Otherwise you can keep the beast occupied in the faint hope that this mysterious visitor will help you in some way after another Attack Round.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Crocodile-7-6"],
        win: 229,
        escape: 230,
        escape2: 234,
        previous: -1
    },
    {
        current: 226,
        title: "218",
        pageContent: "You make it back to the south bank exhausted and lose 1 STAMINA point.",
        choices: ["Continue"],
        choice0: 192,
        updtlife: true,
        lifeAmount: -1,
        previous: -1
    },
    {
        current: 227,
        title: "214",
        pageContent: "Facing northwards, the rock face is smooth and glistening with moisture. Moss of many different hues grows on the surface. There is an eerie silence punctuated only by the splashings of the river as it flows behind you. You have three options:\n\nA passage runs off to the north-west.\n\nA large timber door is directly in front of you in the middle of the rock face.\n\nAnother passage runs out along the river eastwards.",
        choices: ["Go north-west - 271", "Open the door - 104", "Go eastwards - 99"],
        choice0: 231,
        choice1: 232,
        choice2: 233,
        previous: -1
    },
    {
        current: 228,
        title: "342",
        pageContent: "The Wererat slumps to the ground. You search his body and find 2 Gold Pieces, his fare from the last crossing. You curse him for trying to overcharge you.\n\nAdd the 2 Gold Pieces to your Gold and row yourself across the river. Add 2 LUCK points. As you moor the boat on the north bank you look back at the body. It has vanished!",
        choices: ["Leave the boat - 7"],
        choice0: 221,
        updtGold: true,
        goldAmount: 2,
        updtLuck: true,
        luckAmount: 2,
        previous: -1
    },
    {
        current: 229,
        title: "259",
        pageContent: "As you swim to the bank away from the crocodile you look back to see the mysterious 'turbulence' approach the reptile's body, break into a frenzy and then move off, leaving not a trace of the animal.\n\nThankful that you were not there to find out what it was, you lift yourself out of the water on to the north bank. Add 1 SKILL and 2 LUCK Points.",
        choices: ["Leave the water - 7"],
        choice0: 221,
        updtSkill: true,
        skillAmount: 1,
        updtLuck: true,
        luckAmount: 2,
        previous: -1
    },
    {
        current: 230,
        title: "350",
        pageContent: "As the 'turbulence' surounds you, you can feel the jostlings of many small fish. They start ripping your flesh with vicious bites and you realize that you are surrounded by deadly PIRANHAS!\n\nSince you have wounded the Crocodile, you are lucky and most of the fish attack the bleeding reptile. Treat the Piranhas as a single creature.",
        choices: ["Fight"],
        choice0: 236,
        previous: -1
    },
    {
        current: 231,
        title: "271",
        pageContent: "The short passage begins to narrow and ends a few metres ahead at a doorway. You may go through the door. If you decide against this direction you can go back to the river.",
        choices: ["Go through door - 336", "Go back to river - 214"],
        choice0: 238,
        choice1: 227,
        previous: -1
    },
    {
        current: 232,
        title: "104",
        pageContent: "You find yourself in a short, narrow passageway with a door ahead to the north. You try this door.",
        choices: ["Try the door - 49"],
        choice0: 239,
        previous: -1
    },
    {
        current: 233,
        title: "99",
        pageContent: "The passageway runs eastwards. Ahead of you, you can see that a solid-looking door blocks the passage. You step up to investigate.",
        choices: ["Investigate - 383"],
        choice0: 240,
        previous: -1
    },
    {
        current: 234,
        title: "350",
        pageContent: "As the 'turbulence' surounds you, you can feel the jostlings of many small fish. They start ripping your flesh with vicious bites and you realize that you are surrounded by deadly PIRANHAS!\n\nSince you have not wounded the Crocodile, the fish may go for either you or it. Throw one die. If you throw a 1 or 2, the majority of the Piranhas go for you. If you throw a 3-6, the majority attack the Crocodile.",
        choices: ["Test Roll"],
        choice0: "Test Roll",
        choice1: 237,
        choice2: 236,
        previous: -1
    },
    {
        current: 235,
        title: "7",
        pageContent: "You swim to the shore and are now on the north bank of a fast-flowing river in a large underground cavern.\n\nYou may eat provisions here - and restore 1 LUCK point.",
        choices: ["Look around - 214"],
        choice0: 227,
        updtLuck: true,
        luckAmount: 1,
        previous: -1
    },
    {
        current: 236,
        title: "350",
        pageContent: "You are lucky! Most of the Piranhas decide to attack the Crocodile. But you still must deal with the ones that decide to focus on you.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Piranhas-5-1"],
        win: 235,
        previous: -1
    },
    {
        current: 237,
        title: "350",
        pageContent: "Unfortunately, the Piranhas seem to think you are the easier target and the majority of them is focused on you. Deal with them.",
        choices: [],
        image: 'wofmsword.png',
        battle: true,
        enemies: ["Piranhas-5-5"],
        win: 235,
        previous: -1
    },
    {
        current: 238,
        title: "336",
        pageContent: "An old man in ragged clothes is slumped asleep on a bench made from half a rowing-boat.",
        choices: ["Continue"],
        choice0: 241,
        image: 'wofm336.png',
        previous: -1
    },
    {
        current: 239,
        title: "49",
        pageContent: "The door squeaks open on rusty hinges. The room is dark and your eyes begin to adjust themselves as you close the door behind you. You hear a shuffling in the room but before you can react, a blow to your head knocks you senseless.\n\nLose 2 STAMINA points.",
        choices: ["Ouch - 122"],
        choice0: 245,
        previous: -1
    },
    {
        current: 240,
        title: "383",
        pageContent: "You can see a number of Skeleton-men working on building a boat of some sort.",
        image: 'wofm383.png',
        choices: ["Continue"],
        choice0: 246,
        previous: -1
    },
    {
        current: 241,
        title: "336",
        pageContent: "You are in a small, foul-smelling room. You notice two doors: one to the west and one behind you to the south. The furniture in the room is sparse and has been  made mostly from bits of old boats. There appears to be nothing of value in the  room, but a bunch of keys hangs on the wall.\n\nAn old man in ragged clothes is slumped asleep on a 'bench' made from half a rowing boat, snoring loudly. Next to him is a vicious-looking brown dog with red eyes and black teeth, whom you have awakened and who now is eyeing you suspiciously. A deep growl is coming from its throat. You may:\n\nTiptoe and exit through the south door.\n\nBang on the door behind you and cough a few 'Ahem's' to wake up the old man.\n\nLeap across the room with sword drawn to cut down the dog.",
        choices: ["Exit south - 66","Wake him up - 172", "Attack the dog - 249"],
        choice0: 242,
        choice1: 243,
        choice2: 244,
        previous: -1
    },
    {
        current: 242,
        title: "66",
        pageContent: "The door opens and you find yourself in the passage leading back to the riverbank. You return to the river and may now either go for the door in the middle of the rockface or go down the passage running off eastwards along the riverbank.",
        choices: ["Go for the door - 104","Go down the passage - 99"],
        choice0: 232,
        choice1: 233,
        previous: -1
    },
    {
        current: 243,
        title: "172",
        pageContent: "The old man's eyes flutter open. He sees you and grabs for a half oar lying by his bench. You tell him you mean him no harm but he remains on guard and eyes you cautiously. Although he looks harmless enough, his dog could be dangerous. The man's boots are undone. Will you:",
        choices: ["Rush the dog with your weapon - 249","Ask the man questions regarding your quest - 141", "Tell him his boots are undone - 165"],
        choice0: 244,
        choice1: 251,
        choice2: 252,
        previous: -1
    },
    {
        current: 244,
        title: "249",
        pageContent: "The dog springs as you move. Its hideous black teeth are coming straight for your throat! Two metres from you, a blast of fire shoots from its mouth right at your face! You duck just in time but must now fight the beast.",
        choices: [],
        previous: -1
    },
    {
        current: 245,
        title: "122",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 246,
        title: "383",
        pageContent: "A sign above the door reads 'Boat House'. The door is firmly locked but a small barred window allows you to look inside. You can see a number of Skeleton-men working on building a boat of some sort. They move in a series of quick, jerky actions, rather insect-like.\n\nYou can:",
        choices: ["Use 'Boat House' key - 80", "Try to break door down - 264", "Return to the riverbank - 129"],
        choice0: 248,
        choice1: 249,
        choice2: 250,
        previous: -1
    },
    {
        current: 247,
        title: "370",
        pageContent: "Seated around the table are two small creatures with warty skin, dressed in leather armour.",
        choices: ["Continue"],
        choice0: 22,
        image: 'wofm370.png',
        previous: -1
    },
    {
        current: 248,
        title: "80",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 249,
        title: "264",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 250,
        title: "129",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 251,
        title: "141",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 252,
        title: "165",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    },
    {
        current: 0,
        title: "0",
        pageContent: "erro",
        choices: [],
        previous: -1
    }
];

module.exports = {data: advPages};