import React from 'react';
import {useLocalStore} from 'mobx-react-lite';

import {createStore, TStore} from './store';

export const StoreContext = React.createContext<TStore | null>(null);

/**
 * Should wrap entire application.
 */
export const StoreProvider: React.FC = p => {
	const store = useLocalStore(createStore);
	return (
		<StoreContext.Provider value={store}>
			{p.children}
		</StoreContext.Provider>
	);
};
