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
    MenuEntry("caffe", espresso, "Caffe'", "When we say \"caffe'\", we really mean short, strong espresso. We're not playing around here."),
    MenuEntry("caffeDoppio", doppio, "Caffe' Doppio", "What's better than a regular cup of espresso? A double espresso, extra strong, in a cup twice as big!"),
    MenuEntry("caffeMacchiato", macchiato," Caffe'Macchiato", "A regular espresso (did we say that we love espresso?), but with a small amount of foamed milk.")
];

const pizzaList = [ MenuEntry("margherita", margherita, "Margherita", "'L'unica e inimitabile'. The original Neapolitan pizza, with a raised edge (cornicione) and garnished with hand-crushed peeled tomatoes, mozzarella (buffalo mozzarella or fior di latte), fresh basil leaves, and extra virgin olive oil"),
    MenuEntry("marinara", marinara, "Marinara", "Another Neapolitan classic, Pizza alla Marinara is a style of pizza seasoned with only tomato sauce, extra virgin olive oil, origano and garlic."),
    MenuEntry("calzone", calzone,"Calzone", "Oven-baked turnover, made with leavened dough and stuffed with mozzarella and either prosciutto or salame.")
]

const primiList = [ MenuEntry("spaghetti", spaghetti, "Spaghetti Aglio e Olio", "Less is more. A traditional pasta dish made with a 'soffritto' of thinly sliced garlic in extra virgin olive oil. And, in case you like spicy flavour, we can add dried chili to the mix (spaghetti aglio, olio e peperoncino)."),
    MenuEntry("gnocchi", gnocchi, "Gnocchi della Mamma", "Nothing can top mamma's gnocchi! made with ragu' and fresh basil leaves"),
    MenuEntry("lasagne", lasagne,"Lasagne della Nonna", "Grandma's legendary Lasagne, made by following the original recipe from Emilia-Romagna")

]


const dessertList = [MenuEntry("gelato", gelato, "Fluffy Chocolate Gelato", "The Original Italian Style gelato, with extra Chocolate and Nutella sauce on top."),
    MenuEntry("Cannolo", cannoli, "Cannolo Siciliano", " The well known tube-shaped Sicilian sweet, consisting of a shell of fried pastry dough, filled with a creamy filling containing ricotta cheese."),
    MenuEntry("mascarpone", mascarpone,"Crema di Mascarpone al Caffe'", "Traditional North Italian Sweet from Lombardy, consisting in sweet, coffee flavored mascarpone cream.")
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