const classroomController = require('../controllers').classroom;
const studentController = require('../controllers').student;
const lecturerController = require('../controllers').lecturer;
const courseController = require('../controllers').course;

module.exports = function(app) {
  /* Classroom Router */
  app.get('/api/classroom', classroomController.list);
  app.get('/api/classroom/:id', classroomController.getById);
  app.post('/api/classroom', classroomController.add);
  app.put('/api/classroom/:id', classroomController.update);
  app.delete('/api/classroom/:id', classroomController.delete);

  /* Student Router */
  app.get('/api/student', studentController.list);
  app.get('/api/student/:id', studentController.getById);
  app.post('/api/student', studentController.add);
  app.put('/api/student/:id', studentController.update);
  app.delete('/api/student/:id', studentController.delete);

  /* Lecturer Router */
  app.get('/api/lecturer', lecturerController.list);
  app.get('/api/lecturer/:id', lecturerController.getById);
  app.post('/api/lecturer', lecturerController.add);
  app.put('/api/lecturer/:id', lecturerController.update);
  app.delete('/api/lecturer/:id', lecturerController.delete);

  /* Course Router */
  app.get('/api/course', courseController.list);
  app.get('/api/course/:id', courseController.getById);
  app.post('/api/course', courseController.add);
  app.put('/api/course/:id', courseController.update);
  app.delete('/api/course/:id', courseController.delete);

  /* Advance Router */
  app.post('/api/student/add_course', studentController.addCourse);
  app.post('/api/classroom/add_with_students', classroomController.addWithStudents);
  app.post('/api/lecturer/add_with_course', lecturerController.addWithCourse);
}