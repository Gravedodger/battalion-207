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
                warCount='42,340'
                warInfoENG='Personnel'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnTank.WebP'
                warCount='1,811'
                warInfoENG='Tanks'
            />
        </GridItem>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icons/icnAV.WebP'
                warCount='4,070'
                warInfoENG='Armored vehicles'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnJet.WebP'
                warCount='223'
                warInfoENG='Airplanes'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnHelicopter.WebP'
                warCount='192'
                warInfoENG='Helicopters'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icons/icnUAV.WebP'
                warCount='754'
                warInfoENG='UAV'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnAirDef.WebP'
                warCount='132'
                warInfoENG='Air defense'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icons/icnArtillery.WebP'
                warCount='960'
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
                warCount='2,993'
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
                warCount='86'
                warInfoENG='Special equipment'
            />
        </GridItem>
    </Grid>
}

export default WarListENG;
