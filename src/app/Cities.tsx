import React from 'react';

import {useMobxStore} from '../store/context';

const Cities: React.FC = () => {
	const store = useMobxStore();

	return (
		<ul>
			{store.allCities.map((city: string) =>
				<li>{city}</li>
			)}
		</ul>
	);
};

export default Cities;
