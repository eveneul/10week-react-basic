import { useEffect, useState } from 'react';
import Movie from './components/Movie';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState([]);

	const getMovies = async () => {
		const data = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
		setMovie(data.data.movies);
		setIsLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	console.log(movie);
	return (
		<div className='App'>
			{isLoading ? (
				<span>loading...</span>
			) : (
				<div className='container'>
					<Movie movie={movie} />
				</div>
			)}
		</div>
	);
}

export default App;
