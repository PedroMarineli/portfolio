const button = document.querySelector(".menu__bt__footer")
const footer = document.querySelectorAll(".footer__item")

button.addEventListener("click", (event)=> {
    button.style.display = "none"
    footer.forEach(item => item.style.display = "block")
})
