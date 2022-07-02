import React from 'react';
import styles from '/styles/Homepage.module.css';
import Head from "next/head";
import NextLink from 'next/link';
import DandD from "/components/D&D";
import Header from "/components/Header/Header";
import { VStack, Center, StackDivider, Image, Flex, Text, useColorModeValue } from '@chakra-ui/react';

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
                        <Image src='/logo.WebP'
                               lazy='true'
                               alt='Battalion 207 logo'
                        />
                    </div>

                    <VStack className={styles.homepageNav}
                            divider={<StackDivider borderColor='#c59d5f' />}
                            spacing={4}
                            align='center'
                    >

                        <NextLink href='../about/ukr' passhref="true">
                            <Text color={textColor} className={styles.homepageNavItem}>
                                Про Батальйон
                            </Text>
                        </NextLink>

                        <NextLink href='../items/ukr' passhref="true">
                            <Text color={textColor} className={styles.homepageNavItem}>
                                Нагальна необхідність
                            </Text>
                        </NextLink>

                        <Flex alignItems='center'
                              width={{ sm: '160px', base: '160px' }}
                              mr={{ lg: '6rem' }}
                        >
                            <NextLink href='../reports/ukr' passhref="true">
                                <Text color={textColor} className={styles.homepageNavItem}>
                                    Звітність
                                </Text>
                            </NextLink>
                            <Text ml={{ lg: '1rem', sm: '15px', base: '10px' }}
                                  mr={{ lg: '1rem', sm: '15px', base: '10px' }}
                                  mt='4px'
                                  fontSize='20px'
                                  color={textColor}
                            >/</Text>
                            <NextLink href='../FAQ/ukr' passhref="true">
                                <Text color={textColor} className={styles.homepageNavItem}>
                                    FAQ
                                </Text>
                            </NextLink>
                        </Flex>

                        <NextLink href='../finSupport/ukr' passhref="true">
                            <Text color={textColor} className={styles.homepageNavItem}>
                                Фінансова допомога
                            </Text>
                        </NextLink>

                        <NextLink href='../contacts/ukr' passhref="true">
                            <Text color={textColor} className={styles.homepageNavItem}>
                                Контактна інформація
                            </Text>
                        </NextLink>
                    </VStack>
                </div>
            </Center>

            <DandD />
        </main>
    </>
}

export default HomePageUkr;
