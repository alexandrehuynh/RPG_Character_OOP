"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Weapon_1 = __importDefault(require("./Weapon"));
class Club extends Weapon_1.default {
    constructor(name, damagePoints, description) {
        super(name, damagePoints, description);
    }
    // Implement the attack method from IAttackMechanism
    attack() {
        return "swings a mighty club with earth-shattering force";
    }
}
exports.default = Club;
