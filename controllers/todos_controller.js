
// TODO. import TODO Model ;-)
const Todo = require('../models/todo')

function create (params) {
  // create a new TODO and console log the response
  Todo.create(params, function(err, createdobj){
    if(err){
      console.error(err)
      return
    }
    console.log(createdobj)
  })
}
function list () {
  // console log the list of all TODOs
Todo.find({}, function(err, todos){
  if(err){
    console.error(err)
    return
  }
  console.log(todos)
})
}
function show (id) {
  // find the TODO with this id and console log it
  Todo.findById((id), function(err, object){
    if(err){
      console.error(err)
      return
    }
    console.log(object)
  })
}
function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  Todo.findByIdAndUpdate((id), (params),{new:true}, function(err, updatedObj){
    if(err){
      console.error(err)
      return
    }
    console.log(updatedObj)
  })
}
function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  Todo.findByIdAndRemove((id), function(err, removedObj){
    if(err)
    {
      console.error(err)
      console.log('failure')
      return
    }
    console.log(removedObj)
    console.log('success')
  })
}

function destroyAll () {
  Todo.remove({},function(err,noObj){
    if(err){
      console.error(err)
      return
    }
  })
    console.log('All items have been deleted')
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
