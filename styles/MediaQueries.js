import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';

export const [isLargerThan1280] = useMediaQuery('screen and (min-width: 1280px)');
