var express = require('express');
var mongojs = require('mongojs');
var app = express();
var db = mongojs('contactList',['contactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
	console.log("Get request received");

	db.contactList.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/contactlist', function(req, res) {
	console.log(req.body);
	db.contactList.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.listen('3000');
console.log('Server Running');