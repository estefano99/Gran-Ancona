// Variables
const navbar = document.querySelector('.navbar');
const nav_link = document.querySelector('.nav-link-imagen');
const nav_image = document.querySelector('.nav-imagen');
const logo_hereford = document.querySelector('.logo-hereford');
const logo_cabana = document.querySelector('.logo-cabana');
const btn_fijo_wpp = document.querySelector('.btn-fijo-wpp');
const btn_celu_wpp = document.querySelector('.btn-celu-wpp');
const carrusel_texto = document.querySelector('.carrusel-texto');
const link_wsp_cel1 = document.querySelector('.link-wsp-cel1');
const link_wsp_cel2 = document.querySelector('.link-wsp-cel2');
const link_wsp_pc1 = document.querySelector('.link-wsp-pc1');
const link_wsp_pc2 = document.querySelector('.link-wsp-pc2');

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

/* Funciones */
function reconocerDispositivo() {
    //Para activar el icono de wpp para celulares
    if (x <= 500) {
        btn_fijo_wpp.style.display = "none";
        btn_celu_wpp.style.display = "block";

        // Reconoce si es mobile, aparece solo el icono de wsp en contactos
        link_wsp_pc1.style.display = 'none';
        link_wsp_pc2.style.display = 'none';
        
        link_wsp_cel1.style.display = 'flex';
        link_wsp_cel2.style.display = 'flex';

        // El texto cambia dependiendo de si es celu o pc
        carrusel_texto.innerHTML = '<p>A continuación se presentan imágenes de nuestros animales, logros, y de quienes forman parte de <strong>Gran Ancona SA.</strong></p>';
    
    } else {
        btn_fijo_wpp.style.display = "block";
        btn_celu_wpp.style.display = "none";

        // Reconoce si es pc, aparece el icono con whatsapp en contactos
        link_wsp_pc1.style.display = 'flex';
        link_wsp_pc2.style.display = 'flex';
        
        link_wsp_cel1.style.display = 'none';
        link_wsp_cel2.style.display = 'none';

        // El texto cambia dependiendo de si es celu o pc
        carrusel_texto.innerHTML = '<p>Aquí se presentan imágenes de nuestros animales, logros, y de quienes forman parte de <strong>Gran Ancona SA.</strong></p>';
    }

}

function setSticky() {
    navbar.classList.add('navbar-chica');

    logo_hereford.classList.add('logo-hereford-chico');
    logo_cabana.classList.add('logo-cabana-chico');

    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen-chica');
    navbar.style.backgroundColor = '#012b3b';
}

function setFixed() {
    navbar.classList.remove('navbar-chica');

    logo_hereford.classList.remove('logo-hereford-chico');
    logo_cabana.classList.remove('logo-cabana-chico');

    nav_link.classList.remove('nav-link-imagen-chica');
    nav_link.classList.add('nav-link-imagen');
    navbar.style.backgroundColor = '#012c3bf5';
}


