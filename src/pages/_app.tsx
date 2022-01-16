import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { theme } from '../styles/theme'
import { Header } from '../components/Header'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
