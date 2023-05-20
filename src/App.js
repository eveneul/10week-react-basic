import logo from './logo.svg';
import './App.css';
import { memo, useState } from 'react';
import { memoBtn } from './components/button';

function App() {
	const [value, setValue] = useState('prev text');

	const handleClick = () => setValue('current Text!');

	return (
		<div className='App'>
			<memoBtn text={value} onClick={handleClick} />
			<memoBtn text='another text' />
		</div>
	);
}

export default App;
