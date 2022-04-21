import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";
import { ReturnButtonEng } from "../../components/ReturnButton";
import Image from "next/image";
import logo from "../../assets/images/logos/logo-112.png";

const ContactsPageEng = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="en"/>
                <meta name="description" content="Battalion-207 contact information" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Contacts</title>
            </Head>

            <main>
                <section className={styles.mainWrap && styles.section}>
                    <div className={styles.title}>
                        <ReturnButtonEng />
                        <h2>Contacts Page</h2>
                        <div className={styles.underline} />
                    </div>

                    <article className={styles.aboutArticle}>
                        <div className={styles.articleLogoContainer}>
                            <Image src={logo} alt="battalion logo" />
                        </div>

                        <div className={styles.articleTxtContainer}>
                            <p>ENGLISH TEXT VERSION</p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default ContactsPageEng;
