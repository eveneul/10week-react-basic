import { useEffect, useState } from 'react';

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
					{movie.map((item, index) => (
						<a href='#' key={index}>
							<img src={item.large_cover_image} alt={item.title} />
							<br />
							<strong>{item.title_long}</strong>
							<p></p>
						</a>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
