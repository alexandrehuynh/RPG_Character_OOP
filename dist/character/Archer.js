"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
const BowAndArrow_1 = __importDefault(require("../weapons/BowAndArrow"));
const Tunic_1 = __importDefault(require("../weapons/Tunic"));
class Archer extends Character_1.default {
    constructor(name) {
        super(name);
        this.attackMechanism = new BowAndArrow_1.default('Longbow', 25, 'A long range bow with high precision');
        this.defenseMechanism = new Tunic_1.default();
    }
    attack() {
        console.log(`${this.name} ${this.attackMechanism.attack()}`);
    }
    defend() {
        console.log(`${this.name} ${this.defenseMechanism.defend()}`);
    }
}
exports.default = Archer;
