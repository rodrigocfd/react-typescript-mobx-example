import React from 'react';
import * as MobxReactLite from 'mobx-react-lite';

// MobX store to be kept into app context.
// This is where you place your state data.
const initialState = {
	person: {
		name: '', // nested values work as well
		surname: ''
	},
	city: ''
};

// Global app context, which will keep MobX store.
type StateT = typeof initialState;

const MobxContext = React.createContext<StateT | undefined>(undefined);

// Creates MobX store with initialState.
function createMobxStore() {
	return MobxReactLite.useLocalStore(() => initialState);
}

// Hook to provide access to MobX store.
function useMobx(): StateT {
	return React.useContext(MobxContext) as StateT;
}

export {MobxContext, createMobxStore}
export default useMobx;
