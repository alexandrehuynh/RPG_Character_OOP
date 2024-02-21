import Character from './Character';
import Club from '../weapons/Club';
import Shield from '../weapons/Shield';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Ogre extends Character {
  attackMechanism: IAttackMechanism = new Club('Heavy Club', 30, 'A large club capable of smashing enemies with ease');
  defenseMechanism: IDefenseMechanism = new Shield();

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

export default Ogre;
