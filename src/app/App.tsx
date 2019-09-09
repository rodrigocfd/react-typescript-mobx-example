import React from 'react';

import Cities from './Cities';
import {StoreProvider} from '../store/context';

const App: React.FC = () => {
	return (
		<StoreProvider>
			<div>
				<h1>Cities</h1>
				<Cities />
			</div>
		</StoreProvider>
	);
}

export default App;
