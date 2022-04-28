import React from 'react';
import styles from "../styles/Icons.module.css";
import { ReturnButton } from "./Icons";
import { MoonIcon } from "@chakra-ui/icons";
import { FilterIcon, LightBulbIcon } from './Icons';
import { Box, Flex, IconButton, Text, useColorMode, useColorModeValue} from '@chakra-ui/react';

const Header = ({filter, setFilter, pageTitle}) => {
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);
    const { toggleColorMode } = useColorMode();

    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('#222222', '#c59d5f')

    return (
        <Flex
            alignItems='center'
            justifyContent='space-around'
            mb='5%' pt={4} pb={4}
            zIndex={1}
            backgroundColor={bgColor}
        >
            <Box>
                <ReturnButton color="var(--clr-gold)" />
            </Box>

            <Box>
                <Text
                    fontSize={{ lg: '5xl', md: '4xl', sm: '2xl' }} fontWeight={600}
                    mb={{ base: 2, lg: 2, md: 4, sm: 3 }} color={textColor}
                >
                    {pageTitle}
                </Text>
                <div className="underline" />
            </Box>

            <Box>
                <IconButton
                    fontSize={{ lg: '40px', md: '30px', sm: '30px' }}
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
