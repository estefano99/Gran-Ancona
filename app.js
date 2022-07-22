// Variables
const navbar = document.querySelector('.navbar');
const nav_link = document.querySelector('.nav-link-imagen');
const nav_image = document.querySelector('.nav-imagen');
const cta_tienda = document.querySelector('.link-botton-banner');

// Event Listeners

window.addEventListener('scroll', () => {
    let y = scrollY;
    let x = window.innerWidth;

    if(y >= 85 && x >= 769) {
        setSticky();
    } else if(y <= 85 && x >= 769){
        setFixed();
    }
})

cta_tienda.addEventListener('click', (e) => {

    setTimeout(() => {
        window.open('https://mercado.genganar.com/es/84_gran-ancona', '_blank');
    }, 1000);
})

/* Funciones */
function setSticky() {
    navbar.style.lineHeight = '11vh';
    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen-chica');
    navbar.style.backgroundColor = '#012b3b';
}

function setFixed() {
    navbar.style.lineHeight = '14vh';
    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen');
    navbar.style.backgroundColor = '#012c3bf5';
}
