"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
const Sword_1 = __importDefault(require("../weapons/Sword"));
const Armor_1 = __importDefault(require("../weapons/Armor"));
class Knight extends Character_1.default {
    constructor(name) {
        super(name);
        this.attackMechanism = new Sword_1.default('Standard Sword', 15, 'A sturdy iron sword');
        this.defenseMechanism = new Armor_1.default();
    }
    attack() {
        console.log(`${this.name} ${this.attackMechanism.attack()}`);
    }
    defend() {
        console.log(`${this.name} ${this.defenseMechanism.defend()}`);
    }
}
exports.default = Knight;
