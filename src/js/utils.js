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
