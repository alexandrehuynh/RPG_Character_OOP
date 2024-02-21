"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Weapon_1 = __importDefault(require("./Weapon"));
// Sword extends Weapon and also implements the attack interface.
class Sword extends Weapon_1.default {
    constructor(name, damagePoints, description) {
        super(name, damagePoints, description);
    }
    // Implement the attack method from IAttackMechanism
    attack() {
        return "slashes swiftly with a sword, cutting the air itself";
    }
}
exports.default = Sword;
