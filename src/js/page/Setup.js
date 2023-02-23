import Swiper from 'swiper';



export class SetupPage{
  constructor() {
    this.page = document.getElementById('setup')
    this.initSlider()
  }

  initSlider(){
    const swiperPartner = new Swiper('.swiper__partner', {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
      // breakpoints: {
      //   790: {
      //     slidesPerView: 3,
      //     spaceBetween: 24,
      //   },
      //   547: {
      //     slidesPerView: 2,
      //     spaceBetween: 24,
      //   }
      // }
    });
  }
}
