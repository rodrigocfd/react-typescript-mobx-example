import React from 'react';

import {MobxProvider} from './MobX';
import Inputs from './Inputs';
import TextGreen from './TextGreen';
import TextBlue from './TextBlue';

function App() {
	return (
		<MobxProvider>
			<Inputs />
			<TextGreen />
			<TextBlue />
		</MobxProvider>
	);
}

export default App;
