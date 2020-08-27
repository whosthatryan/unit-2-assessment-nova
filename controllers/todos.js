const express = require('express');
const router = express.Router();
const Todo = require('../models/todos.js');

//INDEX
router.get('/', (req, res) => {
    Todo.find({}, (error, allTodos) => {
        res.render('Index', {
            todos: allTodos
        })
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove({_id: req.params.id}, (err, todos) => {
        console.log(todos)
        res.redirect('/todos');
    });
});

// UPDATE
router.put('/todos/:id', (req, res) => {
    req.body.isDone = req.body.isDone=== "on" ? true : false;
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/todos');
    });
});

// CREATE
router.post('/', (req, res) => {
    Todo.create(req.body, (err, createdTodos) => {
        res.redirect('/todos');
    });
});

module.exports = router;