window.addEventListener('DOMContentLoaded', function () {
    let grid = document.querySelector('.promo-page-grid')

    let masonry = new Masonry(grid, {
        itemSelector: '.promo-page-grid__item',
        columnWidth: grid.offsetWidth / 3,
        percentPosition: true,
        // horizontalOrder: true,
    })
});