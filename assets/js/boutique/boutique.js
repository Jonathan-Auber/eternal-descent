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

function popup() {
    if (popupPanier.classList !== "") {
        popupPanier.classList.remove("off");
        title.classList.add("blur");
        goodie.forEach(element => element.classList.add("blur"));
    }
}

panier.addEventListener("click", popup);

// Fermeture du panier

const close = document.querySelector("#btn-close");

function closeCart() {
    if (popupPanier.classList !== "off") {
        popupPanier.classList.add("off");
        title.classList.remove("blur");
        goodie.forEach(element => element.classList.remove("blur"));
    }
}

close.addEventListener("click", closeCart)

// Fonction de calcul des frais de ports
const deliveryPrice = document.querySelector("#delivery-price");
const totalPrice = document.querySelector("#total-price");

function isDeleveryFree() {
    // Penser à modifier le total
    totalPrice.innerHTML = parseInt(mugBlancTotalPrice.innerHTML) + parseInt(mugNoirTotalPrice.innerHTML);
    if (totalPrice.innerHTML >= 50) {
        deliveryPrice.innerHTML = "Offert"
    } else {
        deliveryPrice.innerHTML = 10 + "€";
    }
}

// Controle du panier
const counter = document.getElementById("count");



const addTShirtBlanc = document.getElementById("add-tshirt-blanc");
const tShirtBlanc = document.querySelector(".mn-tab");
const tShirtBlancTotal = document.querySelector("#mn-count");
const tShirtBlancTotalPrice = document.querySelector("#mn-price");

const addTShirtNoir = document.getElementById("add-tshirt-noir");
const tShirtNoir = document.querySelector(".tsn-tab");
const tShirtNoirTotal = document.querySelector("#tsn-count");
const tShirtNoirTotalPrice = document.querySelector("#tsn-price");

const addPoster = document.getElementById("add-poster");
const poster = document.querySelector(".poster-tab");
const posterTotal = document.querySelector("#poster-count");
const posterTotalPrice = document.querySelector("#poster-price");

const addPeluche = document.getElementById("add-peluche");
const peluche = document.querySelector(".peluche-tab");
const pelucheTotal = document.querySelector("#peluche-count");
const pelucheTotalPrice = document.querySelector("#peluche-price");

// Article Mug Blanc
const addMugBlanc = document.querySelector("#add-mug-blanc");
const mugBlanc = document.querySelector(".mb-tab");
const mugBlancTotal = document.querySelector("#mb-count");
const mugBlancTotalPrice = document.querySelector("#mb-price");

function addToCartMugBlanc() {
    if (mugBlanc.classList !== "mb-tab") {
        mugBlanc.classList.remove("off");
    }
    mugBlancTotal.innerHTML++;
    mugBlancTotalPrice.innerHTML = mugBlancTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();

}

addMugBlanc.addEventListener("click", addToCartMugBlanc);
// Fonction ajout ou retrait d'article dans le panier 
const mugBlancAdd = document.querySelector(".btn-plus.mb");
const mugBlancRemove = document.querySelector(".btn-moins.mb");


function removeMB() {
    mugBlancTotal.innerHTML--;
    mugBlancTotalPrice.innerHTML = mugBlancTotal.innerHTML * 20;
    counter.innerHTML--;
    isDeleveryFree();
    if (mugBlancTotal.innerHTML == 0) {
        mugBlanc.classList.add("off");
    }

}

function addMB() {
    mugBlancTotal.innerHTML++;
    mugBlancTotalPrice.innerHTML = mugBlancTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();
}


mugBlancAdd.addEventListener("click", addMB);
mugBlancRemove.addEventListener("click", removeMB);

// Article Mug Noir

const addMugNoir = document.getElementById("add-mug-noir");
const mugNoir = document.querySelector(".mn-tab");
const mugNoirTotal = document.querySelector("#mn-count");
const mugNoirTotalPrice = document.querySelector("#mn-price");

function addToCartMugNoir() {
    if (mugNoir.classList !== "mb-tab") {
        mugNoir.classList.remove("off");
    }
    mugNoirTotal.innerHTML++;
    mugNoirTotalPrice.innerHTML = mugNoirTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();

}

addMugNoir.addEventListener("click", addToCartMugNoir);
// Fonction ajout ou retrait d'article dans le panier 
const mugNoirAdd = document.querySelector(".btn-plus.mn");
const mugNoirRemove = document.querySelector(".btn-moins.mn");

function removeMN() {
    mugNoirTotal.innerHTML--;
    mugNoirTotalPrice.innerHTML = mugNoirTotal.innerHTML * 20;
    counter.innerHTML--;
    isDeleveryFree();
    if (mugNoirTotal.innerHTML == 0) {
        mugNoir.classList.add("off");
    }

}

function addMN() {
    mugNoirTotal.innerHTML++;
    mugNoirTotalPrice.innerHTML = mugNoirTotal.innerHTML * 20;
    counter.innerHTML++;
    isDeleveryFree();
}


addMugNoir.addEventListener("click", addToCartMugNoir);
mugNoirAdd.addEventListener("click", addMN);
mugNoirRemove.addEventListener("click", removeMN);


addMugNoir.addEventListener("click", addToCart);
addTShirtBlanc.addEventListener("click", addToCart);
addTShirtNoir.addEventListener("click", addToCart);
addPoster.addEventListener("click", addToCart);
addPeluche.addEventListener("click", addToCart);

