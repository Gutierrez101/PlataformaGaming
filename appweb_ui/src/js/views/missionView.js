export const missionView = {
  form(subjects) {
    return `
      <h4>Nueva Misión</h4>
      <form id="form-mission" class="space-y-2">
        <select id="mission-subject">${subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
        <input id="mission-title" placeholder="Título" />
        <textarea id="mission-prompt" placeholder="Prompt IA"></textarea>
        <button type="submit">Crear</button>
      </form>
    `;
  },
  list(missions) {
    return `<ul>${missions.map(m => `<li>${m.title}</li>`).join('')}</ul>`;
  }
};