import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/button.modules.css';

export function Btn(props) {
	const { text, onClick } = props;
	console.log(text, 'text~');
	return (
		<button className={styles.btn} onClick={onClick}>
			{text}
		</button>
	);
}

Btn.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export const MemoBtn = memo(Btn);
