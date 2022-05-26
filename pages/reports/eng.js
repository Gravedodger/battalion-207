import React from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import DandD from "/components/D&D";
import Header from "/components/Header/Header";
import WarStatsENG from "/components/WarStats/WarStatsENG";
import DonationsFeature from "/components/DonationsFeature";
import PurchasedFeatureENG from "/components/PurchasedFeature/PurchasedFeatureENG";
import { Box, useColorModeValue } from "@chakra-ui/react";

const ReportsPageEng = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return <>
        <Head>
            <meta lang="en" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 reports on purchases and money raised" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Reports</title>
        </Head>

        <Box>
            <Header pageTitle="Reports" />
            <WarStatsENG />
        </Box>
        <Box className={styles.featuresContainer}>
            <DonationsFeature titleENG='Latest Donations' totalENG='Total:' />
            <PurchasedFeatureENG titleENG='Purchases' />
        </Box>

        <DandD />
    </>
}

export default ReportsPageEng;
