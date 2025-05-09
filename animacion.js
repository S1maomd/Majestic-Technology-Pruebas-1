/* === PARA MOSTRAR EL MENU === */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav__cerrar");

/* === MOSTRAR MENU === */
 /* Validar si las constantes existen (if) */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("mostrar-menu");
  });
}

   /* === OCULTAR MENU === */
    /* Validar si las constantes existen (if) */

    if(navClose){
        navClose.addEventListener("click", () =>{
            navMenu.classList.remove("mostrar-menu")
        })

    }


