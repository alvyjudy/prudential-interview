import Image from 'next/image'
import withErrorHandled from './ErrorHandler'
import useArticle from './useArticle'
import useAuthorInfo from './useAuthorInfo'

function AuthorInfoLeft({ children }) {
  const { authorId } = useArticle()
  const info = useAuthorInfo(authorId)
  return (
    <div className='grid grid-rows-3 grid-cols-4 h-20 w-full my-4'>
      <div className='relative row-span-3'>
        {info.avatarUrl && (
          <Image
            src={info.avatarUrl}
            objectFit='cover'
            alt='avatar'
            layout='fill'
            className='rounded-full '
          />
        )}
      </div>
      <p className='col-start-2 col-end-4 rows-span-1 text-2xl font-bold self-start'>{info.authorName}</p>
      <div className='col-start-2 col-end-4 row-span-3 self-end'>{children}</div>
    </div>
  )
}

export default withErrorHandled(AuthorInfoLeft)
