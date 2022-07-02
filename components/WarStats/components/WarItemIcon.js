import React from 'react';
import { Image } from '@chakra-ui/react';

const WarItemIcon = ({ icon }) => {
    return <Image src={icon}
                  width={{ lg: '60px', md: '50px', sm: '40px', base: '30px' }}
                  height='auto'
                  filter='invert(72%) sepia(37%) saturate(456%) hue-rotate(357deg) brightness(82%) contrast(95%)'
                  alt='icon'
                  lazy='true'
    />
}

export default WarItemIcon;
