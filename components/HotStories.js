import axios from 'axios'
import { useState, useEffect } from 'react'
import withErrorHandled from './ErrorHandler'
import StoriesHeading from './StoriesHeading'
import useRecommend from './useRecommend'
import Card from './Card'
import Link from 'next/link'

function HotStories() {
  const stories = useRecommend('hot')
  return (
    <Card>
      <StoriesHeading title="热门故事"/>
      <div className='w-full'>
      {stories.map(story => {
        return <div key={story.id} className='border-t-2 border-neutral-600 my-2'>
          <h2>
            <Link href={`/post/${story._id}`}>
              {story.title}
            </Link>
          </h2>
        </div>
      })}
      </div>
      
    </Card>
  )
}

export default withErrorHandled(HotStories)
