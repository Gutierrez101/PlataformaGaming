import { User } from '../models/userModel.js';
import { Subject } from '../models/subjectModel.js';
import { studentDashboardView } from '../views/studentDashboardView.js';

const mockSubjects = [new Subject({id:1,name:'Matemáticas'})];
let mockMissions=[],mockDuels=[],mockRetos=[];

export const studentController = {
  init() {
    document.getElementById('login-student').addEventListener('click', ()=> this.load());
  },
  load() {
    const student = new User({id:11,role:'student',name:'Ana',xp:120,subjects:[1]});
    const subjects = mockSubjects.filter(s=>student.subjects.includes(s.id));
    studentDashboardView.render(student,subjects,mockMissions,mockDuels,mockRetos);
  }
};
