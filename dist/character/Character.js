"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(name) {
        this.gold = 0;
        this.weapons = [];
        this.name = name;
    }
    addWeapon(weapon) {
        this.weapons.push(weapon);
    }
    removeWeapon(weaponId) {
        this.weapons = this.weapons.filter(weapon => weapon.id !== weaponId);
    }
    totalDamage() {
        return this.weapons.reduce((total, weapon) => total + weapon.damagePoints, 0);
    }
    setDefenseMechanism(mechanism) {
        this.defenseMechanism = mechanism;
    }
    printStats() {
        console.log(`${this.name} has ${this.weapons.length} weapons with a total damage of ${this.totalDamage()}.`);
    }
}
exports.default = Character;
