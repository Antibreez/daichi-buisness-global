const $triggers = $("[data-trigger]");
const $overlay = $(".modal__overlay");
const $closeBtn = $(".modal__close-btn");
const $closeButton = $(".modal__close-button");
const $close = $(".modal__close");

$overlay.on("click", (e) => {
  const $target = $(e.target);

  if ($target.parents(".modal__body").length > 0) return;

  $target.parents(".modal").removeClass("js-show");
  $("body").removeClass("js-no-scroll");
});

$closeBtn.on("click", (e) => {
  const $target = $(e.currentTarget);

  $target.parents(".modal").removeClass("js-show");
  $("body").removeClass("js-no-scroll");
});

$closeButton.on("click", (e) => {
  console.log(e.target);
  const $target = $(e.currentTarget);

  $target.parents(".modal").removeClass("js-show");
  $("body").removeClass("js-no-scroll");
});

$close.on("click", (e) => {
  console.log(e.target);
  const $target = $(e.currentTarget);

  $target.parents(".modal").removeClass("js-show");
  $("body").removeClass("js-no-scroll");
});

$triggers.on("click", (e) => {
  const name = $(e.currentTarget).attr("data-trigger");

  $(`.modal[data-modal='${name}']`).addClass("js-show");
  $("body").addClass("js-no-scroll");
});
