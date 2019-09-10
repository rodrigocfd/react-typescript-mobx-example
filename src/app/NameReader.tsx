import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const NameReader: React.FC = () => {
	const store = useMobxStore();

	// Will render only when store "name" changes.
	return useObserver(() => (
		<div>{store.name}</div>
	));
};

export default NameReader;
