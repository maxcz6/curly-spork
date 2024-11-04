const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});
// Ejemplo: Mostrar/ocultar una sección al hacer clic en un botón
//const botonMostrar = document.getElementById('mostrar-seccion');
//onst seccionOculta = document.getElementById('seccion-oculta');

//botonMostrar.addEventListener('click', () => {
  //  seccionOculta.classList.toggle('mostrar');
//});
