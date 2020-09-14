const Todo = require("../models/todo.model");

exports.getApi = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.send("Something went wrong");
  }
};
exports.addTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      name: req.body.name,
    });
    await newTodo.save();
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.send("Somthing went wrong");
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.body.id },
      { name: req.body.name }
    );
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    throw error;
  }
};

exports.completed = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    if (todo.isDone == true) {
      todo.isDone = false;
    } else {
      todo.isDone = true;
    }
    await todo.save();
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    throw error;
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndRemove({ _id: req.params.id });
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    throw error;
  }
};
