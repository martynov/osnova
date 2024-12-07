window.addEventListener('DOMContentLoaded', function () {
    // gallery on product page on mobiles
    if (['xxs', 'xs'].includes(this.window.template)) {
        document.querySelectorAll('.product-gallery').forEach(function (gallery) {
            gallery.classList.add('swiper-container')
    
            const wrapper = gallery.querySelectorAll('.product-gallery__wrapper')[0];
            wrapper.classList.add('swiper-wrapper');
    
            const slides = gallery.querySelectorAll('.product-gallery__item');
            slides.forEach((slide) => {
                slide.classList.add('swiper-slide');
            });
    
            const pagination = document.createElement('div')
            pagination.classList.add('product-gallery__pagination');
            gallery.append(pagination);
    
            const swiper = new Swiper(gallery, {
                // effect: 'fade',
                spaceBetween: 10,
                pagination: {
                    el: pagination
                }
            });
        });
    }
});