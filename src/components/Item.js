import React from 'react';

function Item(props) {
	const { img, extension, name, series } = props;

	return (
		<div className='item-area'>
			<div className='bg-area'>
				<img src={`${img}.${extension}`} alt={name} />
			</div>
			<div className='inner'>
				<div className='img-box'>
					<img src={`${img}.${extension}`} alt={name} />
				</div>
				<div className='text-box'>
					<em className='name'>{name}</em>
					<ul className='series-list'>
						{series.items.slice(0, 5).map((item, index) => (
							<li key={index}>{item.name}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Item;
