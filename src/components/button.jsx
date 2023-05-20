import { memo } from 'react';

export function Btn(props) {
	const { text, onClick } = props;
	console.log(text, 'text~');
	return <button onClick={onClick}>{text}</button>;
}

export const MemoBtn = memo(Btn);
