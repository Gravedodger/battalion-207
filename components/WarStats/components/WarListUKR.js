import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import WarItem from "./WarItem";

const WarListUKR = () => {
    return <Grid templateColumns="repeat(4, 1fr)" gap={10}>
        <GridItem w='90%'>
            <WarItem
                warIcon='/icnPersonnel.png'
                warCount='~ 24,500'
                warInfoUKR='Особовий склад'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnTank.png'
                warCount='1,077'
                warInfoUKR='Танки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnAV.png'
                warCount='2,610'
                warInfoUKR='Броньовані машини'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnJet.png'
                warCount='194'
                warInfoUKR='Літаки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnHelicopter.png'
                warCount='155'
                warInfoUKR='Helicopters'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnUAV.png'
                warCount='303'
                warInfoUKR='БПЛА'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnAirDef.png'
                warCount='81'
                warInfoUKR='Засоби ППО'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnArtillery.png'
                warCount='491'
                warInfoUKR='Арт. системи'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnMLRS.png'
                warCount='163'
                warInfoUKR='РСЗВ'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnTruck.png'
                warCount='1,867'
                warInfoUKR='Автотехніка + Цистерни'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnShip.png'
                warCount='10'
                warInfoUKR='Кораблі'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/excavator.png'
                warCount='38'
                warInfoUKR='Спеціальна техніка'
            />
        </GridItem>
    </Grid>
}

export default WarListUKR;
