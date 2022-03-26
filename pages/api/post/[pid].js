import { PostModel } from "../db"

export default async function handler(req, res) {
  const { pid } = req.query
  const post = await PostModel.findById(pid)
  res.json(post)
}

