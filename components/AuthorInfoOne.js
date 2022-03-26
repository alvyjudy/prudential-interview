import Image from 'next/image'
import withErrorHandled from './ErrorHandler'
import useArticle from './useArticle'
import useAuthorInfo from "./useAuthorInfo"
import useRecommend from './useRecommend'

function AuthorInfoOne() {
  const article = useArticle()
  const {authorId} = article
  const info = useAuthorInfo(authorId)
  console.log(info)
  const posts = useRecommend(authorId && `author/${authorId}`)
  return (
    <div>
      {info.avatarUrl && <Image src={info.avatarUrl} alt='avatar' height='24px' width='24px'/>}
      <p>{info.author}</p>
      <div>
        {posts.map(post => {
          return <div key={post.id}>{post.title}</div>
        })}
      </div>
    </div>
  )
}

export default withErrorHandled(AuthorInfoOne)