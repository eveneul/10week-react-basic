import { useEffect, useState } from 'react';

function Hello() {
	useEffect(() => {
		console.log('create!');

		return () => console.log('destroyed');
	}, []);

	return <span>hello!</span>;
}

function App() {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow((prev) => !prev);

	/*
		useEffect란?
		useEffect(func, arr)

		첫 번째 인자로 들어가는 function은 페이지가 로드되고 (스크립트가 다 불러오고) 
		딱 한 번만 실행될 함수를 적는다
	
		두 번째로 인자로 들어가는 array는 들어간 값이 바뀔 때 useEffect가 다시 실행된다

		useEffect의 cleanUp

	*/
	return (
		<div className='App'>
			{show ? <Hello /> : null}
			<br />
			<button onClick={handleClick}>{show ? 'hide' : 'show'}</button>
		</div>
	);
}

export default App;
