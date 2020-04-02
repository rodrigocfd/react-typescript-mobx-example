import React from 'react';
import {useObserver} from 'mobx-react-lite';

import {useMobx} from './MobX';

// Changes values of the store.
function Inputs() {
	const store = useMobx();

	return useObserver(() => (<>
		<div>
			Name <input type="text" autoComplete="off" value={store.person.name}
				onChange={e => store.person.name = e.target.value} />
		</div>
		<div>
			Surname <input type="text" autoComplete="off" value={store.person.surname}
				onChange={e => store.person.surname = e.target.value} />
		</div>
		<div>
			City <input type="text" autoComplete="off" value={store.city}
				onChange={e => store.city = e.target.value} />
		</div>
	</>));
}

export default Inputs;
