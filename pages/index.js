import Head from 'next/head'
import Image from 'next/image'
import BlogPosts from '../components/BlogPosts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>简书 - 简直一模一样</title>
      </Head>
      <main>
        <BlogPosts/>
      </main>
    </div>
  )
}