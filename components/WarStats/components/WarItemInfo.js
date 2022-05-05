import React from 'react';
import styles from '../WarStats.module.css';
import {Box, Text, useColorModeValue} from '@chakra-ui/react';

const WarItemInfo = ({ infoUKR, infoENG }) => {
    const textColor = useColorModeValue('#000', '#fff')

    return (
        <Box>
            <Text mt='4px'
                color={textColor}
                  fontSize={{ lg: '15px', md: '13px',  sm: '11px', base: '11px' }}
                  fontWeight={600}
                  letterSpacing={1.6}
                  textAlign='justify'
            >
                {infoUKR} {infoENG}
            </Text>
        </Box>
    );
}

export default WarItemInfo;
