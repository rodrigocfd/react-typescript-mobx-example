import React from 'react';

import {MobxStoreProvider} from '../store/useMobxStore';
import NameReader from './NameReader';
import NameWriter from './NameWriter';
import PersonReaderName from './PersonReaderName';
import PersonReaderYear from './PersonReaderYear';
import PersonWriter from './PersonWriter';

const App: React.FC = () => {
	return (
		<MobxStoreProvider>
			<div>
				<NameReader />
				<NameWriter />
				<PersonReaderName />
				<PersonReaderYear />
				<PersonWriter />
			</div>
		</MobxStoreProvider>
	);
}

export default App;
