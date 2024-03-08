'use client';

import Image from 'next/image';
import { IPokemonBase } from '../models/Pokemons.models';
import styles from './pokemon-card.module.css';

interface IComponentProps {
	pokemon: IPokemonBase;
	onClick?: () => void;
	hp?: number;
}

export const PokemonCard: React.FC<IComponentProps> = props => {
	const { pokemon, onClick, hp } = props;
	const { name } = pokemon;

	const imageUrl = `https://img.pokemondb.net/artwork/${name}.jpg`;

	const hasHP = hp !== undefined;

	return (
		<div
			className={`${styles['pokemon-card']} ${
				onClick ? styles['pokemon-card_clickable'] : ''
			}`}
			onClick={onClick}
		>
			<Image
				className={styles['pokemon-card__img']}
				src={imageUrl}
				alt={`${name}'s image`}
				width={80}
				height={80}
				style={{ objectFit: 'contain' }}
			/>

			<div className={styles['pokemon-card__header']}>{name}</div>

			{hasHP && (
				<div className={styles['pokemon-card__content-lg']}>{hp} XP</div>
			)}
		</div>
	);
};
