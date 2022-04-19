import React from 'react';
import Link from "next/link";
import styles from "../../styles/Styles.module.css";

const AboutPageEng = () => {
    return (
        <div className={styles.mainWrap}>
            <Link href='../homepage/ukr' className={styles.return}>
                <h5>Return to main menu</h5>
            </Link>
            <h1>About Page</h1>
        </div>
    );
};

export default AboutPageEng;
