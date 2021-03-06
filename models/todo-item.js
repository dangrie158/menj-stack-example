"use strict";

let mongoose = require('mongoose');

let ToDoItemSchema = new mongoose.Schema({
	title: String,
	description: String,
	status: {
		type: Boolean,
		default: false
	}
});

ToDoItemSchema.virtual('color').get(function() {
	return this.status ? 'lightgreen' : 'red'
});


module.exports = mongoose.model('ToDoItem', ToDoItemSchema);
