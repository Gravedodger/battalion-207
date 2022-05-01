import React  from 'react';
import styles from '/styles/Popover.module.css';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box, PopoverFooter, PopoverArrow,
    PopoverCloseButton, Text, Flex } from '@chakra-ui/react';
import CopyContents from "./CopyContents";

const PopoverItem = (props) => {
    const { trigger, title, payPal, payoneer, address, gratitude, requisites, text, ukraine } = props;

    return (
        <Popover placement='bottom-start' closeOnBlur={true}  className='popTrigger'>
            <PopoverTrigger>
                <Box cursor='pointer'>
                    {props.trigger}
                </Box>
            </PopoverTrigger>

            <PopoverContent className={styles.popCanvas} w='22rem'>
                <PopoverArrow />
                <PopoverHeader>
                    <Text className={styles.popTitle}>
                        {props.title}
                    </Text>
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody className={styles.popBody}>
                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}>Використати PayPal:</Text>
                        {props.payPal}
                    </Flex>
                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}>Використати Payoneer:</Text>
                        <CopyContents />
                    </Flex>

                    <Flex className={styles.popFlex}>
                        <Text className={styles.popItem}>Пряме зарахування:</Text>
                        {props.requisites}
                    </Flex>
                </PopoverBody>
                <PopoverFooter>
                    <Text>
                        {props.gratitude}
                    </Text>
                    <Text>
                        {props.ukraine}
                    </Text>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
};

export default PopoverItem;
