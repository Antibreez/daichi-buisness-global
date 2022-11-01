import Swiper, { FreeMode } from "swiper";

const $toggleBtn = $(".categories__toggle-btn");

$toggleBtn.on("click", (e) => {
  const $btn = $(e.currentTarget);
  const $typesBlock = $btn
    .parents(".categories")
    .find(".categories__types-hidden");

  $typesBlock.slideToggle();
  $btn.toggleClass("opened");
});

$(window).on("load", () => {
  const swiper = new Swiper(".categories__list-wrap", {
    modules: [FreeMode],

    freeMode: {
      enabled: true,
    },

    slidesPerView: "auto",
    watchOverflow: true,
  });
});
