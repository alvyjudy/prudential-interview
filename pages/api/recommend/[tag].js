import mockedPosts from "../mockedPosts"

export default function handler(req, res) {
  const {tag} = req.query
  switch (tag) {
    case 'hot': 
      hotStories(req, res)
      break
    case 'default':
      recommend(req, res)
      break
    default: 
      res.status(400).send("Specify tag")
  }
}

function hotStories(req, res) {

}

function moreOfThisAuthor(req, res) {

}

function recommend(req, res) {
  res.json(mockedPosts)
}