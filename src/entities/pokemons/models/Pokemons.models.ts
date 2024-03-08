import { IGetPaginatedCollectionParams } from '@common/models/Transport.models';

export interface IGetPokemonsCollectionParams
	extends IGetPaginatedCollectionParams {}

export interface IPokemonBase {
	name: string;
	id: number | null;
	url: string;
}

export interface IPokemonsCollection {
	count: number;
	next: string;
	previous: null | string;
	results: IPokemonBase[];
}
