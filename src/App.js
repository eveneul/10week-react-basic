import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { MemoBtn } from './components/button';

function App() {
	const [value, setValue] = useState('prev text');
	const handleClick = () => setValue('current Text!');

	return (
		<div className='App'>
			<MemoBtn text={value} onClick={handleClick} />
			<MemoBtn text='another text' />
		</div>
	);
}

export default App;
