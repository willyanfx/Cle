import React from 'react'
import styles from './Strength.module.scss';

export default function Strength({children}) {
    return (
        <div className={styles.Strength}>
            {children}
        </div>
    )
}
