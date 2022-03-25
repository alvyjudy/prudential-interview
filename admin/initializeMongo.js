const mongoose = require('mongoose')
const getSecrets = require('../utils/getSecrets')

const {MONGO_DB_URI} = getSecrets()

const main = async () => {
  mongoose.connect(MONGO_DB_URI)
  const blogPostSchema = new mongoose.Schema({
    timeCreated: String,
    title: String,
    author: String,
    content: String
  })
  const BlogPost = mongoose.model('Posts', blogPostSchema)
  const post1 = await new BlogPost({
    timeCreated: (new Date()).toString(),
    title: 'Post 1',
    author: 'Di Zhu',
    content: "Testing testing",
  })
  await post1.save()
  console.log('done')
  const doc = await BlogPost.findOne()
  console.log(doc)
}

main()