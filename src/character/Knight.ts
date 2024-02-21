import Character from './Character';
import Sword from '../weapons/Sword';
import Armor from '../weapons/Armor';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Knight extends Character {
  attackMechanism: IAttackMechanism = new Sword('Standard Sword', 15, 'A sturdy iron sword');
  defenseMechanism: IDefenseMechanism = new Armor();

  constructor(name: string) {
    super(name);
  }

  attack(): void {
    console.log(`${this.name} ${this.attackMechanism.attack()}`);
  }

  defend(): void {
    console.log(`${this.name} ${this.defenseMechanism.defend()}`);
  }
}

export default Knight;
