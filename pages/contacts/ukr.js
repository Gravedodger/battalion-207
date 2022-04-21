import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";
import { ReturnButtonUkr } from "../../components/ReturnButton";

const ContactsPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Батальйон 207 контактна інформація" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Контакти</title>
            </Head>

            <main>
                <section className={styles.mainWrap && styles.section}>
                    <div className={styles.title}>
                        <ReturnButtonUkr />
                        <h2>Контактна інформація</h2>
                        <div className={styles.underline} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactsPageUkr;
