import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'
import withErrorHandled from './ErrorHandler'
import useArticle from './useArticle'
import useAuthorInfo from './useAuthorInfo'
import useRecommend from './useRecommend'

function AuthorInfoRight() {
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
          <p className='row-span-1 col-span-2'>{info.authorName}</p>
          <p className='row-span-1 col-span-2'>总资产：{info.totalAssets}</p>
        </div>
        <div>
          {posts.map(post => {
            const href = `/post/${post._id}`
            return (
              <div key={post._id}>
                <Link href={href}>{post.title}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}

export default withErrorHandled(AuthorInfoRight)
