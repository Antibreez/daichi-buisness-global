import Swiper, { FreeMode } from "swiper";

//const $lk = $(".lk-education");
const $tabs = $(".education-tabs .lk-education__tab");
// const $eventsFuture = ".lk-education__events--future";
// const $eventsPast = ".lk-education__events--past";
// const $certificates = ".lk-education__certificates";
// const $programs = ".lk-education__programs";

function hideAll() {
  $tabs.first().parents(".education-tabs").parent().find("[data-block]").hide();
}

function removeActiveClass() {
  $tabs.removeClass("active");
}

$tabs.on("click", (e) => {
  const $target = $(e.currentTarget);

  if ($target.hasClass("active")) return;

  removeActiveClass();
  $target.addClass("active");

  const name = $target.attr("data-tab");
  hideAll();
  $tabs.first().parents(".education-tabs").parent().find(`[data-block="${name}"]`).show();
});

$(window).on("load", () => {
  const swiper = new Swiper(".lk-education__tabs", {
    modules: [FreeMode],

    freeMode: {
      enabled: true,
    },

    slidesPerView: "auto",
    watchOverflow: true,
  });
});
