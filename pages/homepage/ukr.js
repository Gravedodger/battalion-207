import React from 'react';
import styles from '/styles/Homepage.module.css';
import NextLink from 'next/link';
import Head from "next/head";
import Header from "/components/Header/Header";
import DandD from "/components/D&D";
import {VStack, Center, StackDivider, Image, Link, Flex, Text, useColorModeValue} from '@chakra-ui/react';

const HomePageUkr = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="uk" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Батальйон-207 навігаційне меню" />
            <link rel="icon" href="/favicon.ico" />
            <title>Батальйон-207 || Меню</title>
        </Head>

        <main className='main'>
            <Header pageTitle='Батальйон 207' />

            <Center>
                <div className={styles.homepageContainer}>
                    <div className={styles.homepageLogoWrap}>
                        <Image src='/logo.WebP' lazy='true' alt='Battalion 207 logo' />
                    </div>

                    <VStack className={styles.homepageNav}
                            divider={<StackDivider borderColor='#c59d5f'/>}
                            spacing={4}
                            align='center' >

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

                        <Flex alignItems='center'>
                            <NextLink href='../reports/ukr' passHref>
                                <Link className={styles.homepageNavItem}>
                                    Звітність
                                </Link>
                            </NextLink>
                            <Text ml='1rem' mr='1rem' mt='4px' fontSize='20px' color={textColor}>/</Text>
                            <NextLink href='../FAQ/ukr' passHref>
                                <Link className={styles.homepageNavItem}>
                                    FAQ
                                </Link>
                            </NextLink>
                        </Flex>

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
            <DandD />
        </main>
    </>
}

export default HomePageUkr;
