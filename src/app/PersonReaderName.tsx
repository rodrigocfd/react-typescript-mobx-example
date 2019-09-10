import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const PersonReaderName: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>Person name: {store.person.name}</div>
	));
};

export default PersonReaderName;
