// ! Red 
// ? Blue 
// ^ Green 
// ~ Yellow
// & Pink
// * Purple 
// todo Mustard 
// // Grey 


// Indentificar o clique no menu
// Verificar o iten que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll ate o alvo

function paginalogin(){
    window.location = "login.html";
}

var text = document.getElementById('text');
var leaf = document.getElementById('leaf');
var hili1 = document.getElementById('hili1');
var hili4 = document.getElementById('hili4');
var hili5 = document.getElementById('hili5');
var barras = document.getElementById('tresbarrinhas');

window.addEventListener("scroll", () => {
    var value = window.scrollY

    if (value < 500) {
        leaf.style.top = value * -1.5 + "px"
        leaf.style.left = value * 1.5 + "px"
        hili5.style.left = value * 1.5 + "px"
        text.style.marginTop = value * 2.5 + "px"
        hili4.style.left = value * -1.5 + "px"
        hili1.style.top = value * 1 + "px"
        barras.style.right = value * 0 + "%"
    }

})


//scroll leve 

const menuItems = document.querySelectorAll('.navigation a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})    

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to =document.querySelector(id).offsetTop;

    window.scroll({
        top: to,
        behavior: "smooth"
    });
}

//botao voltar ao topo

const menuItems02 = document.querySelectorAll('.voltaraotopo a[href^="#"]')

menuItems02.forEach(item02 => {
    item02.addEventListener('click', scrollbackIdOnClick);
})    

function scrollbackIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const back =document.querySelector(id).offsetback;

    window.scroll({
        back: back,
        behavior: "smooth"
    });
}

sr.reveal('.sobreoque', {duration : 3000, origin: 'right'})
sr.reveal('.minint'), {duration }

// Menu Hamburguer 

function clickMenu() { 
    if(dmenuhamburguer.style.display == 'block') {
        dmenuhamburguer.style.display = 'none'
        console.log(dmenuhamburguer)
    }else {
        dmenuhamburguer.style.display = 'block'
    }
}
