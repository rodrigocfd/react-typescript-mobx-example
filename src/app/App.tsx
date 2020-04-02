import React from 'react';

import {MobxContext, createMobxStore} from './useMobx';
import Inputs from './Inputs';
import ViewName from './ViewName';
import ViewSurname from './ViewSurname';
import ViewCity from './ViewCity';

function App() {
	return (
		<MobxContext.Provider value={createMobxStore()}>
			<Inputs />
			<ViewName />
			<ViewSurname />
			<ViewCity />
		</MobxContext.Provider>
	);
}

export default App;
