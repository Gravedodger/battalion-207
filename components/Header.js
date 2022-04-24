import React from 'react';
import { MoonIcon } from '@chakra-ui/icons';
import {ReturnButton, ReturnButtonUkr} from "./ReturnButton";
import {
    Box, Button, Container, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup,
    useColorMode, useColorModeValue
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FilterIcon, LightBulbIcon } from './Icons';

const Header = (filter, setFilter, pageTitle) => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', 'gray.800');
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

    return (
        <Box position="fixed" w="100%" zIndex={1} backgroundColor={bgColor}>
            <Container maxW="x1" py={3} display="flex" justifyContent="space-between" alignItems="center">
                <ReturnButton />
                <Box>
                    <IconButton ml={1} variant="ghost" aria-label="Toggle theme"
                                onClick={toggleColorMode} icon={themeIcon} />
                </Box>
            </Container>
        </Box>
    );
}

export default Header;
