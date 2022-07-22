// Variables
const navbar = document.querySelector('.navbar');
const nav_link = document.querySelector('.nav-link-imagen');
const nav_image = document.querySelector('.nav-imagen');
const cta_tienda = document.querySelector('.link-botton-banner');
const logo_hereford = document.querySelector('.logo-hereford');

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
    /* navbar.style.lineHeight = '100px'; */
    navbar.classList.add('navbar-chica')
    /* logo_hereford.style.width = '6%' */
    logo_hereford.classList.add('logo-hereford-chico')
    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen-chica');
    navbar.style.backgroundColor = '#012b3b';
}

function setFixed() {
    /* navbar.style.lineHeight = '150px'; */
    navbar.classList.remove('navbar-chica')
    /* logo_hereford.style.width = '10%'; */
    logo_hereford.classList.remove('logo-hereford-chico')
    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen');
    navbar.style.backgroundColor = '#012c3bf5';
}
