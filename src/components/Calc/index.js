import React from 'react'
import styles from './Calc.module.scss';
export function Calc() {
    return (
		<div className={styles.Calc}>
			<div>
				speed: <input type="number" min="10000" value={1000} />{' '}
				passwords per <span>hour</span>/ <span>second</span>
			</div>
			<div>
				<span>~12 minutes</span>
				needed, in order to have a 1% probability of at least one
				collision.
			</div>
		</div>
	);
}
