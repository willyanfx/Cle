import React, { useRef, useEffect } from 'react';
import styles from './Password.module.scss';
import ShuffleText from 'shuffle-text';

export default function Password() {
    const passwordRef = useRef();

    React.useEffect(() => {
		let text = new ShuffleText(passwordRef.current);
		text.duration = 3000;
		text.emptyCharacter = '';
		// text.sourceRandomCharacter = '1234567890';
		text.start();
		return () => text.stop();
	}, []);
    return (
		<div ref={passwordRef} className={styles.Password}>
			test
		</div>
	);
}
