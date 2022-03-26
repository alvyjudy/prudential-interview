const mongoose = require('mongoose')
const getSecrets = require('./getSecrets')

const {MONGO_DB_URI} = getSecrets()



const PostSchema = {
  title: String,
  content: String,
  authorName: String,
  authorId: String,
  rating: Number,
  comments: Number,
  likes: Number,
  rewards: Number,
  views: Number,
  timeCreated: String,
}

const AuthorSchema = {
  avatarUrl: String,
  authorName: String,
  totalWritten: Number,
  totalAssets: Number,
  totalLikes: Number,
}

module.exports = {
  PostSchema,
  AuthorSchema,
}