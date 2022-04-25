import React from 'react';
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Router from "next/router";
import {Box, IconButton} from "@chakra-ui/react";

const ReturnButton = () => {
    return (
        <Box onClick={() => Router.back()}>
            <ChevronLeftIcon fontSize={{ lg: 50, md: 40, sm: 30 }}  fontWeight={800} color='#c59d5f' cursor="pointer" />
        </Box>
    );
}

export default ReturnButton;
