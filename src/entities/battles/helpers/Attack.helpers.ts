import { getRandomNumber } from '@common/helpers/Numbers';
import { TWinnerStatus } from '../models/Battles.models';

export const getBattleWinner = (
	enemyHP: number,
	damageOnEnemy: number,
	myFighterHP: number,
	damageOnMyFighter: number
): TWinnerStatus => {
	if (damageOnEnemy >= enemyHP && damageOnMyFighter >= myFighterHP) {
		return 'noOne';
	}

	if (damageOnEnemy >= enemyHP) {
		return 'my';
	}

	if (damageOnMyFighter >= myFighterHP) {
		return 'enemy';
	}
};

const MIN_ATTACK = 1;
const MAX_ATTACK = 6;

export const generateDamage = (): [damage: number, isCrit: boolean] => {
	const firstAttack = getRandomNumber(MIN_ATTACK, MAX_ATTACK);

	if (firstAttack === MAX_ATTACK) {
		return [firstAttack + getRandomNumber(MIN_ATTACK, MAX_ATTACK), true];
	}

	return [firstAttack, false];
};
