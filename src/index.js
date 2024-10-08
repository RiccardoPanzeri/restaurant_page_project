import "./modern-normalize.css";
import "./style.css";
import loadHomepage from "./homepage.js";
import italianEsaGold from "./images/italy_esa_gold.png";
import loadMenu from "./menu.js";
import loadContactPage from "./contact.js";


//carica homepage all'apertura del sito
createTitle();
loadHomepage();


//ricerca elementi DOM
const buttonNav = document.querySelector("#mainNav");

//event listeners
buttonNav.addEventListener("click", (e)=>{
    let element = e.target;

    switch(element.id){
        case "homeButton":
            loadHomepage();
            
            break;
        case "menuButton":
            loadMenu();
            
            break;
        case "contactButton":
            loadContactPage();
            break;
    }
});


//funzioni:

function createTitle(){
    //creazione elementi
    const contentDiv = document.querySelector("#content");
    const title = document.createElement("div");
    const logo = document.createElement("img");
    const TitleHeader = document.createElement("h1");
    //modifica classi
    title.classList.add("title");
    logo.classList.add("logo");
    TitleHeader.classList.add("titleHeader");
    //modifica attributi
    logo.setAttribute("src", italianEsaGold);
    //aggiunge l'elemento;
    contentDiv.appendChild(title);
    title.appendChild(logo);
    title.appendChild(TitleHeader);
    title.appendChild(logo.cloneNode(true));
}

function setTitle(newTitle){
    const titleHeader = document.querySelector(".titleHeader");
    titleHeader.textContent = newTitle;
    console.log("Titolo cambiato");
}

function setTitleLogo(newLogo){
    const titleLogo = document.querySelectorAll(".logo");
    for(let logo of titleLogo){
        logo.setAttribute("src", newLogo);

    }
}

function emptyContent(){
    const contentDiv = document.querySelector("#content");
    const divChildren= document.querySelectorAll(".divChildDynamic");
for(let child of divChildren){
    contentDiv.removeChild(child);
}
}


function setBG(image, sizeStyle){
    const contentDiv = document.querySelector("#content");
contentDiv.style.backgroundImage = `url(${image})`;
contentDiv.style.backgroundSize = sizeStyle;
}


export {setTitle, emptyContent, setTitleLogo, italianEsaGold, setBG};