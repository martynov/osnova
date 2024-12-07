window.addEventListener('DOMContentLoaded', function () {
    // show filter
    document.querySelectorAll('.js-filter-toggler').forEach(function (toggler) {
        toggler.addEventListener('click', () => {
            let filter = document.querySelector('.filter-overlay');
            if (filter) {
                filter.classList.toggle('filter-overlay_active');
            }
        });
    })
});