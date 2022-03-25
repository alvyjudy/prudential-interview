import mockedPosts from "../mockedPosts"

export default function handler(req, res) {
  const { pid } = req.query
  const post = findPost(pid)
  res.json(post)
}

function findPost(pid) {
  return mockedPosts.find(post => {
    return post.id === pid
  })
}