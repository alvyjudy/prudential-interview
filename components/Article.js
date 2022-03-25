import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ArticleInteraction from './ArticleInteraction'
import withErrorHandled from './ErrorHandler'

function Article() {
  const article = useArticle()
  return (
    <div className='relative'>
      <div className='absolute -left-10'>
      <ArticleInteraction/>
      </div>
      <Detail article={article} />
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

function useArticle() {
  const router = useRouter()
  const { pid } = router.query
  const [article, setArticle] = useState({})
  useEffect(() => {
    axios
      .get(`/api/post/${pid}`)
      .then(response => response.data)
      .then(data => {
        setArticle(data)
      })
      .catch(() => {})
  }, [pid])
  return article
}

export default withErrorHandled(Article)
