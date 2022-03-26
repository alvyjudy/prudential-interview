import withErrorHandled from "./ErrorHandler"
import useRecommend from "./useRecommend"

function RecommendedAuthors() {
  const authors = useRecommend('authors')
  return <div>{
    authors.map(author => {
      return <p key={author.authorId}>{author.author}</p>
    })
}</div>
}

export default withErrorHandled(RecommendedAuthors)