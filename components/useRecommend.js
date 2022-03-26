import axios from 'axios'
import { useState, useEffect } from 'react'

export default function useRecommend(tag) {
  const [stories, setStories] = useState([])
  useEffect(() => {
    if (tag) {
      axios
      .get(`/api/recommend/${tag}`)
      .then(response => response.data)
      .then(data => {
        setStories(data)
      })
      .catch(() => {})

    }
  }, [tag])
  return stories
}
