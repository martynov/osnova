window.addEventListener('DOMContentLoaded', function () {
    if (this.document.querySelector('.js-filter-prices-range')) {
        let container = document.querySelector('.js-filter-prices-range');
        let widget = container.querySelector('.js-filter-prices-range-widget');
        let min = widget.querySelector('.js-range-min');
        let max = widget.querySelector('.js-range-max');

        let values = [
            parseInt(widget.getAttribute('data-range-min')),
            parseInt(widget.getAttribute('data-range-max'))
        ]

        let slider = $(".js-filter-prices-range-widget").slider({
            range: true,
            min: parseInt(widget.getAttribute('data-range-min')),
            max: parseInt(widget.getAttribute('data-range-max')),
            values: values,
            step: parseInt(widget.getAttribute('data-step')) || 100,
            slide: function(event, ui) {
                min.value = ui.values[0]
                max.value = ui.values[1]
                container.querySelectorAll('[name=filter-price-range-radio]').forEach((radio) => {
                    radio.checked = false
                })
            },
            change: function(event, ui) {
                min.value = ui.values[0]
                max.value = ui.values[1]
            }
        });

        document.querySelectorAll('[name=filter-price-range-radio]').forEach((radio) => {
            radio.addEventListener("change", () => {
                slider.slider("values", [radio.getAttribute('data-value-min'), radio.getAttribute('data-value-max')]);
            })
        })
        
    }
});