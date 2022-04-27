import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    static getInitialProps(ctx) {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <ColorModeScript initialColorMode="system" />
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
