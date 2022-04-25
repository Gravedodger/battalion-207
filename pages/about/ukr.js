import React, { Fragment } from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import { Container, Box, Image, Text } from '@chakra-ui/react';

const AboutPageUkr = ({ pageTitle }) => {
    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Battalion-207 інформація про батальйон" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Про Батальйон</title>
        </Head>

        <main>
            <Header pageTitle='Про Батальйон' />

            <Box className={styles.aboutArticle}>
                <div className={styles.articleLogoContainer}>
                    <Image objectFit='fill' src='/logo.png' alt="battalion logo" />
                </div>

                <Container className={styles.articleTxtContainer} fontSize='xl' textAlign='justify'>
                    <Text>
                        207-й батальйон 241-ої бригади Територіальної оборони м.Києва є окремим підрозділом у складі
                        Збройних Сил України, підпорядкований Оперативному командуванню "Північ" (в/ч А7376).
                    </Text>

                    <br />

                    <Text>
                        Батальйон було створено у відповідь на повномасштабне вторгнення окупаційних військ
                        російської федерації на територію України. До його лав стали як військові з бойовим
                        досвідом, так і патріоти України без такого досвіду. Атмосфера справжньго братерства,
                        постійні тренування та наявність безпосередньої практики дозволили кожному військовослужбовцю
                        батальйону стати досвідченим воїном на варті України та решти Європи.
                    </Text>

                    <br />

                    <Text>
                        Вміле командування та відчайдушність бійців допомогли батальйону зіграти важливу роль у
                        обороні столиці України, міста Києва.
                    </Text>

                    <br/>

                    <Text>
                        На сьогодні окремі роти батальйону виконують бойові завдання в Київській області та за її
                        межами.
                    </Text>
                </Container>
            </Box>
        </main>
    </>
};

export default AboutPageUkr;
