import React from 'react';
import styles from '/styles/Popover.module.css';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box,
    PopoverFooter, PopoverArrow, PopoverCloseButton, Button, Text, Flex, Portal, Link
} from '@chakra-ui/react';
import { usdRequisitesUkr } from '/components/requisites/RequisitesUKR';

const PopoverItem = (props) => {
    const {
        trigger,
        title,
        payPal,
        usdReq,
        account, accountNumber,
        iban, ibanNumber,
        recipient, recipientDetails,
        bank, bankDetails,
        swift, swiftDetails,
        purpose, purposeDetails,
        gratitude
    } = props;

    return (
        <Popover placement='bottom-start' closeOnBlur={true}  className='popTrigger'>
            <PopoverTrigger>
                <Box cursor='pointer'>
                    {props.trigger}
                </Box>
            </PopoverTrigger>

                <PopoverContent className={styles.popCanvas}>
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
                            <Button py={5} px={7}
                                    backgroundColor='#c59d5f'
                                    border='#c59d5f' borderRadius={50} fontSize='11px'
                                    fontWeight={600} color='#fff'>
                                s.malyshevskyi.08@aberdeen.ac.uk
                            </Button>
                        </Flex>

                        <Flex className={styles.popFlex}>
                            <Text className={styles.popItem}>Пряме зарахування:</Text>
                            <Link href='#USDRequisites'>
                                <Button py={5} px={7} mr={8}
                                        backgroundColor='#c59d5f'
                                        border='#c59d5f' borderRadius={50} fontSize='11px'
                                        fontWeight={600} color='#fff'  onClick={() => <usdRequisitesUkr />}>
                                    Реквізити
                                </Button>
                            </Link>
                        </Flex>
                    </PopoverBody>
                    <PopoverFooter>
                        <Text>
                            {props.gratitude}
                        </Text>
                    </PopoverFooter>
                </PopoverContent>

        </Popover>
    );
};

export default PopoverItem;
