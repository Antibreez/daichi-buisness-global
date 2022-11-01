import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

const swiper = new Swiper(".education-promo__slider", {
  loop: true,
  modules: [Navigation, Pagination, Autoplay],

  pagination: {
    el: ".promo-swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
