"use strict";

let mongoose = require('mongoose');
let ToDoItemSchema = require('./todo-item');

let ToDoListSchema = new mongoose.Schema({
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
