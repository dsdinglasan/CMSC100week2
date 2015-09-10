var should = require('should-http'),
	request = require('supertest');
	
	describe("student", function(){//whole component for the student and inner describe are for each unit
		var url = "localhost:5000";
		describe("find()", function(){
			it("should retrieve all student records", function(done){
				request(url).get('/students').end(function(err,res){ //(url na iaaccess)
					if(err)throw err;
					res.should.have.status(200);//200 status ang okay
					done();
				});
			});
		});
		describe("insert()", function(){//successful na insert
			it("should return the newly created record", function(done){
				request(url).post('/students').send({'studno':'2013-12345','name':'Betel'}).end(function(err,res){ //(url na iaaccess)
					if(err)throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.body.should.have.properties(["id", "stdno","name"]);//look for the latest id in the database + 1, eto yung nainsert na bago
					done();
				});
			});
			it("should not have missing student number and name", function(done){
				request(url).post('/students').send({'studno':'2013-12345','name':'Betel'}).end(function(err,res){ //(url na iaaccess)
					if(err)throw err;
					res.body.should.not.have.keys('');
					res.body.should.not.have.properties('');
					res.body.should.not.have.keys('null');
					res.body.should.not.have.properties('null');
					done();
				});
			});
		});
});
