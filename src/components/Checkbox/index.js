import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './GroupCheckbox.module.scss';
import Checkbox from './Checkbox';
import { useAppState } from '../../appState';


export function GroupCheckbox() {
	const [state, setState] = useAppState();
	const [checked, setChecked] = useState(state.checked);
	const [count, setCount] = useState(1);


	const handleCheck = key => {
		if (count === 1 && checked[key]) return;
		checked[key] ? setCount(count - 1) : setCount(count + 1);
		setChecked({
			...checked,
			[key]: !checked[key],
        });
        setState({
			...state,
			checked: {
				...checked,
				[key]: !checked[key],
			},
		});
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
