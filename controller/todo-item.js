var router = require('express').Router();
var ToDoItem = require('../models/todo-item');

router.get('/:id', function(req, res) {
	var itemId = req.params.id;

	ToDoItem.findById(itemId, function(err, item) {
		res.render('todo-item', item);
	});
});

router.get('/:id/done', function(req, res) {
	var itemId = req.params.id;

	ToDoItem.findById(itemId, function(err, item) {
		item.status = !item.status;
		item.save(function(err, done) {
			res.redirect('/');
		});
	});
});

router.post('/', function(req, res) {
	item = ToDoItem(req.body);
	item.save();
	res.redirect('/');
});

module.exports = router;
