import React from 'react';
import {useLocalStore} from 'mobx-react-lite';

import {createMobxStore, TMobxStore} from './mobxStore';

const StoreContext = React.createContext<TMobxStore | null>(null);

/**
 * Should wrap entire application.
 */
export const MobxStoreProvider: React.FC = p => {
	const mobxStore = useLocalStore(createMobxStore);
	return (
		<StoreContext.Provider value={mobxStore}>
			{p.children}
		</StoreContext.Provider>
	);
};

/**
 * Hook to provide access to MobX store.
 */
function useMobxStore(): TMobxStore {
	const mobxStore = React.useContext(StoreContext);
	if (!mobxStore) {
		throw Error('MobX store is null, something went wrong.');
	}
	return mobxStore;
}

export default useMobxStore;
