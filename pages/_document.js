import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='
      bg-white dark:bg-neutral-800 
      text-black dark:text-neutral-400
      text-xl
    '>
      <Head>
      
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}