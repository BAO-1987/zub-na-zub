import Swiper, {
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper/bundle';

const reviewsSlider = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  mousewheelControl: true,
  keyboardControl: true,
  // autoplay: {
  //   delay: 2000,
  // },


  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },

  navigation: {
    nextEl: ".reviews__next",
    prevEl: ".reviews__prev",
  },


  // breakpoints: {

  //   430: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },

  //   580: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },

  //   750: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },

  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },
  // }

});

const newsSlider = new Swiper(".news-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheelControl: true,
  keyboardControl: true,
  // autoplay: {
  //   delay: 2000,
  // },


  a11y: {
    prevSlideMessage: 'Попередній слайд',
    nextSlideMessage: 'Наступний слайд',
  },

  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
  },


  breakpoints: {
    475: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    620: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
