import React from 'react';
import {useObserver} from 'mobx-react-lite';

import useMobx from './useMobx';

function ViewCity() {
	console.log('CITY');
	const store = useMobx();

	return useObserver(() => (
		<div style={{color: 'blue'}}>City: {store.city}</div>
	));
}

export default ViewCity;
