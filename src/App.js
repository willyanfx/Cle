import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { MAX_LENGTH, MIN_LENGTH, LENGTH, ALPHABET } from './constant';

import Password from './components/Password';
import { Calc } from './components/Calc';
import Info from './components/Info';

import { result } from './helpers';
import Controls from './components/layout/Controls';

let initialState = {
	speedUnit: 'hour',
	speed: 1000,
	length: LENGTH,
	alphabet: ALPHABET,
};

function App() {

	return (
		<div className={styles.App}>
			<div className={styles.container}>
				<header>
					<h1>Resist hacks by Generate a secure password</h1>
				</header>
				<Password />
			<Controls />



				<Calc />
				<Info />
			</div>
		</div>
	);
}

export default App;
