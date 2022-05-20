import React from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import Gallery from "/components/Gallery";
import DandD from "/components/D&D";
import { Center, Container, Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

const AboutPageEng = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="en" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 information about the battalion" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || About</title>
        </Head>

        <main className='main'>
            <Header pageTitle="About Us" />

            <Center>
                <Box className={styles.aboutArticle}>
                    <div className={styles.articleLogoContainer}>
                        <Image objectFit='fill' src='/logo.WebP' alt="battalion logo" lazy='true' />
                    </div>

                    <Container className={styles.articleTxtContainer}>
                        <Text color={textColor} className={styles.aboutText}>
                            The 207th Battalion of the 241st Territorial Defense Brigade of Kyiv is a separate unit
                            within the Armed Forces of Ukraine, subordinated to the Operational Command "North"
                            (unit A7376).
                        </Text>

                        <Text color={textColor} className={styles.aboutText}>
                            The Battalion was formed in response to the full-scale invasion of Ukraine by military
                            forces of the Russian Federation. Both servicemen with combat experience and patriots of
                            Ukraine without such experience joined its ranks. The atmosphere of a true comradeship,
                            constant training and the availability of immediate practice ensured every serviceman of
                            the Battalion is now an experienced soldier standing at the guard of Ukraine and the
                            rest of Europe.
                        </Text>

                        <Text color={textColor} className={styles.aboutText}>
                            Skilful command, combined with bravery of every soldier, helped the Battalion to play an
                            important role in defense of the Capital of Ukraine, the city of Kyiv.
                        </Text>

                        <Text color={textColor} className={styles.aboutText}>
                            Today, individual companies of the Battalion are engaged in combat missions around the Kyiv
                            region and beyond.
                        </Text>
                    </Container>
                </Box>
            </Center>

            <Center mt='8%'>
                <Box>
                    <Box textAlign='center' mb='5%'>
                        <Text fontSize={{ lg: '32px', md: '30px', sm: '22px', base: '20px' }}
                              color='#c59d5f'
                              fontWeight='600'
                        >
                            Battalion Gallery
                        </Text>
                    </Box>

                    <Gallery />

                </Box>
            </Center>

            <DandD />
        </main>
    </>
}

export default AboutPageEng;
