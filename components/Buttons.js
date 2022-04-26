import React from 'react';
import styles from '/styles/Buttons.module.css';

export const TransferBtnUkr = () => {
    return <button
        type='button'
        title='Перевод по реквізитам'
        className={styles.transfer}
    >
        Перевод <br/>по реквізитам
    </button>
}

export const TransferBtnEng = () => {
    return <button
        type='button'
        title='Transfer directly'
        className={styles.transfer}
    >
        Transfer <br/> directly
    </button>
}
