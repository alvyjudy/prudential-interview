import Card from "./Card"
import withErrorHandled from "./ErrorHandler"
import StoriesHeading from "./StoriesHeading"
import useRecommend from "./useRecommend"

function Recommendation() {
  const stories = useRecommend('default')
  return (
    <Card>
      <StoriesHeading title="推荐阅读"/>
      <div>
        {stories.map(story => {
          return <div key={story.id}>
            <h2>{story.title}</h2>
            <h3>阅读：{story.views}</h3>
          </div>
        })}
      </div>
    </Card>
  )
}

export default withErrorHandled(Recommendation)