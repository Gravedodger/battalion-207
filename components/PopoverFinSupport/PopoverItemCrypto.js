import React  from 'react';
import styles from '/components/PopoverFinSupport/PopoverFinSupport.module.css';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Box, PopoverFooter, PopoverArrow,
    PopoverCloseButton, Text } from '@chakra-ui/react';

const PopoverItemCrypto = ({ trigger, title, wallet, gratitude, ukraine }) => {

    return (
        <Popover placement='bottom-start' closeOnBlur={true}  className='popTrigger'>
            <PopoverTrigger>
                <Box cursor='pointer'>
                    {trigger}
                </Box>
            </PopoverTrigger>

            <PopoverContent className={styles.popCanvas}>
                <PopoverArrow />
                <PopoverHeader>
                    <Text className={styles.popTitle}>
                        {title}
                    </Text>
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody className={styles.popBody}>
                    <Text fontSize={{ lg: 'md', md: 'sm', sm: 'sm' }}
                          className={styles.wallet}>
                        {wallet}
                    </Text>
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

export default PopoverItemCrypto;
