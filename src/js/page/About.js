import {Accordion} from "../part/Accordion";

export class AboutPage{
    constructor() {
        this.page = document.getElementById('about')
        this.loadAccordion()
    }

    loadAccordion(){
     const section = this.page.querySelector('.benefits')
        new Accordion(section)
    }

}
