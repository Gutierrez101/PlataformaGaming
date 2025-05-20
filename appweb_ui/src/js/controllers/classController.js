// classController.js
import { getClasses } from "../models/classModel.js";
import { renderClasses } from "../views/renderClasses.js";

export function initClassDisplay() {
  // Si no hay user logueado, envío a login
  if (!localStorage.getItem("currentUser")) {
    return window.location = "login.html";
  }
  const user = JSON.parse(localStorage.getItem("currentUser"));
  renderClasses(getClasses(), user);
}
