Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

Object.defineProperty(String.prototype, 'toTitleCase', {
  value: function() {
    const phrase = this
    return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  },
  enumerable: false
});

const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const { LoremIpsum } = require('lorem-ipsum')

const getSecrets = require('../utils/getSecrets')

const lorem = new LoremIpsum()

const {MONGO_DB_URI} = getSecrets() // must specify the database name
console.log('uri', MONGO_DB_URI)
const dbName = MONGO_DB_URI.split('/').slice(-1)[0]

const client = new MongoClient(MONGO_DB_URI)
mongoose.connect(MONGO_DB_URI)
const { Schema } = mongoose


const {
  AuthorSchema,
  PostSchema,
} = require('../utils/schema')

const Author = mongoose.model('Author', new Schema(AuthorSchema))
const Post = mongoose.model('Post', new Schema(PostSchema))

const main = async () => {
  try {
    await client.connect()

    if (process.env.DROP_MONGO) await dropDatabase()

    await createBunch()
  } finally {
    console.log('done')
    await mongoose.connection.close()
    await client.close()
  }
}

const dropDatabase = async () => {
  const db = client.db(dbName)
  await db.dropDatabase()
}

main()

const randomInt = () => parseInt((Math.random()*100).toFixed(0))
const randomDate= () => (new Date(Math.random() * new Date().getTime())).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

const createBunch = async () => {
  await Promise.all(Array(10).fill(0).map(async () => {
    const authorName = lorem.generateWords(2).toTitleCase()
    const author = await Author.create({
      avatarUrl: 'https://gravatar.com/avatar/6c15cec1bf07bd26f1c293039c503752?s=400&d=robohash&r=x',
      authorName,
      totalWritten: randomInt() * 123,
      totalAssets: randomInt() * 123,
      totalLikes: randomInt() * 123,
    })
    const authorId = author._id.toString()
    await Promise.all(Array(10).fill(0).map(async () => {
      await Post.create({
        title: lorem.generateWords(6).capitalize(),
        content: lorem.generateParagraphs(8).capitalize(),
        preview: lorem.generateParagraphs(1),
        authorName,
        authorId,
        rating: randomInt(),
        comments: randomInt(),
        likes: randomInt(),
        rewards: randomInt(),
        views: randomInt(),
        timeCreated: randomDate()
      })
    }))
  }))
}

