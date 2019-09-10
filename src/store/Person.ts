export function createPerson() {
	return {
		name: 'Dude',
		year: 1900
	}
};

export interface Person
	extends ReturnType<typeof createPerson> { };
