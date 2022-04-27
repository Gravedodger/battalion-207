import React, { useContext, useState } from 'react';
import styles from '/styles/Popover.module.css';
import { Box, Text, Button} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

const ModalContainer = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { trigger, title, account, accountNumber, iban, ibanNumber, recipient, recipientDetails, bank, bankDetails,
        swift, swiftDetails, purpose, purposeDetails, gratitude, requisites, requisitesText } = props;

    return <>
        <Button py={5} px={7} mr={8} backgroundColor='#c59d5f' border='#c59d5f' borderRadius={50} fontSize='11px'
                fontWeight={600} color='#fff' onClick={onOpen}>
                {props.requisitesText}
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>
                        <Box>
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
