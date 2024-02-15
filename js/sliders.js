const swiper1 = new Swiper(".gallery-swiper", {
  navigation: {
    prevEl: ".prev-gallery-slider__button",
    nextEl: ".next-gallery-slider__button",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 40,

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
      simulateTouch: false,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    500: {
      slidesPerView: 1.3,
      spaceBetween: 24,
    },
    0: {
      slidesPerView: 1,
      simulateTouch: true,
    },
  },
});

const swiper2 = new Swiper(".ourteam-swiper", {
  navigation: {
    prevEl: ".prev-ourteam-slider__button",
    nextEl: ".next-ourteam-slider__button",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 24,

  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false,
    },

    1000: {
      slidesPerView: 2.6,
    },
    800: {
      slidesPerView: 2.2,
    },
    500: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    0: {
      slidesPerView: 1,
      simulateTouch: true,
    },
  },
});
