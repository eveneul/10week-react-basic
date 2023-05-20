import { useEffect, useState } from 'react';

function App() {
	const [value, setValue] = useState(0);
	const handleClick = () => setValue((prev) => prev + 1);

	useEffect(() => {
		console.log(value);
	}, [value]);
	return (
		<div className='App'>
			<h1>{value}</h1>
			<button onClick={handleClick}>Click me!</button>
		</div>
	);
}

export default App;
