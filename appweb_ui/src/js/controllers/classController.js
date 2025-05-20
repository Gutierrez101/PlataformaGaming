// Controlador encargado de manejar la lógica entre el modelo y la vista

import { getClasses } from "../models/classModel.js";
import { renderClasses } from "../views/renderClasses.js";

export function initClassDisplay() {
    const classes = getClasses(); // Obtiene los datos desde el modelo
    renderClasses(classes);       // Envía los datos a la vista para renderizarlos
}
