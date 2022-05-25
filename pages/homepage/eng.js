import React  from 'react';
import styles from '/styles/Homepage.module.css';
import NextLink from 'next/link';
import Head from "next/head";
import Header from "/components/Header/Header";
import DandD from "/components/D&D";
import {VStack, Center, StackDivider, Link, Image, Flex, Text, useColorModeValue} from '@chakra-ui/react'

const homePageEng = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="en" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 nav menu" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Navigation</title>
        </Head>

        <main className='main'>
            <Header pageTitle='Battalion 207' />

            <Center>
                <div className={styles.homepageContainer}>
                    <div className={styles.homepageLogoWrap}>
                        <Image src='/logo.WebP' lazy='true' alt='main logo' />
                    </div>

                    <VStack className={styles.homepageNav}
                            divider={<StackDivider borderColor='#c59d5f' />}
                            spacing={4}
                            align='center' >

                        <NextLink href='../about/eng' passHref>
                            <Link className={styles.homepageNavItem}>
                                About
                            </Link>
                        </NextLink>

                        <NextLink href='../items/eng' passHref>
                            <Link className={styles.homepageNavItem}>
                                Items
                            </Link>
                        </NextLink>

                        <Flex alignItems='center'>
                            <NextLink href='../reports/eng' passHref>
                                <Link className={styles.homepageNavItem}>
                                    Reports
                                </Link>
                            </NextLink>
                            <Text ml={{ lg: '1rem', sm: '15px', base: '10px' }}
                                  mr={{ lg: '1rem', sm: '15px', base: '10px' }}
                                  mt='4px'
                                  fontSize='20px'
                                  color={textColor}
                            >/</Text>
                            <NextLink href='../FAQ/eng' passHref>
                                <Link className={styles.homepageNavItem}>
                                    FAQ
                                </Link>
                            </NextLink>
                        </Flex>

                        <NextLink href='../finSupport/eng' passHref>
                            <Link className={styles.homepageNavItem}>
                                Financial Support
                            </Link>
                        </NextLink>

                        <NextLink href='../contacts/eng' passHref>
                            <Link className={styles.homepageNavItem}>
                                Contacts
                            </Link>
                        </NextLink>
                    </VStack>
                </div>
            </Center>

            <DandD />
        </main>
    </>
}

export default homePageEng;
