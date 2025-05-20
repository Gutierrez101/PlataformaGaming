/** Modelo: Materia */
export class Subject {
  constructor({ id, name }) {
    this.id = id;
    this.name = name.trim();
  }
}