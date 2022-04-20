import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";

const ReportsPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Фінансова та інвентарна звітність Батальйону-207" />
                <link rel="icon" href="/favicon.ico" />
                <title>Батальйон-207 || Звітність</title>
            </Head>

            <div className={styles.mainWrap}>
                <Link href='../homepage/ukr' className={styles.return}>
                    <h5>До головного меню</h5>
                </Link>
                <h1>Сторінка звітності</h1>
            </div>
        </div>
    );
};

export default ReportsPageUkr;
