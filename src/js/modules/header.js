const { doWhilst, log } = require("neo-async");

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){ 
    document.querySelector(".header").classList.add("hidden");
  } else { 
    document.querySelector(".header").classList.remove("hidden");
  }
  lastScrollTop = st <= 0 ? 0 : st; 
}, false);


const headerBurger = document.querySelector('.header__burger')
const headerBurgerMenu = document.querySelector('.header__burger-menu')
const headerMenu = document.querySelector('.header__menu')
const headerLogo = document.querySelector('.header__logo')
const headerRight = document.querySelector('.header__right')
const headerRow = document.querySelector('.header__row')
const body = document.querySelector('body')
console.log(headerBurger);
headerBurger.addEventListener('click', ()=>{
  headerBurger.classList.toggle('active')
  headerBurgerMenu.classList.toggle('active')
  headerRow.classList.toggle('active')
  body.classList.toggle('menu-open')
  headerLogo.classList.toggle('none')
  headerMenu.classList.toggle('none')
  headerRight.classList.toggle('none')
})