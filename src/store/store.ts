const cityList = [
	'Amsterdam',
	'London',
	'Madrid'
];

export function createStore() {
	const store = {
		get allCities() {
			return cityList;
		}
	};

	return store;
};

export type TStore = ReturnType<typeof createStore>;
