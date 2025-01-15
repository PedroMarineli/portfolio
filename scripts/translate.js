const translations ={
    "home": "principal",
    "works": "trabalhos", 
    "skills": "habilidades", 
    "about": "sobre mim", 
    "soft dev": "desenvolvedor de software", 
    "talk": "fale comigo"
}

function translate(){
    document.querySelectorAll("[tr-data]").forEach(item => {
        const key = item.getAttribute("tr-data");
        if(translations[key]){
            item.textContent = translations[key]
        }
    }) 
}

export default translate