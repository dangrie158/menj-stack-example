"use strict";

let router = require('express').Router();
let ToDoItems = require('../models/todo-item')

router.get('/', (req, res) => {
	ToDoItems.find({}, (err, todoItems) => {
		res.render('todo-list', {
			items: todoItems
		});
	});
});

module.exports = router;
