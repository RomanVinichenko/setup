
export class Home {
    constructor() {
        this.page = document.getElementById('home')
        this.ww = window.innerWidth
        this.horizontalSlide()
        this.gigaFixedText()
    }

    horizontalSlide(){
        let section = this.page.querySelector(".scrollable_section")
        let mousePointer = section.querySelector(".scroll")
        let StageLIne = section.querySelector(".horizontal_scroll");

        let width  = 0;
            section.querySelectorAll(".scroll__item").forEach((el)=>{

                width +=  el.offsetWidth
            })
        let Timeline = APP.gsap.timeline();
        Timeline.to(StageLIne, {
            x: () => -(StageLIne.scrollWidth - window.innerWidth) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                anticipatePin: 1,
                start: "top top",
                scrub: 1,
                markers: false,
                pin:  section,
                end: () => "+=" + width,
                // onToggle: (e)=>{
                //
                //
                // },
                // onEnter: ()=>{
                //     toggleContainerClass(true)
                // },
                // onLeave: ()=>{
                //     toggleContainerClass(false)
                // },
                // onEnterBack: ()=>{
                //     toggleContainerClass(true)
                // },
                // onLeaveBack: ()=>{
                //     toggleContainerClass(false)
                // },
            },
    });

    // function toggleContainerClass(check){
    //     if(!check){
    //         setTimeout( ()=>{
    //             // processTitle.classList.remove('active');
    //         }, 100)
    //         mousePointer.classList.remove('fix');
    //     } else {
    //         // processTitle.classList.add('active');
    //         mousePointer.classList.add('fix');
    //     }
    // }
    }

    // titleAni(){
    //     const Element = document.querySelector('.page-title-section');
    //     const mainBoard = Element.querySelector('.main-board')
    //     const title = Element.querySelector('.title')
    //     const subtitle = Element.querySelector('.formatted-content')
    //     let block = document.querySelector('.block')
    //     let tl = this.gsap.timeline({
    //         delay: 0.5,
    //         scrollTrigger: {
    //             trigger: Element,
    //             start: "top 90%",
    //             markers: false
    //         },
    //         onComplete :()=>{
    //
    //
    //         }
    //     })
    //     tl.from(title, {
    //         opacity: 0,
    //         y: -25,
    //         duration: 0.8,
    //         ease: "Back.easeOut",
    //     })
    //     tl.from(mainBoard, {
    //         opacity: 0,
    //         y: -25,
    //         duration: 0.8,
    //         ease: "Back.easeOut"
    //     }, "-=0.6")
    //
    //     tl.from(subtitle, {
    //         opacity: 0,
    //         duration: 0.8,
    //         ease: "Back.easeOut"
    //     }, "-=0.8")
    //
    //     tl.to(block,  {
    //         height: 0,
    //         duration: 1,
    //         ease: "Back.easeOut",
    //     });
    // }

    gigaFixedText(){
        const section = this.page.querySelector('.giga_section')
        const stickyEl = section.querySelector('.left_side')
        APP.ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            pin: stickyEl
        });
        const imges = section.querySelectorAll('.giga__img')
        const infos = section.querySelectorAll('.giga__info')
        imges.forEach((img, index)=>{

            let infoTitle = infos[index].querySelector('.title')
            let infoSubtitle = infos[index].querySelector('.subtitle')
            let infoText = infos[index].querySelector('.giga__text')
            let tl = APP.gsap.timeline({
                delay: 0.5,
                scrollTrigger: {
                    trigger: img,
                    scrub: true,
                    start: `-25% top`,
                    end: `80% top`,
                    toggleActions: "play none reverse none",
                    // markers: true
                },
            })
                .to(infoTitle, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "Back.easeOut",
                })
                .to(infoSubtitle, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "Back.easeOut",
                },"-=0.4")
                .to(infoText, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "Back.easeOut",
                },"-=0.4")

                .to(infoTitle,{
                    duration: 5,
                })
                .to(infoSubtitle,{
                    duration: 5,
                },'-=5')
                .to(infoText,{
                    duration: 5,
                },'-=5')

                .to(infoTitle, {
                    opacity: 0,
                    y: -25,
                    duration: 0.8,
                    ease: "Back.easeOut",
                })
                .to(infoSubtitle, {
                    opacity: 0,
                    y: -25,
                    duration: 0.8,
                    ease: "Back.easeOut",
                },"-=0.4")
                .to(infoText, {
                    opacity: 0,
                    y: -25,
                    duration: 0.8,
                    ease: "Back.easeOut",
                },"-=0.4")
        })

    }
}
