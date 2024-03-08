import { IPokemonsCollection } from '../models/Pokemons.models';

export const mapPokemonsCollection = (data: IPokemonsCollection) => {
	return {
		...data,
		results: data.results.map(result => ({
			...result,
			id: getIdFromURl(result.url),
		})),
	};
};

const getIdFromURl = (url: string): number | null => {
	const regex = /\/(\d+)\/$/;
	const match = url.match(regex);

	return match ? Number(match[1]) : null;
};
