import React from 'react';
import WarItem from "./WarItem";
import { Grid, GridItem } from '@chakra-ui/react';

const WarListUKR = () => {
    return <Grid ml={{ lg: '5rem', md: '5rem', sm: '3rem', base: '4rem' }}
                 templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
                 gap={{ lg: 10, md: 8, sm: 2, base: 1 }}
    >

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnPersonnel.png'
                warCount='28,700'
                warInfoUKR='Особовий склад'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnTank.png'
                warCount='1,263'
                warInfoUKR='Танки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAV.png'
                warCount='3,090'
                warInfoUKR='Броньовані машини'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnJet.png'
                warCount='204'
                warInfoUKR='Літаки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnHelicopter.png'
                warCount='168'
                warInfoUKR='Helicopters'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnUAV.png'
                warCount='460'
                warInfoUKR='БПЛА'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAirDef.png'
                warCount='93'
                warInfoUKR='Засоби ППО'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnArtillery.png'
                warCount='596'
                warInfoUKR='Арт. системи'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnMLRS.png'
                warCount='200'
                warInfoUKR='РСЗВ'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnTruck.png'
                warCount='2,162'
                warInfoUKR='Автотехніка'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnShip.png'
                warCount='13'
                warInfoUKR='Кораблі'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/excavator.png'
                warCount='43'
                warInfoUKR='Спеціальна техніка'
            />
        </GridItem>
    </Grid>
}

export default WarListUKR;
