window.addEventListener('DOMContentLoaded', function () {
    // show address modal
    document.querySelectorAll('.js-address-modal-button').forEach(function (button) {
        button.addEventListener('click', () => {
            let addressModal = document.querySelector('.address-modal');
            if (addressModal) {
                addressModal.querySelector('.address-modal__title').innerHTML = button.getAttribute('data-address-id') ? 'Редактировать адрес' : 'Новый адрес';
                addressModal.querySelector('[name=address-id]').value = button.getAttribute('data-address-id') || null;
                addressModal.querySelector('[name=city]').value = button.getAttribute('data-city') || null;
                addressModal.querySelector('[name=street]').value = button.getAttribute('data-street') || null;
                addressModal.querySelector('[name=flat]').value = button.getAttribute('data-flat') || null;
                addressModal.querySelector('[name=section]').value = button.getAttribute('data-section') || null;
                addressModal.querySelector('[name=floor]').value = button.getAttribute('data-floor') || null;
                addressModal.querySelector('[name=comment]').value = button.getAttribute('data-comment') || null;

                addressModal.classList.add('address-modal_active');
            }
        });
    })

    document.querySelectorAll('.js-address-modal-close').forEach(function (close) {
        close.addEventListener('click', () => {
            document.querySelector('.address-modal_active').classList.remove('address-modal_active');
        });
    })
});