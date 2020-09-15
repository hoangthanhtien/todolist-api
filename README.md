# todolist-api
### Add Todo:
* Method: 'POST'
* URL: 'https://tienhoang-todolist.herokuapp.com/api'
* data: {name: type: String}
### Update Todo:
* Method: 'PUT'
* URL: 'https://tienhoang-todolist.herokuapp.com/api'
* data: {id: Mongoose.ObjectId, name: String}
### Completed Todo:
* Method: 'POST'
* URL: 'https://tienhoang-todolist.herokuapp.com/api/change-status/:id'
### Delete Todo:
* Method: 'DELETE'
* URL: 'https://tienhoang-todolist.herokuapp.com/api/delete-task/:id'
