import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import '../styles/globals.css';
import theme from '../styles/theme';
import {PropTypes} from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
      )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object
};

export default MyApp;
