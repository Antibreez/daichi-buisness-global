const $search = $(".search-pane-input");

$search.on("input", function () {
  if ($(this).val().trim() === "") {
    $(this).siblings(".search-pane-btn_clear").hide();
  } else {
    $(this).siblings(".search-pane-btn_clear").show();
  }
});
