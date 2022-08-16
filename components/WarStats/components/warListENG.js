import React from 'react';
import WarItem from "./WarItem";
import { Grid, GridItem } from '@chakra-ui/react';

const WarListENG = () => {
    return <Grid
        templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
        gap={{ lg: 10, md: 8, sm: 4 }} >

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnPersonnel.WebP'
                warCount='43,750'
                warInfoENG='Personnel'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnTank.WebP'
                warCount='1,876'
                warInfoENG='Tanks'
            />
        </GridItem>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnAV.WebP'
                warCount='4,141'
                warInfoENG='Armored vehicles'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnJet.WebP'
                warCount='233'
                warInfoENG='Airplanes'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnHelicopter.WebP'
                warCount='195'
                warInfoENG='Helicopters'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnUAV.WebP'
                warCount='787'
                warInfoENG='UAV'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAirDef.WebP'
                warCount='136'
                warInfoENG='Air defense'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnArtillery.WebP'
                warCount='985'
                warInfoENG='Artillery'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnMLRS.WebP'
                warCount='261'
                warInfoENG='Rocket Launchers'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnTruck.WebP'
                warCount='3,044'
                warInfoENG='Vehicles'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnShip.WebP'
                warCount='15'
                warInfoENG='Naval vessels'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/excavator.WebP'
                warCount='92'
                warInfoENG='Special equipment'
            />
        </GridItem>
    </Grid>
}

export default WarListENG;
