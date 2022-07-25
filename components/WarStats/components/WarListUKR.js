import React from 'react';
import WarItem from "./WarItem";
import { Grid, GridItem } from '@chakra-ui/react';

const WarListUKR = () => {
    return <Grid ml={{ lg: '5rem', md: '5rem', sm: '3rem', base: '4rem' }}
                 templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
                 gap={{ lg: 10, md: 8, sm: 2, base: 1 }} >

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnPersonnel.WebP'
                warCount='39,700'
                warInfoUKR='Особовий склад'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnTank.WebP'
                warCount='1,730'
                warInfoUKR='Танки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAV.WebP'
                warCount='3,950'
                warInfoUKR='Броньовані машини'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnJet.WebP'
                warCount='222'
                warInfoUKR='Літаки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnHelicopter.WebP'
                warCount='188'
                warInfoUKR='Helicopters'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnUAV.WebP'
                warCount='719'
                warInfoUKR='БПЛА'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAirDef.WebP'
                warCount='116'
                warInfoUKR='Засоби ППО'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnArtillery.WebP'
                warCount='876'
                warInfoUKR='Арт. системи'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnMLRS.WebP'
                warCount='257'
                warInfoUKR='РСЗВ'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnTruck.WebP'
                warCount='2,832'
                warInfoUKR='Автотехніка'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnShip.WebP'
                warCount='15'
                warInfoUKR='Кораблі'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/excavator.WebP'
                warCount='73'
                warInfoUKR='Спеціальна техніка'
            />
        </GridItem>
    </Grid>
}

export default WarListUKR;
