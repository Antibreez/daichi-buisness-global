const $question = $(".testing__question");

$question.on("click", function () {
  $(this).toggleClass("opened");
  $(this).next().slideToggle();
});
