import React  from 'react';
import styles from "/styles/FinSupport.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import PopoverItem from "/components/Popover/Popover";
import PopoverItemCrypto from "/components/Popover/PopoverItemCrypto";
import { Center, Image, GridItem, Grid, Box, Text } from '@chakra-ui/react';
import { PayPalEUR, PayPalGBP, PayPalUSD } from "/components/PayPalButtons";
import { EurRequisitesUkr, GbpRequisitesUkr, UahRequisitesUkr, UsdRequisitesUkr } from "/components/Requisites/RequisitesUKR";

const FinSupportPageUkr = () => {
    const USD = <Image src='/usd-round.png' className={styles.currencyIcn} objectFit='fill' alt='USD' />;
    const ppUSD = <PayPalUSD />;
    const usdReq = <UsdRequisitesUkr />

    const GBP = <Image src='/pound-round.png' className={styles.currencyIcn} objectFit='fill' alt='GBP' />;
    const ppGBP = <PayPalGBP />
    const gbpReq = <GbpRequisitesUkr />

    const EUR = <Image src='/euro-round.png' className={styles.currencyIcn} objectFit='fill' alt='EUR' />;
    const ppEUR = <PayPalEUR />
    const eurReq = <EurRequisitesUkr />

    const UAH = <Image src='/hryvna-round.png' className={styles.currencyIcn} objectFit='fill' alt='UAH' />;
    const uahReq = <UahRequisitesUkr />

    const Bitcoin = <Image src='/bitcoin-round.png' className={styles.currencyIcn} objectFit='fill' alt='Bitcoin' />

    const Ethereum = <Image src='/ethereum-round.png' className={styles.currencyIcn} objectFIt='fill' alt='Bitcoin' />

    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Фінансові реквізити Батальйону 207" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Реквізити</title>
        </Head>

        <Header pageTitle="Фінансова підтримка" />

        <Center className={styles.finSupportMain}>
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
                        title='USD опції:'
                        trigger={USD}
                        PayPalLabel='Використати PayPal:'
                        payPal={ppUSD}
                        PayoneerLabel='Використати Payoneer:'
                        directDepositLabel='Пряме зарахування:'
                        requisites={usdReq}
                        gratitude='Щиро дякуємо за Вашу підтримку!'
                        ukraine='Слава Україні!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   GBP   */}
                    <PopoverItem
                        title='GBP опції:'
                        trigger={GBP}
                        PayPalLabel='Використати PayPal:'
                        payPal={ppGBP}
                        PayoneerLabel='Використати Payoneer:'
                        directDepositLabel='Пряме зарахування:'
                        requisites={gbpReq}
                        gratitude='Щиро дякуємо за Вашу підтримку!'
                        ukraine='Слава Україні!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   EUR   */}
                    <PopoverItem
                        title='EUR опції:'
                        trigger={EUR}
                        PayPalLabel='Використати PayPal:'
                        payPal={ppEUR}
                        PayoneerLabel='Використати Payoneer:'
                        directDepositLabel='Пряме зарахування:'
                        requisites={eurReq}
                        gratitude='Щиро дякуємо за Вашу підтримку!'
                        ukraine='Слава Україні!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   UAH   */}
                    <PopoverItem
                        title='Гривневі опції:'
                        trigger={UAH}
                        PayoneerLabel='Використати Payoneer:'
                        directDepositLabel='Пряме зарахування:'
                        requisites={uahReq}
                        gratitude='Щиро дякуємо за Вашу підтримку!'
                        ukraine='Слава Україні!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   Bitcoin   */}
                    <PopoverItemCrypto
                        title='Гаманець Bitcoin:'
                        trigger={Bitcoin}
                        wallet='bc1qd7hqxc5jvr37rx06h3m25tt3vmq6zg9r53yf0d'
                        gratitude='Щиро дякуємо за Вашу підтримку!'
                        ukraine='Слава Україні!'
                    />
                </GridItem>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   Etherium   */}
                    <PopoverItemCrypto
                        title='Гаманець Ethereum:'
                        trigger={Ethereum}
                        wallet='0xAcA9205E9105Fc58EC160b709261DFDf42046986'
                        gratitude='Щиро дякуємо за Вашу підтримку!'
                        ukraine='Слава Україні!'
                    />
                </GridItem>
            </Grid>
        </Center>
    </>
}

export default FinSupportPageUkr;
