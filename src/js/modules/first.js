document.addEventListener("DOMContentLoaded", function() {
  new Swiper(".swiper__first", {
    navigation: {
      nextEl: ".first-button-next", 
      prevEl: ".first-button-prev",
    },
    pagination: {
      el: ".first-pagination",
      clickable: true
    },
    speed: 500, 
    slidesPerView: 1,
   loop: true,

  });
})