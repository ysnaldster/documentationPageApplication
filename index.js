'use strict'

let boton_secciones = document.getElementById('desplegable-temas');


let desplegarMenu = () => {
    let menu = document.querySelector('.menu_oculto');
    menu.classList.remove('d-none');
}

let ocultarMenu = () => {
    let menu = document.querySelector('.menu_oculto');
    menu.classList.add('d-none')
}

boton_secciones.addEventListener("click", desplegarMenu);
// boton_secciones.addEventListener("click",ocultarMenu);


