import React from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import { Center, Container, Box, Image, Text, useColorModeValue } from '@chakra-ui/react';
import Gallery from "../../components/Gallery";

const AboutPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Battalion-207 інформація про батальйон" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Про Батальйон</title>
        </Head>

        <main className='main'>
            <Header pageTitle='Про Батальйон' />
            <Center>
                <Box className={styles.aboutArticle}>
                    <div className={styles.articleLogoContainer}>
                        <Image objectFit='fill' src='/logo.png' alt="battalion logo" />
                    </div>

                    <Container className={styles.articleTxtContainer}>
                        <Text color={textColor} className={styles.aboutText}>
                            207-й батальйон 241-ої бригади Територіальної оборони м.Києва є окремим підрозділом у складі
                            Збройних Сил України, підпорядкований Оперативному командуванню "Північ" (в/ч А7376).
                        </Text>

                        <Text color={textColor} className={styles.aboutText}>
                            Батальйон було створено у відповідь на повномасштабне вторгнення окупаційних військ
                            російської федерації на територію України. До його лав стали як військові з бойовим
                            досвідом, так і патріоти України без такого досвіду. Атмосфера справжньго братерства,
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

            <Center mt='5%'>
                <Box>
                    <Gallery />
                </Box>
            </Center>
        </main>
    </>
}

export default AboutPageUkr;
