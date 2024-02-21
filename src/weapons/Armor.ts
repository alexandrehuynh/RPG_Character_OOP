import IDefenseMechanism from '../interfaces/IDefenseMechanism';

export default class Armor implements IDefenseMechanism {
    defend(): string {
      return "absorbs the blow with armor, standing tall and unscathed";
    }
  }