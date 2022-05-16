import React, { useContext, useState } from 'react';
import styles from '/components/PopoverFinSupport/PopoverFinSupport.module.css';
import {Box, Text, Button, useColorModeValue} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

const ModalContainer = ({
                            requisitesText, title, account, accountNumber, iban, ibanNumber, recipient,
                            recipientDetails, bank, bankDetails, swift, swiftDetails, purpose, purposeDetails  }) => {
    const textColor = useColorModeValue('#222222', '#fff');
    const titleColor = useColorModeValue('#222222', '#c59d5f');
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <>
        <Button py={5} px={7} mr={8} backgroundColor='#c59d5f' border='#c59d5f' borderRadius={50} fontSize='11px'
                fontWeight={600} color='#fff' onClick={onOpen}>
                {requisitesText}
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>

            <ModalOverlay />

            <ModalContent>
                <ModalHeader color={titleColor} className={styles.popTitle}>{title}</ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <Box>
                        <Box className={styles.popFlex} pt='1rem' textAlign='center'>
                            <Text color={titleColor} className={styles.popItem} mr='40px'>
                                {account}
                            </Text>
                            <Text color={textColor} className={styles.popDetails}>
                                {accountNumber}
                            </Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex} textAlign='center'>
                            <Text color={titleColor} className={styles.popItem} mr='5px'>
                                {iban}
                            </Text>
                            <Text color={textColor} className={styles.popDetails} pr='2rem'>
                                {ibanNumber}
                            </Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem} mr='-65px'>
                                {recipient}
                            </Text>
                            <Text color={textColor} className={styles.popDetails}>
                                {recipientDetails}
                            </Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem} ml='26px' mr='10px'>
                                {bank}
                            </Text>
                            <Text color={textColor} className={styles.popDetails}>
                                {bankDetails}
                            </Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box className={styles.popFlex}>
                            <Text color={titleColor} className={styles.popItem} ml='-20px' mr='-5px'>
                                {swift}
                            </Text>
                            <Text color={textColor} className={styles.popDetails}>
                                {swiftDetails}
                            </Text>
                        </Box>

                        <Box className={styles.popDivider} />

                        <Box display='flex' flexDirection='column'>
                            <Text color={titleColor} className={styles.popItem} ml='30px' w='100%'>
                                {purpose}
                            </Text>
                            <Text color={textColor} display='inline' maxW='80%' ml='10%'>{purposeDetails}</Text>
                        </Box>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} mb={1} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default ModalContainer;
