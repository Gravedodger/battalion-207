import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import { ReturnButtonEng } from "../../components/ReturnButton";

const FinSupportPageEng = () => {
    return (
        <div className="container">
            <Head>
                <meta lang="en"/>
                <meta name="description" content="Battalion-207 bank account requisites" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Requisites</title>
            </Head>

            <main>
                <section className="styles.section">
                    <div className="title">
                        <ReturnButtonEng />
                        <h2>Financial Support Page</h2>
                        <div className="underline" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FinSupportPageEng;
