"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
const Club_1 = __importDefault(require("../weapons/Club"));
const Shield_1 = __importDefault(require("../weapons/Shield"));
class Peon extends Character_1.default {
    constructor(name) {
        super(name);
        this.attackMechanism = new Club_1.default('Heavy Club', 30, 'A large club capable of smashing enemies with ease');
        this.defenseMechanism = new Shield_1.default();
    }
    attack() {
        console.log(`${this.name} ${this.attackMechanism.attack()}`);
    }
    defend() {
        console.log(`${this.name} ${this.defenseMechanism.defend()}`);
    }
}
exports.default = Peon;
