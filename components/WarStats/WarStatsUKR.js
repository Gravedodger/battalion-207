import React from 'react';
import { Center } from '@chakra-ui/react';
import WarHeader from "./components/WarHeader";
import WarListUKR from "./components/WarListUKR";

const WarStatsUKR = () => {
    return (
        <Center m={0} p={0} flexDirection='column'>
            <WarHeader titleUKR="Втарти ворога на" date='10.05.2022' />
            <WarListUKR />
        </Center>
    );
}

export default WarStatsUKR;