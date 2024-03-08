import { getRandomNumber } from '@common/helpers/Numbers';
import { useGetPokemonQuery } from '@entities/pokemons/transport/Pokemons.transport';
import { useState } from 'react';
import { IBattleLog, TWinnerStatus } from '../models/Battles.models';
import { generateDamage, getBattleWinner } from '../helpers/Attack.helpers';
import { v4 as uuidv4 } from 'uuid';

export const useAttack = (myFighterId: string, enemyId: string) => {
	const { data: myFighter } = useGetPokemonQuery(myFighterId);
	const { data: enemy } = useGetPokemonQuery(enemyId);

	const [{ myFighterHP, enemyHP }, updateHP] = useState({
		myFighterHP: 100,
		enemyHP: 100,
	});

	const [winner, setWinner] = useState<TWinnerStatus>();

	const [log, setLog] = useState<IBattleLog>([]);

	const attack = () => {
		const [damageOnEnemy, isOnEnemyCrit] = generateDamage();
		const [damageOnMyFighter, isOnMyFighterCrit] = generateDamage();

		updateHP(({ enemyHP, myFighterHP }) => ({
			enemyHP: enemyHP - damageOnEnemy,
			myFighterHP: myFighterHP - damageOnMyFighter,
		}));

		const roundWinner = getBattleWinner(
			enemyHP,
			damageOnEnemy,
			myFighterHP,
			damageOnMyFighter
		);

		roundWinner && setWinner(roundWinner);

		myFighter &&
			enemy &&
			setLog(value => [
				...value,
				{
					isMy: false,
					pokemonId: enemyId,
					pokemonName: enemy.name,
					damage: damageOnEnemy,
					isCrit: isOnEnemyCrit,
					isWinner: roundWinner === 'enemy',
					hp: enemyHP - damageOnEnemy,
					id: uuidv4(),
				},
				{
					isMy: true,
					pokemonId: myFighterId,
					pokemonName: myFighter.name,
					damage: damageOnMyFighter,
					isCrit: isOnMyFighterCrit,
					isWinner: roundWinner === 'my',
					hp: myFighterHP - damageOnMyFighter,
					id: uuidv4(),
				},
			]);
	};

	const resetParams = () => {
		updateHP(() => ({
			enemyHP: 100,
			myFighterHP: 100,
		}));
		setWinner(undefined);
	};

	return {
		myFighterHP,
		enemyHP,
		myFighter,
		enemy,
		log,
		winner,
		attack,
		resetParams,
	};
};
