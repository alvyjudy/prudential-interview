import Head from 'next/head'
import Image from 'next/image'
import BlogPosts from '../components/BlogPosts'
import HomeSide from '../components/HomeSide'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>简书 - 简直一模一样</title>
      </Head>
      <main>
        <div className='md:grid gap-4 grid-cols-4 grid-rows-1 max-w-4xl m-auto'>
          <div className='col-span-3'>
            <BlogPosts/>
          </div>
          <div className='col-span-1'>
            <HomeSide/>
          </div>
        </div>
        
      </main>
    </div>
  )
}