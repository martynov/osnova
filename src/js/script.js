//=include ../../node_modules/swiper/swiper-bundle.min.js

window.addEventListener('DOMContentLoaded', function () {
    
    if (320 < window.innerWidth && window.innerWidth < 375) {
        this.window.template = 'xxs'
    } else if (375 < window.innerWidth && window.innerWidth < 768) {
        this.window.template = 'xs'
    } else if (768 < window.innerWidth && window.innerWidth < 1024) {
        this.window.template = 'sm'
    } else if (1024 < window.innerWidth && window.innerWidth < 1280) {
        this.window.template = 'md'
    } else if (1280 < window.innerWidth && window.innerWidth < 1440) {
        this.window.template = 'lg'
    } else if (1440 < window.innerWidth && window.innerWidth < 1600) {
        this.window.template = 'xl'
    } else if (1600 < window.innerWidth) {
        this.window.template = 'xxl'
    }

    // fix product card heights
    document.querySelectorAll('.products-list__item').forEach(function (card) {
        card.style.height = card.offsetHeight + 'px';
    });

    // products sliders
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
    
    // galleries in product cards
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
    });

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

    // faq
    document.querySelectorAll('.faq-container__row').forEach(function (row) {
        if (!row.classList.contains('faq-container__row_visible')) {
            row.addEventListener('click', () => {
                row.closest('.faq-container').querySelectorAll('.faq-container__row_visible').forEach((visible) => {
                    visible.classList.remove('faq-container__row_visible');
                });
                row.classList.toggle('faq-container__row_visible');
            });
        }
    });

    // open first faq in container
    document.querySelectorAll('.faq-container').forEach(function (container) {
        container.querySelector('.faq-container__row').classList.add('faq-container__row_visible');
    });

    // show filter
    document.querySelectorAll('.js-filter-toggler').forEach(function (toggler) {
        toggler.addEventListener('click', () => {
            let filter = document.querySelector('.filter-overlay');
            if (filter) {
                filter.classList.toggle('filter-overlay_active');
            }
        });
    })
    
    // show dropdown in header
    if (document.querySelector('[data-header-dropdown]') && document.querySelector('[data-header-dropdown]')) {
        document.querySelectorAll('[data-header-dropdown]').forEach(function (el) {
            let attr = el.getAttribute('data-header-dropdown')
    
            if (attr && document.querySelector(`[data-dropdown-name="${ attr }"]`)) {
                el.addEventListener('click', function () {
                    let currentActive = false
                    let dropdown = document.querySelector(`[data-dropdown-name="${ attr }"]`)
                    
                    if (dropdown) {
                        currentActive = dropdown.classList.contains('header__dropdown_visible')
                    }

                    document.querySelectorAll('.header__dropdown.header__dropdown_visible').forEach(function (visibleDropdown) {
                        visibleDropdown.classList.remove('header__dropdown_visible');
                    });

                    if (!currentActive) {
                        dropdown.classList.add('header__dropdown_visible');
                    }
                })
            }
        })

        document.querySelector('.header').addEventListener('mouseleave', function () {
            document.querySelectorAll('.header__dropdown.header__dropdown_visible').forEach(function (visibleDropdown) {
                visibleDropdown.classList.remove('header__dropdown_visible');
            });
        })
    }

    // spinbox
    document.querySelectorAll('.js-spinbox-button').forEach((button) => {
        button.addEventListener('click', function (event) {
            let step = event.target.getAttribute('data-step');
            let input = event.target.closest('.spinbox').querySelector('.spinbox__input');

            if (parseInt(input.getAttribute('min')) <= parseInt(input.value) + parseInt(step) && parseInt(input.value) + parseInt(step) <= parseInt(input.getAttribute('max'))) {
                input.value = parseInt(input.value) + parseInt(step);
            }
        })
    });
    document.querySelectorAll('.spinbox__input').forEach((input) => {
        input.addEventListener('blur', function (event) {
            if (parseInt(input.getAttribute('min')) > parseInt(input.value)) {
                input.value = input.getAttribute('min');
            } else if (parseInt(input.value) > parseInt(input.getAttribute('max'))) {
                input.value = input.getAttribute('max');
            }
        })
    });

    // show address modal
    document.querySelectorAll('.js-address-modal-button').forEach(function (button) {
        button.addEventListener('click', () => {
            let addressModal = document.querySelector('.address-modal');
            if (addressModal) {
                addressModal.querySelector('.address-modal__title').innerHTML = button.getAttribute('data-address-id') ? 'Редактировать адрес' : 'Новый адрес';
                addressModal.querySelector('[name=address-id]').value = button.getAttribute('data-address-id') || null;
                addressModal.querySelector('[name=city]').value = button.getAttribute('data-city') || null;
                addressModal.querySelector('[name=street]').value = button.getAttribute('data-street') || null;
                addressModal.querySelector('[name=flat]').value = button.getAttribute('data-flat') || null;
                addressModal.querySelector('[name=section]').value = button.getAttribute('data-section') || null;
                addressModal.querySelector('[name=floor]').value = button.getAttribute('data-floor') || null;
                addressModal.querySelector('[name=comment]').value = button.getAttribute('data-comment') || null;

                addressModal.classList.add('address-modal_active');
            }
        });
    })
    document.querySelectorAll('.js-address-modal-close').forEach(function (close) {
        close.addEventListener('click', () => {
            document.querySelector('.address-modal_active').classList.remove('address-modal_active');
        });
    })

    // menu in header on mobiles
    document.querySelectorAll('.mobile-header-menu__link').forEach(function (row) {
        // if (!row.classList.contains('mobile-header-menu__link_visible')) {
            row.addEventListener('click', () => {
                if (row.nextElementSibling && row.nextElementSibling.classList.contains('mobile-header-menu__sub')) {
                    row.classList.toggle('mobile-header-menu__link_active');
                    row.closest('.mobile-header-menu__item').classList.toggle('mobile-header-menu__item_visible');
                }
            });
        // }
    });

});
