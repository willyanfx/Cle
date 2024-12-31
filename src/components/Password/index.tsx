import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useAppState } from '../../appState';
// import ShuffleText from 'shuffle-text';
import {
    generatePassword,
    getCharacters,
    limitCalls,
} from '../../helpers';
// import styles from './Password.module.scss';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon, RefreshIcon } from '../Assets/Icons';

export function Password() {
    const passwordRef = useRef<HTMLSpanElement>(null);
    const { checked, length } = useAppState();
    let newPassword = generatePassword(
        getCharacters(checked),
        length,
    );
    const [result, setResult] = useState(newPassword);
    let [refresh, setRefresh] = useState(true);

    // useLayoutEffect(() => {
    //     let text = new ShuffleText(passwordRef.current);
    //     text.duration = 3000;
    //     text.emptyCharacter = '*';
    //     text.start();
    //     return () => text.stop();
    // }, [result]);

    useEffect(() => {
        let result = limitCalls(
            generatePassword(getCharacters(checked), length),
        );
        setResult(result);
    }, [checked, length, refresh]);

    return (
        <div>
            <div>
                <span ref={passwordRef}>{result}</span>
            </div>
            <div>
                {/* <CopyToClipboard text={result}> */}
                <button>
                    <CopyIcon />
                </button>
                {/* </CopyToClipboard> */}
                <button
                    data-refresh
                    onClick={() => setRefresh(!refresh)}
                >
                    <RefreshIcon />
                </button>
            </div>
        </div>
    );
}
