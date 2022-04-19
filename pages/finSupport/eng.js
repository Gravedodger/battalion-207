import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";

const FinSupportPageEng = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Battalion-207 || Requisites</title>
                <meta name="description" content="Battalion-207 bank account requisites" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.mainWrap}>
                <Link href='../homepage/ukr' className={styles.return}>
                    <h5>Return to main menu</h5>
                </Link>
                <h1>Financial Support Page</h1>
            </div>
        </div>
    );
};

export default FinSupportPageEng;
