import React from 'react';
import {useLocalStore} from 'mobx-react-lite';

import {createMobxStore, IMobxStore} from './mobxStore';

/**
 * Context to keep the store object.
 */
const StoreContext = React.createContext<IMobxStore | null>(null);

/**
 * Should wrap entire application.
 */
export const MobxStoreProvider: React.FC = p => {
	const mobxStore = useLocalStore(createMobxStore); // already calls useState()
	return (
		<StoreContext.Provider value={mobxStore}>
			{p.children}
		</StoreContext.Provider>
	);
};

/**
 * Hook to provide access to MobX store.
 */
function useMobxStore(): IMobxStore {
	const mobxStore = React.useContext(StoreContext); // retrieve from context
	if (!mobxStore) {
		throw Error('MobX store is null, something went wrong.');
	}
	return mobxStore;
}

export default useMobxStore;
