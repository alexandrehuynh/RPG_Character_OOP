import Ogre from './character/Ogre';
import Peon from './character/Peon';
import Knight from './character/Knight';
import Archer from './character/Archer';
import Club from './weapons/Club';
import Sword from './weapons/Sword';
import BowAndArrow from './weapons/BowAndArrow';

// Instantiate Weapons
const club = new Club('Warlord’s Mace', 30, 'Forged from the depths of the dark mines, capable of crushing bones with a single swing.');
const sword = new Sword('Dragonfang Blade', 45, 'A legendary sword imbued with the fire of a dragon’s breath, slices through armor like cloth.');
const bowAndArrow = new BowAndArrow('Eagle Eye Longbow', 35, 'Crafted from the sacred woods of Elvenkind, grants its wielder unmatched precision.');


// Instantiate characters
const ogre = new Ogre('Grog the Mighty');
const knight = new Knight('Sir Valorheart');
const archer = new Archer('Lyndis of the Forest');
const peon = new Peon('Pik the Laborer');

// Test: Add Weapons to Characters
ogre.addWeapon(club);
knight.addWeapon(sword);
archer.addWeapon(bowAndArrow);
peon.addWeapon(club);

// Display Stats
console.log('Before removing any weapon:');
ogre.printStats();
knight.printStats();
archer.printStats();
peon.printStats();

// Perform Actions
console.log('\nLet the battles begin: ');
ogre.attack();
knight.defend();
archer.attack();
peon.defend();

// Test: Remove Weapons from Characters
ogre.removeWeapon(club.id);
knight.removeWeapon(sword.id);

// Display Stats After Removing Weapons
console.log('\nAfter removing weapons:');
ogre.printStats();
knight.printStats();
archer.printStats();
peon.printStats(); 