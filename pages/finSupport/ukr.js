import React, { Fragment, useState } from 'react';
import styles from "/styles/FinSupport.module.css";
import { Center, Box, Flex, Text, Image } from '@chakra-ui/react';
import Head from "next/head";
import Header from "../../components/Header";
import PopoverItem from "../../components/Popover";
import { PayPalEUR, PayPalGBP, PayPalUSD } from "../../components/PayPalButtons";
import { UsdRequisitesUkr } from "../../components/requisites/RequisitesUKR.js";
import {EurRequisitesUkr, GbpRequisitesUkr, UahRequisitesUkr} from "../../components/requisites/RequisitesUKR";

const FinSupportPageUkr = () => {
    const USD = <Image src='/usd-round.png' objectFit='fill' alt='USD' />;
    const ppUSD = <PayPalUSD />;
    const usdReq = <UsdRequisitesUkr />

    const GBP = <Image src='/pound-round.png' objectFit='fill' alt='GBP' />;
    const ppGBP = <PayPalGBP />
    const gbpReq = <GbpRequisitesUkr />

    const EUR = <Image src='/euro-round.png' objectFit='fill' alt='EUR' />;
    const ppEUR = <PayPalEUR />
    const eurReq = <EurRequisitesUkr />

    const UAH = <Image src='/hryvna-round.png' objectFit='fill' alt='UAH' />;
    const uahReq = <UahRequisitesUkr />

    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Фінансові реквізити Батальйону 207" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Реквізити</title>
        </Head>

        <main className='container'>
            <Header pageTitle="Фінансова підтримка" />

            <Center className={styles.finSupportMain}>
                <Flex className={styles.payPalContainer}>

                    {/*   USD   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={USD}
                            title='USD опції:'
                            payPal={ppUSD}
                            requisites={usdReq}
                        />
                    </Flex>

                    <Box className={styles.finDivider} />


                    {/*   GBP   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={GBP}
                            title='GBP опції:'
                            payPal={ppGBP}
                            requisites={gbpReq}
                        />
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   EUR   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={EUR}
                            title='EUR опції:'
                            payPal={ppEUR}
                            requisites={eurReq}
                        />
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   UAH   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={UAH}
                            title='Гривневі опції:'
                            requisites={uahReq}
                        />
                    </Flex>
                </Flex>
            </Center>
        </main>
    </>
};

export default FinSupportPageUkr;
