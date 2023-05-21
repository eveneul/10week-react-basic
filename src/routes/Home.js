import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
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
						<Movie key={index} img={item.large_cover_image} title={item.title_long} id={item.id} />
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
