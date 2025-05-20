/** Modelo: Usuario */
export class User {
  constructor({ id, role, name, xp = 0, subjects = [] }) {
    this.id = id;
    this.role = role; // 'teacher' o 'student'
    this.name = name;
    this.xp = xp;
    this.subjects = subjects; // array de subject.id
  }
}