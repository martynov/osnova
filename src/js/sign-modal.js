window.addEventListener('DOMContentLoaded', function () {
    // show login modal
    document.querySelectorAll('.js-sign-modal-button').forEach(function (button) {
        button.addEventListener('click', () => {
            let modal = document.querySelector('.sign-modal_sign');
            if (modal) {
                modal.classList.add('sign-modal_active');
            }
        });
    })

    // show forget password modal
    document.querySelectorAll('.js-forget-password-modal-button').forEach(function (button) {
        button.addEventListener('click', () => {
            let modal = document.querySelector('.sign-modal_forget-password');
            if (modal) {
                modal.classList.add('sign-modal_active');
            }
        });
    })

    document.querySelectorAll('.js-sign-modal-close').forEach(function (close) {
        close.addEventListener('click', (e) => {
            e.target.closest('.sign-modal_active').classList.remove('sign-modal_active');
        });
    })

    // initial state
    document.querySelectorAll('.sign-modal_sign').forEach(function (modal) {
        modal.querySelector('.sign-modal__form_sign-in').classList.add('sign-modal__form_visible');
        modal.querySelector('.sign-modal__tab-subtitle_sign-in').classList.add('sign-modal__tab-subtitle_active');
    
        // trigger buttons
        modal.querySelectorAll('.sign-modal__tab-subtitle').forEach(function (tab) {
            tab.addEventListener('click', (e) => {
                let modeSignIn = e.target.classList.contains('sign-modal__tab-subtitle_sign-in')
                modal.querySelector('.sign-modal__form_sign-in').classList.toggle('sign-modal__form_visible', modeSignIn);
                modal.querySelector('.sign-modal__form_sign-up').classList.toggle('sign-modal__form_visible', !modeSignIn);
                modal.querySelector('.sign-modal__tab-subtitle_sign-in').classList.toggle('sign-modal__tab-subtitle_active', modeSignIn);
                modal.querySelector('.sign-modal__tab-subtitle_sign-up').classList.toggle('sign-modal__tab-subtitle_active', !modeSignIn);
            })
        })
    })

});