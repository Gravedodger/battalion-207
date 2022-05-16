import React from 'react';
import WarItem from "./WarItem";
import { Grid,GridItem } from '@chakra-ui/react';

const WarListENG = () => {
    return <Grid
        templateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)' }}
        gap={{ lg: 10, md: 8, sm: 4 }}>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icnPersonnel.png'
                warCount='27,700'
                warInfoENG='Personnel'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnTank.png'
                warCount='1,228'
                warInfoENG='Tanks'
            />
        </GridItem>

        <GridItem w='100%'>
            <WarItem
                warIcon='/icnAV.png'
                warCount='2,974'
                warInfoENG='Armored vehicles'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnJet.png'
                warCount='200'
                warInfoENG='Airplanes'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnHelicopter.png'
                warCount='165'
                warInfoENG='Helicopters'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnUAV.png'
                warCount='427'
                warInfoENG='UAV'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnAirDef.png'
                warCount='89'
                warInfoENG='Air defense'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnArtillery.png'
                warCount='577'
                warInfoENG='Artillery'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnMLRS.png'
                warCount='195'
                warInfoENG='Rocket Launchers'
            />
        </GridItem>

        <GridItem w='90%'>
            <WarItem
                warIcon='/icnTruck.png'
                warCount='2,101'
                warInfoENG='Vehicles'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/icnShip.png'
                warCount='13'
                warInfoENG='Naval vessels'
            />
        </GridItem>

        <GridItem w='80%'>
            <WarItem
                warIcon='/excavator.png'
                warCount='42'
                warInfoENG='Special equipment'
            />
        </GridItem>
    </Grid>
}

export default WarListENG;
