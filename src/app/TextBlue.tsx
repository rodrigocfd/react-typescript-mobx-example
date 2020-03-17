import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobx} from './MobX';

function TextBlue() {
	console.log('BLUE');
	const store = useMobx();

	return useObserver(() => (
		<div style={{color: 'blue'}}>City: {store.city}</div>
	));
}

export default TextBlue;
