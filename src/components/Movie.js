import React from 'react';

function Movie(props) {
	const { img, title } = props;
	return (
		<a href='#'>
			<img src={img} alt={title} />
			<span>{title}</span>
		</a>
	);
}

export default Movie;
