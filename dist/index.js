"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ogre_1 = __importDefault(require("./character/Ogre"));
const Peon_1 = __importDefault(require("./character/Peon"));
const Knight_1 = __importDefault(require("./character/Knight"));
const Archer_1 = __importDefault(require("./character/Archer"));
const Club_1 = __importDefault(require("./weapons/Club"));
const Sword_1 = __importDefault(require("./weapons/Sword"));
const BowAndArrow_1 = __importDefault(require("./weapons/BowAndArrow"));
// Instantiate Weapons
const club = new Club_1.default('Warlord’s Mace', 30, 'Forged from the depths of the dark mines, capable of crushing bones with a single swing.');
const sword = new Sword_1.default('Dragonfang Blade', 45, 'A legendary sword imbued with the fire of a dragon’s breath, slices through armor like cloth.');
const bowAndArrow = new BowAndArrow_1.default('Eagle Eye Longbow', 35, 'Crafted from the sacred woods of Elvenkind, grants its wielder unmatched precision.');
// Instantiate characters
const ogre = new Ogre_1.default('Grog the Mighty');
const knight = new Knight_1.default('Sir Valorheart');
const archer = new Archer_1.default('Lyndis of the Forest');
const peon = new Peon_1.default('Pik the Laborer');
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
