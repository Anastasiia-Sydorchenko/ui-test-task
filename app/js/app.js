// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

// 100VH MOBILE FIX
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);

   if (window.innerWidth < 1025) {
      swiperPeople.mousewheel.disable();
   }
});