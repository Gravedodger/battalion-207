import React from "react";
import styles from '/styles/Starter.module.css';
import Head from 'next/head';
import { MoonIcon } from "@chakra-ui/icons";
import { LightBulbIcon } from "/components/Icons";
import { Center, Flex, Box, Container, IconButton, useColorMode, Text, Link, Image, useColorModeValue } from '@chakra-ui/react';
import DandD from "/components/D&D";

export default function Home() {
    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<MoonIcon/>, <LightBulbIcon/>);
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 needs and requirements" />
            <link rel="icon" href="/favicon.ico"/>
            <title>Battalion-207</title>
        </Head>

        <main className='main'>
            <Center>
                <Container display="flex" maxW="x1" flexDir="column" justifyContent="center" alignItems="center">
                    <Box w='100%'>
                        <IconButton
                            position='relative'
                            left='80%'
                            mt='2rem'
                            fontSize='40px'
                            variant="ghost"
                            aria-label="Toggle theme"
                            cursor='pointer'
                            icon={themeIcon}
                            onClick={toggleColorMode}
                            color='#c59d5f'
                        />
                    </Box>

                    <Flex className={styles.starterWrap} flexWrap='wrap'
                          spacing={20} gap={10}
                          justifyContent='center' alignItems='center' flexDirection='column'>
                        <Box className={styles.starterLogoContainer}>
                            <Image src='/logo.WebP' lazy='true' alt="main logo" objectFit='contain' boxSize="90%" layout='fill'/>
                        </Box>

                        <Flex className={styles.starterFlagWrap} justifyContent='center' alignItems='center'>
                            <Box className={styles.starterFlagContainer}>
                                <Text fontSize={{ lg: 'lg', md: 'md', sm: 'sm' }} textAlign="center"
                                      color={textColor} className={styles.flagLabel}>
                                    Українською
                                </Text>

                                <Box className={styles.starterUkrFlag}>
                                    <Link href='homepage/ukr'>
                                        <Image
                                            src='/flags/flagUkraine-with-coat.WebP'
                                            alt="Flag of Ukraine"
                                            objectFit='contain'
                                            lazy='true'
                                        />
                                    </Link>
                                </Box>

                            </Box>

                            <Box className={styles.starterFlagContainer}>
                                <Text fontSize={{ lg: 'lg', md: 'md', sm: 'sm' }} textAlign="center"
                                      color={textColor} className={styles.flagLabel}
                                >
                                    In English
                                </Text>

                                <Box className={styles.starterEngFlag}>
                                    <Link href="homepage/eng">
                                        <Image
                                            src='/flags/UK-US_flag.WebP'
                                            objectFit='contain'
                                            alt="Flags of US/UK"
                                            lazy='true'
                                        />
                                    </Link>
                                </Box>
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
            </Center>
        </main>
    </>
}
