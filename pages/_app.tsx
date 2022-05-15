import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../config/theme'
import Layout from '../common/Layout/'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp