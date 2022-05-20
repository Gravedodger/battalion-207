import React  from 'react';
import styles from "/styles/FinSupport.module.css";
import Head from "next/head";
import Header from "/components/Header/Header";
import PopoverFinSupportItem from "/components/PopoverFinSupport/PopoverFinSupport";
import PopoverItemCrypto from "/components/PopoverFinSupport/PopoverItemCrypto";
import DandD from "/components/D&D";
import { PayPalEUR, PayPalGBP, PayPalUSD } from "/components/PayPalButtons";
import { EurRequisitesUkr, GbpRequisitesUkr, UahRequisitesUkr, UsdRequisitesUkr } from "/components/Requisites/RequisitesUKR";
import { Center, Image, GridItem, Grid, Box, Text, Link, useColorModeValue } from '@chakra-ui/react';

const FinSupportPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#fffffff0');
    const linkColor = useColorModeValue('#c59d5f', '#c59d5f');

    const USD = <Image src='/currency/usd-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='USD' />;
    const ppUSD = <PayPalUSD />;
    const usdReq = <UsdRequisitesUkr />

    const GBP = <Image src='/currency/pound-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='GBP' />;
    const ppGBP = <PayPalGBP />
    const gbpReq = <GbpRequisitesUkr />

    const EUR = <Image src='/currency/euro-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='EUR' />;
    const ppEUR = <PayPalEUR />
    const eurReq = <EurRequisitesUkr />

    const UAH = <Image src='/currency/hryvna-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='UAH' />;
    const uahReq = <UahRequisitesUkr />

    const Bitcoin = <Image src='/currency/bitcoin-round.WebP' className={styles.currencyIcn} lazy='true' objectFit='fill' alt='Bitcoin' />

    const Ethereum = <Image src='/currency/ethereum-round.WebP' className={styles.currencyIcn} lazy='true' objectFIt='fill' alt='Bitcoin' />

    return <>
        <Head>
            <meta lang="uk" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Фінансові реквізити Батальйону 207" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Реквізити</title>
        </Head>

        <Header pageTitle="Фінансова підтримка" />

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
                    Виконання оперативних задач батальйону вимагає належного фінансового забезпечення для закупівлі
                    необхідного екіпірування, будівельних та витратних матеріалів, а також для своєчасного поповнення
                    таких стратегічних запасів, як питна вода, їжа, паливо тощо.
                </Text>
                <Text mb='1rem' color={textColor}>
                    Розуміючи це, та зважаючи на надважливі задачі покладені на батальйон, наші бійці без зволікань
                    витрачали власні кошти, заощадження та, навіть, жертвували власні автомобілі та іншу дороговартісну
                    техніку задля максимальної бойової спроможності своїх підрозділів та батальйону загалом. Саме їх
                    самопожертва, разом із феноменальною підтримкою від волонтерів та місцевого населення, дозволило
                    нам досягти надзвичайного успіху, як в обороні міста Києва, так і під час виконання подальших бойових
                    задач.
                </Text>
                <Text mb='1rem' color={textColor}>
                    Однак, враховуючи протяжність нашого спротиву російсько-окупаційній навалі, збільшення чисельності
                    батальйону, понесені матеріально-технічні втрати, та стабільно високий рівень складності поставлених
                    задач, ми вимушені просити фінансової підтримки від небайдужих людей із цивілізованих країн.
                </Text>
                <Text mb='1rem' color={textColor}>
                    Мабуть вже ні в кого не виникає сумнівів, що в планах путіна Україна - це лише початок на шляху його
                    орди до поневолення та знищення всіх ненависних для більшості росіян "Європейських цінностей":
                    свободи, особистої честі та гідності, а також будь-якої самоідентичності поза рамок неосвічених
                    путінських фантазій. Але саме на цьому шляху стоять Українські воїни із усім народом України.
                </Text>
                <Text mb='1rem' fontWeight={700} color={textColor}>
                    Якщо маєте можливість і бажання допомогти нам у нашій непростій але надважливій боротьбі за наш
                    спальний мир та свободу, оберіть зручну для Вас валюту щоб дізнатися доступні
                    опції переказу Вашої допомоги. Ми також будемо щиро раді будь-якій іншій допомозі із закупівлею
                    речей із <Link color={linkColor}><a href='/items/ukr'>списку нагальної необхідності</a></Link>.
                </Text>
                <Text fontWeight={700} color={textColor}>
                    Наш керівник тилового забезпечення та волонтери на зв'язку у будь-який зручний для Вас час!
                </Text>
            </Box>

            <Grid mt={{ lg: '5rem', md: '4rem', sm: '3rem', base: '2rem' }}
                ml={{ md: '1rem', sm: '2.2rem', base: '3rem' }}
                  templateColumns={{ lg: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
                  gap={{ base: 4, lg: 10, md: 8, sm: 4 }}>

                <GridItem w={{ lg: '90%', md: '80%', sm: '60%', base: '50%' }}>
                    {/*   USD   */}
                    <PopoverFinSupportItem
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
                    <PopoverFinSupportItem
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
                    <PopoverFinSupportItem
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
                    <PopoverFinSupportItem
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

            <DandD />
        </Center>
    </>
}

export default FinSupportPageUkr;
