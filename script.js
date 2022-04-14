// Scripts for resume / portfolio webpage
// Author: DustyPriest

/* ------ GLOBALS ------ */

let scrolling = false;

/* ------ DOCUMENT ELEMENTS ------ */

const navBar = document.querySelector('nav');
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

// project card border animation
projCards.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    div.classList.add('add-pseudo');
  });
  div.addEventListener('mouseleave', () => {
    div.classList.remove('add-pseudo');
    div.classList.add('remove-pseudo');
  });
});
