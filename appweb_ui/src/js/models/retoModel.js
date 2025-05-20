import { sanitize } from '../utils/security.js';

/** Modelo: Reto (evaluación) */
export class Reto {
  constructor({ id, subjectId, title, prompt }) {
    this.id = id;
    this.subjectId = subjectId;
    this.title = sanitize(title);
    this.prompt = sanitize(prompt);
  }

  validate() {
    const errs = {};
    if (!this.title || this.title.length < 5) errs.title = 'Título inválido';
    if (!this.prompt || this.prompt.length < 10) errs.prompt = 'Prompt inválido';
    return errs;
  }
}