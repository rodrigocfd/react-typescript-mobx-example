import React from 'react';
import {useObserver} from 'mobx-react-lite';

import useMobx from './useMobx';

function ViewSurname() {
	console.log('SURNAME');
	const store = useMobx();

	return useObserver(() => (
		<div style={{color: 'violet'}}>Surname: {store.person.surname}</div>
	));
}

export default ViewSurname;
