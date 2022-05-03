import React from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import { Box, useColorModeValue } from "@chakra-ui/react";
import WarStatsENG from "../../components/WarStats/WarStatsENG";

const ReportsPageEng = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return <>
        <Head>
            <meta lang="en" />
            <meta name="description" content="Battalion-207 reports on purchases and money raised" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Reports</title>
        </Head>

        <Box>
            <Header pageTitle="Reports" />
            <WarStatsENG />
        </Box>
    </>
}

export default ReportsPageEng;
