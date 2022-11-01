import inputmask from "inputmask";
// let $totalPointsBar = $(".spend-points__bar");
// let $currentPointsBar = $(".spend-points__bar-current");
// let $currentPointsBarText = $(".spend-points__bar-current-text span");
// let $limitPoinsBar = $(".spend-points__bar-limit");

// let $currentPoints = $("#spend-points-current");
// let $totalPoints = $("#spend-points-total");
// let $limitPoints = $("#spend-points-limit");
// let $pointsLeft = $(".spend-points__balance span");

// let $inputBlock = $(".input-block.points");
// let $minusBtn = $(".spend-points__minus");
// let $plusBtn = $(".spend-points__plus");
// let $input = $('input[name="points-amount"]');

// let $submitBtn = $('#spend-points button[type="submit"]');

// const getCurrentBar = () => {
//   return Math.ceil((+$input.val() / +$totalPoints.text()) * 1000) / 10;
// };

// const getLimitBar = () => {
//   return Math.ceil((+$limitPoints.text() / +$totalPoints.text()) * 100);
// };

// const changeInput = () => {
//   if (!isNaN(+$input.val()) && +$input.val() >= 0) {
//     if (+$input.val() <= +$limitPoints.text()) {
//       $currentPointsBar.css("width", `${getCurrentBar()}%`);
//       $currentPointsBarText.text($input.val());
//       $currentPoints.text($input.val().trim() === "" ? 0 : $input.val());
//       $inputBlock.removeClass("error");
//       $submitBtn.removeAttr("disabled");

//       $pointsLeft.text(+$totalPoints.text() - +$currentPoints.text());
//     } else {
//       $currentPointsBar.css("width", `${getLimitBar()}%`);
//       $currentPointsBarText.text($limitPoints.text());
//       $currentPoints.text($limitPoints.text());
//       $inputBlock.addClass("error");
//       $submitBtn.attr("disabled", true);

//       $pointsLeft.text(+$limitPoints.text() - +$currentPoints.text());
//     }
//   } else {
//     $inputBlock.addClass("error");
//     $submitBtn.attr("disabled", true);
//     $currentPointsBarText.text(0);
//     $currentPoints.text(0);
//     $currentPointsBar.css("width", `0%`);

//     $pointsLeft.text(+$totalPoints.text() - +$currentPoints.text());
//   }
// };

// console.log(getLimitBar());

// $input.on("input", changeInput);

// $plusBtn.on("click", function () {
//   if (isNaN(+$input.val())) {
//     $input.val(0);
//   }

//   $input.val(`${+$input.val() + 1}`);

//   changeInput();
// });

// $minusBtn.on("click", function () {
//   if (isNaN(+$input.val())) {
//     $input.val(1);
//   }

//   if (+$input.val() - 1 < 0) {
//     $input.val(0);
//   } else {
//     $input.val(`${+$input.val() - 1}`);
//   }

//   changeInput();
// });

$(document).on("click", function () {
  const $pointsTrigger = $(".product-card__points a");

  if ($pointsTrigger.length === 0) {
    return;
  }

  if ($pointsTrigger.attr("data-init")) {
    return;
  } else {
    let $totalPointsBar = $(".spend-points__bar");
    let $currentPointsBar = $(".spend-points__bar-current");
    let $currentPointsBarText = $(".spend-points__bar-current-text span");
    let $limitPoinsBar = $(".spend-points__bar-limit");

    let $currentPoints = $("#spend-points-current");
    let $totalPoints = $("#spend-points-total");
    let $limitPoints = $("#spend-points-limit");
    let $pointsLeft = $(".spend-points__balance span");

    let $inputBlock = $(".input-block.points");
    let $minusBtn = $(".spend-points__minus");
    let $plusBtn = $(".spend-points__plus");
    let $input = $('input[name="points-amount"]');

    const im = new Inputmask({
      alias: "numeric",
      allowMinus: false,
      digits: 0,
    });

    im.mask($input[0]);

    !$input.val() && $minusBtn.attr("disabled", true);

    let $submitBtn = $('#spend-points button[type="submit"]');

    const getCurrentBar = () => {
      return Math.ceil((+$input.val() / +$totalPoints.text()) * 1000) / 10;
    };

    const getLimitBar = () => {
      return Math.ceil((+$limitPoints.text() / +$totalPoints.text()) * 100);
    };

    const changeInput = () => {
      if (!$input.val() || $input.val() == 0) {
        $minusBtn.attr("disabled", true);
      } else {
        $minusBtn.removeAttr("disabled");
      }

      if ($input.val() >= +$limitPoints.text()) {
        $plusBtn.attr("disabled", true);
      } else {
        $plusBtn.removeAttr("disabled");
      }

      if (!isNaN(+$input.val()) && +$input.val() >= 0) {
        if (+$input.val() <= +$limitPoints.text()) {
          $currentPointsBar.css("width", `${getCurrentBar()}%`);
          $currentPointsBarText.text($input.val());
          $currentPoints.text($input.val().trim() === "" ? 0 : $input.val());
          $inputBlock.removeClass("error");
          $submitBtn.removeAttr("disabled");

          //$plusBtn.removeAttr("disabled");

          $pointsLeft.text(+$totalPoints.text() - +$currentPoints.text());
        } else {
          $currentPointsBar.css("width", `${getLimitBar()}%`);
          $currentPointsBarText.text($limitPoints.text());
          $currentPoints.text($limitPoints.text());
          $inputBlock.addClass("error");
          $submitBtn.attr("disabled", true);

          //$plusBtn.attr("disabled", true);

          $pointsLeft.text(+$limitPoints.text() - +$currentPoints.text());
        }
      } else {
        $inputBlock.addClass("error");
        $submitBtn.attr("disabled", true);
        $currentPointsBarText.text(0);
        $currentPoints.text(0);
        $currentPointsBar.css("width", `0%`);

        $pointsLeft.text(+$totalPoints.text() - +$currentPoints.text());
      }
    };

    $input.on("input", changeInput);

    $plusBtn.on("click", function () {
      if (isNaN(+$input.val())) {
        $input.val(0);
      }

      $input.val(`${+$input.val() + 1}`);

      changeInput();
    });

    $minusBtn.on("click", function () {
      if (isNaN(+$input.val())) {
        $input.val(1);
      }

      if (+$input.val() - 1 < 0) {
        $input.val(0);
      } else {
        $input.val(`${+$input.val() - 1}`);
      }

      changeInput();
    });

    $pointsTrigger.attr("data-init", true);
  }
});
