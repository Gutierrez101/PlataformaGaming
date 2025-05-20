// teacherController.js
import { getClassesByTeacher } from "../models/classModel.js";
import { renderTeacherDashboard } from "../views/renderTeacherDashboard.js";

export function initTeacherDashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  if (user.role !== "teacher") {
    return window.location = "login.html";
  }
  renderTeacherDashboard(getClassesByTeacher(user.username));
}
