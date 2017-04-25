var http = require('http') ;
var express = require('express') ;
var mysql = require('mysql') ;
var fs = require('fs') ;
var bodyParser = require('body-parser') ;
var path = require('path') ;


var app = express() ;


var pool = mysql.createConntion({
	user: 'root',
	password: 'won1228',
	database: 'study'
}) ;


app.set('port', process.env.PORT || 8088) ;

app.use(bodyParser.urlencoded({
	enconded: false,
}) ;

app.use(bodyParser.json()) ;

http.createServer(app).listen(app.get('port'), function(){
	console.log('server start ' + app.get('port')) ;
}) ;


