
import ArticleInteraction from './ArticleInteraction'
import AuthorInfoTwo from './AuthorInfoTwo'
import withErrorHandled from './ErrorHandler'
import useArticle from './useArticle'

function Article() {
  const article = useArticle()
  return (
    <div className='relative'>
      <div className='absolute -left-10'>
        <ArticleInteraction/>
      </div>
      <div>
        <AuthorInfoTwo>
          <p className='text-sm'>{article.timeCreated}</p>
          <p>Views: {article.views}</p>
        </AuthorInfoTwo>
        <Detail article={article} />
      </div>
    </div>
  )
}

function Detail({ article }) {
  const { title, author, content } = article
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  )
}



export default withErrorHandled(Article)
