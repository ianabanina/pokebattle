'use client';

import { ERoutes } from '@common/consts/Router.consts';
import { Battle } from '@entities/battles/components/Battle';
import { useRouter, useSearchParams } from 'next/navigation';

// TODO: Generate enemy
const fighter2Id = '25';

const BattlePage = () => {
	const searchParams = useSearchParams();
	const fighter1Id = searchParams.get('fighter1');

	const router = useRouter();

	if (!fighter1Id) {
		router.push(ERoutes.Root);

		return null;
	}

	return <Battle fighter1Id={fighter1Id} fighter2Id={fighter2Id} />;
};

export default BattlePage;
