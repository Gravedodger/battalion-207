import React from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import { Box, useColorModeValue } from "@chakra-ui/react";
import WarStatsUKR from "../../components/WarStats/WarStatsUKR";
import DonationsFeature from "../../components/DonationsFeature";

const ReportsPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Фінансова та інвентарна звітність Батальйону-207" />
            <link rel="icon" href="/favicon.ico" />
            <title>Батальйон-207 || Звітність</title>
        </Head>

        <Box>
            <Header pageTitle="Звітність" />
            <WarStatsUKR />
        </Box>
        <Box>
            <DonationsFeature titleUKR='Останні надходження' totalUKR='Загалом:' />
        </Box>
    </>
}

export default ReportsPageUkr;
