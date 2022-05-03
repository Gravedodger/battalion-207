import React from 'react';
import styles from '../WarStats.module.css';
import {Box, Text, useColorModeValue} from '@chakra-ui/react';

const WarItemInfo = ({ infoUKR, infoENG }) => {
    const textColor = useColorModeValue('#000', '#fff')

    return (
        <Box>
            <Text color={textColor} fontWeight={600} letterSpacing={1.6} fontSize='15px'>
                {infoUKR} {infoENG}
            </Text>
        </Box>
    );
}

export default WarItemInfo;
