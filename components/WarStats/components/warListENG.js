import React from 'react';
import WarItem from "./WarItem";
import { Grid, GridItem } from '@chakra-ui/react';

const WarListENG = () => {
    return <Grid
        templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
        gap={{ lg: 10, md: 8, sm: 4 }}>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnPersonnel.png'
                warCount='28,700'
                warInfoENG='Personnel'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnTank.png'
                warCount='1,263'
                warInfoENG='Tanks'
            />
        </GridItem>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnAV.png'
                warCount='3,090'
                warInfoENG='Armored vehicles'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnJet.png'
                warCount='204'
                warInfoENG='Airplanes'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnHelicopter.png'
                warCount='168'
                warInfoENG='Helicopters'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnUAV.png'
                warCount='460'
                warInfoENG='UAV'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAirDef.png'
                warCount='93'
                warInfoENG='Air defense'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnArtillery.png'
                warCount='596'
                warInfoENG='Artillery'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnMLRS.png'
                warCount='200'
                warInfoENG='Rocket Launchers'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnTruck.png'
                warCount='2,162'
                warInfoENG='Vehicles'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnShip.png'
                warCount='13'
                warInfoENG='Naval vessels'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/excavator.png'
                warCount='43'
                warInfoENG='Special equipment'
            />
        </GridItem>
    </Grid>
}

export default WarListENG;
