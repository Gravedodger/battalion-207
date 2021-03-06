import React from "react";
import '/styles/globals.css';
import theme from '/styles/theme';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ScrollToTop from "/components/ScrollToTop";
import { ChakraProvider } from "@chakra-ui/react";
import ExtraInfoFeature from "../components/extraInfoFeature/extraInfoFeature";

function MyApp({ Component, pageProps, router }) {
  return (
      <ChakraProvider theme={theme}>
          <ScrollToTop />
          <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
              pageInitial: {
                  opacity: 0
              },
              pageAnimate: {
                  opacity: 1
              },
          }} transition={{
              type: "spring",
              default: {duration: 0.8},
          }}>
              <Component {...pageProps} />
          </motion.div>
      </ChakraProvider>
  );
}

MyApp.propTypes = {
    pageProps: PropTypes.object
};

export default MyApp;
