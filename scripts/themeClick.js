import themeChange from "./themeChange.js"

const button = document.querySelector(".footer__theme")

var currentTheme = localStorage.getItem("theme")
if (currentTheme === null) {
    currentTheme = "grey-theme"
}

button.addEventListener("click", event =>{
    var currentTheme = localStorage.getItem("theme")
    themeChange(currentTheme)
})