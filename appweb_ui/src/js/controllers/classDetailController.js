// classDetailController.js
import { getClassById } from "../models/classModel.js";
import { renderClassDetail } from "../views/renderClassDetail.js";

export function initClassDetail() {
  const clsId = localStorage.getItem("selectedClassId");
  if (!clsId) return window.location = "index.html";
  renderClassDetail(getClassById(clsId));
}
