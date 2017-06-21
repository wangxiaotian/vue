var express = require('express');
var app = express();

var server = app.listen(3000,function(){
	var host = server.address().address,
		port = server.address().port;
	console.log('server is running at localhost',host,port)
})