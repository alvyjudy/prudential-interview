import axios from 'axios'
import { useState, useEffect } from 'react'

export default function useStories(tag) {
  const [stories, setStories] = useState([])
  useEffect(() => {
    axios
      .get(`/api/recommend/default`)
      .then(response => response.data)
      .then(data => {
        console.log('data',data)
        setStories(data)
      })
      .catch(() => {})
  }, [tag])
  return stories
}
