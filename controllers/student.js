var db = require(__dirname+'/../lib/mysql');//import ng mysql.js, connect to the mysql.js

exports.find = function(req,res,next){
	console.log(req.ip+ "find()");//logs
	db.query("SELECT * FROM student",//query from our database, parameters (sql statement, error handling)
		function(err,rows){
		if(err) return next(err);//skip all route handlers
		res.send(rows);//else send the rows na nakuha
	});
};

exports.findOne = function(req,res,next){//req.params.id//id is a parameter// so db.query has 3 parameters na
	console.log(req.ip+ "findOne()");
	db.query("SELECT * FROM student WHERE id=?",[req.params.id],//query from our database, parameters (sql statement, error handling)//pwedeng madaming ? depende
		function(err,rows){//sa rows napupunta ang result ng query
		if(err) return next(err);//skip all route handlers
		if(rows.length === 0)//walang naretrieve
			res.status(404).send('Student not found!');
		res.send(rows[0]);//else send the rows na nakuha, rows[0] to be more specific
		//browser http://0.0.0.0:5000/students/1
	});
};

exports.insert = function(req,res,next){//req.params.id//id is a parameter
	db.query("INSERT INTO student(studno, name) VALUES(?,?)",[req.body.studno,req.body.name],//query from our database, parameters (sql statement, error handling)//pwedeng madaming ? depende
		function(err,rows){//sa rows napupunta ang result ng query
		if(err) return next(err);//skip all route handlers
		res.send(rows);//else send the rows na nakuha
	});
};

exports.update = function(req,res,next){
	db.query("UPDATE student SET ? WHERE id = ?",[req.body,req.params.id],//bahala na ang req.body kung anong table ang ieedit
		function(err,rows){//sa rows napupunta ang result ng query
		if(err) return next(err);//skip all route handlers
		res.send(rows);//else send the rows na nakuha
		//http://0.0.0.0:5000/students4
	});
};

exports.remove = function(req,res,next){
	db.query("DELETE FROM student WHERE id = ?",[req.params.id],//bahala na ang req.body kung anong table ang ieedit
		function(err,rows){//sa rows napupunta ang result ng query
		if(err) return next(err);//skip all route handlers
		res.send(rows);//else send the rows na nakuha
		//http://0.0.0.0:5000/students4
	});
};
