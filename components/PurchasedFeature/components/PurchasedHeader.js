import React from 'react';
import styles from './../PurchasedFeature.module.css';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const PurchasedHeader = ({ titleUkr, titleEng }) => {
    const textColor = useColorModeValue('#000', '#c59d5f')

    return (
        <Box className={styles.purchasedHeaderContainer}>
            <Text className={styles.purchasedHeaderText} color={textColor}>
                {titleUkr}
                {titleEng}
            </Text>
        </Box>
    );
}

export default PurchasedHeader;
