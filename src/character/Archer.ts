import Character from './Character';
import BowAndArrow from '../weapons/BowAndArrow';
import Tunic from '../weapons/Tunic';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Archer extends Character {
  attackMechanism: IAttackMechanism = new BowAndArrow('Longbow', 25, 'A long range bow with high precision');
  defenseMechanism: IDefenseMechanism = new Tunic();

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

export default Archer;
