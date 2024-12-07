window.addEventListener('DOMContentLoaded', function () {
    // faq
    document.querySelectorAll('.faq-container__row').forEach(function (row) {
        if (!row.classList.contains('faq-container__row_visible')) {
            row.addEventListener('click', () => {
                row.closest('.faq-container').querySelectorAll('.faq-container__row_visible').forEach((visible) => {
                    visible.classList.remove('faq-container__row_visible');
                });
                row.classList.toggle('faq-container__row_visible');
            });
        }
    });

    // open first faq in container
    document.querySelectorAll('.faq-container').forEach(function (container) {
        container.querySelector('.faq-container__row').classList.add('faq-container__row_visible');
    });
});