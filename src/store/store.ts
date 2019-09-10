import {observable} from 'mobx';

import {createPerson} from './Person';

export function createStore() {
	const name = observable.box('Foo');
	const person = observable(createPerson());

	return {
		get name() { return name.get(); },
		set name(n: string) { name.set(n); },
		person
	};
};

export type TStore = ReturnType<typeof createStore>;
