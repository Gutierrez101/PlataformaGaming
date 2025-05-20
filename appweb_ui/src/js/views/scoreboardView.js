export const scoreboardView = {
  render(rankings) {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h2 class="text-xl font-semibold">Top 10 Estudiantes</h2>
      <ol>${rankings.map(r => `<li>${r.name} - XP: ${r.xp}</li>`).join('')}</ol>
    `;
  }
};