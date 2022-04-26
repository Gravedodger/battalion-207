import React, { Fragment } from 'react';
import styles from '/styles/FinCard.module.css';
import { Container, Box, Text, BackgroundProps } from '@chakra-ui/react';
import Image from "next/image";
import gbp from '/public/images/currency/gbp.png';

const FinCard = () => {
    return <>
        <Box w={250} h={250}
            backgroundImage="url('/logo.png')"
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='contain'
            backgroundBlendMode='hue'
            backgroundColor='rgba(0,0,0,0.7)'
        >

            <Box style={{width: 240}} position='relative' left={5} top={50}
            >

                <Image src={gbp} w='20px' h='20px' />

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
            </Box>


        </Box>
    </>
}

export default FinCard;
