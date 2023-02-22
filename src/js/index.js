// Header
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
// import {Home} from "./page/Home";
import {Header} from "./part/Header";
import {AboutPage} from "./page/About";
import {SetupPage} from "./page/Setup";
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
  }
  if(document.getElementById('setup')) {
    APP.Page = new SetupPage()
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
