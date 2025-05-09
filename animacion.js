/* === PARA MOSTRAR EL MENU === */

// Selecciona el contenedor del menú (el nav desplegable)
const navMenu = document.getElementById("nav-menu");

// Selecciona el botón de abrir menú (ícono hamburguesa)
const navToggle = document.getElementById("nav-toggle");

// Selecciona el botón de cerrar menú (ícono X)
const navClose = document.getElementById("nav__cerrar");

/* === MOSTRAR MENU === */
/* Verifica que el botón de abrir exista antes de usarlo */
if (navToggle) {
  // Cuando se hace clic en el botón de abrir, se le agrega la clase "mostrar-menu" al nav
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("mostrar-menu");
  });
}

/* === OCULTAR MENU === */
/* Verifica que el botón de cerrar exista antes de usarlo */
if (navClose) {
  // Cuando se hace clic en el botón de cerrar, se elimina la clase "mostrar-menu"
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("mostrar-menu");
  });
}
