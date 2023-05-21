import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import Loading from '../components/Loading';

function Detail() {
	const [item, setItem] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();

	const getItme = async () => {
		const data = await (await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)).json();

		setItem(data.data.results[0]);
		setIsLoading(false);
	};

	useEffect(() => {
		getItme();
	}, []);

	return <div>{isLoading ? <Loading /> : <Item img={item.thumbnail.path} extension={item.thumbnail.extension} name={item.name} series={item.series} />}</div>;
}

export default Detail;
