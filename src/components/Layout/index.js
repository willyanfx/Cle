import React from 'react';
import { Slider } from '../Slider';
import { GroupCheckbox } from '../Checkbox';
import { Password } from '../Password';
import { Result } from '../Result';
import styles from './Layout.module.scss';

export function Layout() {
	return (
		<div className={styles.Container}>
			<div className={styles.Password}>
				<h1>Resist hacks by Generate a secure password</h1>
				<Password />
				<Slider />
				<GroupCheckbox />
			</div>
			<div className={styles.Illustration}>Illustration</div>
			<div className={styles.Info}>
				<Result />
			</div>
		</div>
	);
}
