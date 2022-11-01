import Swiper, { FreeMode } from "swiper";

$(window).on("load", () => {
  const swiper = new Swiper(".about-program__reason", {
    modules: [FreeMode],

    freeMode: {
      enabled: true,
    },

    slidesPerView: "auto",
    watchOverflow: true,
  });
});
