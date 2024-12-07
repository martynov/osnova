window.addEventListener('DOMContentLoaded', function () {
    // product page size modal checker

    if (document.querySelector('.js-product-page-size-modal') && document.querySelector('.js-product-checked-size-input') && document.querySelectorAll('.js-product-checked-size')) {
        let toggler = document.querySelectorAll('.js-product-size-modal-toggler');
        let modal = document.querySelector('.js-product-page-size-modal');
        let input = document.querySelector('.js-product-checked-size-input');
        let variants = document.querySelectorAll('.js-product-size-variant');
        let value = document.querySelectorAll('.js-product-size-value');

        toggler.forEach((togglerButton) => {
            togglerButton.addEventListener('click', () => {
                modal.classList.toggle('product-page-size-modal_active')
            })
        })

        variants.forEach((variant) => {
            variant.addEventListener('click', () => {
                if (!variant.classList.contains('product-page-size-modal__item_disabled')) {
                    input.value = variant.getAttribute('data-value');
                    value.forEach((val) => {
                        val.innerText = variant.innerText
                    })
    
                    modal.classList.remove('product-page-size-modal_active')
                }
            })
        })
    }
});