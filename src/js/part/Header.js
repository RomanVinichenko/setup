export class Header {
    constructor() {

        console.log('load')
        this.scrollPos = window.scrollY
        this.header = document.querySelector('.header');
        console.log(this.header)
        this.scrollChange = 10

        this.addScrollEvent();

    }

    addScrollEvent(){
        window.addEventListener('scroll', ()=> {
            this.scrollPos = window.scrollY;

            if (this.scrollPos >= this.scrollChange) {
                this.header.classList.add("header--active")
            }
            else {
                this.header.classList.remove("header--active")
            }
        })
    }
}
