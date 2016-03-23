"use strict";

let express = require('express'),
	app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let todoItemController = require('./controller/todo-item');
let todoListController = require('./controller/todo-list');

const PORT = 3000;

mongoose.connect('mongodb://localhost/todo');

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/item', todoItemController);
app.use('/', todoListController);

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
		process.exit(-1);
	}
	console.log('listeing on Port ' + PORT);
});
