import mockedAuthors from "../mockedAuthors"

export default function handler(req, res) {
  const { authorId } = req.query
  const author = findAuthor(authorId)
  res.json(author)
}

function findAuthor(authorId) {
  return mockedAuthors.find(author => author.authorId === authorId)
}