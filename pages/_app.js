import React, { Component, useEffect } from "react";
import '../styles/globals.css';
import theme from '../styles/theme';
import PropTypes from 'prop-types';
import { ChakraProvider } from "@chakra-ui/react";
import ScrollToTop from "../components/ScrollToTop";
import useRouter from "next";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
          <ScrollToTop />
          <Component {...pageProps} />
      </ChakraProvider>
  );
}

MyApp.propTypes = {
    pageProps: PropTypes.object
};

export default MyApp;
