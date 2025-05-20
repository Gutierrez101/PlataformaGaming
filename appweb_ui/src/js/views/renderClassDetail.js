// renderClassDetail.js
export function renderClassDetail(cls) {
  if (!cls) return;
  document.getElementById("class-title").textContent = cls.name;
  document.getElementById("class-teacher").textContent = "Docente: " + cls.teacher;

  const retosList = document.getElementById("retos-list");
  cls.retos.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r.title;
    retosList.appendChild(li);
  });
}
