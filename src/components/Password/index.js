import React, { useRef, useEffect } from 'react';
import styles from './Password.module.scss';
export default function Password() {
    const passwordRef = useRef();
    useEffect(() => { }, []);
    return <div ref={passwordRef} className={styles.Password}>Password</div>;
}
