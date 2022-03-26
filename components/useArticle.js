import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function useArticle() {
  const router = useRouter()
  const { pid } = router.query
  const [article, setArticle] = useState({})
  useEffect(() => {
    if (pid) {
      axios
      .get(`/api/post/${pid}`)
      .then(response => response.data)
      .then(data => {
        setArticle(data)
      })
      .catch(() => {})
    }
  }, [pid])
  return article
}