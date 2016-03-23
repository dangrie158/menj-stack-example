var router = require('express').Router();
var ToDoItems = require('../models/todo-item')

router.get('/', function(req, res) {
	ToDoItems.find({}, function(err, todoItems) {
		res.render('todo-list', {
			items: todoItems
		});
	});
});

module.exports = router;
