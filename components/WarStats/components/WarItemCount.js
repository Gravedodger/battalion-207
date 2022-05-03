import React from 'react';
import styles from '../WarStats.module.css';
import { Text, useColorModeValue } from '@chakra-ui/react';

const WarItemCount = ({ count }) => {
    const textColor = useColorModeValue('#222222', '#c59d5f')

    return <Text color={textColor}
                 className={styles.warCount} >
        {count}
    </Text>
}

export default WarItemCount;
