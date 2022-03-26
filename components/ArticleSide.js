import AuthorInfoOne from "./AuthorInfoOne"
import withErrorHandled from "./ErrorHandler"
import HotStories from "./HotStories"
import Recommendation from "./Recommendation"

function ArticleSide() {
  return <div className="flex flex-col gap-3 items-center">
    <AuthorInfoOne/>
    <HotStories/>
    <Recommendation/>
  </div>
}

export default withErrorHandled(ArticleSide)