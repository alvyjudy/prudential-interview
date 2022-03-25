import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>简书 - 简直一模一样</title>
      </Head>
      <main>
        <h1>第一篇文章</h1>
        <h1>Heading</h1>
      </main>
    </div>
  )
}