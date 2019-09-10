import React from 'react';

import {MobxStoreProvider} from '../store/useMobxStore';
import FooReader from './FooReader';
import FooWriter from './FooWriter';
import PersonReaderName from './PersonReaderName';
import PersonReaderYear from './PersonReaderYear';
import PersonWriter from './PersonWriter';

const App: React.FC = () => {
	return (
		<MobxStoreProvider>
			<div>
				<FooReader />
				<FooWriter />
				<PersonReaderName />
				<PersonReaderYear />
				<PersonWriter />
			</div>
		</MobxStoreProvider>
	);
}

export default App;
