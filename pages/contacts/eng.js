import React from 'react';
import styles from "../../styles/Styles.module.css";
import logo from "../../assets/images/logos/logo-112.png";
import Head from "next/head";
import Image from "next/image";
import { ReturnButtonEng } from "../../components/ReturnButton";
import Link from "next/link";

const ContactsPageEng = () => {
    return (
        <div>
            <Head>
                <meta lang="en"/>
                <meta name="description" content="Battalion-207 contact information" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Contacts</title>
            </Head>

            <main>
                <div className="title">
                    <ReturnButtonEng />
                    <h2>Contact information</h2>
                    <div className="underline" />
                </div>

                <div className={styles.aboutArticle}>
                    <div className={styles.articleLogoContainer}>
                        <Image src={ logo } alt="battalion logo" />
                    </div>

                    <div className={styles.contactsInfo}>
                        <div className={styles.contactsItem}>
                            <h4>Battalion command:</h4>
                            <p>military base А7376, Kyiv city</p>
                        </div>

                        <div className={styles.contactsItem}>
                            <h4>Contact person:</h4>
                            <Link href="https://www.facebook.com/sviatoslav.malyshevskyi" passHref>
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className={styles.contactsItemLink}>Sviatoslav Malyshevskyi</p>
                                </a>
                            </Link>
                        </div>

                        <div className={styles.contactsItem}>
                            <h4>Contact tel:</h4>
                            <Link href="tel:+380964954677">
                                <p className={styles.contactsItemLink}>+38 096 495 46 77</p>
                            </Link>
                        </div>

                        <div className={styles.contactsItem}>
                            <h4>Email:</h4>
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

export default ContactsPageEng;
