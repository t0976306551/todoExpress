// const db = require('../dbconfig');
const db = require('../models');
const todoModel = db.todo;

const getHelloWord = (req, res) => {

    res.json({
        "message": "Hello World"
    })
}

const getAllTodoDatas = (req, res) => {
    todoModel.findAll().then(data => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json({
            "message": "success",
            "data": data
        })

    }).catch(err => {
        res.status(500).send({
            "message": err.message,
            "status": 500
        });
    });
}

const createTodoData = (req, res) => {
    const sqlData = {
        name: req.body.name,
    };
    todoModel.create(sqlData).then(data => {
        res.json({
            "message": "success",
        })
    }).catch(err => {
        res.status(500).send({
            "message": err.message,
            "status": 500
        });
    });
}

const updateTodoData = (req, res) => {
    const todo_id = req.body.id;
    const sqlData = {
        name: req.body.name,
    };
    todoModel.update(sqlData, { where: { id: todo_id } }).then(data => {
        res.json({
            "message": "success"
        })
    }).catch(err => {
        res.status(500).send({
            "message": err.message,
            "status": 500
        });
    });
}

const deleteTodoData = (req, res) => {
    const todo_id = req.body.id;
    todoModel.destroy({ where: { id: todo_id } }).then(data => {
        res.json({
            "message": "delete success",
        })
    }).catch(err => {
        res.status(500).send({
            "message": err.message,
            "status": 500
        });
    });
}

const getTodoData = (req, res) => {
    const todo_id = req.params.id;
    todoModel.findByPk(todo_id).then(data => {
        res.json({
            "message": "success",
            "data": data
        })
    }).catch(err => {
        res.status(500).send({
            "message": err.message,
            "status": 500

        });
    });
}
module.exports = {
    getHelloWord,
    getAllTodoDatas,
    createTodoData,
    updateTodoData,
    deleteTodoData,
    getTodoData
};