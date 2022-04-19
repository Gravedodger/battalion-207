import React from 'react';
import logo from "/assets/images/logos/logo-112.png";
import styles from '/styles/Homepage.module.css';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const HomePageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Батальйон-207</title>
                <meta name="description" content="Батальйон-207 нагальна необхідність підрозділу" />
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
                        <Link href='../about/ukr'>
                            <li className={styles.homepageNavItem}>Про Батальйон</li>
                        </Link>
                        <Link href='../items/ukr'>
                            <li className={styles.homepageNavItem}>Нагальна необхідність</li>
                        </Link>
                        <Link href='../reports/ukr'>
                            <li className={styles.homepageNavItem}>Звітність</li>
                        </Link>
                        <Link href='../finSupport/ukr'>
                            <li className={styles.homepageNavItem}>Фінансова допомога</li>
                        </Link>
                        <Link href='../contacts/ukr'>
                            <li className={styles.homepageNavItem}>Контактна інформація</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HomePageUkr;
