import React from 'react';
import { ReturnButton } from "../Icons";
import { MoonIcon } from "@chakra-ui/icons";
import { LightBulbIcon } from '../Icons';
import { Box, Flex, IconButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

const Header = ({ pageTitle }) => {
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);
    const { toggleColorMode } = useColorMode();

    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('#222222', '#c59d5f')

    return (
        <Flex
            alignItems='center'
            justifyContent='space-around'
            mb='5%' mt={{ lg: '2.6rem', md: '2rem', sm: '1.5rem', base: '1rem' }} pb={4}
            zIndex={1}
            backgroundColor={bgColor}
        >
            <Box>
                <ReturnButton color="var(--clr-gold)" />
            </Box>

            <Box>
                <Text
                    ml={{ base: 2, sm: 2 }}
                    mb={{ lg: '10px', md: '10px', sm: '5px', base: '5px' }}
                    fontSize={{ lg: '4xl', md: '3xl', sm: '2xl' }}
                    fontWeight={600}
                    color={textColor}
                >
                    {pageTitle}
                </Text>
                <div className="underline" mb={{ lg: '1rem', md: '1rem', sm: '1rem', base: '1rem' }} />
            </Box>

            <Box>
                <IconButton
                    fontSize={{ lg: '40px', md: '35px', sm: '30px', base: '30px' }}
                    variant="ghost"
                    aria-label="Toggle theme"
                    cursor='pointer'
                    icon={themeIcon}
                    onClick={toggleColorMode}
                    color='#222222'
                />
            </Box>
        </Flex>
    );
}

export default Header;
