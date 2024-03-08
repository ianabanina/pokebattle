import styles from './page.module.css';
import { Pokemons } from '@entities/pokemons/components/Pokemons';

export default function Home() {
	return (
		<main className={styles.main}>
			<Pokemons />
		</main>
	);
}
