const express = require('express')
const router = express.Router();
const todoController = require('../../controllers/todoController');

// router.route('/')
//     .get(todoController.getHelloWord)

router.route('/')
    .get(todoController.getAllTodoDatas)
    .post(todoController.createTodoData)
    .put(todoController.updateTodoData)
    .delete(todoController.deleteTodoData);

router.route('/:id')
    .get(todoController.getTodoData);


module.exports = router;