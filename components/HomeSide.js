import withErrorHandled from "./ErrorHandler"
import QuickLinks from "./QuickLinks"
import RecommendedAuthors from "./RecommendedAuthors"

function HomeSide() {
  return <div>
    <QuickLinks/>
    <RecommendedAuthors/>
  </div>
}



export default withErrorHandled(HomeSide)