import React from 'react';
import theme from '/styles/theme';
import {Center, ColorModeScript} from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import ScrollToTop from "react-scroll-up";
import {ChevronUpIcon} from "@chakra-ui/icons";

class Document extends NextDocument {
    static getInitialProps(ctx) {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
