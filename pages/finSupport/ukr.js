import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";

const FinSupportPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Фінансові реквізити Батальйону 207" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Реквізити</title>
            </Head>

            <div className={styles.mainWrap}>
                <Link href='../homepage/ukr' className={styles.return}>
                    <h5>До головного меню</h5>
                </Link>
                <h1>Сторінка фінансової доаомоги</h1>
            </div>
        </div>
    );
};

export default FinSupportPageUkr;
