export const studentDashboardView = {
  render(user, subjects, missions, duels, retos) {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h2 class="text-xl font-semibold">Estudiante: ${user.name}</h2>
      <p>XP: ${user.xp}</p>
      <h3 class="mt-4 font-medium">Materias Activas</h3>
      <ul>${subjects.map(s => `<li>${s.name}</li>`).join('')}</ul>
      <div id="missions-list" class="mt-4"></div>
      <div id="duels-list" class="mt-4"></div>
      <div id="retos-list" class="mt-4"></div>
    `;
  }
};