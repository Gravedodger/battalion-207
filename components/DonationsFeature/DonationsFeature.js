import React from 'react';
import styles from './DonationsFeature.module.css';
import {Container, useColorModeValue} from '@chakra-ui/react';
import DFHeader from "./components/DFHeader";
import DFBody from "./components/DFBody";

const DonationsFeature = ({ titleUKR, titleENG }) => {
    const bgColor = useColorModeValue('rgba(229,180,180,0.82)', 'rgba(112,128,144,0.45)')

    return (
        <Container className={styles.DFCardContainer} backgroundColor={bgColor}>
            <DFHeader titleUkr={titleUKR} titleEng={titleENG} />
            <DFBody />
        </Container>
    );
}

export default DonationsFeature;
