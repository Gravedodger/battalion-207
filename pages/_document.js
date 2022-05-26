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
                    <meta name="theme-color" content="#fff" />
                    <meta name="apple-mobile-web-app-status-bar" content="#fff" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="rue" />
                    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
                          rel="stylesheet" />

                    <link rel="manifest" href="/public/manifest.json" />

                    <NextScript
                        src="https://www.googletagmanager.com/gtag/js?id=G-JX837M7B8E"
                        strategy="afterInteractive"
                    />
                    <NextScript id="google-analytics" strategy="afterInteractive">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-JX837M7B8E');
                        `}
                    </NextScript>
                    <title></title>
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
