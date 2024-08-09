import italianPennant from"./images/italy_pennant.png";
import italianRoundGold from "./images/italy_gold_border.png";
import italianEsaGold from "./images/italy_esa_gold.png";


function loadHomePage(){

const contentDiv = document.querySelector("#content");

//svuota finestra content
const divChildren= document.querySelectorAll(".divChildDynamic");
for(let child of divChildren){
    contentDiv.removeChild(child);
}
//crea elementi della Homepage:
//header
const title = document.createElement("div");
const logo = document.createElement("img");
const TitleHeader = document.createElement("h1");
//descrizione
const description = document.createElement("div");
const pennant = document.createElement("img");
const descriptionText = document.createElement("p");
const staffSignature = document.createElement("p");
//modifica classi
title.classList.add("title");
logo.classList.add("logo");
TitleHeader.classList.add("titleHeader");
description.classList.add("homepageDiv", "description");
pennant.classList.add("absoluteIcon", "logo");
descriptionText.classList.add("normalText");
staffSignature.classList.add("signature");
//modifica attributi
logo.setAttribute("src", italianEsaGold);
pennant.setAttribute("src", italianPennant);
//modifica testo
TitleHeader.textContent = "Nome del ristorante template";
descriptionText.textContent = "Template della descrizione, testo casuale, blah blah blah blah e ancora blah e poi blah, ciao mondo";
staffSignature.textContent = "Lo Staff de 'La Vera Italia'";
//aggiunta elementi
contentDiv.appendChild(title);
contentDiv.appendChild(description);
//aggiunta header
title.appendChild(logo);
title.appendChild(TitleHeader);
title.appendChild(logo.cloneNode(true));
//aggiunta descrizione
description.appendChild(pennant);
description.appendChild(descriptionText);
description.appendChild(staffSignature);

}

export default loadHomePage;