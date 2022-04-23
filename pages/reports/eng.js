import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import { ReturnButtonEng } from "../../components/ReturnButton";

const ReportsPageEng = () => {
    return (
        <div>
            <Head>
                <meta lang="en" />
                <meta name="description" content="Battalion-207 reports on purchases and money raised" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Reports</title>
            </Head>

            <main>
                <div>
                    <div className="title">
                        <ReturnButtonEng />
                        <h2>Reports Page</h2>
                        <div className="underline" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReportsPageEng;
