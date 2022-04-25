import React from 'react';
import styles from "../../styles/Styles.module.css";
import logo from "../../public/logo.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

const ContactsPageUkr = () => {
    return (
        <div>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Батальйон 207 контактна інформація" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Контакти</title>
            </Head>

            <main>
                <Header pageTitle="Контактна інформація" />

                <div className={styles.aboutArticle}>
                    <div className={styles.articleLogoContainer}>
                        <Image src={ logo } alt="battalion logo" />
                    </div>

                    <div className={styles.contactsInfo}>
                        <div className={styles.contactsItem}>
                            <h4>Підпорядкування:</h4>
                            <p>в/ч А7376, м.Київ</p>
                        </div>

                        <div className={styles.contactsItem}>
                            <h4>Контактна особа:</h4>
                            <Link href="https://www.facebook.com/sviatoslav.malyshevskyi" passHref>
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className={styles.contactsItemLink}>Святослав Малишевський</p>
                                </a>
                            </Link>
                        </div>

                        <div className={styles.contactsItem}>
                            <h4>Контактний телефон:</h4>
                            <Link href="tel:+380964954677">
                                <p className={styles.contactsItemLink}>+38 096 495 46 77</p>
                            </Link>
                        </div>

                        <div className={styles.contactsItem}>
                            <h4>Листування:</h4>
                            <Link href="mailto:battalion207.info@gmail.com">
                                <p className={styles.contactsItemLink}>battalion207.info@gmail.com</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactsPageUkr;
