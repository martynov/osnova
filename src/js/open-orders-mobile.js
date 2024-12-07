window.addEventListener('DOMContentLoaded', function () {
    if (['xxs', 'xs'].includes(window.template)) {
        document.querySelectorAll('.order-preview-row__head-line').forEach(function (row) {
            row.addEventListener('click', () => {
                row.closest('.order-preview-row').classList.toggle('order-preview-row_opened');
            });
        });
    }
});