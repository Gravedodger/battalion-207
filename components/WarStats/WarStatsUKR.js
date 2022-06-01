import React from 'react';
import { Center } from '@chakra-ui/react';
import WarHeader from "./components/WarHeader";
import WarListUKR from "./components/WarListUKR";
import CurrentDate from "../CurrentDate";

const WarStatsUKR = () => {
    return (
        <Center m={0} p={0} flexDirection='column'>
            <WarHeader titleUKR="Втарти ворога станом на" date={CurrentDate} />
            <WarListUKR />
        </Center>
    );
}

export default WarStatsUKR;
