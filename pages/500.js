import React from "react";
import styles from '/styles/Starter.module.css';
import Link from 'next/link';
import Head from 'next/head';
import DandD from "/components/D&D";
import { MoonIcon } from "@chakra-ui/icons";
import { LightBulbIcon } from "/components/Icons";
import { Center, Flex, Box, Container, IconButton, useColorMode, Text, Image, useColorModeValue } from '@chakra-ui/react';

export default function Custom500() {
    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<MoonIcon/>, <LightBulbIcon/>);
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 500 server error page" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || 500</title>
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

                        <Box mb='2rem'>
                            <Text>500 - Сталася помилка на сервері</Text>
                            <Text>500 - Server-side error occurred</Text>
                        </Box>
                        <Box>
                            <Link href="/">
                                <a>Повернутися на головну сторінку / Go back home</a>
                            </Link>
                        </Box>
                    </Flex>
                </Container>
            </Center>

            <DandD />
        </main>
    </>
}
