import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const Cities: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<ul>
			{store.allCities.map((city: string) =>
				<li>{city}</li>
			)}
		</ul>
	));
};

export default Cities;
