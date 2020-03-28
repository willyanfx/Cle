import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useAppState } from '../../appState';
import ShuffleText from 'shuffle-text';
import { generatePassword, getCharacters, limitCalls } from '../../helpers';
import styles from './Password.module.scss';
import {useAnimation} from '../../hooks'

export default function Password() {
	const passwordRef = useRef();
    const [{ checked, length }, setState] = useAppState();
    let newPassword =  generatePassword(getCharacters(checked), length);
    const [result, setResult] = useState(newPassword);

	useLayoutEffect(() => {
		let text = new ShuffleText(passwordRef.current);
		text.duration = 3000;
		text.emptyCharacter = '';
		text.start();
		return () => text.stop();
	}, [result]);




    useEffect(() => {
        let result = limitCalls(
			generatePassword(getCharacters(checked), length)
		);
        setResult(result);
    }, [checked, length])

    useEffect(() => {

    }, [checked, length]);

console.log(result)
	return (
		<div ref={passwordRef} className={styles.Password}>
			{result}
		</div>
	);
}
