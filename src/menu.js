import { emptyContent, setTitle, setTitleLogo, setBG } from "./index.js";
import menuLogo from "./images/menu.png";
import coffeeLogo from "./images/cappuccino.png";
import espresso from "./images/espresso.jpg";
import doppio from "./images/doppio_espresso.jpg";
import macchiato from "./images/macchiato.jpg";
import ovenIcon from "./images/food.png";
import marinara from "./images/Pizza_marinara.jpg";
import margherita from "./images/Pizza_Margherita.jpg";
import calzone from "./images/calzone.jpeg";
import tableCloth from "./images/seamless.jpg";
import spaghetti from "./images/SpaghettiAglioOlio.jpg";
import lasagne from "./images/Lasagna_bolognese.jpg";
import gnocchi from "./images/gnocchi.jpg";
import pastaLogo from "./images/pasta.png";
import gelatoLogo from "./images/gelato.png";
import gelato from "./images/gelato.jpg";
import cannoli from "./images/cannoli.jpg";
import mascarpone from "./images/coffeeMascarpone.jpg";

const caffetteriaList = [
    MenuEntry("caffe", espresso, "Caffe'", "Un caffè buonissimo blah blah blah"),
    MenuEntry("caffeDoppio", doppio, "Caffe' Doppio", "Un caffè buonissimo, ma doppio blah blah blah"),
    MenuEntry("caffeMacchiato", macchiato," Caffe'Macchiato", "Un caffè buonissimo, ma macchiato blah blah blah")
];

const pizzaList = [ MenuEntry("margherita", margherita, "Margherita", "la classica pizza blah blah blah"),
    MenuEntry("marinara", marinara, "Marinara", "tipica pizza napoletana condita con pomodoro, aglio, origano e olio blah blah blah"),
    MenuEntry("calzone", calzone,"Calzone", "Un specialità gastronomica italiana nella quale una farcitura o ripieno di vario genere viene racchiusa in un involucro di pasta lievitata, e successivamente cotta nel forno")
]

const primiList = [ MenuEntry("spaghetti", spaghetti, "Spaghetti Aglio e Olio", "I classici spaghetti blah blah blah"),
    MenuEntry("gnocchi", gnocchi, "Gnocchi della Mamma", "Niente batte gli gnocchi della mamma blah blah blah"),
    MenuEntry("lasagne", lasagne,"Lasagne della Nonna", "Le mitiche lasagne dell nonna blah blah blah")

]


const dessertList = [MenuEntry("gelato", gelato, "Fluffy Chocolate Gelato", "Se non è al cioccolato non va bene blahblhablha"),
    MenuEntry("Cannolo", cannoli, "Cannolo Siciliano", "Mamma mia che buono blah blah blah"),
    MenuEntry("mascarpone", mascarpone,"Crema di Mascarpone al Caffe'", " crema di mascarpone al gusto di caffè che blah blah blah")
]

function loadMenu(){
    //sistema background    
    setBG(tableCloth, "contain");
    //cambia titolo
    setTitle("Menu");
    setTitleLogo(menuLogo);
    //svuota finestra content
    emptyContent();

    //inserimento entry
    //pizze
    createMenuSection("pizzaSection", "Our Pizzas", ovenIcon);
    for(let item of pizzaList){
        createMenuEntry(item);   
        }
    //primi piatti
    createMenuSection("primiSection", "Our 'Primi Piatti'", pastaLogo);
    for(let item of primiList){
        createMenuEntry(item);   
        }
    //dolci
    createMenuSection("dessertSection", "Our 'Dolci'", gelatoLogo);
    for(let item of dessertList){
        createMenuEntry(item);   
        }
    //caffetteria
    createMenuSection("caffetteriaSection", "Our Caffetteria", coffeeLogo);
    for(let item of caffetteriaList){
        createMenuEntry(item);   
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



//funzioni per la creazione di elementi del menu:

//crea titoli sezioni menu
function createMenuSection(id, title, icon){
    //creazione elementi
    const sectionDiv = document.createElement("div");
    const sectionTitle = document.createElement("h3");
    const sectionIcon = document.createElement("img");
    //assegnazione classi
    sectionDiv.classList.add("menuSectionDiv", "divChildDynamic");
    sectionTitle.classList.add("menuSectionTitle");
    sectionIcon.classList.add("menuSectionIcon");
    //assegnazione attributi
    sectionDiv.setAttribute("id", id);
    sectionTitle.textContent = title;
    sectionIcon.setAttribute("src", icon);
    //inserimento sectionDiv
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(sectionDiv);
    //inserimento elementi
    sectionDiv.appendChild(sectionIcon);
    sectionDiv.appendChild(sectionTitle);
    sectionDiv.appendChild(sectionIcon.cloneNode(true));
}

//crea entry menu
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