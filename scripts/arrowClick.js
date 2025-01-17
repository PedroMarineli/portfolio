const arrowLeft = document.getElementById("left")
const arrowRight = document.getElementById("right")
const works = document.getElementsByClassName("div__work")

works[0].style.display = "flex"
let current = 0

arrowLeft.addEventListener("click", event => {
    works[current].style.display = "none"
    if (current-1 === -1){
        current = (works.length)
    }
    current--
    works[current].style.display = "flex"
    console.log(current)
})

arrowRight.addEventListener("click", event => {
    works[current].style.display = "none"
    if (current+1 === (works.length)){
        current = -1
    }
    current++
    works[current].style.display = "flex"
    console.log(current)
})