import React from 'react';
import styles from './PurchasedFeature.module.css';
import PurchasedHeader from "./components/PurchasedHeader";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue} from '@chakra-ui/react';

const PurchasedFeatureUKR = ({ titleUKR, totalUKR }) => {
    const textColor = useColorModeValue('#222222', '#c59d5f');
    const bgColor = useColorModeValue('rgba(229,180,180,0.82)', 'rgba(112,128,144,0.45)')

    return (
        <Container className={styles.purchasedContainer} backgroundColor={bgColor}>
            <PurchasedHeader titleUkr={titleUKR} />
            <Tabs>
                <TabList>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                        Квітень
                    </Tab>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                        Травень
                    </Tab>
                </TabList>

                <TabPanels h={{ lg:'550px', md: '500px', sm: '450px', base: '450px' }}>

                    {/*     APRIL    */}
                    <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                        <Text mt='1rem' color={textColor}>01.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 1,436.86
                        </Text>

                        <Text mt='1rem' color={textColor}>02.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Кобура & 2x тактичні ножі => ₴ 1,358.20
                        </Text>

                        <Text mt='1rem' color={textColor}>03.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 3x Дощовики => ₴ 3,022.60
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 100m 2x1 електричний кабель & солодощі => ₴ 1,636.07
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Канцелярія => ₴ 367.60
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Штикова лопата => ₴ 549
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Штикова лопата => ₴ 549
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Тактична лопата Skif => ₴ 1,600
                        </Text>

                        <Text mt='1rem' color={textColor}>04.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A95 => ₴ 400.22
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Коліматорний приціл Hawke RD1 => ₴ 4,300
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Мобільний телефон HTC Desire 600 => ₴ 1,000
                        </Text>

                        <Text mt='1rem' color={textColor}>06.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 800x мішки для піска =>  ₴ 7,200
                        </Text>

                        <Text mt='1rem' color={textColor}>07.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 1,260.51
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Кобура => ₴ 432
                        </Text>

                        <Text mt='1rem' color={textColor}>08.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Домкрат (2t.) => ₴ 1,570
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 2x лебідки (3.5t) => ₴ 2,831.96
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 200м 2x1 електричний кабель => ₴ 2,640
                        </Text>

                        <Text mt='1rem' color={textColor}>11.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 3x бутлі для води => ₴ 760
                        </Text>

                        <Text mt='1rem' color={textColor}>12.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 1,035
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 10x бутлі для води => ₴ 2,575
                        </Text>

                        <Text mt='1rem' color={textColor}>13.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50м щільна плівка, 2x алюмінієва клійка стрічка, 1,000x мішки для піску => ₴ 13,307.40
                        </Text>

                        <Text mt='1rem' color={textColor}>14.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 862.50
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 711.20
                        </Text>

                        <Text mt='1rem' color={textColor}>15.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 973.10
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Стіл для штабу => ₴ 888
                        </Text>

                        <Text mt='1rem' color={textColor}>16.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 510
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50м щільна плівка => ₴ 1,683
                        </Text>

                        <Text mt='1rem' color={textColor}>17.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 1,035
                        </Text>

                        <Text mt='1rem' color={textColor}>19.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 403.60
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 711.20
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50м щільна плівка & 1,000 мішки для піска => ₴ 6,696.62
                        </Text>

                        <Text mt='1rem' color={textColor}>29.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 722
                        </Text>

                        {/*     Total for April     */}
                        <Box display='flex' alignItems='center' mt='30px'>
                            <Text color={textColor} fontSize='18px' fontWeight={700}>
                                {totalUKR}
                            </Text>
                            <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>₴ 62,832.42</Text>
                        </Box>
                    </TabPanel>

                    {/*     MAY    */}
                    <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                        <Text mt='1rem' color={textColor}>01.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 415.40
                        </Text>

                        <Text mt='1rem' color={textColor}>06.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 395.70
                        </Text>

                        <Text mt='1rem' color={textColor}>07.07.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 754
                        </Text>

                        <Text mt='1rem' color={textColor}>10.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 791.40
                        </Text>

                        <Text mt='1rem' color={textColor}>13.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 791.40
                        </Text>

                        {/*     Total for May     */}
                        <Box display='flex' alignItems='center' mt='30px'>
                            <Text color={textColor} fontSize='18px' fontWeight={700}>
                                {totalUKR}
                            </Text>
                            <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>₴ 3,147.9</Text>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default PurchasedFeatureUKR;
