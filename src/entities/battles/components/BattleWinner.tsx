'use client';

import { ERoutes } from '@common/consts/Router.consts';
import { useRouter } from 'next/navigation';
import { TWinnerStatus } from '../models/Battles.models';
import styles from './battleWinner.module.css';
import { Button } from '@common/components/Button';

interface IComponentProps {
	winner: TWinnerStatus;
	myPokemonName?: string;
	resetParams: () => void;
}

export const BattleWinner = (props: IComponentProps) => {
	const { winner, myPokemonName, resetParams } = props;
	const { push } = useRouter();

	const redirectToPokemonsList = () => {
		push(ERoutes.Root);
	};

	if (winner === 'noOne') {
		return (
			<div className={styles['battle-winner']}>
				<div className={styles['battle-winner__header']}>
					Draw! Try one more time...
				</div>

				<div className={styles['battle-winner__footer']}>
					<Button onClick={resetParams}>
						Try again {myPokemonName ? `with ${myPokemonName}` : ''}
					</Button>

					<Button onClick={redirectToPokemonsList}>Choose a new one!</Button>
				</div>
			</div>
		);
	}

	if (winner === 'my') {
		return (
			<div className={styles['battle-winner']}>
				<div className={styles['battle-winner__header']}>You Win!</div>

				<div className={styles['battle-winner__footer']}>
					<Button onClick={resetParams}>Continue with {myPokemonName}</Button>

					<Button onClick={redirectToPokemonsList}>Choose a new one!</Button>
				</div>
			</div>
		);
	}

	if (winner === 'enemy') {
		return (
			<div className={styles['battle-winner']}>
				<div className={styles['battle-winner__header']}>Game Over</div>

				<div className={styles['battle-winner__footer']}>
					<Button onClick={redirectToPokemonsList}>
						Back to pokemons list
					</Button>
				</div>
			</div>
		);
	}

	return null;
};
