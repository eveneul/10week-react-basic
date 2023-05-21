import React from 'react';
import { Link } from 'react-router-dom';

function Movie(props) {
	const { img, title, id } = props;
	return (
		<Link to={`/movie/${id}`}>
			<img src={img} alt={title} />
			<span>{title}</span>
			<span>{id}</span>
		</Link>
	);
}

export default Movie;
