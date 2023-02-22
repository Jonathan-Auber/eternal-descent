// Menu Burger
const menuHamburger = document.querySelector("#divSpanBurger")
const navLinks = document.querySelector("#navbar")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile_menu')
})

// Affichage du panier
const panier = document.querySelector("#cart");
const popupPanier = document.querySelector("#popup-panier");
const goodie = document.querySelectorAll(".art-bg");
const title = document.querySelector(".title-bg");

console.log(title);

// A voir si modification nécéssaire par la suite quand on pourra fermer avec la croix
function popup () {
    if (popupPanier.classList !== "") {
        popupPanier.classList.toggle("off");
        title.classList.toggle("blur");
        goodie.forEach(element => element.classList.toggle("blur"));   
    } 
}

panier.addEventListener("click", popup);


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