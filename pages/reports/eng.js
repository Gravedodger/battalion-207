import React from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";

const ReportsPageEng = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return <>
        <Head>
            <meta lang="en" />
            <meta name="description" content="Battalion-207 reports on purchases and money raised" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Reports</title>
        </Head>

        <main className='main'>
            <Header pageTitle="Reports" />
            <Center>
                <Box>
                    <Text color={textColor} fontSize={{ lg:'xl', md:'md', sm:'sm' }}>
                        Секція в процесі розробки та з'явиться незабаром!
                    </Text>
                </Box>
            </Center>
        </main>
    </>
}

export default ReportsPageEng;
