import {observable} from 'mobx';

import {createPerson, Person} from './Person';

export function createStore() {
	const _name = observable.box('Foo');
	const _person = observable.box(createPerson());

	return {
		get name() { return _name.get(); },
		set name(n: string) { _name.set(n); },
		get person(): Person { return _person.get(); },
		set person(p: Person) { _person.set(p); }
	};
};

export type TStore = ReturnType<typeof createStore>;
