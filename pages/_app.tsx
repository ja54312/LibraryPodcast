import { AppProps } from '../node_modules/next/app'
import React from 'react'
import Head from '../node_modules/next/head'
import '../styles/index.css'
import '../styles/variables.css'
import '../styles/styles.css'
import Header from '../components/HEADER/header'
import Footer from '../components/FOOTER/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Libreria de Podcast</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp