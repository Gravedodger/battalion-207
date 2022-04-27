import React from 'react';

export const PayPalUSD = () => {
    return <form action="https://www.paypal.com/donate" method="post" target="_top">
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
}

export const PayPalGBP = () => {
    return <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="QRJHRG5U2PB4C" />
        <input width={170} height={55} type="image"
               src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
               border="0" name="submit"
               title="PayPal - The safer, easier way to pay online!"
               alt="Donate with PayPal button" />
    </form>
}

export const PayPalEUR = () => {
    return <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="6UVKA4LD6YTG8" />
        <input  width={170} height={55} type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0" name="submit" title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button" />
    </form>
}
