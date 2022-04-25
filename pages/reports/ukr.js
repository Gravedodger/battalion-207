import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import Header from "../../components/Header";

const ReportsPageUkr = () => {
    return (
        <div>
            <Head>
                <meta lang="uk"/>
                <meta name="description" content="Фінансова та інвентарна звітність Батальйону-207" />
                <link rel="icon" href="/favicon.ico" />
                <title>Батальйон-207 || Звітність</title>
            </Head>

            <main>
                <Header pageTitle="Звітність" />

                <div>

                </div>
            </main>
        </div>
    );
};

export default ReportsPageUkr;
