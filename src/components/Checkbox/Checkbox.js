import React, {
	useState,
	createContext,
	useEffect,
	useCallback,
	useMemo,
} from 'react';
import styles from './Checkbox.module.scss';

export default function Checkbox({ label, checked, onClick }) {
	let hasLabel = label && <span>{label}</span>;
	return (
		<label className={[styles.Checkbox, styles.Bounce].join(' ')}>
			<input type="checkbox" checked={checked} onClick={onClick} />
			<svg viewBox="0 0 21 21">
				<polyline points="5 10.75 8.5 14.25 16 6"></polyline>
			</svg>
			{hasLabel}
		</label>
	);
}
