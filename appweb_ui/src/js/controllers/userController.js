// userController.js
import { authenticate, addUser } from "../models/userModel.js";

export function initAuthPages() {
  // Para login.html
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const u = e.target.username.value;
      const p = e.target.password.value;
      const user = authenticate(u, p);
      if (!user) {
        document.getElementById("login-error").textContent = "Credenciales inválidas";
      } else {
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Redirige según rol
        window.location = user.role === "teacher" ? "teacher.html" : "index.html";
      }
    });
  }

  // Para register.html
  const regForm = document.getElementById("register-form");
  if (regForm) {
    regForm.addEventListener("submit", e => {
      e.preventDefault();
      const u = e.target.username.value;
      const p = e.target.password.value;
      const role = e.target.role.value;
      try {
        addUser({ username: u, password: p, role });
        window.location = "login.html";
      } catch (err) {
        document.getElementById("register-error").textContent = err.message;
      }
    });
  }
}
