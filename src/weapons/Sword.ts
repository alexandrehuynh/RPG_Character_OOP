import Weapon from './Weapon';
import IAttackMechanism from '../interfaces/IAttackMechanism';

// Sword extends Weapon and also implements the attack interface.
export default class Sword extends Weapon implements IAttackMechanism {
    constructor(name: string, damagePoints: number, description?: string) {
        super(name, damagePoints, description);
    }

    // Implement the attack method from IAttackMechanism
    attack(): string {
        return "slashes swiftly with a sword, cutting the air itself";
    }
}
