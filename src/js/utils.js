export function blockScroll(){
    // const scrollClass = window.APP.smoothScroll;
    // scrollClass.disabledScroll()

    let div = document.createElement('div');
    document.body.append(div);

    let paddingRight = window.innerWidth - div.offsetWidth;
    let scroll = window.scrollY;

    div.remove();

    document.body.classList.add('no-scroll');
    document.body.style.top = `-${scroll}px`;
    document.body.style.paddingRight = paddingRight + 'px';
    document.body.style.setProperty('--p_right', paddingRight+ "px");
    return paddingRight;

}
export function unblockScroll(){
    // const scrollClass = window.APP.smoothScroll;
    // scrollClass.enableScroll()

    const scrollY = document.body.style.top;
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = '';
    document.body.style.setProperty('--p_right', "0px");
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

export function initAnimation(){


    let fadeUp = document.querySelectorAll('.fade-up')
    fadeUp.forEach((el)=>{
        let ElDelay = (el.dataset.delay) ? Number(el.dataset.delay) : 0
        APP.gsap.to(el,{
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.001 * ElDelay,
            ease: "Power1.easeOut",
            scrollTrigger: {
                trigger: el,
                start: "10% bottom",
                // markers: true

            }
        })

    })
    let fadeLeft = document.querySelectorAll('.fade-left')
    fadeLeft.forEach((el)=>{
        let ElDelay = (el.dataset.delay) ? Number(el.dataset.delay) : 0

        APP.gsap.to(el,{
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.001 * ElDelay,
            ease: "Power2.easeIn",
            scrollTrigger: {
                trigger: el,
                start: "10% bottom",
                // markers: true
            }
        })

    })
    let fade = document.querySelectorAll('.fade')
    fade.forEach((el)=>{
        let ElDelay = (el.dataset.delay) ? Number(el.dataset.delay) : 0

        APP.gsap.to(el,{
            opacity: 1,
            duration: 0.8,
            delay: 0.001 * ElDelay,
            ease: "Power4.easeOut",
            scrollTrigger: {
                trigger: el,
                start: "10% bottom",
                // markers: true
            }
        })

    })
    // if (document.querySelector('.gsap-marker-scroller-start')) {
    //     const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    //
    //     this.Scrollbar.addListener(({ offset }) => {
    //         gsap.set(markers, { marginTop: -offset.y })
    //     });
    // }





}
