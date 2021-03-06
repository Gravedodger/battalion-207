import React from 'react';
import CurrentDate from "../CurrentDate";
import { Center } from '@chakra-ui/react';
import WarHeader from "./components/WarHeader";
import WarListENG from "./components/warListENG";

const WarStatsENG = () => {
    return (
        <Center p={0} flexDirection='column'>
            <WarHeader titleENG="Enemy losses on" date={CurrentDate} />
            <WarListENG />
        </Center>
    );
}

export default WarStatsENG;
