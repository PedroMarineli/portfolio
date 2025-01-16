const body = document.querySelector(".div__body")

var themeList = [
    "grey-theme", 
    "blue-theme",
    "yellow-theme",
    "dark-brown-theme"
]

function themeChange(t1){
   var pos = themeList.findIndex() !!!
   console.log(pos)
   body.classList.add(themeList[pos+1])
}

export default themeChange