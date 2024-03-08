import { useGetPokemonQuery } from '../transport/Pokemons.transport';
import { PokemonCard } from './PokemonCard';

interface IComponentProps {
	id: string;
	hp: number;
}

export const PokemonFighter = (props: IComponentProps) => {
	const { id, hp } = props;
	const { data: pokemon } = useGetPokemonQuery(id);

	if (!pokemon) {
		return null;
	}

	return <PokemonCard pokemon={pokemon} hp={hp} />;
};
