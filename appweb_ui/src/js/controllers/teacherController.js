import { Subject } from '../models/subjectModel.js';
import { User } from '../models/userModel.js';
import { Mission } from '../models/missionModel.js';
import { Duel } from '../models/duelModel.js';
import { Reto } from '../models/retoModel.js';
import { teacherDashboardView } from '../views/teacherDashboardViews.js';
import { missionView } from '../views/missionView.js';
import { duelView } from '../views/dueloView.js';
import { retoView } from '../views/retoView.js';

// Datos de ejemplo
const mockSubjects = [
  new Subject({ id: 1, name: 'Matemáticas' }),
  new Subject({ id: 2, name: 'Historia' })
];
const mockStudents = [
  new User({ id: 11, role: 'student', name: 'Ana' }),
  new User({ id: 12, role: 'student', name: 'Luis' })
];
let missions = [];
let duels = [];
let retos = [];

export const teacherController = {
  init() {
    document.getElementById('login-teacher')
      .addEventListener('click', () => this.load());
  },

  load() {
    const teacher = new User({ id: 1, role: 'teacher', name: 'Profesor X' });
    teacherDashboardView.render(teacher, mockSubjects);
    this.bindButtons();
  },

  bindButtons() {
    document.getElementById('btn-new-mission')
      .addEventListener('click', () => this.showMissionForm());
    document.getElementById('btn-new-duel')
      .addEventListener('click', () => this.showDuelForm());
    document.getElementById('btn-new-reto')
      .addEventListener('click', () => this.showRetoForm());
  },

  showMissionForm() {
    const container = document.getElementById('task-form');
    container.innerHTML = missionView.form(mockSubjects);
    document.getElementById('form-mission')
      .addEventListener('submit', e => {
        e.preventDefault();
        const data = {
          id: missions.length + 1,
          subjectId: +e.target['mission-subject'].value,
          title: e.target['mission-title'].value,
          prompt: e.target['mission-prompt'].value
        };
        const m = new Mission(data);
        const errs = m.validate();
        if (Object.keys(errs).length) {
          alert(Object.values(errs).join(', '));
          return;
        }
        missions.push(m);
        container.innerHTML = missionView.list(missions);
      });
  },

  showDuelForm() {
    const container = document.getElementById('task-form');
    container.innerHTML = duelView.form(mockSubjects, mockStudents);
    document.getElementById('form-duel')
      .addEventListener('submit', e => {
        e.preventDefault();
        const data = {
          id: duels.length + 1,
          subjectId: +e.target['duel-subject'].value,
          playerAId: +e.target['player-a'].value,
          playerBId: +e.target['player-b'].value,
          prompt: e.target['duel-prompt'].value
        };
        const d = new Duel(data);
        const errs = d.validate();
        if (Object.keys(errs).length) {
          alert(Object.values(errs).join(', '));
          return;
        }
        duels.push(d);
        container.innerHTML = duelView.list(duels);
      });
  },

  showRetoForm() {
    const container = document.getElementById('task-form');
    container.innerHTML = retoView.form(mockSubjects);
    document.getElementById('form-reto')
      .addEventListener('submit', e => {
        e.preventDefault();
        const data = {
          id: retos.length + 1,
          subjectId: +e.target['reto-subject'].value,
          title: e.target['reto-title'].value,
          prompt: e.target['reto-prompt'].value
        };
        const r = new Reto(data);
        const errs = r.validate();
        if (Object.keys(errs).length) {
          alert(Object.values(errs).join(', '));
          return;
        }
        retos.push(r);
        container.innerHTML = retoView.list(retos);
      });
  }
};