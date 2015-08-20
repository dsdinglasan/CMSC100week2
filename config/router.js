var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){//lahat ng nakalagay sa dito ay exportable functions(module.exports)
	router.route('/students')
	.get(student.find);//hahanapin sa student.js yung student.find at ieexecute
	
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

