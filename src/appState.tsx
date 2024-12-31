import { createContext, useContext, useState } from 'react';
import { LENGTH } from './constant';

let initialState = {
    length: LENGTH,
    checked: { Letters: true, Digits: false, Symbols: false },
};

const Context = createContext(initialState);

export function AppStateProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, setState] = useState(initialState);
    const value = { ...state, checked: state.checked }; // Add the 'checked' property to the value object
    return (
        <Context.Provider value={value}> {children}</Context.Provider>
    );
}

export function useAppState() {
    return useContext(Context);
}
