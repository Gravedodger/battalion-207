import React from 'react';
import styles from "/styles/FinSupport.module.css";
import { Center, Image, GridItem, Grid, Box, Text } from '@chakra-ui/react';
import Head from "next/head";
import Header from "/components/Header/Header";
import PopoverItem from "/components/Popover/Popover";
import PopoverItemCrypto from "/components/Popover/PopoverItemCrypto";
import { PayPalEUR, PayPalGBP, PayPalUSD } from "/components/PayPalButtons";
import { EurRequisitesEng, GbpRequisitesEng,  UahRequisitesEng, UsdRequisitesEng } from '/components/Requisites/index';

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

        <Header pageTitle="Financial support" />

        <Center>
            <Box>
                <Text>

                </Text>
            </Box>

            <Grid ml={{ md: '1rem', sm: '2.2rem', base: '3rem' }}
                templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
                gap={{ base: 2, lg: 10, md: 8, sm: 2 }}>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   USD   */}
                    <PopoverItem
                        title='USD options:'
                        trigger={USD}
                        PayPalLabel='Use PayPal:'
                        payPal={ppUSD}
                        PayoneerLabel='Use Payoneer:'
                        directDepositLabel='Direct Deposit:'
                        requisites={usdReq}
                        gratitude='Thank you very much for your support!'
                        ukraine='Glory to Ukraine!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   GBP   */}
                    <PopoverItem
                        title='GBP options:'
                        trigger={GBP}
                        PayPalLabel='Use PayPal:'
                        payPal={ppGBP}
                        PayoneerLabel='Use Payoneer:'
                        directDepositLabel='Direct Deposit:'
                        requisites={gbpReq}
                        gratitude='Thank you very much for your support!'
                        ukraine='Glory to Ukraine!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   EUR   */}
                    <PopoverItem
                        title='EUR options:'
                        trigger={EUR}
                        PayPalLabel='Use PayPal:'
                        payPal={ppEUR}
                        PayoneerLabel='Use Payoneer:'
                        directDepositLabel='Direct Deposit:'
                        requisites={eurReq}
                        gratitude='Thank you very much for your support!'
                        ukraine='Glory to Ukraine!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   UAH   */}
                    <PopoverItem
                        title='UAH options:'
                        trigger={UAH}
                        PayoneerLabel='Use Payoneer:'
                        directDepositLabel='Direct Deposit:'
                        requisites={uahReq}
                        gratitude='Thank you very much for your support!'
                        ukraine='Glory to Ukraine!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   Bitcoin   */}
                    <PopoverItemCrypto
                        title='Bitcoin wallet:'
                        trigger={Bitcoin}
                        wallet='bc1qd7hqxc5jvr37rx06h3m25tt3vmq6zg9r53yf0d'
                        gratitude='Thank you very much for your support!'
                        ukraine='Glory to Ukraine!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   Etherium   */}
                    <PopoverItemCrypto
                        title='Ethereum wallet:'
                        trigger={Ethereum}
                        wallet='0xAcA9205E9105Fc58EC160b709261DFDf42046986'
                        gratitude='Thank you very much for your support!'
                        ukraine='Glory to Ukraine!'
                    />
                </GridItem>
            </Grid>
        </Center>
    </>
}

export default FinSupportPageEng;
