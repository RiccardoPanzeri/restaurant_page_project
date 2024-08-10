import { emptyContent, setTitle, setTitleLogo } from "./index.js";
import menuLogo from "./images/menu.png";




function loadMenu(){
//cambia titolo
setTitle("Menu");
setTitleLogo(menuLogo);
//svuota finestra content
emptyContent();
//inserimento entry
createMenuEntry(caffe);
createMenuEntry(caffeDoppio);

function createMenuSection(id, title, icon){

}




}


//funzione factory per la creazione di oggetti del menu

function MenuEntry(id, img, title, text){

    const getId = function(){
        return id;
    }

    const getImg = function(){
            return img;
    }
    const getTitle = function(){
        return title;
    }
    const getText = function(){
        return text;
    }

    return {getImg, getTitle, getText, getId};
}

const caffe = MenuEntry("caffe", menuLogo, "Caffe'", "Un caffè buonissimo blah blah blah");

const caffeDoppio = MenuEntry("caffeDoppio", menuLogo, "Caffe Doppio", "Un caffè buonissimo, ma doppio blah blah blah");

//funzioni per la creazione di elementi del menu

function createMenuEntry(entryObject){
    //creazione elementi    
    const menuDiv = document.createElement("div");
    const entryImage = document.createElement("img");
    const entryTitle = document.createElement("h3");
    const entryText = document.createElement("p");
    //assegnazione classi
    menuDiv.classList.add("menuDiv", "divChildDynamic");
    entryImage.classList.add("menuEntryImage");
    entryTitle.classList.add("menuEntryTitle", "subHeader");
    entryText.classList.add("menuEntryText", "normalText");
    //assegnazione attributi
    menuDiv.setAttribute("id", entryObject.getId());
    entryImage.setAttribute("src", entryObject.getImg());
    entryTitle.textContent = entryObject.getTitle();
    entryText.textContent = entryObject.getText();
    //inserimento div:
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(menuDiv);
    //inserimento elementi menudDiv
    menuDiv.appendChild(entryTitle);
    menuDiv.appendChild(entryImage);
    menuDiv.appendChild(entryText);
    }

export default loadMenu;