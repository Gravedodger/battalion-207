import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";
import { ReturnButtonUkr } from "../../components/ReturnButton";

const FinSupportPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Фінансові реквізити Батальйону 207" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Реквізити</title>
            </Head>

            <main>
                <section className={styles.mainWrap && styles.section}>
                    <div className={styles.title}>
                        <ReturnButtonUkr />
                        <h2>Сторінка фінансової доаомоги</h2>
                        <div className={styles.underline} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FinSupportPageUkr;
