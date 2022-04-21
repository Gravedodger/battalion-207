import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";
import { ReturnButtonUkr } from "../../components/ReturnButton";

const ReportsPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Фінансова та інвентарна звітність Батальйону-207" />
                <link rel="icon" href="/favicon.ico" />
                <title>Батальйон-207 || Звітність</title>
            </Head>

            <main>
                <section className={styles.mainWrap && styles.section}>
                    <div className={styles.title}>
                        <ReturnButtonUkr />
                        <h2>Сторінка звітності</h2>
                        <div className={styles.underline} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ReportsPageUkr;
