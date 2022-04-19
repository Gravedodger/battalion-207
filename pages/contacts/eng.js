import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";

const ContactsPageEng = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Battalion-207 || Contacts</title>
                <meta name="description" content="Battalion-207 contact information" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.mainWrap}>
                <Link href='../homepage/ukr' className={styles.return}>
                    <h5>Return to main menu</h5>
                </Link>
                <h1>Contacts Page</h1>
            </div>
        </div>
    );
};

export default ContactsPageEng;
