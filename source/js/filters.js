(function () {
  $(".filters__btn").click(function () {
    $(this).parent().next().slideToggle();
    $(this).toggleClass("opened");
  });

  $(".filters__btn-clear").click(function () {
    $(".filters .select").val("Все");
    $(".filters .select").trigger("change");
    $(".filters .select").removeClass("picked");
  });
})();
