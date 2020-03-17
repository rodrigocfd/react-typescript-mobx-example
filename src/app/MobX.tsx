import React from 'react';
import * as MobxReactLite from 'mobx-react-lite';

// MobX store to be kept into app context.
// This is where you place your state data.
const initialState = {
	deep: {
		name: '',
		city: ''
	}
};

// Global app context.
type StateT = typeof initialState;

const MyContext = React.createContext<StateT | undefined>(undefined);

// Context provider, should wrap entire application.
type MobxProviderProps = {
	children: React.ReactNode
};

function MobxProvider({children}: MobxProviderProps) {
	const state = MobxReactLite.useLocalStore(() => initialState);
	return (
		<MyContext.Provider value={state}>
			{children}
		</MyContext.Provider>
	);
}

// Hook to provide access to MobX store.
function useMobx(): StateT {
	return React.useContext(MyContext) as StateT;
}

export {MobxProvider, useMobx};
