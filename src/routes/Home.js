import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import List from '../components/List';
import Loading from '../components/Loading';

function Home() {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getItem = async () => {
		const data = await (await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`)).json();

		setCharacter(data.data.results);
		setIsLoading(false);
	};

	useEffect(() => {
		getItem();
	}, []);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<h1>Marvle Character</h1>
					<div className='characters-wrap'>
						<ul className='characters-list'>
							{character.map((item, index) => (
								<List key={index} img={item.thumbnail.path} exte={item.thumbnail.extension} name={item.name} />
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
}

export default Home;

/*

<h1>Marvle Character</h1>
			<div className='characters-wrap'>
				<ul className='characters-list'>
					{character.map((item, index) => (
						<List key={index} img={item.thumbnail.path} exte={item.thumbnail.extension} name={item.name} />
					))}
				</ul>
			</div>
*/
