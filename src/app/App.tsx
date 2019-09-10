import React from 'react';

import {StoreProvider} from '../store/context';
import NameReader from './NameReader';
import NameWriter from './NameWriter';
import PersonReader from './PersonReader';
import PersonWriter from './PersonWriter';

const App: React.FC = () => {
	return (
		<StoreProvider>
			<div>
				<NameReader />
				<NameWriter />
				<PersonReader />
				<PersonWriter />
			</div>
		</StoreProvider>
	);
}

export default App;
