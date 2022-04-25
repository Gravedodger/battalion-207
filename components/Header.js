import React from 'react';
import { MoonIcon } from '@chakra-ui/icons';
import ReturnButton from "./ReturnButton";
import { FilterIcon, LightBulbIcon } from './Icons';
import { Box, Flex, IconButton, Text, useColorMode, useColorModeValue} from '@chakra-ui/react';

const Header = ({filter, setFilter, pageTitle}) => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', 'gray.800');
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

    return (
        <Flex alignItems='center' justifyContent='space-around' py={3} mb={10} zIndex={1} backgroundColor={bgColor}>
            <Box>
                <ReturnButton color="var(--clr-gold)" />
            </Box>

            <Box>
                <Text
                    fontSize={{ lg: '5xl', md: '4xl', sm: '2xl' }} fontWeight={600} color='#000000'
                    mb={{ base: 2, lg: 2, md: 4, sm: 3 }}
                >
                    {pageTitle}
                </Text>
                <div className="underline" />
            </Box>

            <Box>
                <IconButton variant="ghost" aria-label="Toggle theme"
                            fontSize={{ lg: 50, md: 40, sm: 30 }} color="var(--clr-gold)" onClick={toggleColorMode} icon={themeIcon} />
            </Box>
        </Flex>
    );
}

export default Header;
