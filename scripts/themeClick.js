const button = document.querySelector(".footer__theme")
console.log(button)
const body = document.querySelector(".div__body")
console.log(body)

button.addEventListener("click", event =>{
    console.log("click")
    body.classList.add("test-theme")
})