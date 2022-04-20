import React from 'react';
import Link from "next/link";
import styles from "../../styles/Styles.module.css";
import Head from "next/head";

const AboutPageEng = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="en"/>
                <meta name="description" content="Battalion-207 information about the battalion" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || About</title>
            </Head>

            <div className={styles.mainWrap}>
                <Link href='../homepage/eng' className={styles.return}>
                    <h5>Return to main menu</h5>
                </Link>
                <h1>About Page</h1>
            </div>
        </div>
    );
};

export default AboutPageEng;
