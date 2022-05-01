import React  from 'react';
import styles from "/styles/FinSupport.module.css";
import Head from "next/head";
import Header from "/components/Header";
import PopoverItem from "/components/Popover";
import PopoverItemCrypto from "/components/PopoverItemCrypto";
import { Center, Box, Flex, Image, Text } from '@chakra-ui/react';
import { PayPalEUR, PayPalGBP, PayPalUSD } from "/components/PayPalButtons";
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

        <main className='main'>
            <Header pageTitle="Фінансова підтримка" />

            <Center className={styles.finSupportMain}>
                <Flex className={styles.payPalContainer}>

                    {/*   USD   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem title='USD опції:'
                                     trigger={USD}
                                     payPal={ppUSD}
                                     requisites={usdReq}
                                     gratitude='Щиро дякуємо за Вашу підтримку!'
                                     ukraine='Слава Україні!' />
                    </Flex>

                    <Box className={styles.finDivider} />


                    {/*   GBP   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem title='GBP опції:'
                                     trigger={GBP}
                                     payPal={ppGBP}
                                     requisites={gbpReq}
                                     gratitude='Щиро дякуємо за Вашу підтримку!'
                                     gratitude='Щиро дякуємо за Вашу підтримку!'
                                     ukraine='Слава Україні!' />
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   EUR   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem title='EUR опції:'
                                     trigger={EUR}
                                     payPal={ppEUR}
                                     requisites={eurReq}
                                     gratitude='Щиро дякуємо за Вашу підтримку!'
                                     ukraine='Слава Україні!' />
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   UAH   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem title='Гривневі опції:'
                                     trigger={UAH}
                                     requisites={uahReq}
                                     gratitude='Щиро дякуємо за Вашу підтримку!'
                                     ukraine='Слава Україні!' />
                    </Flex>
                </Flex>
            </Center>

            <Center className={styles.finSupportMain}>
                <Flex className={styles.payPalContainer} w='32rem'>
                    <Box className={styles.finDivider} />

                    {/*   Bitcoin   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItemCrypto title='Bitcoin опції:'
                                           trigger={Bitcoin}
                                           wallet='bc1qd7hqxc5jvr37rx06h3m25tt3vmq6zg9r53yf0d'
                                           gratitude='Щиро дякуємо за Вашу підтримку!'
                                           ukraine='Слава Україні!' />
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   Etherium   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItemCrypto title='Ethereum опції:'
                                           trigger={Ethereum}
                                           wallet='0xAcA9205E9105Fc58EC160b709261DFDf42046986'
                                           gratitude='Щиро дякуємо за Вашу підтримку!'
                                           ukraine='Слава Україні!'
                                           preventOverflow={true} />
                    </Flex>
                </Flex>
            </Center>
        </main>
    </>
}

export default FinSupportPageUkr;
