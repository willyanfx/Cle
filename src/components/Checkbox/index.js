import React, {
	useState,
	useEffect,
	useCallback,
	useLayoutEffect,
} from 'react';
import styles from './GroupCheckbox.module.scss';
import Checkbox from './Checkbox';
import { useAppState } from '../../appState';

export function GroupCheckbox() {
	const [state, setState] = useAppState();
    const [count, setCount] = useState(1);
	const handleCheck = ( key) => {
        if (count === 1 && state.checked[key]) return;
        state.checked[key] ? setCount(count - 1) : setCount(count + 1);
        setState({
            ...state,
            checked: {
                ...state.checked,
                [key]: !state.checked[key]
            }
        })

    };

	return (
		<ul className={styles.CheckBoxes}>
			{Object.keys(state.checked).map(key => (
				<li key={key}>
					<Checkbox
						label={key}
						onClick={() => handleCheck(key)}
						checked={state.checked[key]}
					/>
				</li>
			))}
		</ul>
	);
}
