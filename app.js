// Variables
const navbar = document.querySelector('.navbar');
const nav_link = document.querySelector('.nav-link-imagen');
const nav_image = document.querySelector('.nav-imagen');
const cta_tienda = document.querySelector('.link-botton-banner');
const logo_hereford = document.querySelector('.logo-hereford');
const logo_cabana = document.querySelector('.logo-cabana');
const btn_fijo_wpp = document.querySelector('.btn-fijo-wpp');
const btn_celu_wpp = document.querySelector('.btn-celu-wpp');
// Event Listeners

window.addEventListener('scroll', () => {
    let y = scrollY;
    let x = window.innerWidth;

    if(y >= 85 && x >= 769) {
        setSticky();
    } else if(y <= 85 && x >= 769){
        setFixed();
    }

    //Para activar el icono de wpp para celulares
    if (x <= 500) {
        btn_fijo_wpp.style.display = "none";
        btn_celu_wpp.style.display = "block";
    }else{
        btn_fijo_wpp.style.display = "block";
        btn_celu_wpp.style.display = "none";
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


