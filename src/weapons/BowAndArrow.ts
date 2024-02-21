import Weapon from './Weapon';
import IAttackMechanism from '../interfaces/IAttackMechanism';

export default class BowAndArrow extends Weapon implements IAttackMechanism {
    constructor(name: string, damagePoints: number, description?: string) {
        super(name, damagePoints, description);
    }

    // Implement the attack method from IAttackMechanism
    attack(): string {
        return "looses an arrow with deadly precision";
    }
}
