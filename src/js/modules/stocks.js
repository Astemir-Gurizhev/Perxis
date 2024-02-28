new Swiper(".swiper__stocks", {
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev", 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  speed: 500,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 36,
    },
    0: {
        slidesPerView: 1,
        spaceBetween: 18
    }
  }
});
