// main.js

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Import our custom CSS
import "../scss/styles.scss";

// Iconos de Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

// Manejo de botón cambio de tema
import { initTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
});

// Inicializar todos los tooltips de la página
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));

// ===== LÍNEA DE TIEMPO =====
window.tlToggle = function (el) {
  const wasOpen = el.classList.contains("open");
  document.querySelectorAll(".tl-item.open").forEach((item) => {
    item.classList.remove("open");
    item.querySelector(".tl-toggle").textContent = "▸ Ver más";
  });
  if (!wasOpen) {
    el.classList.add("open");
    el.querySelector(".tl-toggle").textContent = "▾ Ver menos";
  }
};
