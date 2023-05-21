import React from 'react';

function List(props) {
	const { img, exte, name } = props;
	return (
		<li className='characters-item'>
			<div className='img-box'>
				<img className='img' src={`${img}.${exte}`} alt={name} />
			</div>
			<div className='hover-box'>
				<em className='name'>{name}</em>
			</div>
		</li>
	);
}

export default List;
