// Vista que se encarga de renderizar las clases en el DOM

export function renderClasses(classes) {
    const container = document.getElementById("class-container");
    container.innerHTML = ""; // Limpia el contenedor antes de renderizar

    classes.forEach(clase => {
        const div = document.createElement("div");
        div.className = "bg-white shadow-md rounded p-4 mb-4";
        div.innerHTML = `
            <h3 class="text-xl font-bold">${clase.name}</h3>
            <p class="text-gray-600">Docente: ${clase.teacher}</p>
        `;
        container.appendChild(div);
    });
}
