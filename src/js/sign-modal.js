window.addEventListener('DOMContentLoaded', function () {
    // toggle tabs in login modal
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