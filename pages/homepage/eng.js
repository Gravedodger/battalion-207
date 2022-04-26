import React, { Fragment } from 'react';
import styles from '/styles/Homepage.module.css';
import NextLink from 'next/link';
import Head from "next/head";
import Header from "../../components/Header";
import { VStack, Center, StackDivider, Link, Image } from '@chakra-ui/react'

const homePageEng = ({ pageTitle }) => {
    return <>
        <Head>
            <meta lang="en" />
            <meta name="description" content="Battalion-207 nav menu" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Navigation</title>
        </Head>

        <Header pageTitle='Battalion 207' />

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

                    <NextLink href='../reports/eng' passHref>
                        <Link className={styles.homepageNavItem}>
                            Reports
                        </Link>
                    </NextLink>

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
    </>
};

export default homePageEng;
