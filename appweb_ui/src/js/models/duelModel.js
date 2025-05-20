import { sanitize } from '../utils/security.js';

/** Modelo: Duelo 1vs1 */
export class Duel {
  constructor({ id, subjectId, playerAId, playerBId, prompt }) {
    this.id = id;
    this.subjectId = subjectId;
    this.playerAId = playerAId;
    this.playerBId = playerBId;
    this.prompt = sanitize(prompt);
  }

  validate() {
    const errs = {};
    if (!this.playerAId || !this.playerBId) errs.players = 'Debe seleccionar ambos jugadores';
    if (!this.prompt || this.prompt.length < 10) errs.prompt = 'Prompt inválido';
    return errs;
  }
}