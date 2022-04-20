import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";

const AboutPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Battalion-207 інформація про батальйон" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Про Батальйон</title>
            </Head>

            <div className={styles.mainWrap}>
                <Link href='../homepage/ukr' className={styles.return}>
                    <h5>Повернутися до головного меню</h5>
                </Link>
                <h1>Про Батальйон</h1>
            </div>
        </div>
    );
};

export default AboutPageUkr;
