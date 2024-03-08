import { BE_URL_BASE } from '@common/consts/Transport.consts';
import {
	IGetPokemonsCollectionParams,
	IPokemonBase,
	IPokemonsCollection,
} from '../models/Pokemons.models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mapPokemonsCollection } from '../mappers/Pokemons.mappers';

const URL = '/pokemon';

export const pokemonsApi = createApi({
	reducerPath: 'pokemons',
	baseQuery: fetchBaseQuery({ baseUrl: BE_URL_BASE }),
	endpoints: builder => ({
		getPokemons: builder.query<
			IPokemonsCollection,
			IGetPokemonsCollectionParams
		>({
			query: params => ({ url: URL, params }),
			transformResponse: mapPokemonsCollection,
		}),
		getPokemon: builder.query<IPokemonBase, string>({
			query: id => `${URL}/${id}`,
		}),
	}),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonsApi;
