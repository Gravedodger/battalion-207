import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";

const ContactsPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Батальйон 207 контактна інформація" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Контакти</title>
            </Head>

            <div className={styles.mainWrap}>
                <Link href='../homepage/ukr' className={styles.return}>
                    <h5>До головного меню</h5>
                </Link>
                <h1>Контактна інформація</h1>
            </div>
        </div>
    );
};

export default ContactsPageUkr;
