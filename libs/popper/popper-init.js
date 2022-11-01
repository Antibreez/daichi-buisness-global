var tooltips  = {};
var dropMenu  = {};
var basketSelectorHint = {};
class popoverTooltip {
    constructor() {
        this.popperInstance = null;
        this.tooltipBodyTimeout = null;
        this.dropdownClass = 'popper-tooltip';
        this.placement = 'top';
        this.additionClass = '';
        this.bind();
    }

    mouseEnterHandler(e) {
        let el = e.currentTarget;

        if (this.popperInstance) {
            this.destroyTooltip();
            clearTimeout(this.tooltipBodyTimeout);
            this.tooltipBodyTimeout = null;
        }

        this.dropdownClass = ($(el).attr('data-tooltip-id')) ? 'popper-dropdown' : 'popper-tooltip';
        this.placement = $(el).data('position') || 'top';
        this.additionClass = $(el).data('class') || '';
        if (!$('.'+this.dropdownClass).length) {
            $('body').append('<div class="'+this.dropdownClass+' '+this.additionClass+'"></div>');
        }
        if ($(el).attr('data-tooltip')) {
            $('.'+this.dropdownClass).text($(el).attr('data-tooltip'));
        }
        if ($(el).attr('data-tooltip-id')) {
            $('.'+this.dropdownClass).addClass(this.dropdownClass+'_dropdown');
            $('.'+this.dropdownClass).html($('#'+$(el).attr('data-tooltip-id')).html());
        }

        $('.'+this.dropdownClass).attr('data-show', '');

        if (this.popperInstance) {

            $('.'+this.dropdownClass).removeAttr('data-show');
            this.popperInstance = null;
        } else {
            this.createFilterTooltip(el, $('.'+this.dropdownClass)[0]);
        }

    }

    mouseLeaveHandler () {
        if (this.popperInstance) {
            this.tooltipBodyTimeout = setTimeout( () => {
                this.destroyTooltip();
            }, 500);
        }
    }
    mouseEnterDropdownHandler () {
        clearTimeout(this.tooltipBodyTimeout);
        this.tooltipBodyTimeout = null;
    }
    mouseLeaveDropdownHandler () {

        if (this.popperInstance) {
            this.tooltipBodyTimeout = setTimeout(() => {
                $('.'+this.dropdownClass).removeAttr('data-show');
                this.destroyTooltip();
            }, 150);
        }
    }
    destroyTooltip () {
        if (this.popperInstance) {
            this.popperInstance.destroy();
            $('.'+this.dropdownClass).removeAttr('data-show');
            this.popperInstance = null;
        }
    }

    bind() {

        $(document).on('mouseenter','.js--open-tooltip',this.mouseEnterHandler.bind(this));
        $(document).on('mouseleave','.js--open-tooltip', this.mouseLeaveHandler.bind(this));
        $(document).on('mouseenter touchstart', '.popper-tooltip', this.mouseEnterDropdownHandler.bind(this));
        $(document).on('mouseleave touchend', '.popper-tooltip' , this.mouseLeaveDropdownHandler.bind(this));

        $(document).on('mouseenter touchstart', '.popper-dropdown', this.mouseEnterDropdownHandler.bind(this));
        $(document).on('mouseleave touchend', '.popper-dropdown' , this.mouseLeaveDropdownHandler.bind(this));
    }
    createFilterTooltip(button, dropdown) {

        this.popperInstance = Popper.createPopper(button, dropdown, {
            placement: this.placement ,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12],
                    },
                },
            ],
        });
    }
}


class popoverTooltipFix {
    constructor() {
        this.popperInstance = [];
        this.tooltipBodyTimeout = null;
        this.placement = 'top';
        this.toltipCount = 0;
        this.init();
    }
    init() {
        let thx = this;
        $('.js-am-error-open').each(function() {
            thx.open($(this));
        });
    }

    open($element, text) {
        let $el = $element;

        if($el.hasClass('tool-tip-opened')){
            return;
        }
        $el.addClass('tool-tip-opened');

        this.placement = $el.data('position') || 'top';

        if (!$('.popper-tooltip-'+this.toltipCount).length) {
            $('body').append('<div class="popper-tooltip popper-tooltip-'+this.toltipCount+'"></div>');
        }
        if ($el.attr('data-tooltip')) {
            $('.popper-tooltip-'+this.toltipCount).text($el.attr('data-tooltip'));
        }
        if (text !== undefined) {
            $('.popper-tooltip-'+this.toltipCount).text(text);
        }
        if ($el.attr('data-tooltip-id')) {
            // $('.popper-tooltip-'+this.toltipCount).addClass('popper-tooltip_dropdown')
            $('.popper-tooltip-'+this.toltipCount).html($('#'+$el.attr('data-tooltip-id')).html());
        }
        $('.popper-tooltip-'+this.toltipCount).attr('data-show', '');
        this.createFilterTooltip($el[0], $('.popper-tooltip-'+this.toltipCount)[0]);
        this.toltipCount++;
        $el.on('mouseleave',() => {
            this.mouseLeaveHandler($el);
            $el.off('mouseleave')
        })
    }
    close(className) {
        if (className) {
            this.destroyTooltip(className);
        } else {
            this.destroyTooltipAll()
        }
    }
    mouseLeaveHandler ($el) {

        this.tooltipBodyTimeout = setTimeout( () => {
            this.destroyTooltipAll();
            $el.removeClass('tool-tip-opened');
        }, 500);

    }

    destroyTooltip(el) {
        if (this.popperInstance.length) {
            this.popperInstance.forEach((item, index) => {
                if ($(el)[0] === item.state.elements.reference) {

                    item.destroy();
                    $(item.state.elements.popper).remove();
                    this.popperInstance.splice(index, 1)
                }
            });
        }
    }

    destroyTooltipAll() {
        if (this.popperInstance.length) {
            this.popperInstance.forEach((item, index) => {
                $(item.state.elements.reference).removeClass('tool-tip-opened');
                item.destroy();
            });
            this.popperInstance
            $('.popper-tooltip').remove();
            this.popperInstance = [];
        }
    }


    createFilterTooltip(button, dropdown) {
        var pop= Popper.createPopper(button, dropdown, {
            placement: this.placement ,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12],
                    },
                },
            ],
        });
        // Popper.detectOverflow(pop.state, {
        //     elementContext: 'reference', // 'popper' by default
        // });
        this.popperInstance.push(pop);
    }
}


class dropdownMenu {
    constructor() {
        this.popperInstance = null;
        this.tooltipBodyTimeout = null;
        this.bind();
        this.placement = 'bottom-start';

    }

    mouseEnterHandler(e) {
        let el = e.currentTarget;
        let $dropdown = $(el).closest('[data-dropdown-menu]').find('[data-dropdown]');
        let isOpen = ($dropdown.is('[data-show]')) ? true : false;
        this.placement = $(el).closest('[data-dropdown-menu]').data('position') || 'bottom-start';

        if (this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = null;
            $('[data-dropdown]').removeAttr('data-show');
            $('[data-dropdown-link]').removeAttr('data-active');
        }

        if (!isOpen) {
            $(el).attr('data-active', '');
            $dropdown.attr('data-show', '');
            this.createFilterTooltip(el, $dropdown[0]);
        }
        return false;

    }
    mouseLeaveHandler () {
        if (this.popperInstance) {
            this.tooltipBodyTimeout = setTimeout(this.destroyTooltip(), 100);
        }
    }
    hideAllClickHandler(e) {
        var div = $('[data-dropdown-menu]');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('[data-dropdown-link]').removeAttr('data-active');
            if (this.popperInstance) {
                this.popperInstance.destroy();
                $('[data-dropdown]').removeAttr('data-show');
                this.popperInstance = null;
            }
        } else {
            return true;
        }
    }
    destroyTooltip () {
        this.popperInstance.destroy();
        $('[data-dropdown]').removeAttr('data-show');
        this.popperInstance = null;
    }
    bind() {
        $(document).on('click','[data-dropdown-link]',this.mouseEnterHandler.bind(this));
        $(document).on('click', this.hideAllClickHandler.bind(this));
    }
    createFilterTooltip(button, dropdown) {
        this.popperInstance = Popper.createPopper(button, dropdown, {
            placement: this.placement ,
            modifiers: [
                {

                    name: 'offset',
                    options: {
                        offset: [0, 15],
                    },
                },
            ],
        });
    }
}


$(document).ready(function() {
    tooltips = new popoverTooltip();
    dropMenu = new dropdownMenu();
    basketSelectorHint = new popoverTooltipFix();
})
