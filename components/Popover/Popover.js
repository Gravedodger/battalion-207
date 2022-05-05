import React  from 'react';
import styles from '/components/Popover/Popover.module.css';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box, PopoverFooter, PopoverArrow,
    PopoverCloseButton, Text, Flex } from '@chakra-ui/react';
import CopyContents from "../CopyContents/CopyContents";

const PopoverItem = ({   trigger, title, payPal, directDepositLabel, PayoneerLabel,
                         PayPalLabel, gratitude, requisites, ukraine }) => {
    return (
        <Popover placement='bottom-start' closeOnBlur={true}  className='popTrigger'>
            <PopoverTrigger>
                <Box cursor='pointer'>
                    {trigger}
                </Box>
            </PopoverTrigger>

            <PopoverContent className={styles.popCanvas} w='22rem'>
                <PopoverArrow />
                <PopoverHeader>
                    <Text className={styles.popTitle}>
                        {title}
                    </Text>
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody className={styles.popBody}>
                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}>{PayPalLabel}</Text>
                        {payPal}
                    </Flex>
                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}>{PayoneerLabel}</Text>
                        <CopyContents />
                    </Flex>

                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}>{directDepositLabel}</Text>
                        {requisites}
                    </Flex>
                </PopoverBody>
                <PopoverFooter>
                    <Text>
                        {gratitude}
                    </Text>
                    <Text>
                        {ukraine}
                    </Text>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}

export default PopoverItem;
