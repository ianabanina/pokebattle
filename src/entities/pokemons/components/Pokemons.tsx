'use client';

import { useGetPokemonsQuery } from '../transport/Pokemons.transport';
import { Pokemon } from './Pokemon';
import styles from './pokemons.module.css';

export const Pokemons = () => {
	// TODO: Add pagination
	// TODO: Add error state
	const { data: pokemons, isLoading } = useGetPokemonsQuery({});

	if (!pokemons) {
		return (
			<div className={styles['pokemons-info']}>
				{isLoading ? 'Loading...' : 'No pokemons found, sorry. Check later'}
			</div>
		);
	}

	return (
		<>
			<h1 className={styles['pokemons-header']}>Choose your fighter!</h1>

			<div className={styles['pokemons-wrapper']}>
				{pokemons.results?.map(pokemon => (
					<Pokemon pokemon={pokemon} key={pokemon.name} />
				))}
			</div>
		</>
	);
};
