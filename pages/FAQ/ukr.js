import React from 'react';
import styles from '/styles/FAQ.module.css';
import Header from "/components/Header";
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
import DandD from "../../components/D&D";
import Head from "next/head";

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
                <Accordion defaultIndex={[0]} allowMultiple width='100%' m='0 25% 5% 25%'>

                    {/*   QUESTION / ANSWER 1   */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>
                                <Box flex='1' textAlign='left'>
                                    <Text color={textColor}
                                          className={styles.accordionButton}
                                          fontSize={{ lg: '22px', md: '18px', sm: '16px', base: '15px' }}
                                    >
                                        "Що таке ТРО та чим воно відрізняється від "звичайної" армії?"
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '14px', base: '13px' }}>
                                Відповідь 1
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
                                          fontSize={{ lg: '22px', md: '18px', sm: '16px', base: '15px' }}
                                    >
                                        Питання 2
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '14px', base: '13px' }}>
                                Відповідь 2
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
                                          fontSize={{ lg: '22px', md: '18px', sm: '16px', base: '15px' }}
                                    >
                                        Питання 3
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '14px', base: '13px' }}>
                                Відповідь 3
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/*   QUESTION / ANSWER 4   */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>
                                <Box flex='1' textAlign='left'>
                                    <Text color={textColor}
                                          className={styles.accordionButton}
                                          fontSize={{ lg: '22px', md: '18px', sm: '16px', base: '15px' }}
                                    >
                                        Question 4
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '14px', base: '13px' }}>
                                Answer 4
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/*   QUESTION / ANSWER 5   */}
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>
                                <Box flex='1' textAlign='left'>
                                    <Text color={textColor}
                                          className={styles.accordionButton}
                                          fontSize={{ lg: '22px', md: '18px', sm: '16px', base: '15px' }}
                                    >
                                        Question 5
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '14px', base: '13px' }}>
                                Answer 5
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Center>

            <DandD />
        </div>
    </>
}

export default FAQukr;
