import React from "react";
import styles from '../styles/Starter.module.css';
import Head from 'next/head';
import '../public/images/flags/ukraine-flag.png';
import '../public/images/flags/UK-US_flag.png';
import { Flex, Box, Container, IconButton, useColorMode, useColorModeValue, Text, Image, Link } from '@chakra-ui/react';
import { MoonIcon } from "@chakra-ui/icons";
import { LightBulbIcon } from "../components/Icons";

export default function Home() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', 'gray.800');
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

  return (
      <>
          <Head>
              <title>Battalion-207</title>
              <meta name="description" content="Battalion-207 needs and requirements" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <Container maxW="x1" minHeight="100vh" py={3} display="flex" flexDir="column" justifyContent="center" alignItems="center">
              <Box w={50} h={50}>
                  <IconButton position="absolute" left="70%" top="3%" m={3} variant="ghost" aria-label="Toggle theme"
                              fontSize={40} color="var(--clr-gold)" onClick={toggleColorMode} icon={themeIcon} />
              </Box>

              <Flex className={styles.starterWrap} flexWrap='wrap' spacing={20} gap={10} mt="5%"
                    justifyContent='center' alignItems='center' flexDirection='column'>
                  <Box className={styles.starterLogoContainer}>
                      <Image src='/logo.png' alt="main logo" objectFit='cover' boxSize="90%" />
                  </Box>

                  <Flex className={styles.starterFlagWrap} justifyContent='center' alignItems='center'>
                      <Box className={styles.starterFlagContainer}>
                          <Text fontSize="md" textAlign="center" mb={2}>
                              Українською
                          </Text>
                          <Box className={styles.starterUkrFlag}>
                              <Link href='homepage/ukr'>
                                  <Image src='/ukraine-flag.png' alt="flag of Ukraine" objectFit='cover' boxSize="90%" />
                              </Link>
                          </Box>
                      </Box>

                      <Box className={styles.starterFlagContainer}>
                          <Text fontSize="md" textAlign="center" mb={2}>
                              In English
                          </Text>
                          <Box className={styles.starterEngFlag}>
                              <Link href="homepage/eng">
                                  <Image src='/UK-US_flag.png' alt="flag of US/UK" objectFit='cover' boxSize="90%" />
                              </Link>
                          </Box>
                      </Box>
                  </Flex>
              </Flex>
          </Container>
      </>
  );
};
