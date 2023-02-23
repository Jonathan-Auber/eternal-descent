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
function answerOn() {
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
questionEl.addEventListener("click", answerOn)

/* Au chargement de la page vérifier si il y a des questions en local storage et les affichers si elles existent, sinon créer un tableau vide */


function alreadyStored() {
    let questionTab = [];
    console.log(localStorage.getItem("question"))
    const storedQuestion = localStorage.getItem("question");
    if (storedQuestion !== null) {
        questionTab = JSON.parse(storedQuestion);
        editStorage(questionTab);
    }
    return questionTab;
}
window.addEventListener("open", alreadyStored)
const questionTab = alreadyStored();

/* Récupérer la valeur de la question, la stocker en local storage et afficher la question */

const freeQuestion = document.querySelector("#free_question")
const submitQuestion = document.querySelector("#submit_question")

function storage() {
    questionTab.push(freeQuestion.value)
    localStorage.setItem("question", JSON.stringify(questionTab))
    editQuestion(questionTab)
}
submitQuestion.addEventListener("click", storage)



/* boucle pour créer une div pour chaque élément présent dans le localStorage */

function editStorage(questionTab) {
    for (var i = 0; i < questionTab.length; i++) {
        const questionSend = document.querySelector(".question_send");
        const newQuestion = document.createElement("div");
        newQuestion.classList.add("question_send1");
        newQuestion.textContent = questionTab[i];
        questionSend.appendChild(newQuestion);
    }
}

/* Création de l'affichage des nouvelles questions submit */

function editQuestion(questionTab) {
    const questionSend = document.querySelector(".question_send");
    const newQuestion = document.createElement("div");
    newQuestion.classList.add("question_send1");
    var a = questionTab.length - 1;
    newQuestion.textContent = questionTab[a];
    questionSend.appendChild(newQuestion);
}

