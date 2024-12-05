const { src, dest, parallel, series, watch } = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const gcssmq = require('gulp-group-css-media-queries');
const includeFiles = require('gulp-include');
const browserSync = require('browser-sync').create();
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');

function browsersync () {
    browserSync.init({
        server: {
            baseDir: './public/',
            serveStaticOptions: {
                extensions: ['html'],
            },
        },
        port: 8888,
        ui: {
            port: 8889
        },
        open: true,
    })
}

function styles () {
    return src('./src/styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ grid: true }))
        .pipe(gcssmq())
        .pipe(uglifycss())
        .pipe(dest('./public/css/'))
        .pipe(browserSync.stream())
}

function scripts () {
    return src('./src/js/script.js')
        .pipe(includeFiles())
        .pipe(uglify())
        .pipe(dest('./public/js/'))
        .pipe(browserSync.stream())
}

function pages () {
    return src('./src/pages/*.html')
        .pipe(includeFiles())
        .pipe(dest('./public/'))
        .pipe(browserSync.reload({ stream: true, }))
}

function copyFonts () {
    return src('./src/fonts/**/*')
        .pipe(dest('./public/fonts/'))
}
  
function copyImages () {
    return src('./src/images/**/*')
        .pipe(dest('./public/images/'))
}

async function copyResources () {
    copyFonts()
    copyImages()
}

async function clean() {
    return del.sync('./public/', { force: true })
}  

function watch_dev () {
    watch(['./src/js/script.js', './src/components/**/*.js', './src/js/**/*.js'], scripts)

    watch(['./src/styles/style.scss', './src/components/**/*.scss', './src/styles/**/*.scss'], styles).on(
        'change',
        browserSync.reload
    )

    watch(['./src/pages/*.html', './src/components/**/*.html'], pages).on(
        'change',
        browserSync.reload
    )
}

exports.browsersync = browsersync
exports.clean = clean
exports.scripts = scripts
exports.styles = styles
exports.pages = pages
exports.copyResources = copyResources

exports.default = parallel(
    clean,
    styles,
    scripts,
    copyResources,
    pages,
    browsersync,
    watch_dev
)

exports.build = series(
    clean,
    styles,
    scripts,
    copyResources,
    pages
)