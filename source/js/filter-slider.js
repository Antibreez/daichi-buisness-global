import Swiper, { Mousewheel, FreeMode, Scrollbar } from "swiper";

$(window).on("load", () => {
  const swiper = new Swiper(".filter-section-toggle--event-subject", {
    modules: [Mousewheel, FreeMode, Scrollbar],

    mousewheel: {
      sensitivity: 5,
      thresholdDelta: 20,
    },

    scrollbar: {
      el: ".filter-scrollbar",
      draggable: true,
    },

    slidesPerView: "4",
    direction: "vertical",
    observer: true,
  });

  const swiper2 = new Swiper(".filter-section-toggle--event-brand", {
    modules: [Mousewheel, FreeMode, Scrollbar],

    mousewheel: {
      sensitivity: 5,
      thresholdDelta: 20,
    },

    scrollbar: {
      el: ".filter-scrollbar",
      draggable: true,
    },

    slidesPerView: "6",
    direction: "vertical",
    observer: true,
  });

  const swiper3 = new Swiper(".filter-section-toggle--event-category", {
    modules: [Mousewheel, FreeMode, Scrollbar],

    mousewheel: {
      sensitivity: 5,
      thresholdDelta: 20,
    },

    scrollbar: {
      el: ".filter-scrollbar",
      draggable: true,
    },

    slidesPerView: "auto",
    direction: "vertical",
    observer: true,
  });

  $(".filter-section__title-btn").on("click", function () {
    const $parent = $(this).parent();
    $parent.toggleClass("filter-section_open");

    if ($parent.hasClass("filter-section_open") && $parent.hasClass("filter-section--event-subject")) {
      swiper.update();
      swiper.slideTo(0);
    }

    if ($parent.hasClass("filter-section_open") && $parent.hasClass("filter-section--event-brand")) {
      swiper2.update();
      swiper2.slideTo(0);
    }

    if ($parent.hasClass("filter-section_open") && $parent.hasClass("filter-section--event-category")) {
      swiper3.update();
      swiper3.slideTo(0);
    }
  });
});
