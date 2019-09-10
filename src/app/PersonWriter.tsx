import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const PersonWriter: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>
			Person
			<input type="text" value={store.person.name}
				onChange={e => store.person = {...store.person, name: e.target.value}} />
			<input type="text" value={store.person.year}
				onChange={e => store.person = {...store.person, year: +e.target.value}} />
		</div>
	));
};

export default PersonWriter;
