import IDefenseMechanism from '../interfaces/IDefenseMechanism';

export default class Tunic implements IDefenseMechanism {
    defend(): string {
      return "nimbly dodges, letting the attack pass by like the wind";
    }
  }