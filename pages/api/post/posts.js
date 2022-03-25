import mockedPosts from "./mockedPosts"


export default function handler(req, res) {
  res.json(mockedPosts)
}