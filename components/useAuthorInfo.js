import axios from 'axios'
import {useState, useEffect} from 'react'
export default function useAuthorInfo(authorId) {
  const [info, setInfo] = useState({})
  useEffect(() => {
    if (authorId) {
      axios.get(`/api/author/${authorId}`).then(response => response.data).then(data => {
        setInfo(data)
      }).catch(() => {})
    }
  }, [authorId])
  return info
}