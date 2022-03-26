import mongoose from 'mongoose'

import { AuthorSchema, PostSchema } from '../../utils/schema'

const {Schema} = mongoose
import getSecrets from '../../utils/getSecrets'
const {MONGO_DB_URI} = getSecrets() // must specify the database name
mongoose.connect(MONGO_DB_URI)

const AuthorModel = mongoose.models.Author || mongoose.model('Author', new Schema(AuthorSchema))
const PostModel = mongoose.models.Post || mongoose.model('Post', new Schema(PostSchema))

export {
  AuthorModel,
  PostModel
}