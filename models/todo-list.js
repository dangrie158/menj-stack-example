var mongoose = require('mongoose');
var ToDoItemSchema = require('./todo-item');

var ToDoListSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	}
	description: String,
	items: [ToDoItemSchema],
	updatedAt: {
		type: Date,
		readonly: true
	}
});

module.exports = mongoose.model('ToDoList', ToDoListSchema);
