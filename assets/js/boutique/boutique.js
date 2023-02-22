// Menu Burger
const menuHamburger = document.querySelector("#divSpanBurger")
const navLinks = document.querySelector("#navbar")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile_menu')
})


// Controle du panier
const counter = document.getElementById("count");
const addMugBlanc = document.querySelector("#add-mug-blanc");
const addMugNoir = document.getElementById("add-mug-noir");
const addTShirtBlanc = document.getElementById("add-tshirt-blanc");
const addTShirtNoir = document.getElementById("add-tshirt-noir");
const addPoster = document.getElementById("add-poster");
const addPeluche = document.getElementById("add-peluche");


function addToCart(goodie) {
    counter.innerHTML++;
}

addMugBlanc.addEventListener("click", addToCart);
addMugNoir.addEventListener("click", addToCart);
addTShirtBlanc.addEventListener("click", addToCart);
addTShirtNoir.addEventListener("click", addToCart);
addPoster.addEventListener("click", addToCart);
addPeluche.addEventListener("click", addToCart);