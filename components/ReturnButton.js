import React from 'react';
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Router from "next/router";
import {Box} from "@chakra-ui/react";

const ReturnButton = () => {
    return (
        <Box onClick={() => Router.back()}>
            <ChevronLeftIcon fontSize="50px" color='#c59d5f' cursor="pointer" />
        </Box>
    );
}

export default ReturnButton;
