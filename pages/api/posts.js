import { PostModel } from "./db"

export default async function handler(req, res) {
  const response = await PostModel.find().select('-content').limit(10)
  res.json(response)
}