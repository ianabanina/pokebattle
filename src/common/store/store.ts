import { configureStore } from '@reduxjs/toolkit';
import { pokemonsApi } from '@entities/pokemons/transport/Pokemons.transport';

export const makeStore = () => {
	return configureStore({
		reducer: {
			[pokemonsApi.reducerPath]: pokemonsApi.reducer,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat([pokemonsApi.middleware]),
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
