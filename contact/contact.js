const questionEl = document.querySelector("#question")
const answerDate = document.querySelector(".answer_date")
function answerDateOn() {
    console.log(questionEl.value)
    if (questionEl.value = "date") {
        answerDate.classList.toggle("adOn")
    }
}
questionEl.addEventListener("click", answerDateOn)