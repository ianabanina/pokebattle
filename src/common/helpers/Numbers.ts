export const getRandomNumber = (from: number, to: number): number => {
	return Math.floor(Math.random() * to) + from;
};
