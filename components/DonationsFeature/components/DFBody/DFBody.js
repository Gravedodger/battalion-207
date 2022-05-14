import React, { useState } from "react";
import styles from '../../DonationsFeature.module.css';
import {Tabs, Tab, TabList, TabPanels, TabPanel, Text, Box, useColorModeValue} from '@chakra-ui/react';

const DFBody = ({ totalUkr, totalEng }) => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return (
        <Tabs>
            <TabList>
                <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                    UAH
                </Tab>
                <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                    USD
                </Tab>
                <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }}>
                    EUR
                </Tab>
                <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }} isDisabled>
                    GBP
                </Tab>
                <Tab p={{ lg: 4, md: 3, sm: 2, base: 2 }} fontSize={{ lg: '18px', sm: '14px', base: '12px' }} isDisabled>
                    Crypto
                </Tab>
            </TabList>

            <TabPanels h={{ lg:'550px', md: '500px', sm: '450px', base: '450px' }}>
                <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                    <Text mt='1rem' color={textColor}>06.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 1,000 => Yuliana N.
                    </Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 1,000 => Natalia Sh.
                    </Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 1,000 => an unknown person
                    </Text>

                    <Text mt='1rem' color={textColor}>08.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 2,000 => Hanna K.
                    </Text>

                    <Text mt='1rem' color={textColor}>12.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 1,000 => Ivan D.
                    </Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 3,000 => an unknown person
                    </Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 350 => Alexandra B.
                    </Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 1,000 => Tetiana B.
                    </Text>

                    <Text mt='1rem' color={textColor}>13.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + ₴ 555 => Pavlo M.
                    </Text>

                    {/*     Total UAH     */}
                    <Box display='flex' alignItems='center' mt='30px'>
                        <Text color={textColor} fontSize='18px' fontWeight={700}>
                            {totalUkr}
                            {totalEng}
                        </Text>
                        <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>₴ 10,905</Text>
                    </Box>
                </TabPanel>

                <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                    <Text mt='1rem' color={textColor}>07.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + $ 100 => Kamil I.
                    </Text>

                    <Text mt='1rem' color={textColor}>12.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + $ 300 => Hanna K.
                    </Text>

                    <Text mt='1rem' color={textColor}>13.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + $200 => Margus H.
                    </Text>

                    <Text mt='1rem' color={textColor}>18.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + $260 => Niklas L.
                    </Text>

                    <Text mt='1rem' color={textColor}>19.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + $103 => Simon D.
                    </Text>

                    {/*     Total USD     */}
                    <Box display='flex' alignItems='center' mt='30px'>
                        <Text color={textColor} fontSize='18px' fontWeight={700}>
                            {totalUkr}
                            {totalEng}
                        </Text>
                        <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>$ 963</Text>
                    </Box>
                </TabPanel>

                <TabPanel p={{ lg: 4, md: 4, sm: 2, base: 1 }} fontSize={{lg: '18px', md: '16px', sm: '15px', base: '14px' }}>
                    <Text mt='1rem' color={textColor}>11.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + € 50 => an unknown person
                    </Text>
                    <Text mt='1rem' color={textColor}>12.04.2022</Text>
                    <Text mt='0.2rem' color='#09A205'>
                        + € 150 => Kadri V.
                    </Text>

                    {/*     Total EUR     */}
                    <Box display='flex' alignItems='center' mt='30px'>
                        <Text color={textColor} fontSize='18px' fontWeight={700}>
                            {totalUkr}
                            {totalEng}
                        </Text>
                        <Text ml='40px' color='#09A205' fontSize='20px' fontWeight={700}>€ 200</Text>
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default DFBody;
