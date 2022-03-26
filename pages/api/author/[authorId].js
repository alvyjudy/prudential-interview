import { AuthorModel } from "../db"

export default async function handler(req, res) {
  const { authorId } = req.query
  const author = await AuthorModel.findById(authorId)
  res.json(author)
}
