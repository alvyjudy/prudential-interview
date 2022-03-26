import Image from 'next/image'
import withErrorHandled from './ErrorHandler'
import useRecommend from './useRecommend'

function RecommendedAuthors() {
  const authors = useRecommend('authors')
  return (
    <div className='mt-10'>
      <h1>推荐作者</h1>
      <div>
        {authors.map(author => {
          return <IndividualAuthor key={author.id} author={author}/>
        })}
      </div>
    </div>
  )
}

function IndividualAuthor({author}) {
  return <div className='grid grid-cols-4 grid-rows-2 h-12 gap-2 my-5'>
    <div className='cols-span-1 row-span-2 relative'>
      <Image src={author.avatarUrl} layout='fill' alt='avatar' className='rounded-full'/>
    </div>
    <p className='col-span-3 row-span-1 self-start text-md'>{author.authorName}</p>
    <p className='col-span-3 row-span-1 self-center text-sm'>写了{author.totalWritten}字, {author.totalLikes}喜欢</p>
  </div>
}

export default withErrorHandled(RecommendedAuthors)
