window.addEventListener('DOMContentLoaded', function () {
    // phone masks
    let im = new Inputmask({
        mask: "+7 999 999-99-99",
        placeholder: "+7 ___ ___-__-__",
        showMaskOnHover: false
    });

    document.querySelectorAll('.js-phone-mask').forEach((input) => {
        im.mask(input)
    })
});