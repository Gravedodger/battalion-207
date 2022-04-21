import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";
import logo from '/assets/images/logos/logo-112.png';
import Image from "next/image";
import {ReturnButtonUkr} from "../../components/ReturnButton";

const AboutPageUkr = () => {
    return (
        <div className={styles.container}>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Battalion-207 інформація про батальйон" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Про Батальйон</title>
            </Head>

            <main>
                <section className={styles.mainWrap && styles.section}>
                    <div className={styles.title}>
                        <ReturnButtonUkr />
                        <h2>Про Батальйон</h2>
                        <div className={styles.underline} />
                    </div>

                    <article className={styles.aboutArticle}>
                        <div className={styles.articleLogoContainer}>
                            <Image src={logo} alt="battalion logo" />
                        </div>


                    </article>
                </section>
            </main>
        </div>
    );
};

export default AboutPageUkr;
