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

/* ===== REMOVER EL MENU MOBILE AL HACER CLIC EN UN LINK ===== */

// Selecciona todos los elementos que tienen la clase "nav__link" (que son los enlaces del menú)
// Esto devuelve una lista de nodos (un array-like) con todos los enlaces.
const navLink = document.querySelectorAll(".nav__link");

/*
  Función que se ejecuta cuando se hace clic en un enlace del menú.
  Lo que hace es ocultar el menú, eliminando la clase "mostrar-menu".
*/
const linkAction = () => {
  // Obtiene el contenedor del menú (el div con el ID "nav-menu").
  const navMenu = document.getElementById("nav-menu");
  
  // Elimina la clase "mostrar-menu" del menú, lo que lo oculta (usualmente esta clase se usa para mostrar el menú).
  navMenu.classList.remove("mostrar-menu");
};

// Recorre todos los enlaces seleccionados anteriormente (que están en la variable "navLink")
// Por cada enlace, le agrega un evento "click" que ejecutará la función "linkAction" cuando se haga clic.
navLink.forEach(n => n.addEventListener("click", linkAction));
