// theme.js

const STORAGE_KEY = "theme";

export function initTheme() {
  const switchInput = document.getElementById("themeSwitch");
  const iconLight = document.getElementById("iconLight");
  const iconDark = document.getElementById("iconDark");
  const html = document.documentElement;

  if (!switchInput) return;

  // tema guardado o claro por defecto
  const savedTheme = localStorage.getItem(STORAGE_KEY) || "light";
  applyTheme(savedTheme);

  switchInput.addEventListener("change", () => {
    const theme = switchInput.checked ? "dark" : "light";
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  });

  function applyTheme(theme) {
    html.setAttribute("data-bs-theme", theme);
    switchInput.checked = theme === "dark";

    if (iconLight && iconDark) {
      if (theme === "light") {
        iconLight.classList.add("active");
        iconLight.classList.remove("inactive");

        iconDark.classList.add("inactive");
        iconDark.classList.remove("active");
      } else {
        iconDark.classList.add("active");
        iconDark.classList.remove("inactive");

        iconLight.classList.add("inactive");
        iconLight.classList.remove("active");
      }
    }
  }
}
