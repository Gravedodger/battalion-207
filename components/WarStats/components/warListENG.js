import React from 'react';
import { Grid,GridItem } from '@chakra-ui/react';
import WarItem from "./WarItem";

const WarListENG = () => {
    return <Grid templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)' }}

                 gap={{ lg: 10, md: 8, sm: 4 }}>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icnPersonnel.png'
                warCount='~ 24,200'
                warInfoENG='Personnel'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnTank.png'
                warCount='1,062'
                warInfoENG='Tanks'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnAV.png'
                warCount='2,567'
                warInfoENG='Armored vehicles'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnJet.png'
                warCount='194'
                warInfoENG='Airplanes'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnHelicopter.png'
                warCount='155'
                warInfoENG='Helicopters'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnUAV.png'
                warCount='291'
                warInfoENG='UAV'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnAirDef.png'
                warCount='80'
                warInfoENG='Air defense'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnArtillery.png'
                warCount='475'
                warInfoENG='Artillery'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnMLRS.png'
                warCount='162'
                warInfoENG='Rocket Launchers'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnTruck.png'
                warCount='1,843'
                warInfoENG='Vehicles + Fuel trucks'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnShip.png'
                warCount='10'
                warInfoENG='Naval vessels'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/excavator.png'
                warCount='38'
                warInfoENG='Special equipment'
            />
        </GridItem>
    </Grid>
}

export default WarListENG;
