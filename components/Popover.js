import React from 'react';
import styles from '/styles/Popover.module.css';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box,
    PopoverFooter, PopoverArrow, PopoverCloseButton, Button, Text, Flex, Portal
} from '@chakra-ui/react';

const PopoverItem = (props) => {
    const {
        trigger,
        title,
        account, accountNumber,
        iban, ibanNumber,
        recipient, recipientDetails,
        bank, bankDetails,
        swift, swiftDetails,
        purpose, purposeDetails,
        gratitude
    } = props;

    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
                <Button
                    py={5} px={5} backgroundColor='#c59d5f'
                    border='#c59d5f' borderRadius={50} fontSize='11px'
                    fontWeight={600} color='#fff'>{trigger}</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent className={styles.popCanvas}>
                    <PopoverArrow />
                    <PopoverHeader>
                        <Text className={styles.popTitle}>
                            {props.title}
                        </Text>
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody className={styles.popBody}>
                        <Box className={styles.popFlex}>
                            <Text className={styles.popItem}>{props.account}</Text>
                            <Text className={styles.popDetails}>{props.accountNumber}</Text>
                        </Box>
                        <Box className={styles.popDivider} />
                        <Box className={styles.popFlex}>
                            <Text className={styles.popItem}>{props.iban}</Text>
                            <Text className={styles.popDetails}>{props.ibanNumber}</Text>
                        </Box>
                        <Box className={styles.popDivider} />
                        <Box className={styles.popFlex}>
                            <Text className={styles.popItem}>{props.recipient}</Text>
                            <Text className={styles.popDetails}>{props.recipientDetails}</Text>
                        </Box>
                        <Box className={styles.popDivider} />
                        <Box className={styles.popFlex}>
                            <Text className={styles.popItem}>{props.bank}</Text>
                            <Text className={styles.popDetails}>{props.bankDetails}</Text>
                        </Box>
                        <Box className={styles.popDivider} />
                        <Box className={styles.popFlex}>
                            <Text className={styles.popItem}>{props.swift}</Text>
                            <Text className={styles.popDetails}>{props.swiftDetails}</Text>
                        </Box>
                        <Box className={styles.popDivider} />
                        <Box display='flex' flexDirection='column'>
                            <Text className={styles.popItem}>{props.purpose}</Text>
                            <Text display='inline' w='100%'>{props.purposeDetails}</Text>
                        </Box>
                    </PopoverBody>
                    <PopoverFooter>
                        <Text>
                            {props.gratitude}
                        </Text>
                    </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    );
};

export default PopoverItem;
