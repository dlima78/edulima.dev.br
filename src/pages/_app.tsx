import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eduardo Lima</title>
        <meta
          name="description"
          content="Um blog sobre desenvolvimento de software e tecnologia da informação."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
