import Article from "../../components/Article"
import withErrorHandled from "../../components/ErrorHandler"

function Post() {
  return <Article/>
}

export default withErrorHandled(Post)