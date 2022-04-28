import React  from 'react';
import styles from "/styles/FinSupport.module.css";
import { Center, Box, Flex, Image, Text } from '@chakra-ui/react';
import Head from "next/head";
import Header from "/components/Header";
import PopoverItem from "/components/Popover";
import PopoverItemCrypto from "/components/PopoverItemCrypto";
import { PayPalEUR, PayPalGBP, PayPalUSD } from "../../components/PayPalButtons";
import { UsdRequisitesUkr } from "/components/requisites/RequisitesUKR.js";
import { EurRequisitesUkr, GbpRequisitesUkr, UahRequisitesUkr } from "/components/requisites/RequisitesUKR";

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
                            gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
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
                            gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
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
                            gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
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

            <Center className={styles.finSupportMain}>
                <Flex className={styles.payPalContainer} w='32rem'>
                    <Box className={styles.finDivider} />

                    {/*   Bitcoin   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItemCrypto
                            trigger={Bitcoin}
                            title='Bitcoin опції:'
                            wallet='bc1qd7hqxc5jvr37rx06h3m25tt3vmq6zg9r53yf0d'
                            gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'
                        />
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   Etherium   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItemCrypto
                            trigger={Ethereum}
                            title='Ethereum опції:'
                            wallet='0xAcA9205E9105Fc58EC160b709261DFDf42046986'
                            gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'

                        />
                    </Flex>
                </Flex>
            </Center>
        </main>
    </>
};

export default FinSupportPageUkr;
