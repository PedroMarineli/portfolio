const button = document.querySelector(".menu__bt__footer")
const footer = document.querySelectorAll(".footer__item")
const itens = document.querySelector(".footer__itens")

button.addEventListener("click", (event)=> {
    button.style.display = "none"
    footer.forEach(item => item.style.display = "block")
    itens.style.display ="flex"
    itens.style.gap = 0.5 + 'rem'
    itens.classList.add("menu__click__animation")
})
