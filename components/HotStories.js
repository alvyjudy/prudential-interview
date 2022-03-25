import axios from 'axios'
import { useState, useEffect } from 'react'
import withErrorHandled from './ErrorHandler'
import StoriesHeading from './StoriesHeading'
import useStories from './useStories'
import Card from './Card'

function HotStories() {
  const stories = useStories('hot')
  return (
    <Card>
      <StoriesHeading title="热门故事"/>
      <div>
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
