import React from 'react';
import { MoonIcon } from '@chakra-ui/icons';
import ReturnButton from "./ReturnButton";
import { FilterIcon, LightBulbIcon } from './Icons';
import { Box, Container, IconButton, Text, useColorMode, useColorModeValue} from '@chakra-ui/react';

const Header = ({filter, setFilter, pageTitle}) => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', 'gray.800');
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

    return (
        <Box py={3} mb={10} zIndex={1} backgroundColor={bgColor}>
            <Container w="100%" maxW="x1" display="flex" justifyContent="space-around" alignItems="center">
                <Box>
                    <ReturnButton color="var(--clr-gold)"/>
                </Box>

                <Box>
                    <Text fontSize="5xl" fontWeight="00" color='#000000'>{pageTitle}</Text>
                        <div className="underline" />

                </Box>

                <Box>
                    <IconButton variant="ghost" aria-label="Toggle theme"
                                fontSize={40} color="var(--clr-gold)" onClick={toggleColorMode} icon={themeIcon} />
                </Box>
            </Container>
        </Box>
    );
}

export default Header;
