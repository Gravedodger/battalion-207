import React, { Fragment } from 'react';
import styles from '/styles/Homepage.module.css';
import { Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from "next/head";
import Header from "../../components/Header";
import { VStack, Center, StackDivider, Text, Container, Box, Link } from '@chakra-ui/react'

const HomePageUkr = ({ pageTitle }) => {
    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Батальйон-207 навігаційне меню" />
            <link rel="icon" href="/favicon.ico" />
            <title>Батальйон-207 || Меню</title>
        </Head>

        <Header pageTitle='Батальйон 207' />

        <Center>
            <div className={styles.homepageContainer}>
                <div className={styles.homepageLogoWrap}>
                    <Image src='/logo.png' className={styles.homepageLogo} />
                </div>

                <VStack
                    className={styles.homepageNav}
                    divider={<StackDivider borderColor='#c59d5f'/>}
                    spacing={4}
                    align='center'
                >

                    <NextLink href='../about/ukr' passHref>
                        <Link
                            fontSize={{ lg: 40, md: 30, sm: 20 }}
                            fontWeight={{ lg: 600 , md: 500, sm: 500 }}
                            className={styles.chakraLink}
                        >
                            Про Батальйон
                        </Link>
                    </NextLink>

                    <NextLink href='../items/ukr' passHref>
                        <Link
                            fontSize={{ lg: 40, md: 30, sm: 20 }}
                            fontWeight={{ lg: 600 , md: 500, sm: 500 }}
                            className={styles.chakraLink}
                        >
                            Нагальна необхідність
                        </Link>
                    </NextLink>

                    <NextLink href='../reports/ukr' passHref>
                        <Link
                            fontSize={{ lg: 40, md: 30, sm: 20 }}
                            fontWeight={{ lg: 600 , md: 500, sm: 500 }}
                            className={styles.chakraLink}
                        >
                            Звітність
                        </Link>
                    </NextLink>

                    <NextLink href='../finSupport/ukr' passHref                         textDecoration='none'
                    >
                        <Link
                            fontSize={{ lg: 40, md: 30, sm: 20 }}
                            fontWeight={{ lg: 600 , md: 500, sm: 500 }}
                            className={styles.chakraLink}
                        >
                            Фінансова допомога
                        </Link>
                    </NextLink>

                    <NextLink href='../contacts/ukr' passHref>
                        <Link
                            fontSize={{ lg: 40, md: 30, sm: 20 }}
                            fontWeight={{ lg: 600 , md: 500, sm: 500 }}
                            className={styles.chakraLink}
                        >
                            Контактна інформація
                        </Link>
                    </NextLink>
                </VStack>
            </div>
        </Center>

    </>
}

export default HomePageUkr;
