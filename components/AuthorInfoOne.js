import Image from 'next/image'
import Card from './Card'
import withErrorHandled from './ErrorHandler'
import useArticle from './useArticle'
import useAuthorInfo from './useAuthorInfo'
import useRecommend from './useRecommend'

function AuthorInfoOne() {
  const article = useArticle()
  const { authorId } = article
  const info = useAuthorInfo(authorId)
  const posts = useRecommend(authorId && `author/${authorId}`)
  return (
    <Card>
      <div>
        <div className='grid grid-rows- grid-cols-3 h-20'>
          <div className='col-span-1 row-span-2 relative p-1'>
            {info.avatarUrl && (
              <Image
                objectFit='cover'
                className='rounded-full'
                src={info.avatarUrl}
                alt='avatar'
                layout='fill'
              />
            )}
          </div>
          <p className='row-span-1 col-span-2'>{info.author}</p>
        </div>
        <div>
          {posts.map(post => {
            return <div key={post.id}>{post.title}</div>
          })}
        </div>
      </div>
    </Card>
  )
}

export default withErrorHandled(AuthorInfoOne)
