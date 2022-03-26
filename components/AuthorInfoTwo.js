import Image from 'next/image'
import withErrorHandled from './ErrorHandler'
import useArticle from './useArticle'
import useAuthorInfo from "./useAuthorInfo"

function AuthorInfoTwo({
  children
}) {
  const {authorId} = useArticle()
  const info = useAuthorInfo(authorId)
  return (
    <div className='flex'>
      {info.avatarUrl && <Image src={info.avatarUrl} alt='avatar' height='24px' width='24px'/>}
      <div>
        <p>{info.author}</p>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default withErrorHandled(AuthorInfoTwo)