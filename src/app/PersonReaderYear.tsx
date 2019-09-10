import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const PersonReaderYear: React.FC = () => {
	const store = useMobxStore();

	// Will render when any member of Person changes.
	return useObserver(() => (
		<div>Person year: {store.person.year}</div>
	));
};

export default PersonReaderYear;
