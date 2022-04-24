import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import logo from '/public/logo.png';
import Image from "next/image";
import { ReturnButtonUkr } from "../../components/ReturnButton";

const AboutPageUkr = () => {
    return (
        <div>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Battalion-207 інформація про батальйон" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Про Батальйон</title>
            </Head>

            <main>
                <div className="title">
                    <ReturnButtonUkr />
                    <h2>Про Батальйон</h2>
                    <div className="underline" />
                </div>

                <article className={styles.aboutArticle}>
                    <div className={styles.articleLogoContainer}>
                        <Image src={logo} alt="battalion logo" />
                    </div>

                    <div className={styles.articleTxtContainer}>
                        <p>
                            207-й батальйон 112-ої бригади Територіальної оборони м.Києва є окремим підрозділом
                            у складі Збройних Сил України, підпорядкований Оперативному командуванню "Північ"
                            (в/ч А7376).
                        </p>

                        <p>
                            Батальйон було створено у відповідь на повномасштабне вторгнення окупаційних військ
                            російської федерації на територію України. До його лав стали як військові з бойовим
                            досвідом, так і патріоти України без такого досвіду. Атмосфера справжньго братерства,
                            постійні тренування та наявність безпосередньої практики дозволили кожному військовослужбовцю
                            батальйону стати досвідченим воїном на варті України та решти Європи.
                        </p>

                        <p>
                            Вміле командування та відчайдушність бійців допомогли батальйону зіграти важливу роль у
                            обороні столиці України, міста Києва.
                        </p>

                        <p>
                            На сьогодні окремі роти батальйону виконують бойові завдання в Київській області та за її
                            межами.
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default AboutPageUkr;
