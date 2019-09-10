import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobxStore} from '../store/context';

const NameWriter: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>
			Name
			<input type="text" value={store.name}
				onChange={e => store.name = e.target.value} />
		</div>
	));
};

export default NameWriter;
