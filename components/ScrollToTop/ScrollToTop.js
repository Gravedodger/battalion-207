import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import { Box } from '@chakra-ui/react';
import { ChevronUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box className={styles.topToBtn}>
            {" "}
            {showTopBtn && (
                <ChevronUpIcon className={styles.toTopIcn} onClick={goToTop} />
            )}{" "}
        </Box>
    );
}

export default ScrollToTop;
