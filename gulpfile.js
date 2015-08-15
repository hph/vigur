'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');


gulp.task('transpile', function () {
  return gulp.src('src/vigur.js')
    .pipe(babel())
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['transpile']);
