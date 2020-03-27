import React, { useState } from 'react';
import styles from './GroupCheckbox.module.scss';
import Checkbox from '../Checkbox';

const InitialState = {
	Letters: true,
	Digits: false,
	Symbols: false,
};

export function GroupCheckbox() {
    const [checked, setChecked] = useState(InitialState);
    const [count, setCount] = useState(1)
	const handleCheck = key => {
		if (count === 1 && checked[key]) return;
		checked[key] ? setCount(count - 1) : setCount(count + 1);
		setChecked({
			...checked,
			[key]: !checked[key],
		})
    };

	return (
		<ul className={styles.CheckBoxes}>
			{Object.keys(checked).map(key => (
				<li key={key}>
					<Checkbox
						label={key}
						onChange={() => handleCheck(key)}
						checked={checked[key]}
					/>
				</li>
			))}
		</ul>
	);
}
