import mockedPosts from '../../mockedPosts'

export default function handler(req, res) {
  const {authorid} = req.query
  if (!authorid) {
    res.status(400).send("Specify author id")
    return
  }
  res.json(mockedPosts)
}