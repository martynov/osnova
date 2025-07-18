window.addEventListener('DOMContentLoaded', function () {
    if (320 < window.innerWidth && window.innerWidth <= 375) {
        this.window.template = 'xxs'
    } else if (375 < window.innerWidth && window.innerWidth <= 768) {
        this.window.template = 'xs'
    } else if (768 < window.innerWidth && window.innerWidth <= 1024) {
        this.window.template = 'sm'
    } else if (1024 < window.innerWidth && window.innerWidth <= 1280) {
        this.window.template = 'md'
    } else if (1280 < window.innerWidth && window.innerWidth <= 1440) {
        this.window.template = 'lg'
    } else if (1440 < window.innerWidth && window.innerWidth <= 1600) {
        this.window.template = 'xl'
    } else if (1600 < window.innerWidth) {
        this.window.template = 'xxl'
    }
});