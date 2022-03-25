import Card from "./Card"
import withErrorHandled from "./ErrorHandler"
import StoriesHeading from "./StoriesHeading"
import useStories from "./useStories"

function Recommendation() {
  const stories = useStories('default')
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