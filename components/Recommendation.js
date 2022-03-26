import Link from "next/link"
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
          return <div key={story._id} className='border-t-2 border-neutral-600 my-2'>
            <h2>
              <Link href={`/post/${story._id}`}>
              {story.title}
              </Link>
            </h2>
            <p className="text-sm">阅读：{story.views}</p>
          </div>
        })}
      </div>
    </Card>
  )
}

export default withErrorHandled(Recommendation)