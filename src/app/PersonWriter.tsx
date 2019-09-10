import React from 'react';
import {useObserver} from 'mobx-react-lite';

import useMobxStore from '../store/useMobxStore';

const PersonWriter: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>
			Person
			<input type="text" value={store.person.name}
				onChange={e => store.person.name = e.target.value} />
			<input type="text" value={store.person.year}
				onChange={e => store.person.year = +e.target.value} />
		</div>
	));
};

export default PersonWriter;
