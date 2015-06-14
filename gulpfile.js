//
// Gulp Configuration
//------------------------------------------------------------------------


// Include gulp
var gulp = require('gulp'),

// Include gulp plugin
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    rename = require("gulp-rename"),
    //compass = require('gulp-compass'),
    autoprefixer = require("gulp-autoprefixer");


// Compile SASS files
gulp.task('styles', function () {

    // Foundation 5
    gulp.src(['scss/app.scss'])
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('css'));

});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src(['js/foundation/foundation.js', 'js/custom/setup.js'])
        .pipe(plumber())
        //.pipe(uglify())
        .pipe(concat('build/app.js'))
        .pipe(gulp.dest('js'))
});


// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch('js/src/*.js', ['scripts']);
});


// Default Task
gulp.task('default', ['styles', 'watch']);