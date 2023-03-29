import TheGrind from "../media/experience/TheGrind.jpg"
import HKUST from "../media/experience/HKUST.jpg"
import Civtek from "../media/experience/Civtek.jpg"
import USThing from "../media/experience/USThing.jpg"
import HKUSTPathAdvisor from "../media/experience/HKUSTPathAdvisor.jpg"
import ESDLife from "../media/experience/ESDLife.jpg"
import Others from "../media/experience/default_icon_company.png"

export const ExperienceImage = (companyName: string) => {
    switch(companyName){
        case "The Grind Limited":
            return TheGrind;
        case "The Hong Kong University of Science and Technology":
            return HKUST;
        case "Civtek":
            return Civtek;
        case "USThing":
            return USThing;
        case "HKUST PathAdvisor":
            return HKUSTPathAdvisor;
        case "ESDLife Digital Solution":
            return ESDLife;
        default:
            return Others;
    }
}