import React, { Fragment } from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import { Container, Box, Image, Text } from '@chakra-ui/react';

const AboutPageEng = () => {
    return <>
        <Head>
            <meta lang="en"/>
            <meta name="description" content="Battalion-207 information about the battalion" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || About</title>
        </Head>

        <main>
            <Header pageTitle="About Us" />

            <Box className={styles.aboutArticle}>
                <div className={styles.articleLogoContainer}>
                    <Image objectFit='fill' src='/logo.png' alt="battalion logo" />
                </div>

                <Container className={styles.articleTxtContainer} fontSize='xl' textAlign='justify'>
                    <Text>
                        The 207th Battalion of the 112th Territorial Defense Brigade of Kyiv is a separate unit
                        within the Armed Forces of Ukraine, subordinated to the Operational Command "North"
                        (unit A7376).
                    </Text>

                    <Text>
                        The Battalion was formed in response to the full-scale invasion of Ukraine by military
                        forces of the Russian Federation. Both servicemen with combat experience and patriots of
                        Ukraine without such experience joined its ranks. The atmosphere of a true comradeship,
                        constant training and the availability of immediate practice ensured every serviceman of
                        the Battalion is now an experienced soldier standing at the guard of Ukraine and the
                        rest of Europe.
                    </Text>

                    <Text>
                        Skilful command, combined with bravery of every soldier, helped the Battalion to play an
                        important role in defense of the Capital of Ukraine, the city of Kyiv.
                    </Text>

                    <Text>
                        Today, individual companies of the Battalion are engaged in combat missions around the Kyiv
                        region and beyond.
                    </Text>
                </Container>
            </Box>
        </main>
    </>
}

export default AboutPageEng;
