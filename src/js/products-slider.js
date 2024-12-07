window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.products-slider').forEach(function (slider) {
        slider.classList.add('swiper-container');

        const wrapper = slider.querySelectorAll('.products-slider__wrapper')[0];
        wrapper.classList.add('swiper-wrapper');

        const slides = slider.querySelectorAll('.products-slider__slide');
        slides.forEach((slide) => {
            slide.classList.add('swiper-slide');
        });

        // const pagination = document.createElement('div')
        // pagination.classList.add('product-card-gallery__pagination');
        // for (let i = 0; i < slides.length; i++) {
        //     pagination.append(document.createElement('div'))
        // }

        // slider.append(pagination)

        const swiper = new Swiper(slider, {
            spaceBetween: (function(){
                if (this.window.template === 'xxs') {
                    return 8;
                }

                if (this.window.template === 'xs') {
                    return 8;
                }

                if (this.window.template === 'sm') {
                    return 8;
                }

                if (this.window.template === 'md') {
                    return 14;
                }

                if (this.window.template === 'lg') {
                    return 14;
                }

                if (this.window.template === 'xl') {
                    return 18;
                }

                if (this.window.template === 'xxl') {
                    return 18;
                }
            })(),
            slidesPerView:  (function(){
                if (this.window.template === 'xxs') {
                    return 2.2;
                }

                if (this.window.template === 'xs') {
                    return 2.2;
                }

                if (this.window.template === 'sm') {
                    return 2.2;
                }

                if (this.window.template === 'md') {
                    return 4;
                }

                if (this.window.template === 'lg') {
                    return 4;
                }

                if (this.window.template === 'xl') {
                    return 4;
                }

                if (this.window.template === 'xxl') {
                    return 4;
                }
            })(),
        });

        // slider.querySelectorAll('.product-card-gallery__pagination > div').forEach((item, index) => {
        //     item.addEventListener('mouseover', () => {
        //         swiper.slideTo(index)
        //     })
        // })
    });
});