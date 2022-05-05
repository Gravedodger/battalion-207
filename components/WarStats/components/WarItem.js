import React from 'react';
import {Box, Grid} from '@chakra-ui/react';
import WarItemIcon from "./WarItemIcon";
import WarItemCount from "./WarItemCount";
import WarItemInfo from "./WarItemInfo";

const WarItem = ({ warIcon, warCount, warInfoUKR, warInfoENG }) => {
    return (
        <Box>
            <Box mt='1rem' mr='2rem'
                 display='flex'
                 alighItems='center'
                 justifyContent='space-between'>
                <WarItemIcon icon={warIcon} />
                <WarItemCount count={warCount} />
            </Box>

            <WarItemInfo infoUKR={warInfoUKR} infoENG={warInfoENG} />
        </Box>
    );
}

export default WarItem;
