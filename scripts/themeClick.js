import themeChange from "./themeChange.js"

const button = document.querySelector(".footer__theme")

var currentTheme = localStorage.getItem("theme")

if (currentTheme === null) {
    currentTheme = "grey-theme"
}
console.log("tema atual = " + currentTheme)


button.addEventListener("click", event =>{
    themeChange(currentTheme)
})