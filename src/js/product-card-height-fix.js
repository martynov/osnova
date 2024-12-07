window.addEventListener('DOMContentLoaded', function () {
    // fix product card heights
    document.querySelectorAll('.products-list__item').forEach(function (card) {
        card.style.height = card.offsetHeight + 'px';
    });
});