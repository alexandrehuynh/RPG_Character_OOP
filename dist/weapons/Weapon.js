"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Weapon {
    constructor(name, damagePoints, description) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.damagePoints = damagePoints;
        this.description = description;
    }
}
exports.default = Weapon;
