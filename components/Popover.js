import React from 'react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody,
    PopoverFooter, PopoverArrow, PopoverCloseButton, Button, Portal
} from '@chakra-ui/react';

const PopoverUKR = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    py={5} px={5} backgroundColor='#c59d5f'
                    border='#c59d5f' borderRadius={50} fontSize='11px'
                    fontWeight={600} color='#fff'>Переказ за реквізитами</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Header</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Button colorScheme='blue'>Button</Button>
                    </PopoverBody>
                    <PopoverFooter>This is the footer</PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    );
};

export default PopoverUKR;
