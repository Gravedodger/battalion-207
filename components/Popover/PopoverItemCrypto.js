import React  from 'react';
import styles from '/components/Popover/Popover.module.css';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box, PopoverFooter, PopoverArrow,
    PopoverCloseButton, Text } from '@chakra-ui/react';

const PopoverItemCrypto = (props) => {
    const { trigger, title, payPal, payoneer, address, gratitude, requisites, wallet } = props;

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
                    <Text fontSize={{ lg: 'md', md: 'sm', sm: 'sm' }}
                          className={styles.wallet}>
                        {props.wallet}
                    </Text>
                </PopoverBody>
                <PopoverFooter>
                    <Text>
                        {props.gratitude}
                    </Text>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}

export default PopoverItemCrypto;
