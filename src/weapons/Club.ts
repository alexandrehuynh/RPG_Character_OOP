import Weapon from './Weapon';
import IAttackMechanism from '../interfaces/IAttackMechanism';

export default class Club extends Weapon implements IAttackMechanism {
    constructor(name: string, damagePoints: number, description?: string) {
        super(name, damagePoints, description);
    }

    // Implement the attack method from IAttackMechanism
    attack(): string {
        return "swings a mighty club with earth-shattering force";
    }
}