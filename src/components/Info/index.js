import React from 'react'
import styles from './Info.module.scss';
export default function Info() {
    return (
		<div className={styles.Info}>
			<h2>A Few Values to Feel the Scale</h2>
			<ul>
				<li>Human lifespan: ~79 years.</li>
				<li>Life on Earth will be impossible in ~1.1 billion years.</li>
				<li>Age of the Earth: ~4.543 billion years.</li>
				<li>Age of the Universe: ~13.799 billion years.</li>
			</ul>
		</div>
	);
}
