const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function clean() {
    return gulp.src('./build/css/style.css')
        .pipe(cleanCSS({level: 2}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function scripts(){
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
    });
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./build/css/style.css', clean);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./*.html', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('clean', clean);
gulp.task('scripts', scripts);
gulp.task('watch', watch);