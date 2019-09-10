export function createPerson() {
	return {
		name: 'Dude',
		year: 1900
	}
};

interface Person extends ReturnType<typeof createPerson> { };
export default Person;
