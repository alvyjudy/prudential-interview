import { PostModel } from "../../db"

export default async function handler(req, res) {
  const {authorId} = req.query
  console.log('author id', authorId)
  const response = await PostModel.find({
    'authorId': authorId
  }).limit(5).select('-content')
  res.json(response)
}