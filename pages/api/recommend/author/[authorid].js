export default function handler(req, res) {
  const {authorid} = req.query
  if (!authorid) {
    res.status(400).send("Specify author id")
    return
  }
  res.status(200).end()
}