const $question = $(".about-program__question-title");

$question.on("click", function () {
  $(this).next().slideToggle();
  $(this).toggleClass("opened");
});
