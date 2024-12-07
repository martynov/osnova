window.addEventListener('DOMContentLoaded', function () {
    // menu in header on mobiles
    document.querySelectorAll('.mobile-header-menu__link').forEach(function (row) {
        // if (!row.classList.contains('mobile-header-menu__link_visible')) {
            row.addEventListener('click', () => {
                if (row.nextElementSibling && row.nextElementSibling.classList.contains('mobile-header-menu__sub')) {
                    row.classList.toggle('mobile-header-menu__link_active');
                    row.closest('.mobile-header-menu__item').classList.toggle('mobile-header-menu__item_visible');
                }
            });
        // }
    });
});