function getSecrets() {
  return {
    MONGO_DB_URI: process.env.MONGO_DB_URI
  }
}

module.exports = getSecrets