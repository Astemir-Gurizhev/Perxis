new Swiper(".swiper__stocks", {
  navigation: {
    nextEl: ".swiper-button-next", // класс нашего элемента, который яв. кнопкой
    prevEl: ".swiper-button-prev", // класс нашего элемента, который яв. кнопкой
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 36,
    },
    0: {
        slidesPerView: 1,
        spaceBetween: 18
    }
  }
});
