import React from 'react';
import styles from "/Icons.module.css";
import Router from "next/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue } from "@chakra-ui/react";

const viewBox = '0 0 20 20';

const ReturnButton = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return <Box onClick={() => Router.back()}>
        <ChevronLeftIcon className={styles.size}
                         color={textColor}
                         cursor="pointer"
        />
    </Box>
}

export default ReturnButton;
