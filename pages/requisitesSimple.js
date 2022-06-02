import React from "react";
import styles from '/styles/Starter.module.css';
import Link from 'next/link';
import Head from 'next/head';
import DandD from "/components/D&D";
import { MoonIcon, ChevronLeftIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { LightBulbIcon } from "/components/Icons";
import { Center, Flex, Box, Container, IconButton, useColorMode, Text, Image, useColorModeValue } from '@chakra-ui/react';

export default function requisitesSimple() {
    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<MoonIcon/>, <LightBulbIcon/>);
    const textColor = useColorModeValue('#22222', '#fff');

    return <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 404 error page" />
            <link rel="icon" href="/favicon.ico"/>
            <title>Battalion-207 || Requisites</title>
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
                          justifyContent='center'
                          alignItems='center'
                          flexDirection={{ lg: 'row', md: 'row', sm: 'column', base: 'column' }}
                    >
                        <Box className={styles.starterLogoContainer}>
                            <Image src='/logo.WebP' lazy='true' alt="main logo" objectFit='contain' boxSize='65%' layout='fill'/>
                        </Box>

                        <Box fontSize='20px'>
                            <Text mb='1rem' color='textColor'>
                                <span className='bankName'>Monobank:</span>
                                    5375 4141 0238 3246
                            </Text>
                            <Text mb='1rem' color='textColor'>
                                <span className='bankName'>PrivatBank:</span>
                                    5363 5423 0841 7279
                            </Text>
                            <Text mb='1rem' color='textColor'>
                                <span className='bankName'>Sportbank:</span>
                                    4149 3900 0130 3998
                            </Text>
                            <Text mb='1rem' color='textColor'>
                                <span className='bankName'>Oschadbank:</span>
                                    5167 8032 0425 5561
                            </Text>
                            <Link href='/finSupport/ukr' cursor='pointer'>
                                <Flex cursor='pointer' alignItems='center'>
                                    <Text className='bankName' color='textColor'>PayPal, Payoneer, Bitcoin, etc.</Text>
                                    <ExternalLinkIcon color='inherit' fontSize='16px'/>
                                </Flex>
                            </Link>
                        </Box>
                    </Flex>

                    <Box cursor='pointer' mt='4rem'
                         fontSize={{ lg: '18px', md: '18px', sm: '15px', base: '15px' }}
                    >
                        <Link href="/" passHref>
                            <Box>
                                <ChevronLeftIcon fontSize='30px' />
                                Перейти до сайту батальйону / Visit the battalion's website
                            </Box>
                        </Link>
                    </Box>
                </Container>
            </Center>

            <DandD />
        </main>
    </>
}
