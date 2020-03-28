import React, { createContext, useContext, useState } from 'react';
import { LENGTH } from './constant';

const Context = createContext();

let initialState = {
	length: LENGTH,
	checked: { Letters: true, Digits: false, Symbols: false },
};

export function AppStateProvider({ children }) {
	const [state, setState] = useState(initialState);
	const value = [state, setState];
	return <Context.Provider value={value} children={children} />;
}

export function useAppState() {
	return useContext(Context);
}
