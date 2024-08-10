import italianPennant from"./images/italy_pennant.png";
import clockIcon from "./images/chef-hat.png";
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
//orari
const hours = document.createElement("div");
const clock = document.createElement("img");
const hourTitle = document.createElement("h3");


//modifica classi
title.classList.add("title");
logo.classList.add("logo");
TitleHeader.classList.add("titleHeader");
description.classList.add("homepageDiv", "description");
pennant.classList.add("absoluteIcon");
descriptionText.classList.add("normalText");
staffSignature.classList.add("signature");
hours.classList.add("homepageDiv", "hours");
clock.classList.add("absoluteIcon");
hourTitle.classList.add("subHeader");
//modifica attributi
logo.setAttribute("src", italianEsaGold);
pennant.setAttribute("src", italianPennant);
clock.setAttribute("src", clockIcon);
//modifica testo
TitleHeader.textContent = 'Ristorante Pizzeria "La Vera Italia"';
descriptionText.textContent = "Template della descrizione, testo casuale, blah blah blah blah e ancora blah e poi blah, ciao mondo";
staffSignature.textContent = "-Lo Staff de 'La Vera Italia'";
hourTitle.textContent = "Hours";
//aggiunta elementi
contentDiv.appendChild(title);
contentDiv.appendChild(description);
contentDiv.appendChild(hours);
//aggiunta header
title.appendChild(logo);
title.appendChild(TitleHeader);
title.appendChild(logo.cloneNode(true));
//aggiunta descrizione
description.appendChild(pennant);
description.appendChild(descriptionText);
description.appendChild(staffSignature);
//aggiunta orari:
hours.appendChild(clock);
hours.appendChild(hourTitle);
for(let i = 0; i < 7; i++){
    const daysOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let hourP = document.createElement("p");
    hourP.classList.add("normalText", "hoursP");
    if(i === 6 || i === 5){
    hourP.textContent = `${daysOfWeek[i]}: 8:00 - 1:00 `;
    }else if(i === 1 ){
        hourP.textContent = `${daysOfWeek[i]}: closed`;
    }else{
        hourP.textContent = `${daysOfWeek[i]}: 8:00 - 23:00 `;
    }
    hours.appendChild(hourP);
}
}

export default loadHomePage;