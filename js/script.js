// Selecciona el header del DOM
const header = document.querySelector("header");

// Añade la clase 'sticky' al header al desplazarnos
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// Gestiona la apertura y cierre del menú al hacer click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Cierra el menu al hacer scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Configura ScrollReveal para las animaciones al hacer scroll
const sr = ScrollReveal (
    {
        distance: '25px',
        duration: 2500,
        reset: true,
    }
)

// Aplica el ScrollReveal en diferentes secciones de la pagina
sr.reveal('.home-text', {delay: 190, origin: 'bottom'})
sr.reveal('.about, .services, .portfolio, .contact', {delay: 200, origin: 'bottom'})