import React from "react";
import styles from '../styles/Starter.module.css';
import Head from 'next/head';
import { MoonIcon } from "@chakra-ui/icons";
import { LightBulbIcon } from "../components/Icons";
import { Center, Flex, Box, Container, IconButton, useColorMode, Text, Image, Link, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<MoonIcon/>, <LightBulbIcon/>);
    const textColor = useColorModeValue('#222222', '#fff');

    return (
        <main className='main'>
            <Head>
                <title>Battalion-207</title>
                <meta name="description" content="Battalion-207 needs and requirements"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Center>
                <Container maxW="x1" display="flex" flexDir="column" justifyContent="center" alignItems="center">

                    <Box w='100%'>
                        <IconButton
                            position='relative' left='80%' mt='2%'
                            fontSize='40px'
                            variant="ghost"
                            aria-label="Toggle theme"
                            cursor='pointer'
                            icon={themeIcon}
                            onClick={toggleColorMode}
                            color='#c59d5f'
                        />
                    </Box>

                    <Flex className={styles.starterWrap} flexWrap='wrap' spacing={20} gap={10} mt="5%"
                          justifyContent='center' alignItems='center' flexDirection='column'>
                        <Box className={styles.starterLogoContainer}>
                            <Image src='/logo.png' alt="main logo" objectFit='contain' boxSize="90%"/>
                        </Box>

                        <Flex className={styles.starterFlagWrap} justifyContent='center' alignItems='center'>
                            <Box className={styles.starterFlagContainer}>
                                <Text
                                    fontSize={{lg: 'lg', md: 'md', sm: 'sm'}}
                                    textAlign="center"
                                    mb={2}
                                    color={textColor}
                                    className={styles.flagLabel}
                                >
                                    Українською
                                </Text>

                                <Box className={styles.starterUkrFlag}>
                                    <Link href='homepage/ukr'>
                                        <Image
                                            src='/flagUkraine-with-coat.png'
                                            alt="Flag of Ukraine"
                                            objectFit='contain'
                                        />
                                    </Link>
                                </Box>

                            </Box>

                            <Box className={styles.starterFlagContainer}>
                                <Text fontSize={{lg: 'lg', md: 'md', sm: 'sm'}}
                                      textAlign="center"
                                      mb={2}
                                      color={textColor}
                                      className={styles.flagLabel}
                                >
                                    In English
                                </Text>

                                <Box className={styles.starterEngFlag}>
                                    <Link href="homepage/eng">
                                        <Image
                                            src='/UK-US_flag.png'
                                            alt="Flags of US/UK"
                                            objectFit='contain'
                                        />
                                    </Link>
                                </Box>
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
            </Center>
        </main>
    );
}
