import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import { ReturnButtonUkr } from "../../components/ReturnButton";

const FinSupportPageUkr = () => {
    return (
        <div className="container">
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Фінансові реквізити Батальйону 207" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Реквізити</title>
            </Head>

            <main>
                <section className="section">
                    <div className="title">
                        <ReturnButtonUkr />
                        <h2>Сторінка фінансової доаомоги</h2>
                        <div className="underline" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FinSupportPageUkr;
