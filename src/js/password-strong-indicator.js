window.addEventListener('DOMContentLoaded', function () {
    let checkPassword = function (password) {
        let strength = 0;

        if (password.match(/[a-z]+/)) {
            strength += 1;
        }

        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }

        if (password.match(/[0-9]+/)) {
            strength += 1;
        }

        if (password.match(/[$@#&!]+/)) {
            strength += 1;
        }
        
        if (password.length > 6) {
            strength += 1;
        }
        
        return strength / 5;
    }

    let highlightIndicators = function (widget, amount) {
        widget.querySelectorAll('.password-strong-indicator__level').forEach((item, index) => {
            item.classList.toggle('password-strong-indicator__level_active', index < amount)
        })
    }

    document.querySelectorAll('.password-strong-indicator').forEach(function (widget) {
        widget.querySelector('input').addEventListener('input', (e) => {
            let rate = checkPassword(e.target.value)

            if (rate > 0.7) {
                highlightIndicators(widget, 3)
            } else if (rate > 0.4) {
                highlightIndicators(widget, 2)
            } else if (rate >= 0.2) {
                highlightIndicators(widget, 1)
            } else {
                highlightIndicators(widget, 0)
            }
        });
    })
});