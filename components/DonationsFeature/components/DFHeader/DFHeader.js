import React from 'react';
import styles from '../../DonationsFeature.module.css';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const DFHeader = ({ titleUkr, titleEng }) => {
    const textColor = useColorModeValue('#000', '#c59d5f')

    return (
        <Box className='DFHeaderContainer'>
            <Text className={styles.DFHeaderText}
                  color={textColor}
            >
                {titleUkr}
                {titleEng}
            </Text>
        </Box>
    );
}

export default DFHeader;
