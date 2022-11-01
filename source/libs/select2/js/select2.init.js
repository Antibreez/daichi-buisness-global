class CSelect2 {
    constructor() {}
    getOption(type, className) {
        let options = {};
        let dropdownClass = className || '';
        switch (type) {
            case 'search':
                options = {
                    theme: 'daich',
                    dropdownCssClass: 'select2-daich-dropdown ' + dropdownClass,
                    "language": {
                        "noResults": function () {
                            return "Ничего не найдено";
                        }
                    }
                };
                break;
            case 'searchpopup':
                options = {
                    theme: 'daich',
                    dropdownCssClass: 'select2-daich-dropdown ' + dropdownClass,
                    "language": {
                        "noResults": function () {
                            return "Ничего не найдено";
                        }
                    }
                };
                break;
            case 'multy':
                options = {
                    theme: 'daich',
                    tags: true,
                    tokenSeparators: [',', ' ','\n'],
                    dropdownCssClass: 'select2-daich-dropdown ' + dropdownClass,
                    "language": {
                        "noResults": function () {
                            return "Ничего не найдено";
                        }
                    }
                };
                break;

                
            case 'empty':
                options = {
                    placeholder: "Выберите из списка",
                    minimumResultsForSearch: Infinity,
                    theme: 'daich',
                    dropdownCssClass: 'select2-daich-dropdown ' + dropdownClass,
                    "language": {
                        "noResults": function () {
                            return "Ничего не найдено";
                        }
                    }
                };
                break;

            default:
                options = {
                    minimumResultsForSearch: Infinity,
                    theme: 'daich',
                    dropdownCssClass: 'select2-daich-dropdown ' + dropdownClass,
                    "language": {
                        "noResults": function () {
                            return "Ничего не найдено";
                        }
                    }
                };
        }
        return options;
    }
    init () {
        let thx = this;
        $('.js-select-init').not('.is--initialized').each(function () {
            let type = ($(this).data('type')) ? $(this).data('type') : 'single';
            let ddClass = ($(this).data('dropdownClass')) ? $(this).data('dropdownClass') : '';
            let options = thx.getOption(type, ddClass);
            $(this).select2(options);
            $(this).addClass('is--initialized')
        });
    }
    // $context - select на который инициализируется Select2
    // option - кастомные параметры, если заданы, дефолтные не применяются.
    initOne ($context, option) {
        if ($context === undefined || $context.hasClass('is--initialized')) {
            return false;
        }
        let type = ($context.data('type')) ? $context.data('type') : 'single';
        let options = option || this.getOption(type);

        $context.select2(options);
        $context.addClass('is--initialized')
    }
}

$(document).ready(function() {
    (new CSelect2()).init();
})