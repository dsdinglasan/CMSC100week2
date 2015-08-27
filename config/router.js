var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){//lahat ng nakalagay sa dito ay exportable functions(module.exports)
	router.route('/students')
	.get(student.find)//hahanapin sa student.js yung student.find at ieexecute
	.post(student.insert);
	
	router.route('/students/:id')//find a student accroding to the id
	.get(student.findOne)//refer to student.js
	.put(student.update)//specific student ang ieedit
	.delete(student.remove);//example http://0.0.0.0:5000/students/2
	
	router.route('/teachers')
	.get(teacher.view);
	
	router.route('/teachers')
	.post(teacher.add);
	
	router.route('/teachers')
	.put(teacher.update);
	
	router.route('/teachers')
	.delete(teacher.delete);
	
	return router;
};

