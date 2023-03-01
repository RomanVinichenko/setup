export class SetupPage{
  constructor() {
    this.page = document.getElementById('setup')
    // this.initSlider()
    this.setupData()
  }

  setupData(){

    this.tab = this.page.querySelector('.pillars');
    this.tabs = this.tab.querySelectorAll('.tab_item');
    this.btn =  this.tab.querySelectorAll('.tab_toggle');
    this.loadTab();
    this.initTab();
  }


  loadTab(){
    this.btn[0].classList.add('pillars--active')
    APP.gsap.set(this.tabs[0], {
      height: "auto",
    })
    APP.gsap.from(this.tabs[0], {
      height: 0,
      duration: 0.2,
      ease: "Power4.easeOut",
      clearProps: "all",
      onComplete: ()=>{
        this.tabs[0].classList.add('pillars--active')
      }
    })

  }



  initTab(){
    this.btn.forEach((element)=>{
      element.addEventListener('click', (el)=>{
        classActive(this.btn);
        element.classList.add('pillars--active');
        let currentList = element.dataset.toggle;
        let Tl = APP.gsap.timeline();
        Tl.to(this.tabs,{
          height: 0,
          duration: 0.2,
          ease: "Power4.easeOut",
          clearProps: "all",
          onStart: ()=>{
            this.tabs.forEach(el=>{
              el.classList.remove('pillars--active')
            })
          },
          onComplete: ()=>{
            getService(this.tabs, currentList)
          }
        })
      })
    })

    function classActive(btn){
      btn.forEach((el)=>{
        el.classList.remove('pillars--active')

      });

    }

    function getService(services, val){

      services.forEach( (el)=>{
        if(el.dataset.tab == val){
          APP.gsap.set(el, {
            height: "auto",
          })
          APP.gsap.from(el, {
            height: 0,
            duration: 0.2,
            ease: "Power4.easeOut",
            clearProps: "all",
            onComplete: ()=>{
              // APP.gsap.set(el, { clearProps: "all" });
              el.classList.add('pillars--active')
            }
          })
        }
      })

    }
  }
}
