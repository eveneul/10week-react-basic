import { useEffect, useState } from 'react';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
			.then((res) => res.json())
			.then((json) => {
				setMovie(json.data.movies);
				setIsLoading(false);
			});
	}, []);
	return <div className='App'>{isLoading ? <span>loading...</span> : null}</div>;
}

export default App;
