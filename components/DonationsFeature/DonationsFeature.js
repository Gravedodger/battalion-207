import React from 'react';
import styles from './DonationsFeature.module.css';
import DFHeader from "./components/DFHeader";
import DFBody from "./components/DFBody";
import { Container, useColorModeValue } from '@chakra-ui/react';

const DonationsFeature = ({ titleUKR, titleENG, totalUKR, totalENG }) => {
    const bgColor = useColorModeValue('rgba(229,180,180,0.82)', 'rgba(112,128,144,0.45)')

    return (
        <Container className={styles.DFCardContainer} backgroundColor={bgColor}>
            <DFHeader titleUkr={titleUKR} titleEng={titleENG} />
            <DFBody totalUkr={totalUKR} totalEng={totalENG} />
        </Container>
    );
}

export default DonationsFeature;
