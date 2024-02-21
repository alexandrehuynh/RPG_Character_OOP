import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';
import Weapon from '../weapons/Weapon';

abstract class Character {
  name: string;
  abstract attackMechanism: IAttackMechanism;
  abstract defenseMechanism: IDefenseMechanism;
  gold: number = 0;
  weapons: Weapon[] = [];

  constructor(name: string) {
    this.name = name;
  }

  abstract attack(): void;

  abstract defend(): void;

  addWeapon(weapon: Weapon): void {
    this.weapons.push(weapon);
  }

  removeWeapon(weaponId: string): void {
    this.weapons = this.weapons.filter(weapon => weapon.id !== weaponId);
  }

  totalDamage(): number {
    return this.weapons.reduce((total, weapon) => total + weapon.damagePoints, 0);
  }
  setDefenseMechanism(mechanism: IDefenseMechanism): void {
    this.defenseMechanism = mechanism;
  }
  printStats(): void {
    console.log(`${this.name} has ${this.weapons.length} weapons with a total damage of ${this.totalDamage()}.`);
  }
}

export default Character;
