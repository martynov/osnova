window.addEventListener('DOMContentLoaded', function () {
    // open modal if hash in url exist
    if (String(window.location.hash).length >= 2) {
        let modal = document.querySelector(`[data-modal-hash='${ String(window.location.hash).substr(1) }']`);
        if (modal) {
            modal.classList.add(modal.getAttribute('data-modal-active-class'));
        }
    }

    // show modal
    document.querySelectorAll('[data-modal-trigger]').forEach(function (button) {
        button.addEventListener('click', () => {
            let modal = document.querySelector(`[data-modal='${ button.getAttribute('data-modal-trigger') }']`);
            if (modal) {
                modal.classList.add(modal.getAttribute('data-modal-active-class'));

                let hash = modal.getAttribute('data-modal-hash')
                if (hash) {
                    window.location.hash = '#' + hash
                }
            }
        });
    })

    // close modal
    document.querySelectorAll('[data-close-modal]').forEach(function (close) {
        close.addEventListener('click', (e) => {
            let modal = e.target.closest('[data-modal]');
            if (modal) {
                modal.classList.remove(modal.getAttribute('data-modal-active-class'));

                let hash = modal.getAttribute('data-modal-hash')
                if (hash) {
                    window.location.hash = ''
                }
            }
        });
    })
});