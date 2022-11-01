import select2 from "select2";

function formatOption(item) {
  const value = item.text.split("splitter");
  const br = window.matchMedia("(max-width: 999px)").matches ? "<br>" : "";

  if (value.length > 1) {
    const result = $("<span>" + value[0] + "</span>" + br + "<span>" + value[1] + "</span>");
    return result;
  } else {
    return item.text;
  }
}

$(".select").select2({
  templateResult: formatOption,
  templateSelection: formatOption,
});

$(".select").on("select2:select", function (e) {
  $(this).addClass("picked");
});
