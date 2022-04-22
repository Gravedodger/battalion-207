import React from 'react';
import styles from '/styles/ThreeDots.module.css';

const ThreeDotsTyping = () => {
    return <div className={styles.snippet} dataTitle={styles.dotTyping}>
        <div className={styles.stage}>
            <div className={styles.dotTyping} />
        </div>
    </div>
};

export default ThreeDotsTyping;
1