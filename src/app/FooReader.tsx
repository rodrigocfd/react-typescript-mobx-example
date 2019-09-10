import React from 'react';
import {useObserver} from 'mobx-react-lite';

import useMobxStore from '../store/useMobxStore';

const FooReader: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>{store.foo}</div>
	));
};

export default FooReader;
