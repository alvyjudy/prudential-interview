import Head from 'next/head'
import Article from '../../components/Article'
import ArticleInteraction from '../../components/ArticleInteraction'
import ArticleSide from '../../components/ArticleSide'
import withErrorHandled from '../../components/ErrorHandler'
import useArticle from '../../components/useArticle'

function Post() {
  const article = useArticle()
  return (
    <div>
      <Head>
        <title>简书 - {article.authorName}</title>
      </Head>
      <div className='relative lg:grid gap-4 grid-cols-4 grid-rows-1 max-w-3xl m-auto'>
        <main className='col-span-3'>
          <Article />
        </main>
        <div className='col-span-1'>
          <ArticleSide />
        </div>
      </div>
    </div>
  )
}

export default withErrorHandled(Post)
