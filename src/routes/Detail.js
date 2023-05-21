import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
	const { seq } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	const getMovieDetail = async () => {
		const data = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${seq}`)).json();

		setData(data.data.movie);
		setIsLoading(false);
	};

	useEffect(() => {
		getMovieDetail();
	}, []);

	console.log(data);
	return <div>fdsf</div>;
}

export default Detail;
