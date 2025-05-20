// renderClasses.js
export function renderClasses(classes, user) {
  const container = document.getElementById("class-container");
  if (!container) return;
  container.innerHTML = "";

  classes.forEach(c => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded p-4 mb-4 cursor-pointer";
    card.innerHTML = `
      <img src="${c.image}" alt="${c.name}" class="h-32 w-full object-cover rounded mb-2"/>
      <h3 class="text-xl font-bold">${c.name}</h3>
    `;
    card.addEventListener("click", () => {
      localStorage.setItem("selectedClassId", c.id);
      window.location = "class.html";
    });
    container.appendChild(card);
  });

  // Muestra avatar del usuario arriba si quieres
  const avatar = document.getElementById("user-avatar");
  if (avatar) avatar.src = "jugador.png";
}
