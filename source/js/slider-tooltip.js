let $chip = $(".wrap-catalog-slider .catalog-grid-item-chip-block");

$(".catalog-slider-arrow-prev").on("click", function () {
  $chip.off("mouseenter", onMouseEnter);
  $chip.off("mouseleave", onMouseLeave);

  $chip = $(".wrap-catalog-slider .catalog-grid-item-chip-block");

  $chip.on("mouseenter", onMouseEnter);
  $chip.on("mouseleave", onMouseLeave);
});

$(".catalog-slider-arrow-next").on("click", function () {
  $chip.off("mouseenter", onMouseEnter);
  $chip.off("mouseleave", onMouseLeave);

  $chip = $(".wrap-catalog-slider .catalog-grid-item-chip-block");

  $chip.on("mouseenter", onMouseEnter);
  $chip.on("mouseleave", onMouseLeave);
});

function onMouseEnter(e) {
  const $target = $(e.currentTarget);

  if ($(window).width() < 768) {
    return;
  }

  const $tooltipCurrent = $target.find(".tooltip");
  const points = $tooltipCurrent.find(".tooltip__title").text();
  const link = $tooltipCurrent.find("a").attr("href");

  const $parent = $target.parents(".wrap-catalog-slider").first();
  const $tooltip = $parent.find(".tooltip").first();
  $tooltip.find(".tooltip__title").text(points);
  $tooltip.find("a").attr("href", link);

  const offsetP = $parent.offset();
  const offset = $target.offset();

  console.log("left", offset.left - offsetP.left - Math.round($target.width() / 2));

  const leftGap = offset.left - offsetP.left - Math.round($target.width() / 2);

  const leftDist = leftGap <= 10 ? 10 - leftGap : 0;

  $tooltip.css({
    top: `${offset.top - offsetP.top}px`,
    left: `${offset.left - offsetP.left + Math.round($target.width() / 2) + leftDist}px`,
    display: "block",
  });
}

function onMouseLeave(e) {
  const $target = $(e.currentTarget);

  const $parent = $target.parents(".wrap-catalog-slider").first();
  const $tooltip = $parent.find(".tooltip").first();

  $tooltip.css("display", "none");
}

$chip.on("mouseenter", onMouseEnter);

$chip.on("mouseleave", onMouseLeave);
