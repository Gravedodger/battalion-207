import React, { Fragment } from 'react';
import styles from "../../styles/FinSupport.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import {Box, Center, Flex, Text} from "@chakra-ui/react";
import {TransferBtnEng} from "../../components/Buttons";

const FinSupportPageEng = () => {
    return <>
        <Head>
            <meta lang="en" />
            <meta name="description" content="Battalion-207 bank account requisites" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Requisites</title>
        </Head>

        <Header pageTitle="Financial support" />

        <Center className={styles.finSupportMain}>
            <Flex className={styles.payPalContainer}>
                <Flex className={styles.payPalItem}>
                    <Box className={styles.currencyIcn}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                            <title>USD</title>
                            <path d="M30.27,0H92.61a30.35,30.35,0,0,1,30.27,30.27V92.61a30.35,30.35,0,0,1-30.27,30.27H30.27A30.35,30.35,0,0,1,0,92.61V30.27A30.35,30.35,0,0,1,30.27,0ZM54.81,88.26A17.51,17.51,0,0,1,53,88l-3.27-.46-2-.34q-1-.18-1.95-.39c-.69-.16-1.33-.31-1.89-.46l-.77-.21V73.53l3.57.29,2.63.15,2.75.12,2.79.09,2.71,0,2.51,0c.77,0,1.44,0,2-.08a12.78,12.78,0,0,0,1.59-.24,5.64,5.64,0,0,0,1.12-.38,2.47,2.47,0,0,0,.67-.46,1.42,1.42,0,0,0,.34-.53,2.55,2.55,0,0,0,.12-.83V70.9a1.67,1.67,0,0,0-.64-1.46,2.92,2.92,0,0,0-.87-.42,3.55,3.55,0,0,0-1.07-.15H59.6a26.7,26.7,0,0,1-7.39-.93,14.77,14.77,0,0,1-5.52-2.86,11.77,11.77,0,0,1-3.44-5.2,22.5,22.5,0,0,1-1.11-7.48V50.1A18.83,18.83,0,0,1,43.37,43a12.8,12.8,0,0,1,3.74-5.17,17.8,17.8,0,0,1,3.7-2.44,15.11,15.11,0,0,1,4-1.2V28.61H66.46V34a51.82,51.82,0,0,1,5.31.77l1,.17c.82.14,1.63.3,2.44.47s1.49.32,2.18.48l.79.2V48.73L77,48.63c-1.11-.1-2.24-.19-3.38-.25s-2.49-.15-3.78-.21-2.61-.1-3.78-.12-2.23,0-3.44,0q-1,0-1.77.06a15.21,15.21,0,0,0-1.53.19,4.74,4.74,0,0,0-1.1.34,2.48,2.48,0,0,0-.71.49,1.55,1.55,0,0,0-.38.63A3.42,3.42,0,0,0,57,50.8v.69a2.86,2.86,0,0,0,.2,1.13,1.87,1.87,0,0,0,.53.71,2.69,2.69,0,0,0,1,.48A6.75,6.75,0,0,0,60.5,54h4.59a21.57,21.57,0,0,1,4.69.49A14,14,0,0,1,73.7,56,13,13,0,0,1,79,61.42a15.71,15.71,0,0,1,1.32,3.63,18.26,18.26,0,0,1,.43,4v2.3a27.6,27.6,0,0,1-.6,6A13.82,13.82,0,0,1,78.26,82a12,12,0,0,1-3,3.18,12.88,12.88,0,0,1-4.07,1.94l-.39.11a22.48,22.48,0,0,1-4.3.93v6.06H54.81v-6ZM92.61,12.1H30.27A18.23,18.23,0,0,0,12.1,30.27V92.61a18.23,18.23,0,0,0,18.17,18.17H92.61a18.23,18.23,0,0,0,18.17-18.17V30.27A18.23,18.23,0,0,0,92.61,12.1Z" />
                        </svg>
                    </Box>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="RWWG2JPH5QYRN" />
                        <input width={170} height={55}
                               type="image"
                               src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                               border="0"
                               name="submit"
                               title="PayPal - The safer, easier way to pay online!"
                               alt="Donate with PayPal button"
                        />
                    </form>
                    <Text className={styles.textOR}>OR</Text>
                    <TransferBtnEng />
                </Flex>

                <Box className={styles.finDivider} />

                <Flex className={styles.payPalItem}>
                    <Box className={styles.currencyIcn}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                            <title>GBP</title>
                            <path d="M30.27,0H92.61a30.35,30.35,0,0,1,30.27,30.27V92.61a30.35,30.35,0,0,1-30.27,30.27H30.27A30.35,30.35,0,0,1,0,92.61V30.27A30.35,30.35,0,0,1,30.27,0Zm29,57.18H70.7v9.07H60.55A19.31,19.31,0,0,1,59.37,72a14.66,14.66,0,0,1-2.64,4.07,17.27,17.27,0,0,1,3.63-.47,22.84,22.84,0,0,1,5,.74,32,32,0,0,0,6.78,1A16.53,16.53,0,0,0,75.78,77a21.88,21.88,0,0,0,4-1.47L85,86.82a33.83,33.83,0,0,1-6.59,2.59,25,25,0,0,1-6.08.71,31.88,31.88,0,0,1-8.14-1.24c-4-1.1-6.48-1.73-7.45-1.91a17.75,17.75,0,0,0-3.1-.26q-4.89,0-10.77,3.41L37.92,79.34q8-5.69,8-11.39c0-.21,0-.77-.08-1.7h-7.9V57.18h5.65c-1-3.32-1.51-5.26-1.62-5.79a15.59,15.59,0,0,1-.24-3,14.87,14.87,0,0,1,2.52-8.49,14.31,14.31,0,0,1,6.62-5.45,29.35,29.35,0,0,1,11.06-1.71,29.52,29.52,0,0,1,10.3,1.46,14.66,14.66,0,0,1,6.42,4.83,19.52,19.52,0,0,1,3.62,8.19L67.76,49.5C67,46.82,66.19,45,65.25,44.16A4.57,4.57,0,0,0,62,42.84a4.67,4.67,0,0,0-3.54,1.43,5.71,5.71,0,0,0-1.35,4.07,13.15,13.15,0,0,0,.27,2.7c.17.88.77,2.92,1.81,6.14ZM92.61,12.1H30.27A18.23,18.23,0,0,0,12.1,30.27V92.61a18.23,18.23,0,0,0,18.17,18.17H92.61a18.23,18.23,0,0,0,18.17-18.17V30.27A18.23,18.23,0,0,0,92.61,12.1Z" />
                        </svg>
                    </Box>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="QRJHRG5U2PB4C" />
                        <input width={170} height={55} type="image"
                               src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                               border="0" name="submit"
                               title="PayPal - The safer, easier way to pay online!"
                               alt="Donate with PayPal button" />
                    </form>
                    <Text className={styles.textOR}>OR</Text>
                    <TransferBtnEng />
                </Flex>

                <Box className={styles.finDivider} />

                <Flex className={styles.payPalItem}>
                    <Box className={styles.currencyIcn}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                            <title>EUR</title>
                            <path d="M30.27,0H92.61a30.35,30.35,0,0,1,30.27,30.27V92.61a30.35,30.35,0,0,1-30.27,30.27H30.27A30.35,30.35,0,0,1,0,92.61V30.27A30.35,30.35,0,0,1,30.27,0Zm42,63.34-1.69,7H58.84c1.52,4.81,4.84,7.22,9.91,7.22a25.79,25.79,0,0,0,15.64-5.39V86.64a25.24,25.24,0,0,1-14.58,4.12q-13.81,0-20.44-6.3a26.14,26.14,0,0,1-8.08-14.07h-7l1.84-7h4.28a16,16,0,0,1-.08-2.05,19.91,19.91,0,0,1,.08-2.23H35.24L37.08,52h4.21q5-19.89,27.65-19.89a32.22,32.22,0,0,1,15,4l-3.49,14q-5.28-4.84-11-4.84c-5,0-8.41,2.25-10.16,6.74h14l-1.69,7.05H57.92c-.05.52-.08,1.26-.08,2.23v2.05ZM92.61,12.1H30.27A18.23,18.23,0,0,0,12.1,30.27V92.61a18.23,18.23,0,0,0,18.17,18.17H92.61a18.23,18.23,0,0,0,18.17-18.17V30.27A18.23,18.23,0,0,0,92.61,12.1Z" />
                        </svg>
                    </Box>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="6UVKA4LD6YTG8" />
                        <input  width={170} height={55} type="image"
                                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                                border="0" name="submit" title="PayPal - The safer, easier way to pay online!"
                                alt="Donate with PayPal button" />
                    </form>
                    <Text className={styles.textOR}>OR</Text>
                    <TransferBtnEng />
                </Flex>

                <Box className={styles.finDivider} />

                <Flex className={styles.payPalItem}>
                    <Box className={styles.currencyIcn} mb='30%'>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.08 122.88">
                            <title>ukraine-hryvnia</title>
                            <path d="M67.41,55.44l-14.8,12H96.08V80.64H39.7c-3.76,2.84-6,6.3-6,10.71,0,7.56,6,11.66,16.71,11.66,9.13,0,17-4.4,23.3-13.53L91,101.14c-9.43,14.5-26.46,21.74-42.53,21.74-21.11,0-36.84-10.07-36.84-26.77a24.07,24.07,0,0,1,5.66-15.44H0V67.44H27.71l15.13-12H0V42.24H56.07c4.1-3.77,6-7.24,6-11.34,0-6.6-6-11.33-15.13-11.33-8.83,0-16.37,5-21.74,13.53L8.5,21.74C17.64,7.24,32.44,0,48.51,0c21.73,0,35.9,11.34,35.9,26.77a26,26,0,0,1-5,15.44h16.7V55.44Z" />
                        </svg>
                    </Box>
                    <TransferBtnEng />
                </Flex>
            </Flex>
        </Center>
    </>
};

export default FinSupportPageEng;
