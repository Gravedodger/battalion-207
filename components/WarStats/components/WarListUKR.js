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
                warIcon='/icnPersonnel.png'
                warCount='27,700'
                warInfoUKR='Особовий склад'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnTank.png'
                warCount='1,228'
                warInfoUKR='Танки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnAV.png'
                warCount='2,974'
                warInfoUKR='Броньовані машини'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnJet.png'
                warCount='200'
                warInfoUKR='Літаки'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnHelicopter.png'
                warCount='165'
                warInfoUKR='Helicopters'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnUAV.png'
                warCount='427'
                warInfoUKR='БПЛА'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnAirDef.png'
                warCount='89'
                warInfoUKR='Засоби ППО'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnArtillery.png'
                warCount='577'
                warInfoUKR='Арт. системи'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnMLRS.png'
                warCount='195'
                warInfoUKR='РСЗВ'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnTruck.png'
                warCount='2,101'
                warInfoUKR='Автотехніка'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/icnShip.png'
                warCount='13'
                warInfoUKR='Кораблі'
            />
        </GridItem>
        <GridItem w='80%'>
            <WarItem
                warIcon='/excavator.png'
                warCount='42'
                warInfoUKR='Спеціальна техніка'
            />
        </GridItem>
    </Grid>
}

export default WarListUKR;
