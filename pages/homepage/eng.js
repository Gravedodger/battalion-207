import React from 'react';
import logo from "/assets/images/logos/logo-112.png";
import styles from '/styles/Homepage.module.css';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const homePageEng = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Battalion-207</title>
                <meta name="description" content="Battalion-207 needs and requirements" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.homepageContainer}>
                <div className={styles.homepageLogoWrap}>
                    <Link href='/'>
                        <Image src={ logo } className={styles.homepageLogo} />
                    </Link>
                </div>
                <nav className={styles.homepageNav}>
                    <ul>
                        <Link href='../about/eng'>
                            <li className={styles.homepageNavItem}>About</li>
                        </Link>
                        <Link href='../items/eng'>
                            <li className={styles.homepageNavItem}>Items</li>
                        </Link>
                        <Link href='../reports/eng'>
                            <li className={styles.homepageNavItem}>Reports</li>
                        </Link>
                        <Link href='../finSupport/eng'>
                            <li className={styles.homepageNavItem}>Financial Support</li>
                        </Link>
                        <Link href='../contacts/eng'>
                            <li className={styles.homepageNavItem}>Contacts</li>
                        </Link>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default homePageEng;
