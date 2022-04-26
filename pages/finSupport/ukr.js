import React, { Fragment } from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import { Center, Container, Box } from '@chakra-ui/react';
import FinCard from "../../components/FinCard";

const FinSupportPageUkr = () => {
    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Фінансові реквізити Батальйону 207" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Реквізити</title>
        </Head>

        <Header pageTitle="Фінансова підтримка" />

        <Center>

            <div>
                <div style={{width: 240}}>
                    <h3>USD</h3>
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
                        <img alt="" border="0" src="https://www.paypal.com/en_UA/i/scr/pixel.gif"
                             width="10"
                             height="10"
                        />
                    </form>
                </div>

                <div style={{width: 240}}>
                    <h3>GBP</h3>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="QRJHRG5U2PB4C" />
                        <input width={170} height={55} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_UA/i/scr/pixel.gif" width="10" height="10" />
                    </form>
                </div>

                <div style={{width: 240}}>
                    <h3>EUR</h3>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="6UVKA4LD6YTG8" />
                        <input  width={170} height={55} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_UA/i/scr/pixel.gif" width="10" height="10" />
                    </form>
                </div>

                <FinCard />
            </div>
        </Center>
    </>
};

export default FinSupportPageUkr;
