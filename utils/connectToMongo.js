const mongoose = require('mongoose')
const getSecrets = require('./getSecrets')

function connectToMongo() {
  const {
    MONGO_DB_URI
  } = getSecrets()
  return mongoose.connect(MONGO_DB_URI)
}

module.exports = connectToMongo