import  translate  from "./translate.js"

const button = document.querySelector(".trans__button__footer")

button.addEventListener("click", event=>{
    const div = document.querySelectorAll(".footer__itens__child").forEach(div =>{
        div.style.flexWrap = "wrap"
    })

    translate()
    
    const translated = localStorage.getItem("translated")
    if(translated === "true"){
        localStorage.setItem("translated", false)
    } else {
        localStorage.setItem("translated", true)
    }
})