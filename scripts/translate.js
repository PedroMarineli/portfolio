const translationsBR ={
    "home": "principal",
    "works": "trabalhos", 
    "skills": "habilidades", 
    "about": "sobre mim", 
    "soft dev": "desenvolvedor de software", 
    "talk": "fale comigo"
}
const translationsEN ={
    "home": "home",
    "works": "works", 
    "skills": "skills", 
    "about": "about me", 
    "soft dev": "software developer", 
    "talk": "talk to me"
}

function translate(){
    const button = document.querySelector(".trans__button__footer")

    if(localStorage.getItem("translated") === "true"){
        button.setAttribute("src", "icons/brasil.svg")
        document.querySelectorAll("[tr-data]").forEach(item => {
            const key = item.getAttribute("tr-data");
            if(translationsBR[key]){
                item.textContent = translationsBR[key]
            }
        }) 
        if(window.innerWidth < 768){
            const div = document.querySelectorAll(".footer__itens__child").forEach(div =>{
                div.style.flexWrap = "wrap"
            })
        }
    } else{
        button.setAttribute("src", "icons/usa.svg")
        document.querySelectorAll("[tr-data]").forEach(item => {
            const key = item.getAttribute("tr-data");
            if(translationsEN[key]){
                item.textContent = translationsEN[key]
            }
        }) 
        const div = document.querySelectorAll(".footer__itens__child").forEach(div =>{
            div.style.flexWrap = "nowrap"
        })
    }
}

export default translate