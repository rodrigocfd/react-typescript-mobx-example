import React from 'react';

import {StoreProvider} from '../store/context';
import NameReader from './NameReader';
import NameWriter from './NameWriter';
import PersonReaderName from './PersonReaderName';
import PersonReaderYear from './PersonReaderYear';
import PersonWriter from './PersonWriter';

const App: React.FC = () => {
	return (
		<StoreProvider>
			<div>
				<NameReader />
				<NameWriter />
				<PersonReaderName />
				<PersonReaderYear />
				<PersonWriter />
			</div>
		</StoreProvider>
	);
}

export default App;
