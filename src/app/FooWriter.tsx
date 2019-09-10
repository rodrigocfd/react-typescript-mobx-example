import React from 'react';
import {useObserver} from 'mobx-react-lite';

import useMobxStore from '../store/useMobxStore';

const FooWriter: React.FC = () => {
	const store = useMobxStore();

	return useObserver(() => (
		<div>
			Foo
			<input type="text" value={store.foo}
				onChange={e => store.foo = e.target.value} />
		</div>
	));
};

export default FooWriter;
