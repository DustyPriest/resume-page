// Scripts for resume / portfolio webpage
// Author: DustyPriest

/* ------ GLOBALS ------ */

let scrolling = false;

/* ------ DOCUMENT ELEMENTS ------ */

const navBar = document.querySelector('nav');

/* ------ EVENT LISTENERS ------ */

window.onscroll = () => {
  scrolling = true;
};

// throttle scroll handling
setInterval(() => {
  if (scrolling) {
    scrolling = false;

    assessNavShadow();
  }
}, 300);

const assessNavShadow = () => {
  if (window.scrollY > 0 && !navBar.classList.contains('scroll-shadow')) {
    navBar.classList.add('scroll-shadow');
  } else if (
    window.scrollY === 0 &&
    navBar.classList.contains('scroll-shadow')
  ) {
    navBar.classList.remove('scroll-shadow');
  }
};
