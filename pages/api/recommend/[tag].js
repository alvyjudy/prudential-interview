import mockedPosts from "../mockedPosts"
import mockedAuthors from '../mockedAuthors'

export default function handler(req, res) {
  const {tag} = req.query
  switch (tag) {
    case 'hot': 
      hotStories(req, res)
      break
    case 'default':
      recommend(req, res)
      break
    case 'authors':
      res.json(mockedAuthors)
      break
    default: 
      res.status(400).send("Specify tag")
  }
}

async function hotStories(req, res) {
  const allPosts = Post.find()
  allPosts.sort()
}

function recommend(req, res) {
  res.json(mockedPosts)
}