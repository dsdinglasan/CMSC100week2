var express = require('express');//listen lang
var app = express();

/*app.get('/', function(req,res){//basic routing
	res.send('Hello World!');
});

app.route('/students')
	.get(function(req,res){
	res.send('Get a student');
})
.post(function(req,res){
	res.send('Add a student');
})
.put(function(req,res){
	res.send('Update a student');
});
*/

app.use(require('body-parser')());//needed for input or payload, asks for input and stores it in repbody
app.use(require('method-override')());//para magamit yung put and delete na http method
app.use(require(__dirname+'/config/router')(express.Router()));
app.use(express.static(__dirname+'/public'));

var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
