// Variables
const navbar = document.querySelector('.navbar');
const nav_link = document.querySelector('.nav-link-imagen');
const nav_image = document.querySelector('.nav-imagen');
const cta_tienda = document.querySelector('.link-botton-banner');
const logo_hereford = document.querySelector('.logo-hereford');
const logo_cabana = document.querySelector('.logo-cabana');
const btn_fijo_wpp = document.querySelector('.btn-fijo-wpp');
const btn_celu_wpp = document.querySelector('.btn-celu-wpp');
const carrusel_texto = document.querySelector('.carrusel-texto');

let x = window.innerWidth;

// Event Listeners

document.addEventListener('DOMContentLoaded', reconocerDispositivo)

window.addEventListener('scroll', () => {
    let y = scrollY;

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

function reconocerDispositivo() {
    //Para activar el icono de wpp para celulares
    if (x <= 500) {
        btn_fijo_wpp.style.display = "none";
        btn_celu_wpp.style.display = "block";

        carrusel_texto.innerHTML = '<p>A continuación se presentan imágenes de nuestros animales, logros, y de quienes forman parte de <strong>Gran Ancona SA.</strong></p>';
    }else{
        btn_fijo_wpp.style.display = "block";
        btn_celu_wpp.style.display = "none";

        carrusel_texto.innerHTML = '<p>Aquí se presentan imágenes de nuestros animales, logros, y de quienes forman parte de <strong>Gran Ancona SA.</strong></p>';
    }

}

function setSticky() {
    /* navbar.style.lineHeight = '100px'; */
    navbar.classList.add('navbar-chica');
    /* logo_hereford.style.width = '6%' */
    logo_hereford.classList.add('logo-hereford-chico');
    logo_cabana.classList.add('logo-cabana-chico');

    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen-chica');
    navbar.style.backgroundColor = '#012b3b';
}

function setFixed() {
    /* navbar.style.lineHeight = '150px'; */
    navbar.classList.remove('navbar-chica');
    /* logo_hereford.style.width = '10%'; */
    logo_hereford.classList.remove('logo-hereford-chico');
    logo_cabana.classList.remove('logo-cabana-chico');

    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen');
    navbar.style.backgroundColor = '#012c3bf5';
}


