window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.product-card-gallery').forEach(function (gallery) {
        const container = gallery.querySelectorAll('.product-card-gallery__container')[0];
        container.classList.add('swiper-container')

        const wrapper = gallery.querySelectorAll('.product-card-gallery__wrapper')[0];
        wrapper.classList.add('swiper-wrapper');

        const slides = gallery.querySelectorAll('.product-card-gallery__item');
        slides.forEach((slide) => {
            slide.classList.add('swiper-slide');
        });

        const pagination = document.createElement('div')
        pagination.classList.add('product-card-gallery__pagination');
        for (let i = 0; i < slides.length; i++) {
            pagination.append(document.createElement('div'));
        }

        gallery.append(pagination);

        const swiper = new Swiper(container, {
            effect: 'fade'
        });

        gallery.querySelectorAll('.product-card-gallery__pagination > div').forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                swiper.slideTo(index)
            });
        });

        gallery.addEventListener('mouseleave', () => {
            swiper.slideTo(0)
        });

        // костыль
        $(document).ready(function(){
            swiper.update()
        })
    });
});