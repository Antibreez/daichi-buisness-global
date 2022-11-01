$(window).on("load", function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".up-btn").addClass("importantClass");
    } else {
      $(".up-btn").removeClass("importantClass");
    }
  });
});
