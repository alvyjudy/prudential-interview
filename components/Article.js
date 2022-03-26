import ArticleInteraction from './ArticleInteraction'
import AuthorInfoTwo from './AuthorInfoTwo'
import Card from './Card'
import withErrorHandled from './ErrorHandler'
import useArticle from './useArticle'

function Article() {
  const article = useArticle()
  return (
    <Card>
      <div className='relative'>
        <div className='absolute top-20 -left-28'>
          <ArticleInteraction />
        </div>
        <div>
          <Detail article={article}>
            <AuthorInfoTwo>
              <p className='text-sm'>{article.timeCreated}</p>
              <p>Views: {article.views}</p>
            </AuthorInfoTwo>
          </Detail>
        </div>
      </div>
    </Card>
  )
}

function Detail({ article, children }) {
  const { title, author, content } = article
  return (
    <>
      <h1 className='text-4xl'>{title}</h1>
      {children}
      <p>{content}</p>
    </>
  )
}

export default withErrorHandled(Article)
