import "./vendor/select2";
// import './vendor/inputmask';
import "inputmask/dist/jquery.inputmask.bundle";

function formatState(state) {
  if (state.element) {
    return $(`
      <span>
        <img src="${state.element.getAttribute("data-img")}"/>
        ${state.text}
      </span>
    `);
  }
  return state.text;
}


const initSelect2Phone = () => {
  $(".wrap-field-input--select-phone select").each((idx, item) => {
    const promise = new Promise((res) => {
      $(item).select2({
        dropdownCssClass: "select2-container--select-phone-dropdown",
        templateResult: formatState,
      });
      res($(item));
    });

    const selected = $(item).find('option:selected');

    promise.then(($item) => {
      $item.next().addClass("select2-container--select-phone");

      $item.next().find(".select2-selection__rendered").html(`
        <img src="${selected.attr('data-img')}"/>
      `);

      const num = +selected.text().split("+")[1].split(")")[0];

      const $parent = $item.parents(".field-select2").first();

      const $input = $parent.find(".field-input--select-phone");
      const $placeholder = $parent.find(".field-input--select-phone-placeholder");

      const mask = selected.attr('data-mask');
      const code = selected.attr('data-phone-code');
      const maskCode = code.replace(/9/g, '\\9');

      $input.inputmask(`${maskCode} ${mask}`, {
        showMaskOnHover: false,
      });
      $placeholder.text(`${code} ${mask.replace(/9/g, '0')}`);
    });
  });

  $(".wrap-field-input--select-phone  select").on("select2:select", function (e) {
    const num = +e.params.data.text.split("+")[1].split(")")[0];

    const $parent = $(e.target).parents(".field-select2").first();

    const $input = $parent.find(".field-input--select-phone");
    const $placeholder = $parent.find(".field-input--select-phone-placeholder");
    const $select = $parent.find(".select2-selection__rendered");

    $select.html(`
      <img src="${e.params.data.element.getAttribute("data-img")}"/>
    `);

    const mask = e.params.data.element.getAttribute("data-mask");
    const code = e.params.data.element.getAttribute("data-phone-code");
    const maskCode = code.replace(/9/g, '\\9');

    $input.inputmask(`${maskCode} ${mask}`, {
      showMaskOnHover: false,
    });
    $placeholder.text(`${code} ${mask.replace(/9/g, '0')}`);
  });

  $(".wrap-field-input--select-phone select").on("select2:open", () => {
    $(".select2-container--select-phone-dropdown .select2-search__field").attr("placeholder", "Поиск по странам");
  });

  $(".field-input--select-phone").on("blur", (e) => {
    $(e.target).val() !== "" ? $(e.target).next().hide() : $(e.target).next().show();
  });

  $(".field-input--select-phone").on("focus", (e) => {
    $(e.target).next().hide();
  });

  $(".field-input--select-phone").val() !== ""
    ? $(".field-input--select-phone").next().hide()
    : $(".field-input--select-phone").next().show();
}

$(document).ajaxStart(function() {
  $(".wrap-field-input--select-phone  select").off();
  $(".field-input--select-phone").off();
  console.log('start');
});

$(document).ajaxSuccess(function() {
  initSelect2Phone();
  console.log('success');
});

$(document).ajaxError(function() {
  initSelect2Phone();
  console.log('fail');
});

initSelect2Phone();
