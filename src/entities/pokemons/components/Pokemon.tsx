'use client';

import { ERoutes } from '@common/consts/Router.consts';
import { toQueryParams } from '@common/helpers/Transport.helpers';
import { useRouter } from 'next/navigation';
import { IPokemonBase } from '../models/Pokemons.models';
import { PokemonCard } from './PokemonCard';

interface IComponentProps {
	pokemon: IPokemonBase;
}

export const Pokemon = (props: IComponentProps) => {
	const { pokemon } = props;
	const { push } = useRouter();

	const handleClick = () => {
		push(`${ERoutes.Battle}?${toQueryParams({ fighter1: pokemon.id })}`);
	};

	return <PokemonCard pokemon={pokemon} onClick={handleClick} />;
};
