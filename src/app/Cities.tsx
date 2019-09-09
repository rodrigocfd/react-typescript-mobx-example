import React from 'react';

import {StoreContext} from '../store/context';

const Cities: React.FC = () => {
	const store = React.useContext(StoreContext);
	if (!store) {
		throw Error('Store is null, something went wrong.');
	}

	return (
		<ul>
			{store.allCities.map((city: string) =>
				<li>{city}</li>
			)}
		</ul>
	);
};

export default Cities;
