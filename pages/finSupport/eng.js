import React from 'react';
import styles from "/styles/FinSupport.module.css";
import { Center, Box, Flex, Image } from '@chakra-ui/react';
import Head from "next/head";
import Header from "/components/Header";
import PopoverItem from "/components/Popover";
import { PayPalEUR, PayPalGBP, PayPalUSD } from "../../components/PayPalButtons";
import { EurRequisitesEng, GbpRequisitesEng,  UahRequisitesEng, UsdRequisitesEng } from '/components/requisites/index';

const FinSupportPageEng = () => {
    const USD = <Image src='/usd-round.png' className={styles.currencyIcn} objectFit='fill' alt='USD' />;
    const ppUSD = <PayPalUSD />;
    const usdReq = <UsdRequisitesEng />

    const GBP = <Image src='/pound-round.png' className={styles.currencyIcn} objectFit='fill' alt='GBP' />;
    const ppGBP = <PayPalGBP />
    const gbpReq = <GbpRequisitesEng />

    const EUR = <Image src='/euro-round.png' className={styles.currencyIcn} objectFit='fill' alt='EUR' />;
    const ppEUR = <PayPalEUR />
    const eurReq = <EurRequisitesEng />

    const UAH = <Image src='/hryvna-round.png' className={styles.currencyIcn} objectFit='fill' alt='UAH' />;
    const uahReq = <UahRequisitesEng />

    const Bitcoin = <Image src='/bitcoin-round.png' className={styles.currencyIcn} objectFit='fill' alt='Bitcoin' />

    const Ethereum = <Image src='/ethereum-round.png' className={styles.currencyIcn} objectFIt='fill' alt='Bitcoin' />

    return <>
    <Head>
        <meta lang="en" />
        <meta name="description" content="Battalion-207 bank account requisites" />
        <link rel="icon" href="/favicon.ico" />
        <title>Battalion-207 || Requisites</title>
    </Head>

    <main className='container'>
        <Header pageTitle="Financial support" />

        <Center className={styles.finSupportMain}>
            <Flex className={styles.payPalContainer}>

                {/*   USD   */}
                <Flex className={styles.payPalItem}>
                    <PopoverItem trigger={USD} title='USD опції:' payPal={ppUSD} requisites={usdReq} />
                </Flex>

                <Box className={styles.finDivider} />
            </Flex>

            <Box className={styles.finDivider} />

            {/*   GBP   */}
            <Flex className={styles.payPalItem}>
                <PopoverItem trigger={GBP} title='GBP опції:' payPal={ppGBP} requisites={gbpReq} />
            </Flex>

            <Box className={styles.finDivider} />

            {/*   EUR   */}
            <Flex className={styles.payPalItem}>
                <PopoverItem trigger={EUR} title='EUR опції:' payPal={ppEUR} requisites={eurReq} />
            </Flex>

            <Box className={styles.finDivider} />

            {/*   UAH   */}
            <Flex className={styles.payPalItem}>
                <PopoverItem trigger={UAH} title='Гривневі опції:' requisites={uahReq} />
            </Flex>
        </Center>

        <Center className={styles.finSupportMain}>
            <Flex className={styles.payPalContainer} w='32rem'>
                <Box className={styles.finDivider} />

                {/*   Bitcoin   */}
                <Flex className={styles.payPalItem}>
                    <PopoverItem trigger={Bitcoin} title='Bitcoin опції:' />
                </Flex>

                <Box className={styles.finDivider} />

                {/*   Etherium   */}
                <Flex className={styles.payPalItem}>
                    <PopoverItem trigger={Ethereum} title='Ethereum опції:' />
                </Flex>
            </Flex>
        </Center>
    </main>
    </>
};

export default FinSupportPageEng;
