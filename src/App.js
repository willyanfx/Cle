import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { AppStateProvider } from './appState';
import Info from './components/Info';

import { Layout } from "./components/Layout";

function App() {
	return (
		<div className={styles.App}>
				<AppStateProvider>
					<Layout />
				</AppStateProvider>
				<Info />
		</div>
	);
}

export default App;
