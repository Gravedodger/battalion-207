import React from 'react';
import { Center } from '@chakra-ui/react';
import WarHeader from "./components/WarHeader";
import WarListUKR from "./components/WarListUKR";

const WarStatsUKR = () => {
    return (
        <Center m={0} p={0} flexDirection='column'>
            <WarHeader titleUKR="Втарти ворога станом на" date='21.05.2022' />
            <WarListUKR />
        </Center>
    );
}

export default WarStatsUKR;
