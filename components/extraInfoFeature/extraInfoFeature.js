import React from "react";
import styles from './extraInfoFeature.module.css';
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Link, useColorModeValue } from "@chakra-ui/react";

const ExtraInfoFeature = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return <Box className={styles.featureLocation}>
        <Link href='./../requisitesSimple'>
            <InfoOutlineIcon
                fontSize={{ lg: '40px', md: '35px', sm: '30px', base: '30px' }}
                variant="ghost"
                aria-label="Quick link to financial support page"
                cursor='pointer'
                color={textColor}
                mr='3rem'
                ml='-3rem'
            />
        </Link>
    </Box>
}

export default ExtraInfoFeature;
