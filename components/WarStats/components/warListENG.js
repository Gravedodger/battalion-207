import React from 'react';
import WarItem from "./WarItem";
import { Grid, GridItem } from '@chakra-ui/react';

const WarListENG = () => {
    return <Grid
        templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
        gap={{ lg: 10, md: 8, sm: 4 }}>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnPersonnel.WebP'
                warCount='29,600'
                warInfoENG='Personnel'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnTank.WebP'
                warCount='1,315'
                warInfoENG='Tanks'
            />
        </GridItem>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnAV.WebP'
                warCount='3,235'
                warInfoENG='Armored vehicles'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnJet.WebP'
                warCount='206'
                warInfoENG='Airplanes'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnHelicopter.WebP'
                warCount='170'
                warInfoENG='Helicopters'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnUAV.WebP'
                warCount='502'
                warInfoENG='UAV'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAirDef.WebP'
                warCount='93'
                warInfoENG='Air defense'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnArtillery.WebP'
                warCount='617'
                warInfoENG='Artillery'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnMLRS.WebP'
                warCount='201'
                warInfoENG='Rocket Launchers'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnTruck.WebP'
                warCount='2,225'
                warInfoENG='Vehicles'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnShip.WebP'
                warCount='13'
                warInfoENG='Naval vessels'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/excavator.WebP'
                warCount='47'
                warInfoENG='Special equipment'
            />
        </GridItem>
    </Grid>
}

export default WarListENG;
