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
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Фінансова та інвентарна звітність Батальйону-207" />
            <link rel="icon" href="./../../public/favicon.ico" />
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
