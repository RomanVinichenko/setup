import {Accordion} from "../part/Accordion";
import {blockScroll, unblockScroll} from "../utils";

export class AboutPage{
    constructor() {
        this.page = document.getElementById('about')
        this.loadAccordion()
        this.teamSection()
        this.initThankPopup()
    }

    loadAccordion(){
     const section = this.page.querySelector('.benefits')
        new Accordion(section)
    }

    teamSection(){
        const section = this.page.querySelector('.team')
        const triggers = section.querySelectorAll('.popup-btn')
        triggers.forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                const teamId = btn.dataset.teamid
                console.log(teamId)
                console.log(btn)
                this.openThankPopup(teamId)
            })
        })
    }

    initThankPopup(){
        let popup = document.querySelector('#teamPopup');
        let content = popup.querySelector('.main-popup');

        this.ThankPopupTl = APP.gsap.timeline({paused: true})
            .set(popup, {
                zIndex: 20
            })
            .set(content, {
                opacity: 0,
                y: -20
            })
            .to(popup, {
                opacity: 1,
                duration: 0.2,
                ease: "Power4.easeOut"
            }).to(content, {
                opacity: 1,
                y:0,
                duration: 0.3,
                ease: "Power4.easeOut"
            })
    }

    openThankPopup(teamId){

        let popup = document.querySelector('#teamPopup');
        const content = popup.querySelector(`.team-${teamId}`);

        content.classList.add('current')
        let close = popup.querySelector('.btn_close');
        let layer = popup.querySelector('.layer');

        this.ThankPopupTl.play();
        blockScroll()
        close.addEventListener('click', ()=>{
            this.ThankPopupTl.reverse();
            unblockScroll()
            content.classList.remove('current')
        });

        layer.addEventListener('click', ()=>{
            this.ThankPopupTl.reverse();
            unblockScroll()
            content.classList.remove('current')
        });
    }
}
