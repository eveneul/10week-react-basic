import { memo } from 'react';
import PropTypes from 'prop-types';

export function Btn(props) {
	const { text, onClick } = props;
	console.log(text, 'text~');
	return <button onClick={onClick}>{text}</button>;
}

Btn.PropTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export const MemoBtn = memo(Btn);
