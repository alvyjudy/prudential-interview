import axios from 'axios'
import { useState, useEffect } from 'react'
import withErrorHandled from './ErrorHandler'
import StoriesHeading from './StoriesHeading'
import useRecommend from './useRecommend'
import Card from './Card'

function HotStories() {
  const stories = useRecommend('hot')
  return (
    <Card>
      <StoriesHeading title="热门故事"/>
      <div className='w-full'>
      {stories.map(story => {
        return <div key={story.id}>
          <h2>{story.title}</h2>
        </div>
      })}
      </div>
      
    </Card>
  )
}

export default withErrorHandled(HotStories)
