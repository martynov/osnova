window.addEventListener('DOMContentLoaded', function () {
    // main-banner slider
    document.querySelectorAll('.main-banner').forEach(function (banner) {
        let config = {
            slidesPerView: ['md', 'lg', 'xl', 'xxl'].includes(window.template) ? 2 : 1,
            loop: true
        }

        banner.classList.add('swiper-container');

        if (banner.hasAttribute('data-autoplay-speed')) {
            config.autoplay = {
                delay: parseInt(banner.getAttribute('data-autoplay-speed'))
            }
        }

        const wrapper = banner.querySelectorAll('.main-banner__wrapper')[0];
        wrapper.classList.add('swiper-wrapper');

        const slides = banner.querySelectorAll('.main-banner__slide');
        slides.forEach((slide) => {
            slide.classList.add('swiper-slide');
        });

        const swiper = new Swiper(banner, config);
    });
});