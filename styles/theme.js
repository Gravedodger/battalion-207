import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            html: {
                scrollBehavior: 'smooth'
            },
        },
    },

    // config: {
    //     initialColorMode: "System",
    //     useSystemColorMode: true,
    // },
});

export default theme;
