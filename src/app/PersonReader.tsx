import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const PersonReader: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>{store.person.name}, {store.person.year}</div>
	));
};

export default PersonReader;
