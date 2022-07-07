const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    id: String,
    link: String,
  })
  
  const Link = mongoose.model('Link', linkSchema)

  module.exports = Link