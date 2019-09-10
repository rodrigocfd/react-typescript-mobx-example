import React from 'react';

import {StoreProvider} from '../store/context';
import NameReader from './NameReader';
import PersonReader from './PersonReader';
import NameWriter from './NameWriter';

const App: React.FC = () => {
	return (
		<StoreProvider>
			<div>
				<NameReader />
				<PersonReader />
				<NameWriter />
			</div>
		</StoreProvider>
	);
}

export default App;
