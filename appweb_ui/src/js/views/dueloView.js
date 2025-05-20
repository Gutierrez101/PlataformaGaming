export const duelView = {
  form(subjects, students) {
    return `
      <h4>Nuevo Duelo</h4>
      <form id="form-duel" class="space-y-2">
        <select id="duel-subject">${subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
        <select id="player-a">${students.map(u => `<option value="${u.id}">${u.name}</option>`).join('')}</select>
        <select id="player-b">${students.map(u => `<option value="${u.id}">${u.name}</option>`).join('')}</select>
        <textarea id="duel-prompt" placeholder="Prompt IA"></textarea>
        <button type="submit">Iniciar</button>
      </form>
    `;
  },
  list(duels) {
    return `<ul>${duels.map(d => `<li>Duelo ${d.id}: ${d.playerAId} vs ${d.playerBId}</li>`).join('')}</ul>`;
  }
};