import React from 'react';

import {MobxProvider} from './MobX';
import Inputs from './Inputs';
import ViewName from './ViewName';
import ViewSurname from './ViewSurname';
import ViewCity from './ViewCity';

function App() {
	return (
		<MobxProvider>
			<Inputs />
			<ViewName />
			<ViewSurname />
			<ViewCity />
		</MobxProvider>
	);
}

export default App;
