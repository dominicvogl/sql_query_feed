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

var filelist = [

   // Foundation Stuff
   //'js/foundation/foundation.js',
   //'js/foundation/foundation.abide.js',
   //'js/foundation/foundation.accordion.js',
   //'js/foundation/foundation.alert.js',
   //'js/foundation/foundation.clearing.js',
   //'js/foundation/foundation.dropdown.js',
   //'js/foundation/foundation.equalizer.js',
   //'js/foundation/foundation.interchange.js',
   //'js/foundation/foundation.joyride.js',
   //'js/foundation/foundation.magellan.js',
   //'js/foundation/foundation.offcanvas.js',
   //'js/foundation/foundation.orbit.js',
   //'js/foundation/foundation.reveal.js',
   //'js/foundation/foundation.slider.js',
   //'js/foundation/foundation.tab.js',
   //'js/foundation/foundation.tooltip.js',
   //'js/foundation/foundation.topbar.js',

   // Your Own Stuff
   'js/custom/fastclick.js',
   'js/custom/jquery.min.js',
   //'js/custom/modernizr.js',
   'js/custom/setup.js'
];

// Concatenate & Minify JS
gulp.task('scripts', function () {
   gulp.src(filelist)
      .pipe(plumber())
      .pipe(concat('build/app.js'))
      .pipe(gulp.dest('js'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('js'))
});

// Watch files for changes
gulp.task('watch', function () {
   gulp.watch('scss/**/*.scss', ['styles']);
   gulp.watch('js/src/*.js', ['scripts']);
});

// Default Task
gulp.task('default', ['styles', 'watch']);