import React, { Fragment, useState } from 'react';
import styles from "/styles/FinSupport.module.css";
import { Center, Box, Flex, Text, Image } from '@chakra-ui/react';
import Head from "next/head";
import Header from "../../components/Header";
import PopoverItem from "../../components/Popover";
import { PayPalEUR, PayPalGBP, PayPalUSD } from "../../components/PayPalButtons";

const FinSupportPageUkr = ( trigger, title, details, gratitude ) => {
    const USD = <Image src='/usd-round.png' objectFit='fill' alt='USD' />;
    const ppUSD = <PayPalUSD />

    const GBP = <Image src='/pound-round.png' objectFit='fill' alt='GBP' />;
    const ppGBP = <PayPalGBP />

    const EUR = <Image src='/euro-round.png' objectFit='fill' alt='EUR' />;
    const ppEUR = <PayPalEUR />

    const UAH = <Image src='/hryvna-round.png' objectFit='fill' alt='UAH' />;


    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Фінансові реквізити Батальйону 207" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Реквізити</title>
        </Head>

        <main>
            <Header pageTitle="Фінансова підтримка" />

            <Center className={styles.finSupportMain}>
                <Flex className={styles.payPalContainer}>

                    {/*   USD   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={USD}
                            title='USD опції:'
                            payPal={ppUSD}
                        />
                        {/*<PopoverItem*/}
                        {/*    trigger={USD}*/}
                        {/*    title='Реквізити USD рахунку'*/}
                        {/*    account='Номер рахунку:'*/}
                        {/*    accountNumber={26207301959227}*/}
                        {/*    iban='IBAN:'*/}
                        {/*    ibanNumber='UA093220010000026207301959227'*/}
                        {/*    recipient='Отримувач:'*/}
                        {/*    recipientDetails='МАЛИШЕВСЬКИЙ СВЯТОСЛАВ'*/}
                        {/*    bank='Банк (Коресп.):'*/}
                        {/*    bankDetails='JSC UNIVERSAL BANK, КИЇВ, УКРАЇНА'*/}
                        {/*    swift='SWIFT код:'*/}
                        {/*    swiftDetails='UNJSUAUKXXX'*/}
                        {/*    purpose='Повідомлення:'*/}
                        {/*    purposeDetails='"Підтримка 207 батальйону ТрО м.Києва"'*/}
                        {/*    gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'*/}
                        {/*/>*/}
                    </Flex>

                    <Box className={styles.finDivider} />


                    {/*   GBP   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={GBP}
                            title='GBP опції:'
                            payPal={ppGBP}
                        />

                        {/*<PopoverItem trigger='Переказ за реквізитами'*/}
                        {/*             title='Реквізити GBP рахунку'*/}
                        {/*             details='Реквізити рахунку...'*/}
                        {/*             gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'*/}
                        {/*/>*/}
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   EUR   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={EUR}
                            title='EUR опції:'
                            payPal={ppEUR}
                        />
                        {/*    trigger='Переказ за реквізитами'*/}
                        {/*    title='Реквізити EUR рахунку'*/}
                        {/*    account='Номер рахунку:'*/}
                        {/*    accountNumber={4731219613244064}*/}
                        {/*    iban='IBAN:'*/}
                        {/*    ibanNumber='UA243052990000026205738201214'*/}
                        {/*    recipient='Отримувач:'*/}
                        {/*    recipientDetails='МАЛИШЕВСЬКИЙ СВЯТОСЛАВ (3244919677)'*/}
                        {/*    bank='Банк (Коресп.):'*/}
                        {/*    bankDetails='J.P.MORGAN AG, Correspondent account: 623-160-5145'*/}
                        {/*    swift='SWIFT код:'*/}
                        {/*    swiftDetails='CHASDEFX'*/}
                        {/*    purpose='Повідомлення:'*/}
                        {/*    purposeDetails='"Підтримка 207 батальйону ТрО м.Києва"'*/}
                        {/*    gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'*/}
                        {/*/>*/}
                    </Flex>

                    <Box className={styles.finDivider} />

                    {/*   UAH   */}
                    <Flex className={styles.payPalItem}>
                        <PopoverItem
                            trigger={UAH}
                            title='Гривневі опції:'
                        />


                        {/*    trigger='Переказ за реквізитами'*/}
                        {/*    title='Гривневий рахунок'*/}
                        {/*    account='Номер рахунку:'*/}
                        {/*    accountNumber={5363542308417279}*/}
                        {/*    iban='IBAN:'*/}
                        {/*    ibanNumber='UA903052990000026206684803044'*/}
                        {/*    recepient='Отримувач:'*/}
                        {/*    recipientDetails='МАЛИШЕВСЬКИЙ СВЯТОСЛАВ (3244919677)'*/}
                        {/*    bank='Банк:'*/}
                        {/*    bankDetails='ПриватБанк (305299)'*/}
                        {/*    purpose='Повідомлення:'*/}
                        {/*    purposeDetails='"Підтримка 207 батальйону ТрО м.Києва"'*/}
                        {/*    gratitude='Щиро дякуємо за Вашу підтримку! Слава Україні!'*/}
                        {/*/>*/}
                    </Flex>
                </Flex>
            </Center>
        </main>
    </>
};

export default FinSupportPageUkr;
