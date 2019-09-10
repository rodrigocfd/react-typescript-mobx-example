import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const PersonReaderYear: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>Person year: {store.person.year}</div>
	));
};

export default PersonReaderYear;
