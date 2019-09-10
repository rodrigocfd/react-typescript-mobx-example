import {observable} from 'mobx';

import {createPerson} from './Person';

/**
 * Application central MobX store.
 */
export function createMobxStore() {
	const name = observable.box('Foo');
	const person = observable(createPerson());

	return {
		get name() { return name.get(); },
		set name(n: string) { name.set(n); },
		person
	};
};

/**
 * The type of our MobX store.
 */
export type TMobxStore = ReturnType<typeof createMobxStore>;
