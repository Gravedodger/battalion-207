import React from 'react';
import styles from '../WarStats.module.css';
import { Text, useColorModeValue } from '@chakra-ui/react';

const WarHeader = ({ titleUKR, titleENG, date }) => {
    const textColor = useColorModeValue('#222222', '#c59d5f')

    return (
        <Text color={textColor} className={styles.warHeaderText}>
            {titleUKR}
            {titleENG}
            <span className={styles.span}>
                {date}:
            </span>
        </Text>
    );
}

export default WarHeader;
