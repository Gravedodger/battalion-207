import React from 'react';
import styles from "../../styles/Styles.module.css";
import Link from "next/link";
import Head from "next/head";
import logo from '/assets/images/logos/logo-112.png';
import Image from "next/image";
import { ReturnButtonUkr } from "../../components/ReturnButton";

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

                        <div className={styles.articleTxtContainer}>
                            <p>207-ий батальйон 112-ої бригади Територіальної оборони м.Києва є окремим підрозділом
                                у складі Збройних Сил України, підпорядкований військовій частині А7376.
                            </p>
                            <p>Батальйон було створено у відповідь на повномасштабне вторгнення окупаційних військ
                                російської федерації на територію України. До його лав стали як військові з бойовим досвідом,
                                так і патріоти України без військового досвіду.
                            </p>
                            <p>Вміле командування та відчайдушність бійців допомогли батальйону зіграти важливу роль у обороні
                                столиці України, міста Києва. </p>
                            <p>На сьогодні окремі роти батальйону виконують бойові завдання в Київській області та за її
                                межами.</p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default AboutPageUkr;
