import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobx} from './MobX';

// Changes values of the store.
function Inputs() {
	const store = useMobx();

	return useObserver(() => (<>
		<div>
			Name <input type="text" autoComplete="off" value={store.deep.name}
				onChange={e => store.deep.name = e.target.value} />
		</div>
		<div>
			City <input type="text" autoComplete="off" value={store.deep.city}
				onChange={e => store.deep.city = e.target.value} />
		</div>
	</>));
}

export default Inputs;
