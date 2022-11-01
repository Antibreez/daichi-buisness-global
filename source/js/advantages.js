import Swiper from "swiper";

const $adv = $(".education-advantages__item");
const $wrapper = $(".education-advantages__mobile-wrapper");

const promise = new Promise((res, rej) => {
  $adv.each((idx, el) => {
    const $newEl = $(el).clone(false);
    $newEl.addClass("swiper-slide");

    $wrapper.append($newEl);
  });
  res();
});

promise.then(() => {
  const swiper = new Swiper(".education-advantages__mobile", {
    slidesPerView: "auto",
    centeredSlides: true,
  });
});
