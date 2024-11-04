const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    const arrow = question.querySelector('.faq-arrow');
    arrow.textContent = arrow.textContent === '▲' ? '▼' : '▲';
  });
});


//nav
const menuHg = document.querySelector('.menu-hg'); // Corrected selector casing
const navLinks = document.querySelector('.nav-links');

menuHg.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggles the 'active' class
});

//fondo
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');
const contenedor = document.querySelector('.container');

const imagenes = [
    '../img/imagen1.jpg',
    '../img/imagen2.jpg',
    '../img/imagen3.jpg',
    '../img/imagen4.jpg',
    
];

let indice = 0;

function cambiarFondo(indice) {
    contenedor.style.backgroundImage = `url(${imagenes[indice]})`;
}

anteriorBtn.addEventListener('click', () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    cambiarFondo(indice);
});

siguienteBtn.addEventListener('click', () => {
    indice = (indice + 1) % imagenes.length;
    cambiarFondo(indice);
});

//automatico
setInterval(() => {
    indice = (indice + 1) % imagenes.length;
    cambiarFondo(indice);
}, 5000); // Cambia la imagen cada 3 segundos


