import italianBg from "./images/itaFlagLowPoly.jpg";
import flagEsaLogo from "./images/italy_esa_gold.png";
import { emptyContent, setBG, setTitle, setTitleLogo} from "./index.js";

function loadContactPage(){
    emptyContent();
    setTitle("Contact Us");
    setTitleLogo(flagEsaLogo);
    setBG(italianBg, "auto");




}

export default loadContactPage;