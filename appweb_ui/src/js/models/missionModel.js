import { sanitize } from '../utils/security.js';

/** Modelo: Misión */
export class Mission {
  constructor({ id, subjectId, title, prompt, assignees = [] }) {
    this.id = id;
    this.subjectId = subjectId;
    this.title = sanitize(title);
    this.prompt = sanitize(prompt);
    this.assignees = assignees;
  }

  validate() {
    const errs = {};
    if (!this.title || this.title.length < 10) errs.title = 'Título inválido';
    if (!this.prompt || this.prompt.length < 10) errs.prompt = 'Prompt inválido';
    return errs;
  }
}