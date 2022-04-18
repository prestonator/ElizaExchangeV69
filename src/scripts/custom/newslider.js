const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".fa-angle-right",
    prevEl: ".fa-angle-left",
  },
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
      centeredSlides: true,
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 5,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 5,
      centeredSlides: false,
    },

    // when window width is >= 1500px
    1500: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 2,
      centeredSlides: false,
    },

    // when window width is >= 1800px
    1800: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 5,
      centeredSlides: false,
    },
  },
});
