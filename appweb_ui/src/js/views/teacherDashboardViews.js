export const teacherDashboardView = {
  render(user, subjects) {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h2 class="text-xl font-semibold">Profesor: ${user.name}</h2>
      <div class="mt-4">
        <h3 class="font-medium">Materias</h3>
        <ul>${subjects.map(s => `<li>${s.name}</li>`).join('')}</ul>
      </div>
      <div class="mt-6 space-x-4">
        <button id="btn-new-mission">Nueva Misión</button>
        <button id="btn-new-duel">Nuevo Duelo</button>
        <button id="btn-new-reto">Nuevo Reto</button>
      </div>
      <div id="task-form" class="mt-4"></div>
    `;
  }
};