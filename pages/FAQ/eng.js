import React from 'react';
import styles from '/styles/FAQ.module.css';
import Head from "next/head";
import DandD from "/components/D&D";
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

const FAQeng = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="en" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 information about the battalion" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || FAQ</title>
        </Head>

        <main className='main'>
            <Header pageTitle='Frequently Asked Questions' />
            <Center>
                <Accordion defaultIndex={[0]} allowMultiple width='100%'
                           m={{ lg: '0 25% 5% 25%', sm: '0 10% 5% 10%', base: '0 5% 5% 5%'}}>

                    {/*QUESTION / ANSWER 1*/}
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} pt='20px' pb='20px'>
                                <Box flex='1' textAlign='left'>
                                    <Text w='90%'
                                          color={textColor}
                                          className={styles.accordionButton}
                                          fontSize={{ lg: '22px', md: '18px', sm: '12px', base: '11px' }}
                                          lineHeight={1.6}
                                    >
                                        "What is the Ukrainian Territorial Defence Forces and how is it different from
                                        the "regular" Army?"
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                The Territorial Defence Forces (TDF) is a separate component of the Armed Forces of Ukraine.
                                TDF were formed as a result of reorganization of the Territorial Defence Battalions,
                                which were volunteer militias created during the War in Donbass that started in 2014.
                                Command of TDF units is carried out directly by the Commander-in-Chief of the Armed Forces
                                of Ukraine within the limits provided by the Law of Ukraine "On the basis of national resistance".
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                In response to the pathetic attempt by our frantic eastern neighbour to occupy Ukraine,
                                the necessary amendments to the law were made, permitting the TDF to carry out combat operations
                                outside their home regions of Ukraine.
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                The TDF personnel are composed of the citizens of Ukraine, primarily who already have
                                combat experience, and of the volunteers who performed best in hte first month of the
                                nationwide resistance to the russian invasion.
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }} mb={2} textAlign='justify'>
                                Currently, the TDF units are russia's worst nightmare. Constant training, gaining unique
                                combat experience, local knowledge, and the ability to make responsible decisions at the
                                lowest possible level of the military hierarchy - all makes each soldies of the TDF a unique
                                professional at the defence of Ukraine.
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
                                        "How come you require so much, aren't the Armed Forces not providing enough to
                                        your battalion?"
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }}>
                                TDF were established shortly before the full-scale war started, thus the Armed Forces of
                                Ukraine lacked the time to make the necessary budget allocations and purchases even for the
                                minimum staffing of the TDF units, not including additional soldiers called upon on February 24th.
                                Thus the Armed Forces are currenly focused on supplying its regular units. With an exception of
                                regular weapons and ammunition for it, the TDF units are having to be as self-sufficient as
                                it is possible. This is the reason why the help of local residents and volunteers is the key to the
                                effectiveness of each TDF battalion!
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
                                        "How do I know that my financial or any other assistance to the battalion will
                                        be used properly?"
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }}>
                                The battalion command and our volunteers make every effort to provide transparent reporting
                                on our spending and procurement. Unfortunately, constant fighting and the need to
                                sometimes purchase used items makes it impossible to provide "perfect" reporting.
                            </Text>
                            <Text color={textColor} fontSize={{ lg: '16px', md: '15px', sm: '10px', base: '9px' }}>
                                Nonetheless, each member of our team is most interested in our common victory and proved
                                himself many times over. If at any time you find yourself being concerned how your aid had been
                                used - please immediately notify us via the e-mail or by any other means convenient to you!
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Center>

            <DandD />
        </main>
    </>
}

export default FAQeng;
