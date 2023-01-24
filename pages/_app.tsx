
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../config/theme';
import Layout from '../common/Layout';
import "@fontsource/jost/400.css"
import "@fontsource/jost/500.css"
import "@fontsource/jost/700.css"
import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
