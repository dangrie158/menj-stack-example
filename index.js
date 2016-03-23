var express = require('express'),
	app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todoItemController = require('./controller/todo-item');
var todoListController = require('./controller/todo-list');

mongoose.connect('mongodb://localhost/todo');

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/item', todoItemController);
app.use('/', todoListController);

app.listen(3000);
