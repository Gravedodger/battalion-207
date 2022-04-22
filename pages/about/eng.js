import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import { ReturnButtonEng } from "../../components/ReturnButton";
import Image from "next/image";
import logo from "../../assets/images/logos/logo-112.png";

const AboutPageEng = () => {
    return (
        <div className="container">
            <Head>
                <meta lang="en"/>
                <meta name="description" content="Battalion-207 information about the battalion" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || About</title>
            </Head>

            <main>
                <section className="section">
                    <div className="title">
                        <ReturnButtonEng />
                        <h2>About Us</h2>
                        <div className="underline" />
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

export default AboutPageEng;
