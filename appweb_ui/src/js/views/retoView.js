export const retoView = {
  form(subjects) {
    return `
      <h4>Nuevo Reto</h4>
      <form id="form-reto" class="space-y-2">
        <select id="reto-subject">${subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
        <input id="reto-title" placeholder="Título" />
        <textarea id="reto-prompt" placeholder="Prompt IA"></textarea>
        <button type="submit">Crear</button>
      </form>
    `;
  },
  list(retos) {
    return `<ul>${retos.map(r => `<li>${r.title}</li>`).join('')}</ul>`;
  }
};