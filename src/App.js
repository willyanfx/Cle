import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { AppStateProvider } from './appState';

import { Layout } from "./components/Layout";

function App() {
	return (
		<div className={styles.App}>
				<AppStateProvider>
					<Layout />
				</AppStateProvider>
		</div>
	);
}

export default App;
