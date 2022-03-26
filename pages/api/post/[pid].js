import { Post } from "../db"

export default async function handler(req, res) {
  const { pid } = req.query
  const post = await Post().findById(pid)
  res.json(post)
}

