import React from 'react';
import { Center } from '@chakra-ui/react';
import WarHeader from "./components/WarHeader";
import WarListENG from "./components/warListENG";

const WarStatsENG = () => {
    return (
        <Center m={0} p={0} flexDirection='column'>
            <WarHeader titleENG="Enemy losses on" date='03.05.2022' />
            <WarListENG />
        </Center>
    );
}

export default WarStatsENG;
