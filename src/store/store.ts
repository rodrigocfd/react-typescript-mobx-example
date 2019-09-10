import {observable} from 'mobx';

import {createPerson, Person} from './Person';

export function createStore() {
	const store = observable({
		name: 'Foo',
		person: createPerson()
	});

	return {
		get name() { return store.name; },
		set name(n: string) { store.name = n; },
		get person(): Person { return store.person; },
		set person(p: Person) { store.person = p; }
	};
};

export type TStore = ReturnType<typeof createStore>;
