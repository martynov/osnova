window.addEventListener('DOMContentLoaded', function () {
    // show dropdown in header
    if (document.querySelector('[data-header-dropdown]') && document.querySelector('[data-header-dropdown]')) {
        document.querySelectorAll('[data-header-dropdown]').forEach(function (el) {
            let attr = el.getAttribute('data-header-dropdown')
    
            if (attr && document.querySelector(`[data-dropdown-name="${ attr }"]`)) {
                el.addEventListener('click', function () {
                    let currentActive = false
                    let dropdown = document.querySelector(`[data-dropdown-name="${ attr }"]`)
                    
                    if (dropdown) {
                        currentActive = dropdown.classList.contains('header__dropdown_visible')
                    }

                    document.querySelectorAll('.header__dropdown.header__dropdown_visible').forEach(function (visibleDropdown) {
                        visibleDropdown.classList.remove('header__dropdown_visible');
                    });

                    if (!currentActive) {
                        dropdown.classList.add('header__dropdown_visible');
                    }
                })
            }
        })

        document.querySelector('.header').addEventListener('mouseleave', function () {
            document.querySelectorAll('.header__dropdown.header__dropdown_visible').forEach(function (visibleDropdown) {
                visibleDropdown.classList.remove('header__dropdown_visible');
            });
        })
    }
});