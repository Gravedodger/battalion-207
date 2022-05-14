import React from 'react';
import styles from './PurchasedFeature.module.css';
import PurchasedHeader from "./components/PurchasedHeader";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from '@chakra-ui/react';

const PurchasedFeatureUKR = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');
    const bgColor = useColorModeValue('rgba(229,180,180,0.82)', 'rgba(112,128,144,0.45)')

    return (
        <Container className={styles.purchasedContainer} backgroundColor={bgColor}>
            <PurchasedHeader titleEng='Purchases' />
            <Tabs>
                <TabList>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                        April
                    </Tab>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                        May
                    </Tab>
                </TabList>

                <TabPanels h={{ lg:'550px', md: '500px', sm: '450px', base: '450px' }}>

                    {/*     APRIL    */}
                    <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                        <Text mt='1rem' color={textColor}>01.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 1,436.86
                        </Text>

                        <Text mt='1rem' color={textColor}>02.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Pistol holder & 2x knives => ₴ 1,358.20
                        </Text>

                        <Text mt='1rem' color={textColor}>03.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 3x Rainproof ponchos => ₴ 3,022.60
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 100m 2x1 electric cable & food => ₴ 1,636.07
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Accounting journals => ₴ 367.60
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Sharp shovel => ₴ 549
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Sharp shovel => ₴ 549
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Tactical shovel Skif => ₴ 1,600
                        </Text>

                        <Text mt='1rem' color={textColor}>04.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 400.22
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Collimator sight Hawke RD1 => ₴ 4,300
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Mobile phone HTC Desire 600 => ₴ 1,000
                        </Text>

                        <Text mt='1rem' color={textColor}>06.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 800x sandbags =>  ₴ 7,200
                        </Text>

                        <Text mt='1rem' color={textColor}>07.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 1,260.51
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Pistol holder => ₴ 432
                        </Text>

                        <Text mt='1rem' color={textColor}>08.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Car jack (2t.) => ₴ 1,570
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 2x wrenches (3.5t) => ₴ 2,831.96
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 200m 2x1 electric cable => ₴ 2,640
                        </Text>

                        <Text mt='1rem' color={textColor}>11.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 3x water bottles => ₴ 760
                        </Text>

                        <Text mt='1rem' color={textColor}>12.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 1,035
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 10x water bottles => ₴ 2,575
                        </Text>

                        <Text mt='1rem' color={textColor}>13.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50m thick plastic wrap, 2x aluminium tape, 1,000x sandbags => ₴ 13,307.40
                        </Text>

                        <Text mt='1rem' color={textColor}>14.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 862.50
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 711.20
                        </Text>

                        <Text mt='1rem' color={textColor}>15.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 973.10
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Table for HQ => ₴ 888
                        </Text>

                        <Text mt='1rem' color={textColor}>16.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 510
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50m thick plastic wrap => ₴ 1,683
                        </Text>

                        <Text mt='1rem' color={textColor}>17.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 1,035
                        </Text>

                        <Text mt='1rem' color={textColor}>19.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 403.60
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 711.20
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50m thick plastic wrap & 1,000 sandbags => ₴ 6,696.62
                        </Text>

                        <Text mt='1rem' color={textColor}>29.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 722
                        </Text>

                        {/*     Total for April     */}
                        <Box display='flex' alignItems='center' mt='30px'>
                            <Text color={textColor} fontSize='18px' fontWeight={700}>
                                Total:
                            </Text>
                            <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>₴ 62,832.42</Text>
                        </Box>
                    </TabPanel>

                    {/*     MAY    */}
                    <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                        <Text mt='1rem' color={textColor}>01.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 415.40
                        </Text>

                        <Text mt='1rem' color={textColor}>06.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 395.70
                        </Text>

                        <Text mt='1rem' color={textColor}>07.07.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 754
                        </Text>

                        <Text mt='1rem' color={textColor}>10.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 791.40
                        </Text>

                        <Text mt='1rem' color={textColor}>13.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Fuel A-95 => ₴ 791.40
                        </Text>

                        {/*     Total for May     */}
                        <Box display='flex' alignItems='center' mt='30px'>
                            <Text color={textColor} fontSize='18px' fontWeight={700}>
                                Total:
                            </Text>
                            <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>₴  </Text>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default PurchasedFeatureUKR;
