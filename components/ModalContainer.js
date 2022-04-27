import React, { useContext } from 'react';
import context from '/context/context';
import styles from '/styles/Popover.module.css';
import { Container, Box, Text, CloseButton } from '@chakra-ui/react';

const ModalContainer = ({props}) => {
    const { trigger, title, account, accountNumber, iban, ibanNumber, recipient, recipientDetails, bank, bankDetails,
        swift, swiftDetails, purpose, purposeDetails, gratitude } = props;
    const { state: {isModalOpen}, modalClose } = useContext(context);
    const verifyOpenState = isModalOpen ? 'modal modal-open' : 'modal';

    return (
        <div className={verifyOpenState}>
            <Container className="modal">
                <Box className="modal open">
                    <CloseButton variant='ghost' onClick={modalClose} />
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
            </Container>
        </div>
    )
}

export default ModalContainer;
