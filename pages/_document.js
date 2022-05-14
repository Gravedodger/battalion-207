import React from 'react';
import theme from '/styles/theme';
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    static getInitialProps(ctx) {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="uk">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="manifest" href="/public/manifest.json" />
                </Head>
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
