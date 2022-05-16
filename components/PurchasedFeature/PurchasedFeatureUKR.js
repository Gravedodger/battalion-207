import React from 'react';
import styles from './PurchasedFeature.module.css';
import PurchasedHeader from "./components/PurchasedHeader";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue} from '@chakra-ui/react';
import PopoverPurchasesItem from "../PopoverPurchases/PopoverPurchasesItem";

const PurchasedFeatureUKR = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');
    const bgColor = useColorModeValue('rgba(229,180,180,0.82)', 'rgba(112,128,144,0.45)');

    const itemId1 = <Text mt='0.2rem' color='#09A205'>+ Бензин A-95 => ₴ 1,436.86</Text>;

    const itemId2 = <Text mt='0.2rem' color='#09A205'>+ Кобура & 2x тактичні ножі => ₴ 1,358.20</Text>;

    const itemId3 = <Text mt='0.2rem' color='#09A205'>+ 3x Дощовики => ₴ 3,022.60</Text>;

    const itemId4 = <Text mt='0.2rem' color='#09A205'>+ 100m електричний кабель => ₴ 1,500</Text>;

    const itemId5 = <Text mt='0.2rem' color='#09A205'>+ Штикова лопата => ₴ 549</Text>;

    const itemId6 = <Text mt='0.2rem' color='#09A205'>+ Штикова лопата => ₴ 549</Text>;

    const itemId7 = <Text mt='0.2rem' color='#09A205'>+ Тактична лопата Skif => ₴ 1,600</Text>;

    const itemId8 = <Text mt='0.2rem' color='#09A205'>+ Бензин A-95 => ₴ 400.22</Text>;

    const itemId9 = <Text mt='0.2rem' color='#09A205'>+ Коліматорний приціл Hawke RD1 => ₴ 4,300</Text>;

    const itemId10 = <Text mt='0.2rem' color='#09A205'>+ Мобільний телефон HTC Desire 600 => ₴ 1,000</Text>;

    const itemId11 = <Text mt='0.2rem' color='#09A205'>+ 800x мішки для піска =>  ₴ 7,200</Text>;

    const itemId12 = <Text mt='0.2rem' color='#09A205'>+ Бензин A-95 => ₴ 1,260.51</Text>;

    const itemId13 = <Text mt='0.2rem' color='#09A205'>+ Кобура => ₴ 432</Text>;

    const itemId14 = <Text mt='0.2rem' color='#09A205'>+ Домкрат (2t.) => ₴ 1,570</Text>;

    const itemId15 = <Text mt='0.2rem' color='#09A205'>+ 2x лебідки (3.5t) => ₴ 2,831.96</Text> ;

    const itemId16 = <Text mt='0.2rem' color='#09A205'>+ 200м електричний кабель => ₴ 2,640</Text>;

    const itemId17 = <Text mt='0.2rem' color='#09A205'>+ 3x бутлі для води => ₴ 760</Text>;

    const itemId18 = <Text mt='0.2rem' color='#09A205'>+ Бензин A-95 => ₴ 1,035</Text>;

    const itemId19 = <Text mt='0.2rem' color='#09A205'>+ 10x бутлі для води => ₴ 2,575</Text>;

    const itemId20 = <Text mt='0.2rem' color='#09A205'>+ 50м щільна плівка => ₴ 2,060</Text>;

    const itemId21 = <Text mt='0.2rem' color='#09A205'>+ 1,000x мішки для піску => ₴ 10,800</Text>;

    const itemId22 = <Text mt='0.2rem' color='#09A205'>+ 2x алюмінієва стрічка => ₴ 545.40</Text>;

    const itemId23 = <Text mt='0.2rem' color='#09A205'>+ Бензин A-95 => ₴ 862.50</Text>;

    const itemId24 = <Text mt='0.2rem' color='#09A205'>+ Бензин A-95 => ₴ 711.20</Text>;

    const itemId25 = <Text mt='0.2rem' color='#09A205'>+ Бензин A-95 => ₴ 973.10</Text>;

    const itemId26 = <Text mt='0.2rem' color='#09A205'>+ Стіл для штабу => ₴ 888</Text>;

    const itemId27 = ;

    const itemId28 = ;

    const itemId29 = ;

    const itemId29 = ;

    const itemId30 = ;

    const itemId31 = ;

    const itemId32 = ;

    const itemId33 = ;

    const itemId34 = ;

    const itemId35 = ;

    const itemId36 = ;

    const itemId37 = ;

    const itemId38 = ;




    return (
        <Container className={styles.purchasedContainer} backgroundColor={bgColor}>
            <PurchasedHeader titleUkr='Закупівлі' />
            <Tabs>
                <TabList>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                        Квітень
                    </Tab>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                        Травень
                    </Tab>
                </TabList>

                <TabPanels>
                    {/*     APRIL    */}
                    <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                        <Text mt='1rem' color={textColor} textDecoration='underline'>01.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId1} title='Бензин A-95' purchaseProof={itemId1Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>02.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId2} title='Кобура & тактичні ножі' purchaseProof={itemId2Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>03.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId3} title='Дощовики' purchaseProof={itemId3Pic} />
                        <PopoverPurchasesItem trigger={itemId4} title='Електричний кабель' purchaseProof={itemId4Pic} />
                        <Text mt='0.2rem' color='#09A205'>
                            + солодощі => ₴ 136.07
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Канцелярія => ₴ 367.60
                        </Text>
                        <PopoverPurchasesItem trigger={itemId5} title='Штикова лопата' purchaseProof={itemId5Pic} />
                        <PopoverPurchasesItem trigger={itemId6} title='Штикова лопата' purchaseProof={itemId6Pic} />
                        <PopoverPurchasesItem trigger={itemId7} title='Тактична лопата Skif' purchaseProof={itemId7Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>04.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId8} title='Бензин A-95' purchaseProof={itemId8Pic} />
                        <PopoverPurchasesItem trigger={itemId9} title='Коліматорний приціл Hawke RD1' purchaseProof={itemId9Pic} />
                        <PopoverPurchasesItem trigger={itemId10} title='Мобільний телефон HTC Desire 600' purchaseProof={itemId10Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>06.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId11} title='Мішки для піска' purchaseProof={itemId11Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>07.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId12} title='Бензин A-95' purchaseProof={itemId12Pic} />
                        <PopoverPurchasesItem trigger={itemId13} title='Кобура' purchaseProof={itemId13Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>08.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId14} title='Домкрат' purchaseProof={itemId14Pic} />
                        <PopoverPurchasesItem trigger={itemId15} title='Лебідки' purchaseProof={itemId15Pic} />
                        <PopoverPurchasesItem trigger={itemId16} title='Електричний кабель' purchaseProof={itemId16Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>11.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId17} title='Бутлі для води' purchaseProof={itemId17Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>12.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId18} title='Бензин A-95' purchaseProof={itemId18Pic} />
                        <PopoverPurchasesItem trigger={itemId19} title='Бутлі для води' purchaseProof={itemId19Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>13.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId20} title='Щільна плівка' purchaseProof={itemId20Pic} />
                        <PopoverPurchasesItem trigger={itemId21} title='Мішки для піску' purchaseProof={itemId21Pic} />
                        <PopoverPurchasesItem trigger={itemId22} title='Алюмінієва стрічка' purchaseProof={itemId22Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>14.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId23} title='Бензин A-95' purchaseProof={itemId23Pic} />
                        <PopoverPurchasesItem trigger={itemId24} title='Бензин A-95' purchaseProof={itemId24Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>15.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId25} title='Бензин A-95' purchaseProof={itemId25Pic} />
                        <PopoverPurchasesItem trigger={itemId26} title='Стіл для штабу' purchaseProof={itemId26Pic} />


                        <Text mt='1rem' color={textColor} textDecoration='underline'>16.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 510
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50м щільна плівка => ₴ 1,683
                        </Text>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>17.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 1,035
                        </Text>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>19.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 403.60
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 711.20
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 1,000 мішки для піска => ₴ 5,970
                        </Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + 50м щільна плівка => ₴ 726.62
                        </Text>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>29.04.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 722
                        </Text>

                        {/*     Total for April     */}
                        <Box display='flex' alignItems='center' mt='30px'>
                            <Text color={textColor} fontSize='18px' fontWeight={700}>
                                Загалом:
                            </Text>
                            <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>₴ 62,832.42</Text>
                        </Box>
                    </TabPanel>

                    {/*     MAY    */}
                    <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                        <Text mt='1rem' color={textColor} textDecoration='underline'>01.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 415.40
                        </Text>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>06.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 395.70
                        </Text>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>07.07.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 754
                        </Text>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>10.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 791.40
                        </Text>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>13.05.2022</Text>
                        <Text mt='0.2rem' color='#09A205'>
                            + Бензин A-95 => ₴ 791.40
                        </Text>

                        {/*     Total for May     */}
                        <Box display='flex' alignItems='center' mt='30px'>
                            <Text color={textColor} fontSize='18px' fontWeight={700}>
                                Загалом:
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
