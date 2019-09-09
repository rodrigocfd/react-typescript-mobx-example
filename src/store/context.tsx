import React from 'react';
import {useLocalStore} from 'mobx-react-lite';

import {createStore, TStore} from './store';

const StoreContext = React.createContext<TStore | null>(null);

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

/**
 * Hook to provide access to MobX store.
 */
export function useMobxStore(): TStore {
	const store = React.useContext(StoreContext);
	if (!store) {
		throw Error('Store is null, something went wrong.');
	}
	return store;
};
