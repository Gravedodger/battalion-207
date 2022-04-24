import React from 'react';
import logo from "/public/logo.png";
import styles from '/styles/Homepage.module.css';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const homePageEng = () => {
    return (
        <div>
            <Head>
                <meta lang="en"/>
                <meta name="description" content="Battalion-207 nav menu" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Navigation</title>
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
