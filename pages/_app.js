import Head from 'next/head'
import '../styles/globals.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  )
}

export default MyApp
