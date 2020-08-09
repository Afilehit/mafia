var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');

});
app.use('/client', express.static(__dirname + '/client'));
serv.listen(2000);

//var module = require("/index.js");

// module.f(); // запуск экспортируемой функции модуля
// console.log(module.obj);
