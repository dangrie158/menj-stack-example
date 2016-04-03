"use strict";

let router = require('express').Router();
let ToDoItem = require('../models/todo-item');

router.get('/:id', (req, res) => {
	var itemId = req.params.id;

	ToDoItem.findById(itemId, (err, item) => {
		if (err) {
			console.error(err);
			res.status(500).end();
			return;
		}
		res.render('todo-item', item);
	});
});

router.get('/:id/done', (req, res) => {
	var itemId = req.params.id;

	ToDoItem.findById(itemId, (err, item) => {
		if (err) {
			console.error(err);
			res.status(500).end();
			return;
		}

		item.status = !item.status;
		item.save((err, done) => {
			if (err) {
				console.error(err);
				res.status(500).end();
				return;
			}

			res.redirect('/');
		});
	});
});

router.get('/:id/delete', (req, res) => {
	var itemId = req.params.id;

	ToDoItem.findByIdAndRemove(itemId, (err, item) => {
		if (err) {
			console.error(err);
			res.status(500).end();
			return;
		}

		res.redirect('/');
	});
});

router.post('/', (req, res) => {
	var item = ToDoItem(req.body);
	item.save((err) => {
		if (err) {
			console.error(err);
			res.status(500).end();
			return;
		}

		res.redirect('/');
	});
});

module.exports = router;
