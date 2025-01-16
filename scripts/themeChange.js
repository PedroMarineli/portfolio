const body = document.querySelector(".div__body")
const currentTheme = localStorage.getItem("theme")

var themeList = [
    "grey-theme", 
    "blue-theme",
    "yellow-theme",
    "dark-brown-theme"
]

body.classList.remove("grey-theme")
body.classList.add(currentTheme)

function themeChange(t1){
   var pos = themeList.indexOf(t1) 
   if (pos === -1) {
        pos++;
   }

   body.classList.add(themeList[pos+1])
   body.classList.remove(t1)

   localStorage.setItem("theme", themeList[pos+1])
}

export default themeChange