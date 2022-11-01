import Swiper, { Pagination } from "swiper";

$(window).on("load", () => {
  const swiper = new Swiper(".certificates__mobile-content", {
    modules: [Pagination],

    pagination: {
      el: ".certificates__mobile-pagination",
      dynamicBullets: true,
    },

    slidesPerView: "auto",
  });
});
