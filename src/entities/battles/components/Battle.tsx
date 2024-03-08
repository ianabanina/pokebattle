'use client';

import { Button } from '@common/components/Button';
import { PokemonFighter } from '@entities/pokemons/components/PokemonFighter';
import { useAttack } from '../hooks/Attack.hooks';
import { BattleLog } from './BattleLog';
import { BattleWinner } from './BattleWinner';
import styles from './battle.module.css';

interface IComponentProps {
	fighter1Id: string;
	fighter2Id: string;
}

export const Battle = (props: IComponentProps) => {
	const { fighter1Id: myFighterId, fighter2Id: enemyId } = props;

	const { myFighterHP, enemyHP, attack, myFighter, log, winner, resetParams } =
		useAttack(myFighterId, enemyId);

	return (
		<div>
			{winner ? (
				<BattleWinner
					winner={winner}
					myPokemonName={myFighter?.name}
					resetParams={resetParams}
				/>
			) : (
				<div className={styles['fighters-wrapper']}>
					<div className={styles['fighters-header']}>Let's fight!</div>

					<div className={styles['fighters']}>
						<PokemonFighter id={myFighterId} hp={myFighterHP} />

						<div className={styles['fighters']}>VS</div>

						<PokemonFighter id={enemyId} hp={enemyHP} />
					</div>

					<div className={styles['fighters-footer']}>
						<Button onClick={attack}>Attack!</Button>
					</div>
				</div>
			)}

			<BattleLog log={log} />
		</div>
	);
};
