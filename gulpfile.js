const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');


function htmlBuild(){
    return gulp.src('src/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('dist'))
}

function sassBuild(){
    return gulp.src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
}

function jsBuild(){
    return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
}


function watch(){
    gulp.watch('src/**/*.html', htmlBuild);
    gulp.watch('src/**/*.js', jsBuild);
    gulp.watch('src/**/*.scss', sassBuild);
}

exports.default = gulp.series( 
    gulp.parallel(htmlBuild),
    gulp.parallel(sassBuild),
    gulp.parallel(jsBuild, watch)
    );

