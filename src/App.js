import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { AppStateProvider } from './appState';
import Password from './components/Password';
import { Result } from './components/Result';
import Info from './components/Info';

import Controls from './components/layout/Controls';

function App() {
	return (
		<div className={styles.App}>
			<div className={styles.container}>
				<header>
					<h1>Resist hacks by Generate a secure password</h1>
				</header>
				<AppStateProvider>
					<Password />
					<Controls />
					<Result />
				</AppStateProvider>
				<Info />
			</div>
		</div>
	);
}

export default App;
