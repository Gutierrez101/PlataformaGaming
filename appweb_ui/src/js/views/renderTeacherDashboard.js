// renderTeacherDashboard.js
export function renderTeacherDashboard(classes) {
  const container = document.getElementById("teacher-container");
  classes.forEach(c => {
    const section = document.createElement("section");
    section.className = "bg-white shadow-md rounded p-4 mb-6";
    section.innerHTML = `
      <h2 class="text-2xl font-semibold mb-2">${c.name}</h2>
      <h3 class="font-bold">Alumnos:</h3>
      <ul id="list-${c.id}" class="list-disc list-inside"></ul>
    `;
    container.appendChild(section);
    const ul = section.querySelector("ul");
    c.students.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      ul.appendChild(li);
    });
  });
}
