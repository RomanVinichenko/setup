// Header
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
// import {Home} from "./page/Home";
import {Header} from "./part/Header";
import {AboutPage} from "./page/About";
import {SetupPage} from "./page/Setup";
import {Home} from "./page/Home";
import Swiper, { Navigation, Pagination } from 'swiper';
// import {Footer} from "./part/Footer";

export const APP = {}

window.APP = APP
APP.gsap = gsap
APP.gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
APP.ScrollTrigger = ScrollTrigger

const initApp = () => {
  APP.isPhoneDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  document.querySelector(".preloader").style.cssText = `
    opacity: 0;
    z-index: -1;
    `

  if(document.getElementById('about')) {
    APP.Page = new AboutPage()
  } else if(document.getElementById('setup')) {
    APP.Page = new SetupPage()
  } else if(document.getElementById('home')) {
    APP.Page = new Home()
  }

  APP.Header = new Header()
  // APP.Footer = new Footer()
}

window.addEventListener("resize", ()=>{
  APP.isPhoneDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if(APP.isPhoneDevice){
    document.body.classList.add('mobile')
  } else {
    document.body.classList.remove('mobile')
  }

}, false);

if(APP.isPhoneDevice){
  document.body.classList.add('mobile')
}

try {
  window.addEventListener("load", initApp, false);
} catch(e) {
  window.onload = initApp;
}


  const swiperPartner = new Swiper('.swiper__partner', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation]
  });

const swiperDashboard = new Swiper('.swiper__dashboard', {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  modules: [Navigation, Pagination]
});

const swiperKnowledge = new Swiper('.swiper__knowledge', {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  modules: [Navigation]
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

const swiperOtherProducts = new Swiper('.swiper__other-products', {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  modules: [Navigation]
});