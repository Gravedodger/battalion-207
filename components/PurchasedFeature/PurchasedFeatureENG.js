import React from 'react';
import styles from './PurchasedFeature.module.css';
import PurchasedHeader from "./components/PurchasedHeader";
import PopoverPurchasesItem from "../PopoverPurchases/PopoverPurchasesItem";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image, useColorModeValue } from '@chakra-ui/react';

const PurchasedFeatureENG = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');
    const bgColor = useColorModeValue('rgba(229,180,180,0.82)', 'rgba(112,128,144,0.45)');

    const itemId1 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 1,436.86</Text>;
    const itemId1Pic = <Image src='/Fuel/A-95--01-04.WebP' alt='fuel purchase proof' />;

    const itemId2 = <Text mt='0.2rem' color='#09A205'>+ Pistol holder & 2x knives => ₴ 1,358.20</Text>;
    const itemId2Pic = <Image src='/Purchased/PistolHolder_&_Knives--02-04.WebP' alt='items purchase proof' />;

    const itemId3 = <Text mt='0.2rem' color='#09A205'>+ 3x Rainproof ponchos => ₴ 3,022.60</Text>;
    const itemId3Pic = <Image src='/Purchased/Ponchos--03-04.WebP' alt='items purchase proof' />;

    const itemId4 = <Text mt='0.2rem' color='#09A205'>+ 100m 2x1 electric cable => ₴ 1,500</Text>;
    const itemId4Pic = <Image src='/Purchased/Cable_&_food.WebP' alt='items purchase proof' />;

    const itemId5 = <Text mt='0.2rem' color='#09A205'>+ Sharp shovel => ₴ 549</Text>;
    const itemId5Pic = <Image src='/Purchased/ShovelSharp_&_journals--03-04.WebP' alt='items purchase proof' />;

    const itemId6 = <Text mt='0.2rem' color='#09A205'>+ Sharp shovel => ₴ 549</Text>;
    const itemId6Pic = <Image src='/Purchased/ShovelSharp--03-04.WebP' alt='items purchase proof' />;

    const itemId7 = <Text mt='0.2rem' color='#09A205'>+ Tactical shovel Skif => ₴ 1,600</Text>;
    const itemId7Pic = <Image src='/Purchased/SkifShovel--03-04.WebP' alt='items purchase proof' />;

    const itemId8 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 400.22</Text>;
    const itemId8Pic = <Image src='/Fuel/A-95--04-04.WebP' alt='fuel purchase proof' />;

    const itemId9 = <Text mt='0.2rem' color='#09A205'>+ Collimator sight Hawke RD1 => ₴ 4,300</Text>;
    const itemId9Pic = <Image src='' alt='items purchase proof' />;

    const itemId10 = <Text mt='0.2rem' color='#09A205'>+ Mobile phone HTC Desire 600 => ₴ 1,000</Text>;
    const itemId10Pic = <Image src='' alt='items purchase proof' />;

    const itemId11 = <Text mt='0.2rem' color='#09A205'>+ 800x sandbags =>  ₴ 7,200</Text>;
    const itemId11Pic = <Image src='/Purchased/Sandbags--06-04.jpg' alt='items purchase proof' />;

    const itemId12 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 1,260.51</Text>;
    const itemId12Pic = <Image src='/Fuel/A-95--07-04.jpg' alt='items purchase proof' />;

    const itemId13 = <Text mt='0.2rem' color='#09A205'>+ Pistol holder => ₴ 432</Text>;
    const itemId13Pic = <Image src='/Purchased/PistolHolder--07-04.WebP' alt='items purchase proof' />;

    const itemId14 = <Text mt='0.2rem' color='#09A205'>+ Car jack (2t.) => ₴ 1,570</Text>;
    const itemId14Pic = <Image src='/Purchased/Domkrat--08-04.WebP' alt='items purchase proof' />;

    const itemId15 = <Text mt='0.2rem' color='#09A205'>+ 2x wrenches (3.5t) => ₴ 2,831.96</Text>;
    const itemId15Pic = <Image src='/Purchased/Wrenches--08-04.WebP' alt='items purchase proof' />;

    const itemId16 = <Text mt='0.2rem' color='#09A205'>+ 200m 2x1 electric cable => ₴ 2,640</Text>;
    const itemId16Pic = <Image src='logo.png' alt='items purchase proof' />;

    const itemId17 = <Text mt='0.2rem' color='#09A205'>+ 3x water bottles => ₴ 760</Text>;
    const itemId17Pic = <Image src='/Purchased/3-water-bottles.WebP' alt='items purchase proof' />;

    const itemId18 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 1,035</Text>;
    const itemId18Pic = <Image src='logo.WebP' alt='items purchase proof' />;

    const itemId19 = <Text mt='0.2rem' color='#09A205'>+ 10x water bottles => ₴ 2,575</Text>;
    const itemId19Pic = <Image src='/Purchased/10-water-bottles.WebP' alt='items purchase proof' />;

    const itemId20 = <Text mt='0.2rem' color='#09A205'>+ 1,000x sandbags => ₴ 10,800</Text>;
    const itemId20Pic = <Image src='/Purchased/Plastic&Tape&Sandbags--13-04.WebP' alt='items purchase proof' />;

    const itemId21 = <Text mt='0.2rem' color='#09A205'>+ 2x aluminium tape => ₴ 545.40</Text>;
    const itemId21Pic = <Image src='/Purchased/Plastic&Tape&Sandbags--13-04.WebP' alt='items purchase proof' />;

    const itemId22 = <Text mt='0.2rem' color='#09A205'>+ 50m thick plastic wrap => ₴ 2,060</Text>;
    const itemId22Pic = <Image src='/Purchased/Plastic&Tape&Sandbags--13-04.WebP' alt='items purchase proof' />;

    const itemId23 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 862.50</Text>;
    const itemId23Pic = <Image src='/Fuel/A-95--14-04.WebP' alt='items purchase proof' />;

    const itemId24 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 711.20</Text>;
    const itemId24Pic = <Image src='/Fuel/A-95--15-04.WebP' alt='items purchase proof' />;

    const itemId25 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 973.10</Text>;
    const itemId25Pic = <Image src='/Fuel/A-95--15-04.WebP' alt='items purchase proof' />;

    const itemId26 = <Text mt='0.2rem' color='#09A205'>+ Table for HQ => ₴ 888</Text>;
    const itemId26Pic = <Image src='/Purchased/Table-for-HQ--15-04.WebP' alt='items purchase proof' />;

    const itemId27 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 510</Text>;
    const itemId27Pic = <Image src='/Fuel/A-95--16-04.WebP' alt='items purchase proof' />;

    const itemId28 = <Text mt='0.2rem' color='#09A205'>+ 50m thick plastic wrap => ₴ 1,683</Text>;
    const itemId28Pic = <Image src='/Purchased/Plastic--16-04.WebP' alt='items purchase proof' />;

    const itemId29 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 1,035</Text>;
    const itemId29Pic = <Image src='/Fuel/A-95--17-04.WebP' alt='items purchase proof' />;

    const itemId30 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 403.60</Text>;
    const itemId30Pic = <Image src='/Fuel/A-95--19-04.WebP' alt='items purchase proof' />;

    const itemId31 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 711.20</Text>;
    const itemId31Pic = <Image src='/Fuel/A-95--19-04.WebP' alt='items purchase proof' />;

    const itemId32 = <Text mt='0.2rem' color='#09A205'>+ 50m thick plastic wrap & 1,000 sandbags => ₴ 6,696.62</Text>;
    const itemId32Pic = <Image src='/Purchased/Sandbags_&_Plastic.WebP' alt='items purchase proof' />;

    const itemId33 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 722</Text>;
    const itemId33Pic = <Image src='logo.WebP' alt='items purchase proof' />;

    const itemId34 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 415.40</Text>;
    const itemId34Pic = <Image src='logo.WebP' alt='items purchase proof' />;

    const itemId35 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 395.70</Text>;
    const itemId35Pic = <Image src='/Fuel/A-95--06-05.WebP' alt='items purchase proof' />;

    const itemId36 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 754</Text>
    const itemId36Pic = <Image src='logo.WebP' alt='items purchase proof' />;

    const itemId37 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 791.40</Text>
    const itemId37Pic = <Image src='/Fuel/A-95--10-05.WebP' alt='items purchase proof' />;

    const itemId38 = <Text mt='0.2rem' color='#09A205'>+ Fuel A-95 => ₴ 791.40</Text>
    const itemId38Pic = <Image src='logo.WebP' alt='items purchase proof' />;

    const itemId39 = <Text mt='0.2rem' color='#09A205'> + Бензин A-95 => ₴ 791.40</Text>;
    const itemId39Pic = <Image src='logo.WebP' alt='items purchase proof' />;

    return (
        <Container className={styles.purchasedContainer} backgroundColor={bgColor}>
            <PurchasedHeader titleEng='Purchases' />
            <Tabs>
                <TabList>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }}
                         fontSize={{ lg: '18px', sm: '14px', base: '12px' }}
                    >
                        April
                    </Tab>
                    <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }}
                         fontSize={{ lg: '18px', sm: '14px', base: '12px' }}
                    >
                        May
                    </Tab>
                </TabList>

                <TabPanels>
                    {/*     APRIL    */}
                    <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }}
                              fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}
                    >
                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            01.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId1} title='Fuel A-95' purchaseProof={itemId1Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            02.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId2} title='Pistol holder and knives' purchaseProof={itemId2Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            03.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId3} title='Rainproof ponchos' purchaseProof={itemId3Pic} />
                        <PopoverPurchasesItem trigger={itemId4} title='Electric cable' purchaseProof={itemId4Pic} />
                        <Text mt='0.2rem' color='#09A205'>+ sweets => ₴ 136.07</Text>
                        <Text mt='0.2rem' color='#09A205'>+ Accounting journals => ₴ 367.60</Text>
                        <PopoverPurchasesItem trigger={itemId5} title='Sharp shovel' purchaseProof={itemId5Pic} />
                        <PopoverPurchasesItem trigger={itemId6} title='Sharp shovel' purchaseProof={itemId6Pic} />
                        <PopoverPurchasesItem trigger={itemId7} title='Tactical shovel Skif' purchaseProof={itemId7Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            04.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId8} title='Fuel A-95' purchaseProof={itemId8Pic} />
                        <PopoverPurchasesItem trigger={itemId9} title='Collimator sight Hawke RD1' purchaseProof={itemId9Pic} />
                        <PopoverPurchasesItem trigger={itemId10} title='Mobile phone HTC Desire 600' purchaseProof={itemId10Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            06.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId11} title='Sandbags' purchaseProof={itemId11Pic}/>

                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            07.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId12} title='Fuel A-95' purchaseProof={itemId12Pic} />
                        <PopoverPurchasesItem trigger={itemId13} title='Pistol holder' purchaseProof={itemId13Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            08.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId14} title='Car jack' purchaseProof={itemId14Pic} />
                        <PopoverPurchasesItem trigger={itemId15} title='Wrenches' purchaseProof={itemId15Pic} />
                        <PopoverPurchasesItem trigger={itemId16} title='Electric cable' purchaseProof={itemId16Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>
                            11.04.2022
                        </Text>
                        <PopoverPurchasesItem trigger={itemId17} title='Water bottles' purchaseProof={itemId17Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>12.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId18} title='Fuel A-95' purchaseProof={itemId18Pic} />
                        <PopoverPurchasesItem trigger={itemId19} title='Water bottles' purchaseProof={itemId19Pic} />


                        <Text mt='1rem' color={textColor} textDecoration='underline'>13.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId20} title='Sandbags' purchaseProof={itemId20Pic} />
                        <PopoverPurchasesItem trigger={itemId21} title='Aluminium tape' purchaseProof={itemId21Pic} />
                        <PopoverPurchasesItem trigger={itemId22} title='Thick plastic wrap' purchaseProof={itemId22Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>14.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId23} title='Fuel A-95' purchaseProof={itemId23Pic} />
                        <PopoverPurchasesItem trigger={itemId24} title='Fuel A-95' purchaseProof={itemId24Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>15.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId25} title='Fuel A-95' purchaseProof={itemId25Pic} />
                        <PopoverPurchasesItem trigger={itemId26} title='Table for HQ' purchaseProof={itemId26Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>16.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId27} title='Fuel A-95' purchaseProof={itemId27Pic} />
                        <PopoverPurchasesItem trigger={itemId28} title='Thick plastic wrap' purchaseProof={itemId28Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>17.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId29} title='Fuel A-95' purchaseProof={itemId29Pic} />


                        <Text mt='1rem' color={textColor} textDecoration='underline'>19.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId30} title='Fuel A-95' purchaseProof={itemId30Pic} />
                        <PopoverPurchasesItem trigger={itemId31} title='Fuel A-95' purchaseProof={itemId31Pic} />
                        <PopoverPurchasesItem trigger={itemId32} title='Thick plastic wrap and sandbags' purchaseProof={itemId32Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>29.04.2022</Text>
                        <PopoverPurchasesItem trigger={itemId33} title='Fuel A-95' purchaseProof={itemId33Pic} />

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
                        <Text mt='1rem' color={textColor} textDecoration='underline'>01.05.2022</Text>
                        <PopoverPurchasesItem trigger={itemId34} title='Fuel A-95' purchaseProof={itemId34Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>06.05.2022</Text>
                        <PopoverPurchasesItem trigger={itemId35} title='Fuel A-95' purchaseProof={itemId35Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>07.07.2022</Text>
                        <PopoverPurchasesItem trigger={itemId36} title='Fuel A-95' purchaseProof={itemId36Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>10.05.2022</Text>
                        <PopoverPurchasesItem trigger={itemId37} title='Fuel A-95' purchaseProof={itemId37Pic} />

                        <Text mt='1rem' color={textColor} textDecoration='underline'>13.05.2022</Text>
                        <PopoverPurchasesItem trigger={itemId38} title='Fuel A-95' purchaseProof={itemId38Pic} />

                        {/*     Total for May     */}
                        <Box display='flex' alignItems='center' mt='30px'>
                            <Text color={textColor} fontSize='18px' fontWeight={700}>
                                Total:
                            </Text>
                            <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>₴ 3,147.9</Text>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default PurchasedFeatureENG;
