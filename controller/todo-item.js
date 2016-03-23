"use strict";

let router = require('express').Router();
let ToDoItem = require('../models/todo-item');

router.get('/:id', (req, res) => {
	var itemId = req.params.id;

	ToDoItem.findById(itemId, (err, item) => {
		res.render('todo-item', item);
	});
});

router.get('/:id/done', (req, res) => {
	var itemId = req.params.id;

	ToDoItem.findById(itemId, (err, item) => {
		item.status = !item.status;
		item.save((err, done) => {
			res.redirect('/');
		});
	});
});

router.post('/', (req, res) => {
	var item = ToDoItem(req.body);
	item.save();
	res.redirect('/');
});

module.exports = router;
