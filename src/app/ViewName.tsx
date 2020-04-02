import React from 'react';
import {useObserver} from 'mobx-react-lite';

import useMobx from './useMobx';

function ViewName() {
	console.log('NAME');
	const store = useMobx();

	return useObserver(() => (
		<div style={{color: 'green'}}>Name: {store.person.name}</div>
	));
}

export default ViewName;
