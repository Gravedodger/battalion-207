import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            html: {
                scrollBehavior: 'smooth',
            },
        },
    },

    config: {
        initialColorMode: "System",
    },
});

export default theme;
