import IDefenseMechanism from '../interfaces/IDefenseMechanism';

export default class Shield implements IDefenseMechanism {
  defend(): string {
    return "steadfastly blocks with a shield, an immovable force";
  }
}