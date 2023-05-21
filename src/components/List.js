import React from 'react';
import { Link } from 'react-router-dom';

function List(props) {
	const { img, exte, name, id } = props;
	return (
		<li className='characters-item'>
			<Link to={`/character/${id}`}>
				<div className='img-box'>
					<img className='img' src={`${img}.${exte}`} alt={name} />
				</div>
				<div className='hover-box'>
					<em className='name'>{name}</em>
				</div>
			</Link>
		</li>
	);
}

export default List;
