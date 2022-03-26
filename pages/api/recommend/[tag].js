import { AuthorModel, PostModel } from "../db"

export default async function handler(req, res) {
  const {tag} = req.query
  switch (tag) {
    case 'hot': 
      res.json(await PostModel.find().limit(5))
      break
    case 'default':
      res.json(await PostModel.find().limit(5))
      break
    case 'authors':
      res.json(await AuthorModel.find().limit(5))
      break
    default: 
      res.status(400).send("Specify tag")
  }
}
