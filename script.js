// Scripts for resume / portfolio webpage
// Author: DustyPriest

/* ------ LOAD FUNCTIONS ------ */

setTimeout(() => {
  sectionArrow.classList.remove('hide-arrow');
}, 3500);

/* ------ GLOBALS ------ */

let scrolling = false;

/* ------ DOCUMENT ELEMENTS ------ */

const navBar = document.querySelector('nav');
const sectionArrow = document.querySelector('.next-section-arrow');
const projCards = document.querySelectorAll('.project-card > a div');

/* ------ EVENT LISTENERS ------ */

window.onscroll = () => {
  scrolling = true;
};

// throttle scroll handling
setInterval(() => {
  if (scrolling) {
    scrolling = false;

    assessNavShadow();
    assessSectionArrow();
  }
}, 300);

// add nav shadow when not at page top
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

const assessSectionArrow = () => {
  if (window.scrollY > 0 && !sectionArrow.classList.contains('hide-arrow')) {
    sectionArrow.classList.add('hide-arrow');
  } else if (
    window.scrollY === 0 &&
    sectionArrow.classList.contains('hide-arrow')
  ) {
    sectionArrow.classList.remove('hide-arrow');
  }
};

// ANTIQUATED: FOR OLD BORDER ANIMATIONS
// project card border animation
// projCards.forEach((div) => {
//   div.addEventListener('mouseenter', () => {
//     div.classList.add('add-pseudo');
//   });
//   div.addEventListener('mouseleave', () => {
//     div.classList.remove('add-pseudo');
//     div.classList.add('remove-pseudo');
//   });
// });
