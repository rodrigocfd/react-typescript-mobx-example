import {observable} from 'mobx';

import {createPerson} from './Person';

/**
 * Application central MobX store.
 */
export function createMobxStore() {
	const foo = observable.box('Foo123'); // storing simple string
	const person = observable(createPerson()); // storing object

	return {
		get foo() { return foo.get(); }, // getter/setter to simple string
		set foo(n: string) { foo.set(n); },
		person // direct access to Person object
	};
};

/**
 * The type of our MobX store.
 */
export type TMobxStore = ReturnType<typeof createMobxStore>;
