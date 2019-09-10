import {observable} from 'mobx';

import {createPerson} from './Person';

/**
 * Application central MobX store.
 */
export function createMobxStore() {
	const foo = observable.box('Foo123');
	const person = observable(createPerson());

	return {
		get foo() { return foo.get(); },
		set foo(n: string) { foo.set(n); },
		person
	};
};

/**
 * The type of our MobX store.
 */
export type TMobxStore = ReturnType<typeof createMobxStore>;
