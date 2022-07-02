import React  from 'react';
import styles from '/components/PopoverFinSupport/PopoverFinSupport.module.css';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box, PopoverFooter, PopoverArrow,
    PopoverCloseButton, Text, Flex, useColorModeValue
} from '@chakra-ui/react';
import CopyContents from "../CopyContents/CopyContents";

const PopoverFinSupportItem = (
    {
        trigger, title, payPal, directDepositLabel, PayoneerLabel, PayPalLabel, gratitude, requisites, ukraine
    }) => {
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

            <PopoverContent className={styles.popCanvas}
                            w='22rem'
            >
                <PopoverArrow />
                <PopoverHeader>
                    <Text className={styles.popTitle}
                          color={textColor}
                    >
                        {title}
                    </Text>
                </PopoverHeader>
                <PopoverCloseButton />

                <PopoverBody className={styles.popBody}>
                    <Flex className={styles.popFlex}
                          ml='-5px'
                          mr='15px'
                    >
                        <Text className={styles.popItem}
                              color={textColor}
                        >
                            {PayPalLabel}
                        </Text>
                        {payPal}
                    </Flex>
                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}
                              color={textColor}
                        >
                            {PayoneerLabel}
                        </Text>
                        <CopyContents />
                    </Flex>

                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}
                              ml='-15px'
                              mr='15px'
                              color={textColor}
                        >
                            {directDepositLabel}
                        </Text>
                        {requisites}
                    </Flex>
                </PopoverBody>
                <PopoverFooter>
                    <Text color={textColor}>
                        {gratitude}
                    </Text>
                    <Text color={textColor} fontSize='20px'>
                        {ukraine}
                    </Text>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}

export default PopoverFinSupportItem;
