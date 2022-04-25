import React, { Fragment } from 'react';
import styles from '/styles/Homepage.module.css';
import NextLink from 'next/link';
import Head from "next/head";
import Header from "../../components/Header";
import { VStack, Center, StackDivider, Image, Link } from '@chakra-ui/react'

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
                    <Image src='/logo.png' />
                </div>

                <VStack
                    className={styles.homepageNav}
                    divider={<StackDivider borderColor='#c59d5f'/>}
                    spacing={4}
                    align='center'
                >

                    <NextLink href='../about/ukr' passHref>
                        <Link className={styles.homepageNavItem}>
                            Про Батальйон
                        </Link>
                    </NextLink>

                    <NextLink href='../items/ukr' passHref>
                        <Link className={styles.homepageNavItem}>
                            Нагальна необхідність
                        </Link>
                    </NextLink>

                    <NextLink href='../reports/ukr' passHref>
                        <Link className={styles.homepageNavItem}>
                            Звітність
                        </Link>
                    </NextLink>

                    <NextLink href='../finSupport/ukr' passHref>
                        <Link className={styles.homepageNavItem}>
                            Фінансова допомога
                        </Link>
                    </NextLink>

                    <NextLink href='../contacts/ukr' passHref>
                        <Link className={styles.homepageNavItem}>
                            Контактна інформація
                        </Link>
                    </NextLink>
                </VStack>
            </div>
        </Center>

    </>
}

export default HomePageUkr;
