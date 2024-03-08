'use client';

import { IBattleLog } from '../models/Battles.models';
import styles from './battleLog.module.css';

interface IComponentProps {
	log: IBattleLog;
}

export const BattleLog = (props: IComponentProps) => {
	const { log } = props;

	if (!log.length) {
		return null;
	}

	return (
		<div className={styles['battle-log-wrapper']}>
			<b>Battle log:</b>

			<div className={styles['battle-log']}>
				{log.map(({ id, pokemonName, damage, hp, isCrit }) => (
					<div key={id}>
						{pokemonName} got <b>{damage}</b> damage.{' '}
						{isCrit && <b>(CRITICAL!)</b>} HP: {hp}
					</div>
				))}
			</div>
		</div>
	);
};
