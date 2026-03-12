// main.js

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Import our custom CSS
import "../scss/styles.scss";

// Iconos de Bootstrap 
import 'bootstrap-icons/font/bootstrap-icons.css';

// main.js
import { initTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
});

// Inicializar todos los tooltips de la página
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));