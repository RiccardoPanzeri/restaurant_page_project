import italianBg from "./images/itaFlagLowPoly.jpg";
import flagEsaLogo from "./images/italy_esa_gold.png";
import { emptyContent, setBG, setTitle, setTitleLogo} from "./index.js";
import sideFlag from "./images/italy.png";

function loadContactPage(){
   
    //svuota contentDiv
    emptyContent();
    //sistema titolo
    setTitle("Contact Us");
    setTitleLogo(flagEsaLogo);
    //sistema background
    setBG(italianBg, "cover");
    //aggiunge contatti
    createContact("managerDiv", "Manager", "Luigi Verdi", "Email: indirizzoMailAutentico@ehVolevi.com");
    createContact("chefDiv", "Chef", "Cesare Bianchi", "Email: indirizzoMailReale@Credici.com");
    createContact("receptionistDiv", "Receptionist ", "Mario Rossi", `Email: veroIndirizzoMail@TiPiacerebbe.com`);
   
    




}

export default loadContactPage;

function createContact(id,title, name, mail){
     //ricerca elementi nel DOM 
     const contentDiv = document.querySelector("#content");
     //crea elementi
    const contactDiv = document.createElement("div");
    const contactName = document.createElement("p");
    const contactTitle = document.createElement("p");
    const contactMail = document.createElement("p")
    const contactIcon = document.createElement("img");
    // assegna classi
    contactDiv.classList.add("contactDiv", "divChildDynamic", );
    contactName.classList.add("contactName", "normalText");
    contactTitle.classList.add("contactTitle",  "subHeader");
    contactMail.classList.add("contactMail", "normalText");
    contactIcon.classList.add("contactIcon");
    //assegna attributi
    contactDiv.setAttribute("id", id);
    contactName.textContent = name;
    contactTitle.textContent = title;
    contactMail.textContent = mail;
    contactIcon.setAttribute("src", sideFlag);
    //aggiunge elementi a contentDiv
    contentDiv.appendChild(contactDiv);
    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactMail);
    contactDiv.appendChild(contactIcon);

}