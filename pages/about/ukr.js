import React from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import Gallery from "/components/Gallery";
import DandD from "/components/D&D";
import { Center, Container, Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

const AboutPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="uk" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 інформація про батальйон" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Про Батальйон</title>
        </Head>

        <main className='main'>
            <Header pageTitle='Про Батальйон' />
            <Center>
                <Box className={styles.aboutArticle}>
                    <div className={styles.articleLogoContainer}>
                        <Image objectFit='fill' src='/logo.WebP' alt="battalion logo" lazy='true' />
                    </div>

                    <Container className={styles.articleTxtContainer}>
                        <Text color={textColor} className={styles.aboutText}>
                            207-й батальйон 241-ої бригади Територіальної оборони м.Києва є окремим підрозділом у складі
                            Збройних Сил України, підпорядкований Оперативному командуванню "Північ" (в/ч А7376).
                        </Text>

                        <Text color={textColor} className={styles.aboutText}>
                            Батальйон було створено у відповідь на повномасштабне вторгнення окупаційних військ
                            російської федерації на територію України. До його лав стали як військові з бойовим
                            досвідом, так і патріоти України без такого досвіду. Атмосфера справжнього братерства,
                            постійні тренування та наявність безпосередньої практики дозволили кожному військовослужбовцю
                            батальйону стати досвідченим воїном на варті України та решти Європи.
                        </Text>

                        <Text color={textColor} className={styles.aboutText}>
                            Вміле командування та відчайдушність бійців допомогли батальйону зіграти важливу роль у
                            обороні столиці України, міста Києва.
                        </Text>

                        <Text color={textColor} className={styles.aboutText}>
                            На сьогодні окремі роти батальйону виконують бойові завдання в Київській області та за її
                            межами.
                        </Text>
                    </Container>
                </Box>
            </Center>

            <Center mt={{ lg: '7rem', md: '3rem', sm: '2rem', base: '2rem' }}>
                <Box>
                    <Box textAlign='center' mb={{ lg: '3rem', md: '2rem', sm: '2rem', base: '1rem' }}>
                        <Text fontSize={{ lg: '36px', md: '30px', sm: '22px', base: '20px' }}
                              color='#c59d5f'
                              fontWeight={{ lg: 700, md: 700, sm: 600, base: 600 }}
                        >
                            Галерея батальйону
                        </Text>
                    </Box>

                    <Gallery />

                </Box>
            </Center>

            <DandD />
        </main>
    </>
}

export default AboutPageUkr;
