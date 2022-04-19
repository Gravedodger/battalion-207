import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";

const AboutPageUkr = () => {
    return (
        <div className={styles.mainWrap}>
            <Link href='../homepage/ukr' className={styles.return}>
                <h5>До головного меню</h5>
            </Link>
            <h1>Про Батальйон</h1>
        </div>
    );
};

export default AboutPageUkr;
