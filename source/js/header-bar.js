const $topBar = $(".wrap-header-top");
const $bottomBar = $(".header-bottom");

const $topBarMobile = $(".header-mobile");
const $bottomBarMobile = $(".header-mobile-search");

const $bar = $(".education-header");
const $nextEl = $bar.next();

const isScrolled = () => {
  const scroll =
    $(window).width() < 1025
      ? $topBarMobile.outerHeight() + $bottomBarMobile.outerHeight()
      : $topBar.outerHeight() + $bottomBar.outerHeight();

  return $(window).scrollTop() > scroll;
};

const addSpace = () => {
  $nextEl.css("margin-top", `${$bar.outerHeight()}px`);
};

const removeSpace = () => {
  $nextEl.removeAttr("style");
};

let scrolled = isScrolled();

$(window).on("scroll", () => {
  isScrolled() &&
    !$bar.hasClass("fixed") &&
    $bar.addClass("fixed") &&
    addSpace();
  !isScrolled() &&
    $bar.hasClass("fixed") &&
    $bar.removeClass("fixed") &&
    removeSpace();
});

$bar.length > 0 &&
  $bottomBar.addClass("header-bottom--education") &&
  $topBarMobile.addClass("header-mobile--education");
