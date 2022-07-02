import React from 'react';
import styles from './PopoverPurchases.module.css';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader,
    PopoverBody, Box, PopoverArrow, PopoverCloseButton, Text, useColorModeValue } from '@chakra-ui/react';

const PopoverPurchasesItem = ({ trigger, title, purchaseProof }) => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return (
        <Popover placement='bottom-start'
                 closeOnBlur={true}
                 className='popTrigger'
        >
            <PopoverTrigger>
                <Box cursor='pointer'>
                    {trigger}
                </Box>
            </PopoverTrigger>

            <PopoverContent className={styles.popCanvas} w='22rem'>
                <PopoverArrow />
                <PopoverHeader>
                    <Text className={styles.popTitle} color={textColor}>
                        {title}
                    </Text>
                </PopoverHeader>
                <PopoverCloseButton />

                <PopoverBody className={styles.popBody}>
                    {purchaseProof}
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

export default PopoverPurchasesItem;
