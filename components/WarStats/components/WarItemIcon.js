import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const WarItemIcon = ({ icon }) => {
    return <Image src={icon}
                  width='60px'
                  filter='invert(72%) sepia(37%) saturate(456%) hue-rotate(357deg) brightness(82%) contrast(95%)'
    />
}

export default WarItemIcon;
