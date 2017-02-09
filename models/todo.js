// Mongoose Schema and Models goes here
const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/movies')
// mongoose.Promise = global.promise

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo
