export type TWinnerStatus = 'my' | 'enemy' | 'noOne' | undefined;

interface IBattleLogItem {
	isMy: boolean;
	isWinner: boolean;
	pokemonId: string;
	pokemonName: string;
	damage: number;
	isCrit: boolean;
	hp: number;
	id: number;
}

export interface IBattleLog extends Array<IBattleLogItem> {}
