window.addEventListener('DOMContentLoaded', function () {
    // main-banner slider
    document.querySelectorAll('.main-banner').forEach(function (banner) {
        banner.classList.add('swiper-container');

        const wrapper = banner.querySelectorAll('.main-banner__wrapper')[0];
        wrapper.classList.add('swiper-wrapper');

        const slides = banner.querySelectorAll('.main-banner__slide');
        slides.forEach((slide) => {
            slide.classList.add('swiper-slide');
        });

        const swiper = new Swiper(banner, {
            //
        });
    });
});