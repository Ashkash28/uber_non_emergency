var path = require('path');

var express = require('express');
var app = express();

var http = require('http');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

// app.get('/', function(req, res)
// {
// 	res.render('index');
// })

// app.get('/partial2', function(req, res)
// {
// 	res.render('view2');
// })
// console.log('hello1');
require('./config/mongoose');
require('./config/routes')(app);
// console.log('hello2');

app.listen(8000, function()
{
	console.log('listening on port 8000');
});