import React, { Component } from "react";
import '../styles/globals.css';
import theme from '../styles/theme';
import PropTypes from 'prop-types';
import { ChakraProvider } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-up";
import { ChevronUpIcon } from "@chakra-ui/icons";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />

          <ScrollToTop showUnder={600}>
                <span className='buttonTopContainer'>
                    <ChevronUpIcon
                        w='5rem' h='5rem'
                    />
                </span>
          </ScrollToTop>

      </ChakraProvider>
  );
}

MyApp.propTypes = {
    pageProps: PropTypes.object
};

export default MyApp;
