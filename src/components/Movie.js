import React from 'react';

function Movie(props) {
	const { movie } = props;
	console.log(movie, 'movie');
	return (
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
	);
}

export default Movie;
