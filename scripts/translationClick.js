import  translate  from "./translate.js"

const button = document.querySelector(".trans__button__footer")

button.addEventListener("click", event=>{
    const translated = localStorage.getItem("translated")
    if(translated === "true"){
        localStorage.setItem("translated", false)
    } else {
        localStorage.setItem("translated", true)
    }
    translate()
})