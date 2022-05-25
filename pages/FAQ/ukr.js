import React from 'react';
import styles from '/styles/FAQ.module.css';
import Head from "next/head";
import Header from "/components/Header";
import DandD from "/components/D&D";
import {
    Center,
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
} from '@chakra-ui/react';

const FAQukr = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="uk" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 information about the battalion" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || FAQ</title>
        </Head>

        <div className='main'>
            <Header pageTitle='Відповіді на деякі запитання' />
            <Center>
                <Accordion defaultIndex={[0]} allowMultiple width='100%'
                           m={{ lg: '0 25% 5% 25%', sm: '0 10% 5% 10%', base: '0 5% 5% 5%'}}>

                    {/*   QUESTION / ANSWER 1   */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>
                                <Box flex='1' textAlign='left'>
                                    <Text color={textColor}
                                          className={styles.accordionButton}
                                          fontSize={{ lg: '22px', md: '18px', sm: '12px', base: '11px' }}
                                          lineHeight={1.6}
                                    >
                                        "Що таке ТРО та чим воно відрізняється від "звичайної" армії?"
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                Сили територіальної оборони (ТРО) - окремий рід військ у складі Збройних сил України (ЗСУ).
                                Командування підрозділами ТРО здійснює безпосередньо Головнокомандувач ЗСУ, у межах завдань
                                передбачених Законом України "Про основи національного спротиву".
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                Реагуючи на жалюгідну спробу окупації України схибленим східним сусідом нашої країни,
                                були внесені необхідні пправки до закону, що дозволили силам ТРО виконувати бойові
                                завдання за межами їх області.
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                Особовий склад сил ТРО комплектується насамперед з громадян України, що вже мають
                                бойовий досвід, та з добровольців, які найкраще проявили себе у перший місяц загальнонаціонального
                                спротиву російській навалі.
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                На сьогодні, сили ТРО - це страшний сон окупата. Постійно тренуючись, здобуваючи
                                унікальний бойовий досвід та маючи можливість приймати відповідальі рашення на найнижчому
                                рівні робить кожного бійця сил ТРО унікальним професіоналом із захисту України.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/*   QUESTION / ANSWER 2   */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>
                                <Box flex='1' textAlign='left'>
                                    <Text color={textColor}
                                          className={styles.accordionButton}
                                          fontSize={{ lg: '22px', md: '18px', sm: '12px', base: '11px' }}
                                          lineHeight={1.6}
                                    >
                                        "Чому вам стільки всього потрібно, невже ЗСУ недостатньо вас забезпечує?"
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                Створення сил ТРО розпочалося незадовго до повномасштабної війни, що не дозволило ЗСУ
                                зробити необхідні бюджетні асигнування та закупівлі навіть для мінімальної комплектації
                                бійців ТРО, не включаючи додаткових бійців що були залучені поза планом. ЗСУ зосереджено на
                                постачанні регулярних підрозділів. Окрім штатної зброї та боєприпасів до неї, сили ТРО
                                знаходяться максимально на самостійному забезпеченні. Саме тому допомога місцевих жителів
                                та волонтерів є запорукою ефективності кожного батальйону ТРО!
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/*   QUESTION / ANSWER 3   */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>
                                <Box flex='1' textAlign='left'>
                                    <Text color={textColor}
                                          className={styles.accordionButton}
                                          fontSize={{ lg: '22px', md: '18px', sm: '12px', base: '11px' }}
                                          lineHeight={1.6}
                                    >
                                        "Звідки я знаю, що моя фінансова або будь-яка інша допомога батальйону буде
                                        використана належним чином?"
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                Командування батальйону та наші волонтери докладають всі зусилля для надання якомога
                                прозорішої звітності відносно витрат та закупівель. Нажаль, ведення бойових дій та
                                необхідність придбання деяких використаних речей деколи унеможливлює надання повноцінної
                                звітності.
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                Кожен член нашої команди максимально зацікавлений у нашій спільній перемозі і довів
                                свою чесність своїми справами. Якщо у будь-який час у Вас виникнуть підозри щодо
                                належного використання коштів чи речей наданих батальйону - дуже просимо Вас одразу
                                повідомити про це на електронну пошту батальйону або будь-яким зручним для Вас способом!
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/*   QUESTION / ANSWER 4   */}
                    {/*<AccordionItem>*/}
                    {/*    <h2>*/}
                    {/*        <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>*/}
                    {/*            <Box flex='1' textAlign='left'>*/}
                    {/*                <Text color={textColor}*/}
                    {/*                      className={styles.accordionButton}*/}
                    {/*fontSize={{ lg: '22px', md: '18px', sm: '12px', base: '11px' }}*/}
                    {/*                      lineHeight={1.6}*/}
                    {/*                >*/}
                    {/*                    Питання 4*/}
                    {/*                </Text>*/}
                    {/*            </Box>*/}
                    {/*            <AccordionIcon />*/}
                    {/*        </AccordionButton>*/}
                    {/*    </h2>*/}
                    {/*    <AccordionPanel pb={4}>*/}
                    {/*<Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>*/}
                    {/*            Відповідь 4*/}
                    {/*        </Text>*/}
                    {/*    </AccordionPanel>*/}
                    {/*</AccordionItem>*/}

                    {/*   QUESTION / ANSWER 5   */}
                    {/*<AccordionItem>*/}
                    {/*    <h2>*/}
                    {/*        <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>*/}
                    {/*            <Box flex='1' textAlign='left'>*/}
                    {/*                <Text color={textColor}*/}
                    {/*                      className={styles.accordionButton}*/}
                    {/*fontSize={{ lg: '22px', md: '18px', sm: '12px', base: '11px' }}*/}
                    {/*                      lineHeight={1.6}*/}
                    {/*                >*/}
                    {/*                    Питання 5*/}
                    {/*                </Text>*/}
                    {/*            </Box>*/}
                    {/*            <AccordionIcon />*/}
                    {/*        </AccordionButton>*/}
                    {/*    </h2>*/}
                    {/*    <AccordionPanel pb={4}>*/}
                    {/*<Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>*/}
                    {/*            Відповідь 5*/}
                    {/*        </Text>*/}
                    {/*    </AccordionPanel>*/}
                    {/*</AccordionItem>*/}
                </Accordion>
            </Center>

            <DandD />
        </div>
    </>
}

export default FAQukr;
