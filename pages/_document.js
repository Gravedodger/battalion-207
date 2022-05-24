import React from 'react';
import theme from '/styles/theme';
import Script from "next/script";
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
                    <meta name="theme-color" content="#c59d5f" />
                    <meta name="apple-mobile-web-app-status-bar" content="#c59d5f" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/favicon.ico" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="rue" />
                    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
                          rel="stylesheet" />

                    <link rel="manifest" href="/public/manifest.json" />
                    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
                    <Script strategy="lazyOnload"  dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                                 function gtag(){dataLayer.push(arguments);}
                                 gtag('js', new Date());
                                 gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                 page_path: window.location.pathname,
                                 });
                                  `,
                    }}/>
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
