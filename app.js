// Variables
let sticky = true;
const navbar = document.querySelector('.navbar');
const imagen = document.querySelector(".nav-image")

//Event listeners

window.onscroll = function() {
    let y = parseInt(window.scrollY)

    if(y >= 200) {
        sticky = false
        cambiarNavbar(sticky);
    }else{
        sticky = true
        cambiarNavbar(sticky)
    }
}


//Funciones

function cambiarNavbar(sticky) {
    if(sticky){
        navbar.classList.remove('sticky')
        navbar.classList.add('fixed')
        imagen.style.width = "100%"
    } else {
        navbar.classList.remove('fixed')
        navbar.classList.add('sticky')
        imagen.style.width = "75%"
    }
}

