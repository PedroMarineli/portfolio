import translate from "./translate.js";

const translated = localStorage.getItem("translated")

if(translated){
    translate()
}