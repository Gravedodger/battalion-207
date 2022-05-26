import React from 'react';
import styles from "/styles/FinSupport.module.css";
import Head from "next/head";
import DandD from "/components/D&D";
import Header from "/components/Header/Header";
import PopoverItemCrypto from "/components/PopoverFinSupport/PopoverItemCrypto";
import PopoverFinSupportItem from "/components/PopoverFinSupport/PopoverFinSupport";
import { PayPalEUR, PayPalGBP, PayPalUSD } from "/components/PayPalButtons";
import { Center, Image, GridItem, Grid, Box, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { EurRequisitesEng, GbpRequisitesEng,  UahRequisitesEng, UsdRequisitesEng } from '/components/Requisites/index';

const FinSupportPageEng = () => {
    const textColor = useColorModeValue('#222222', '#fffffff0');
    const linkColor = useColorModeValue('#c59d5f', '#c59d5f');

    const USD = <Image src='/currency/usd-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='USD' />;
    const ppUSD = <PayPalUSD />;
    const usdReq = <UsdRequisitesEng />

    const GBP = <Image src='/currency/pound-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='GBP' />;
    const ppGBP = <PayPalGBP />
    const gbpReq = <GbpRequisitesEng />

    const EUR = <Image src='/currency/euro-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='EUR' />;
    const ppEUR = <PayPalEUR />
    const eurReq = <EurRequisitesEng />

    const UAH = <Image src='/currency/hryvna-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='UAH' />;
    const uahReq = <UahRequisitesEng />

    const Bitcoin = <Image src='/currency/bitcoin-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='Bitcoin' />

    const Ethereum = <Image src='/currency/ethereum-round.WebP' className={styles.currencyIcn} lazy='true' objectFIt='fill' alt='Bitcoin' />

    return <>
        <Head>
            <meta lang="en" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 bank account requisites" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Requisites</title>
        </Head>

        <Header pageTitle="Financial support" />

        <Center className={styles.finSupportMain}
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
        >
            <Box w={{ lg: '70%', md: '70%', sm: '68%', base: '68%'}}
                 textAlign='justify'
                 fontSize={{ lg: '18px', md: '16px', sm: '14px', base: '11px' }}
                 fontWeight={500}
                 letterSpacing='1px'
            >
                <Text mb='1rem' color={textColor}>
                    Execution of the Battalion's operational assignments requires an adequate financial support to ensure
                    its ability to purchase the required equipment and construction materials, as well
                    as for the timely replenishment of such strategic stocks as drinking water, food, fuel, etc.
                </Text>
                <Text mb='1rem' color={textColor}>
                    Realizing there necessities, combined with the importance of the Battalion's assignments, our
                    serviceman without hesitation spent their own money and savings, some even volunteered their personal
                    cars and other expensive equipment in order to maximize the combat capability of their units and the
                    Battalion as a whole. Their sacrifice, along with the phenomenal support from volunteers and from the
                    locals, ensured our ability to achieve extraordinary success, both in the defense of Kyiv and in
                    carrying out further combat missions.
                </Text>
                <Text mb='1rem' color={textColor}>
                    However, given the length of our resistance to the russian brutal invasion, the increase in the
                    Battalion's numbers, material and technical losses, and a consistently high level of complexity of
                    our assignments, we now find ourselves having to ask for financial support from the civilized
                    part of the world's population.
                </Text>
                <Text mb='1rem' color={textColor}>
                    Putin's plans on sending his orkish hordes beyond Ukraine and his desire to undermine
                    "European values" sincerely despised by most russians: freedom, personal honor and dignity, along
                    with any personal, as well as national self-identification beyond the narrow borders drawn by
                    Putin's uneducated fantasies. Nevertheless, in their path stand Ukrainian soldiers alongside the
                    entire Ukrainian nation.
                </Text>
                <Text mb='1rem' fontWeight={700} color={textColor}>
                    If You have the financial ability and desire to support us in our difficult yet crucial struggle
                    for our common peace and freedom, please choose below the currency most convenient for You to discover
                    some of the options of transferring your donations to us. We also will be sincerely grateful for
                    any assistance acquiring any of the items from our <Link color={linkColor}><a href='/items/ukr'>
                    list of most urgent necessities</a></Link>.
                </Text>
            </Box>

            <Grid mt={{ lg: '5rem', md: '4rem', sm: '3rem', base: '2rem' }}
                  ml={{ md: '1rem', sm: '2.2rem', base: '3rem' }}
                  templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
                  gap={{ base: 4, lg: 10, md: 8, sm: 4 }}>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   USD   */}
                    <PopoverFinSupportItem
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
                    <PopoverFinSupportItem
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
                    <PopoverFinSupportItem
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
                    <PopoverFinSupportItem
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

            <DandD />
        </Center>
    </>
}

export default FinSupportPageEng;
