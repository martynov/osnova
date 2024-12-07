window.addEventListener('DOMContentLoaded', function () {
    // spinbox
    document.querySelectorAll('.js-spinbox-button').forEach((button) => {
        button.addEventListener('click', function (event) {
            let step = event.target.getAttribute('data-step');
            let input = event.target.closest('.spinbox').querySelector('.spinbox__input');

            if (parseInt(input.getAttribute('min')) <= parseInt(input.value) + parseInt(step) && parseInt(input.value) + parseInt(step) <= parseInt(input.getAttribute('max'))) {
                input.value = parseInt(input.value) + parseInt(step);
            }
        })
    });

    document.querySelectorAll('.spinbox__input').forEach((input) => {
        input.addEventListener('blur', function (event) {
            if (parseInt(input.getAttribute('min')) > parseInt(input.value)) {
                input.value = input.getAttribute('min');
            } else if (parseInt(input.value) > parseInt(input.getAttribute('max'))) {
                input.value = input.getAttribute('max');
            }
        })
    });
});