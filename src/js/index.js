// Header
let scrollPos = window.scrollY

const header = document.querySelector(".header")
const scrollChange = 10

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;

  if (scrollPos >= scrollChange) {
    header.classList.add("header--active")
  }
  else {
    header.classList.remove("header--active")
  }
})

window.onload = function(){
  //hide the preloader
  document.querySelector(".preloader").style.cssText = `
  opacity: 0;
  z-index: -1;
  `
}