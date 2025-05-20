// js/init.js
import { teacherController } from './controllers/teacherController.js';
import { studentController } from './controllers/studentController.js';
import { scoreboardController } from './controllers/scoreboardController.js';

document.addEventListener('DOMContentLoaded', () => {
  teacherController.init();
  studentController.init();
  scoreboardController.init();
});
