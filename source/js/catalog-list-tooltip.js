const $closeBtn = $(".amount.points .tooltip__close");
// const $tooltip = $('.amount.points .tooltip')

$closeBtn.on("click", function () {
  $(this).parents(".tooltip").first().addClass("hidden");

  setTimeout(() => {
    $(this).parents(".tooltip").first().removeClass("hidden");
  }, 100);
});
