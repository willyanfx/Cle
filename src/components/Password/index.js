import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useAppState } from '../../appState';
import ShuffleText from 'shuffle-text';
import { generatePassword, getCharacters, limitCalls } from '../../helpers';
import styles from './Password.module.scss';
import { useAnimation } from '../../hooks';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function Password() {
	const passwordRef = useRef();
	const [{ checked, length }, setState] = useAppState();
	let newPassword = generatePassword(getCharacters(checked), length);
    const [result, setResult] = useState(newPassword);
    let [refresh, setRefresh] = useState(true)

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
	}, [checked, length, refresh]);

    console.log(refresh)
	return (
		<div className={styles.Container}>
			<div ref={passwordRef} className={styles.Password}>
				{result}
			</div>
			<div className={styles.Buttons}>
				<CopyToClipboard text={result}>
					<button>Copy</button>
				</CopyToClipboard>
				<button onClick={() => setRefresh(!refresh)}>Refresh</button>
			</div>
		</div>
	);
}
