/* Menu Hamburger */
const menuHamburger = document.querySelector("#divSpanBurger")
const navLinks = document.querySelector("#navbar")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile_menu')
})

/* Constante pour toutes les questions et réponses FAQ déjà traités */
const questionEl = document.querySelector("#question")
const answerDate = document.querySelector(".answer_date")
const answerAccess = document.querySelector(".answer_access")
const answerOnline = document.querySelector(".answer_online")
const answerCoop = document.querySelector(".answer_coop")

/* Fonction pour faire apparaitre et disparaitre les réponses FAQ depuis le bord gauche du site */
function answerDateOn() {
    let select = questionEl.value
    console.log(select)
    if (select == "date") {
        answerDate.classList.add("adOn")
        answerAccess.classList.remove("adOn")
        answerOnline.classList.remove("adOn")
        answerCoop.classList.remove("adOn")
        select == ""
    }
    else if (select == "access") {
        answerAccess.classList.add("adOn")
        answerDate.classList.remove("adOn")
        answerOnline.classList.remove("adOn")
        answerCoop.classList.remove("adOn")
    }
    else if (select == "online") {
        answerOnline.classList.add("adOn")
        answerDate.classList.remove("adOn")
        answerAccess.classList.remove("adOn")
        answerCoop.classList.remove("adOn")
    }
    else if (select == "coop") {
        answerCoop.classList.add("adOn")
        answerDate.classList.remove("adOn")
        answerAccess.classList.remove("adOn")
        answerOnline.classList.remove("adOn")
    }
    else {
        answerDate.classList.remove("adOn")
        answerAccess.classList.remove("adOn")
        answerOnline.classList.remove("adOn")
        answerCoop.classList.remove("adOn")
    }
}
questionEl.addEventListener("click", answerDateOn)