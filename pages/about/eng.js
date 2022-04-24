import React from 'react';
import styles from "../../styles/Styles.module.css";
import logo from "../../public/logo.png";
import Head from "next/head";
import Image from "next/image";
import { ReturnButtonEng } from "../../components/ReturnButton";

const AboutPageEng = () => {
    return (
        <div>
            <Head>
                <meta lang="en"/>
                <meta name="description" content="Battalion-207 information about the battalion" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || About</title>
            </Head>

            <main>
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
                        <p>
                            The 207th Battalion of the 112th Territorial Defense Brigade of Kyiv is a separate unit
                            within the Armed Forces of Ukraine, subordinated to the Operational Command "North"
                            (unit A7376).
                        </p>

                        <p>
                            The Battalion was formed in response to the full-scale invasion of Ukraine by military
                            forces of the Russian Federation. Both servicemen with combat experience and patriots of
                            Ukraine without such experience joined its ranks. The atmosphere of a true comradeship,
                            constant training and the availability of immediate practice ensured every serviceman of
                            the Battalion is now an experienced soldier standing at the guard of Ukraine and the
                            rest of Europe.
                        </p>

                        <p>
                            Skilful command, combined with bravery of every soldier, helped the Battalion to play an
                            important role in defense of the Capital of Ukraine, the city of Kyiv.
                        </p>

                        <p>
                            Today, individual companies of the Battalion are engaged in combat missions around the Kyiv
                            region and beyond.
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default AboutPageEng;
