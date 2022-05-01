import React, { useContext, useState } from 'react';
import styles from '/components/Popover/Popover.module.css';
import {Box, Text, Button, useColorModeValue} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

const ModalContainer = (props) => {
    const textColor = useColorModeValue('#222222', '#fff');
    const titleColor = useColorModeValue('#222222', '#c59d5f');
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <>
        <Button py={5} px={7} mr={8} backgroundColor='#c59d5f' border='#c59d5f' borderRadius={50} fontSize='11px'
                fontWeight={600} color='#fff' onClick={onOpen}>
                {props.requisitesText}
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>

            <ModalOverlay />

            <ModalContent>
                <ModalHeader color={titleColor} className={styles.popTitle}>{props.title}</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <Box>
                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem}>{props.account}</Text>
                            <Text color={textColor} className={styles.popDetails}>{props.accountNumber}</Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem}>{props.iban}</Text>
                            <Text color={textColor} className={styles.popDetails}>{props.ibanNumber}</Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem}>{props.recipient}</Text>
                            <Text color={textColor} className={styles.popDetails}>{props.recipientDetails}</Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem}>{props.bank}</Text>
                            <Text color={textColor} className={styles.popDetails}>{props.bankDetails}</Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem}>{props.swift}</Text>
                            <Text color={textColor} className={styles.popDetails}>{props.swiftDetails}</Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box display='flex' flexDirection='column'>
                            <Text color={titleColor} className={styles.popItem}>{props.purpose}</Text>
                            <Text color={textColor} display='inline' w='100%'>{props.purposeDetails}</Text>
                        </Box>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default ModalContainer;
