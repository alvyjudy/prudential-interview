import Article from "../../components/Article"
import ArticleInteraction from "../../components/ArticleInteraction"
import ArticleSide from "../../components/ArticleSide"
import withErrorHandled from "../../components/ErrorHandler"

function Post() {
  return <div className="relative lg:grid gap-4 grid-cols-4 grid-rows-1">
    <main className="col-span-3">
      <Article/>
    </main>
    <div className="col-span-1">
      <ArticleSide/>
    </div>
    </div>
}

export default withErrorHandled(Post)