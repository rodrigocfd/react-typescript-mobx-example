import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobx} from './MobX';

function TextGreen() {
	console.log('GREEN');
	const store = useMobx();

	return useObserver(() => (
		<div style={{color: 'green'}}>Name: {store.name}</div>
	));
}

export default TextGreen;
