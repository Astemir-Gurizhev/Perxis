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